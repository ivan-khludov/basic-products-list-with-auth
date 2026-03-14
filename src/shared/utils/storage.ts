import { authSessionSchema, type AuthSession } from "@/shared/types/session";

const AUTH_SESSION_KEY = "auth_session";
const AUTH_TOKEN_KEY = "auth_token";

function getSessionStorage(): Storage {
  return typeof sessionStorage !== "undefined"
    ? sessionStorage
    : ({} as Storage);
}

function getLocalStorage(): Storage {
  return typeof localStorage !== "undefined" ? localStorage : ({} as Storage);
}

function parseSession(raw: string | null): AuthSession | null {
  if (!raw?.trim()) {
    return null;
  }

  try {
    const data = JSON.parse(raw) as unknown;
    const result = authSessionSchema.safeParse(data);

    return result.success ? result.data : null;
  } catch {
    return null;
  }
}

export const setAuthSession = (
  session: AuthSession,
  persistent: boolean,
): void => {
  const serialized = JSON.stringify(session);

  if (persistent) {
    getLocalStorage().setItem(AUTH_SESSION_KEY, serialized);
    getSessionStorage().removeItem(AUTH_SESSION_KEY);
    getLocalStorage().removeItem(AUTH_TOKEN_KEY);
    getSessionStorage().removeItem(AUTH_TOKEN_KEY);
  } else {
    getSessionStorage().setItem(AUTH_SESSION_KEY, serialized);
    getLocalStorage().removeItem(AUTH_SESSION_KEY);
    getLocalStorage().removeItem(AUTH_TOKEN_KEY);
    getSessionStorage().removeItem(AUTH_TOKEN_KEY);
  }
};

export const getAuthSession = (): AuthSession | null => {
  const fromSession = getSessionStorage().getItem(AUTH_SESSION_KEY);
  const parsedSession = parseSession(fromSession);

  if (parsedSession) {
    return parsedSession;
  }

  const fromLocal = getLocalStorage().getItem(AUTH_SESSION_KEY);
  const parsedLocal = parseSession(fromLocal);

  if (parsedLocal) {
    return parsedLocal;
  }

  const legacyToken =
    getSessionStorage().getItem(AUTH_TOKEN_KEY) ??
    getLocalStorage().getItem(AUTH_TOKEN_KEY);

  if (legacyToken) {
    return {
      token: legacyToken,
      refreshToken: "",
      id: 0,
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      image: "",
    };
  }

  return null;
};

export const clearAuthSession = (): void => {
  getSessionStorage().removeItem(AUTH_SESSION_KEY);
  getLocalStorage().removeItem(AUTH_SESSION_KEY);
  getSessionStorage().removeItem(AUTH_TOKEN_KEY);
  getLocalStorage().removeItem(AUTH_TOKEN_KEY);
};
