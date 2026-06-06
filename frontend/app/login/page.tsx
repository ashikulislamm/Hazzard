import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
  description: "Sign in to your HAZZARD account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,_#141414_0%,_#060606_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] mt-16">
        <section className="relative flex min-h-[18rem] flex-col justify-between overflow-hidden border-b border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_32%)]" />
          <div className="relative z-10">
            <p className="font-mono text-[0.65rem] tracking-[0.32em] uppercase text-white/45">Account Access</p>
            <h1 className="mt-4 max-w-sm font-display text-4xl tracking-[0.16em] text-white sm:text-5xl uppercase">
              Sign in to continue
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Resume your checkout, access saved items, and keep track of your HAZZARD orders from one place.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3 text-[0.68rem] tracking-[0.2em] uppercase text-white/55">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Fast checkout</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Order history</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Saved favorites</span>
          </div>
        </section>

        <section className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-md">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.32em] uppercase text-white/45">Welcome back</p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.16em] text-white">Login</h2>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[0.64rem] tracking-[0.24em] uppercase text-white/55 sm:block">
                Secure access
              </div>
            </div>

            <LoginForm />

            <p className="mt-6 text-sm text-white/60">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                Create one
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}