import Link from "next/link";

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
            <h1 className="mt-4 max-w-sm font-display text-4xl tracking-[0.16em] text-white sm:text-5xl">
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

            <form className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                    Password
                  </span>
                  <Link href="/signup" className="text-[0.72rem] text-white/55 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white">
                    Create account
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 font-mono text-[0.78rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90"
              >
                Sign In
              </button>
            </form>

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