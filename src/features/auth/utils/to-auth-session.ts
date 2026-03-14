import type {
  AuthSession,
  DummyJsonAuthResponse,
} from "@/features/auth/types/auth";

export const toAuthSession = (json: DummyJsonAuthResponse): AuthSession => {
  const token = (json.token ?? json.accessToken ?? "").trim();

  return {
    token,
    refreshToken: json.refreshToken ?? "",
    id: Number(json.id),
    username: String(json.username ?? ""),
    email: String(json.email ?? ""),
    firstName: String(json.firstName ?? ""),
    lastName: String(json.lastName ?? ""),
    gender: String(json.gender ?? ""),
    image: String(json.image ?? ""),
  };
};
