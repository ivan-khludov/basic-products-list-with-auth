import type { PropsWithChildren } from "react";

import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/model/auth-store";
import { ROUTES_CONFIG } from "@/shared/config/routes";

type ProtectedRouteProps = PropsWithChildren;

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const session = useAuthStore((state) => state.session);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated) {
    return null;
  }

  if (!session?.token) {
    return <Navigate to={ROUTES_CONFIG.LOGIN.href} replace />;
  }

  return <>{children}</>;
};
