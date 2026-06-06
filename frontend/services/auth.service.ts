import { apiClient } from "@/api/client";
import type { User } from "@/types";

export interface AuthResponse {
  user: User;
  token: string;
}

export const AuthService = {
  async login(payload: { email: string; password?: string }) {
    return apiClient.post<unknown, AuthResponse>("/auth/login", payload);
  },

  async signup(payload: { name: string; email: string; password?: string }) {
    return apiClient.post<unknown, AuthResponse>("/auth/register", payload);
  },

  async getProfile() {
    return apiClient.get<unknown, User>("/auth/profile");
  },
};
