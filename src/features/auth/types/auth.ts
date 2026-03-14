import type { DummyJsonAuthResponse } from "@/features/auth/api/auth-api-schema";
import type { ApiResult } from "@/shared/types/api";
import type { AuthSession } from "@/shared/types/session";

export type { AuthSession, DummyJsonAuthResponse };

export type LoginResult = ApiResult<AuthSession>;
