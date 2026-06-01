import Link from "next/link";

export const metadata = {
  title: "Signup",
  description: "Create a new HAZZARD account.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,_#141414_0%,_#060606_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr] mt-16">
        <section className="relative flex min-h-[18rem] flex-col justify-between overflow-hidden border-b border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_32%)]" />
          <div className="relative z-10">
            <p className="font-mono text-[0.65rem] tracking-[0.32em] uppercase text-white/45">Create Account</p>
            <h1 className="mt-4 max-w-sm font-display text-4xl tracking-[0.16em] text-white sm:text-5xl">
              Join HAZZARD
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Register once to save your profile, streamline checkout, and keep all order details in one place.
            </p>
          </div>

          <div className="relative z-10 mt-8 grid gap-3 text-[0.68rem] tracking-[0.2em] uppercase text-white/55 sm:grid-cols-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Secure profile</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Order tracking</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Saved addresses</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">Faster checkout</span>
          </div>
        </section>

        <section className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.32em] uppercase text-white/45">Signup</p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.16em] text-white">Create your profile</h2>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[0.64rem] tracking-[0.24em] uppercase text-white/55 sm:block">
                One minute setup
              </div>
            </div>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Address
                </span>
                <textarea
                  placeholder="Street, city, state, ZIP"
                  rows={2}
                  
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07] sm:min-h-28"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block font-mono text-[0.65rem] tracking-[0.25em] uppercase text-white/45">
                  Confirm Password
                </span>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-white/[0.07]"
                />
              </label>

              <div className="sm:col-span-2 mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-white/60">
                  Already have an account?{" "}
                  <Link href="/login" className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                    Sign in
                  </Link>
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 font-mono text-[0.78rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}