import { dummyJsonAuthResponseSchema } from "@/features/auth/api/auth-api-schema";
import type { LoginResult } from "@/features/auth/types/auth";
import { toAuthSession } from "@/features/auth/utils/to-auth-session";
import { fetchWithTimeout } from "@/shared/api/fetch-with-timeout";
import { safeParseJson } from "@/shared/api/safe-parse-json";
import { ERROR_MESSAGE } from "@/shared/constants/messages";

const AUTH_LOGIN_URL = "https://dummyjson.com/auth/login";

export const login = async (
  username: string,
  password: string,
): Promise<LoginResult> => {
  try {
    const response = await fetchWithTimeout(AUTH_LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const parsed = await safeParseJson(response);

    if (!parsed.ok) {
      return { success: false, error: parsed.error };
    }

    const parseResult = dummyJsonAuthResponseSchema.safeParse(parsed.data);

    if (!parseResult.success) {
      return { success: false, error: ERROR_MESSAGE.INVALID_JSON_RESPONSE };
    }

    const json = parseResult.data;
    const token = (json.token ?? json.accessToken ?? "").trim();

    if (!token) {
      let errorMsg: string = ERROR_MESSAGE.UNKNOWN_ERROR;

      if (response.status === 400 || response.status === 401) {
        errorMsg = ERROR_MESSAGE.INVALID_CREDENTIALS;
      } else if (typeof json.message === "string" && json.message.trim()) {
        errorMsg = json.message.trim();
      }

      return { success: false, error: errorMsg };
    }

    if (json.id == null || json.username == null) {
      return {
        success: false,
        error: ERROR_MESSAGE.INCOMPLETE_USER_DATA,
      };
    }

    const session = toAuthSession(json);

    if (Number.isNaN(session.id) || session.id <= 0) {
      return { success: false, error: ERROR_MESSAGE.INVALID_USER_ID };
    }

    return { success: true, data: session };
  } catch {
    return { success: false, error: ERROR_MESSAGE.NETWORK_ERROR };
  }
};
