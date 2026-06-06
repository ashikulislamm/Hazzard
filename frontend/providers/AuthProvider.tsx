"use client";

import { useEffect, ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function AuthProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    useAuthStore.getState().initialize();
  }, []);

  return <>{children}</>;
}
