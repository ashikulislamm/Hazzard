"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginForm() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    // Mock user login session
    login(email, email.split("@")[0]);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {error && (
        <div className="text-xs font-mono text-red-400 tracking-wider bg-red-500/[0.05] border border-red-500/10 rounded-xl p-3">
          {error}
        </div>
      )}
      <label className="block">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
          required
        />
      </label>

      <label className="block">
        <div className="mb-2 flex items-center justify-between gap-4">
          <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
            Password
          </span>
          <Link href="/signup" className="text-[0.72rem] text-white/55 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white cursor-none">
            Create account
          </Link>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
        />
      </label>

      <button
        type="submit"
        className="mt-2 flex w-full items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 font-mono text-[0.78rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90 cursor-none"
      >
        Sign In
      </button>
    </form>
  );
}
