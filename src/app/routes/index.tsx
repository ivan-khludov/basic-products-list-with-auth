import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { useAuthStore } from "@/features/auth/model/auth-store";
import { ROUTES_CONFIG } from "@/shared/config/routes";

import { AuthRoute } from "./AuthRoute";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <Routes>
      <Route
        path={ROUTES_CONFIG.HOME.href}
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES_CONFIG.LOGIN.href}
        element={
          <AuthRoute>
            <LoginPage />
          </AuthRoute>
        }
      />
    </Routes>
  );
};
