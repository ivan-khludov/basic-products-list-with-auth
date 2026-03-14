import { create } from "zustand";

import type { AuthSession } from "@/features/auth/types/auth";
import {
  clearAuthSession,
  getAuthSession,
  setAuthSession,
} from "@/shared/utils/storage";

interface AuthState {
  session: AuthSession | null;
  isHydrated: boolean;
  setSession: (session: AuthSession, persistent: boolean) => void;
  clearSession: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  session: null,
  isHydrated: false,
  setSession: (session, persistent) => {
    setAuthSession(session, persistent);
    set({ session });
  },
  clearSession: () => {
    clearAuthSession();
    set({ session: null });
  },
  hydrate: () => {
    const session = getAuthSession();
    set({ session, isHydrated: true });
  },
}));

export const getAuthStore = () => useAuthStore.getState();
