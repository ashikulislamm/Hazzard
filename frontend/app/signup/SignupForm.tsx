"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

export default function SignupForm() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Mock user login session
    login(email, name);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      {error && (
        <div className="sm:col-span-2 text-xs font-mono text-red-400 tracking-wider bg-red-500/[0.05] border border-red-500/10 rounded-xl p-3">
          {error}
        </div>
      )}
      <label className="block sm:col-span-1">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Name
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
          required
        />
      </label>

      <label className="block sm:col-span-1">
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

      <label className="block sm:col-span-1">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Phone Number
        </span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
        />
      </label>

      <label className="block sm:col-span-1">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Address
        </span>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, city, state, ZIP"
          rows={2}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] sm:min-h-28 cursor-none"
        />
      </label>

      <label className="block sm:col-span-1">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Password
        </span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
        />
      </label>

      <label className="block sm:col-span-1">
        <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
          Confirm Password
        </span>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repeat your password"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] cursor-none"
        />
      </label>

      <div className="sm:col-span-2 mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/60">
          Already have an account?{" "}
          <Link href="/login" className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white cursor-none">
            Sign in
          </Link>
        </p>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 font-mono text-[0.78rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90 cursor-none"
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
