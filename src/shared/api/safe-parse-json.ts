import { ERROR_MESSAGE } from "@/shared/constants/messages";

export const safeParseJson = async (
  response: Response,
): Promise<{ ok: true; data: unknown } | { ok: false; error: string }> => {
  try {
    const data = await response.json();

    return { ok: true, data };
  } catch {
    return { ok: false, error: ERROR_MESSAGE.INVALID_JSON_RESPONSE };
  }
};
