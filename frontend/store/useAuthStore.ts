import { create } from "zustand";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  isInitialized: boolean;
  login: (email: string, name?: string, token?: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isInitialized: false,
  login: (email, name, token) => {
    const newUser = { email, name };
    const jwtToken = token || "mock-jwt-token";
    set({ user: newUser, token: jwtToken });
    if (typeof window !== "undefined") {
      localStorage.setItem("hazzard_user", JSON.stringify(newUser));
      localStorage.setItem("hazzard_token", jwtToken);
    }
  },
  logout: () => {
    set({ user: null, token: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("hazzard_user");
      localStorage.removeItem("hazzard_token");
    }
  },
  initialize: () => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("hazzard_user");
      const storedToken = localStorage.getItem("hazzard_token");
      try {
        set({
          user: storedUser ? JSON.parse(storedUser) : null,
          token: storedToken,
          isInitialized: true,
        });
      } catch (e) {
        console.error("Failed to parse stored user", e);
        set({ isInitialized: true });
      }
    } else {
      set({ isInitialized: true });
    }
  },
}));
