import Link from "next/link";

const CONTACT_POINTS = [
  {
    label: "Email",
    value: "hello@hazzard.com",
    href: "mailto:hello@hazzard.com",
  },
  {
    label: "Studio",
    value: "New York, USA",
    href: "#",
  },
  {
    label: "Wholesale",
    value: "wholesale@hazzard.com",
    href: "mailto:wholesale@hazzard.com",
  },
];

const SUPPORT_ITEMS = [
  "Product questions",
  "Order support",
  "Returns and sizing",
  "Press and collaborations",
];

export const metadata = {
  title: "Contact | HAZZARD",
  description: "Contact HAZZARD for product support, collaborations, wholesale, and press enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <section className="page-shell">
        <div className="flex flex-col gap-6 mb-16 max-w-[840px]">
          <p className="font-mono text-[0.7rem] tracking-[0.35em] uppercase text-void-mid">
            Get in touch
          </p>
          <h1
            className="font-display leading-[0.9] tracking-[0.02em] text-void-white"
            style={{ fontSize: "clamp(72px, 10vw, 150px)" }}
          >
            CONTACT
            <br />
            HAZZARD
          </h1>
          <p className="font-editorial italic text-void-mid text-[1.05rem] leading-relaxed max-w-[640px]">
            For product support, collaborations, wholesale, and press enquiries, reach out below. We reply with the same minimal clarity we design with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 items-start">
          <section className="bg-void-dark border border-white/[0.08] p-8 md:p-10">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-2">
                  Send a message
                </p>
                <p className="text-[0.9rem] text-white/50 tracking-[0.05em]">
                  Tell us what you need and we’ll route it to the right team.
                </p>
              </div>
              <span className="hidden md:inline-flex items-center rounded-full border border-white/[0.08] px-4 py-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-mid">
                Response within 24-48h
              </span>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="First Name" placeholder="Alex" />
                <Field label="Last Name" placeholder="Morgan" />
              </div>
              <Field label="Email" placeholder="alex@example.com" type="email" />
              <Field label="Subject" placeholder="Product question / press / wholesale" />
              <Field label="Message" placeholder="Write your message here..." multiline />

              <button
                type="button"
                className="inline-flex items-center justify-center px-8 py-4 bg-void-white text-void-black font-display text-base tracking-[0.25em] uppercase hover:bg-void-gray transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </section>

          <aside className="space-y-4">
            <div className="bg-void-dark border border-white/[0.08] p-8 md:p-10">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-8">
                Contact Details
              </p>

              <div className="space-y-6">
                {CONTACT_POINTS.map((item) => (
                  <div key={item.label} className="border-b border-white/[0.08] pb-5 last:border-0 last:pb-0">
                    <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-void-mid mb-2">
                      {item.label}
                    </p>
                    <Link
                      href={item.href}
                      className="text-[0.95rem] text-void-white hover:text-white transition-colors duration-300 tracking-[0.05em]"
                    >
                      {item.value}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-void-dark border border-white/[0.08] p-8 min-h-[220px] flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-4">
                    Support
                  </p>
                  <ul className="space-y-2 text-[0.9rem] text-white/70">
                    {SUPPORT_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">
                  Monday - Friday / 9AM - 6PM EST
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#141414] to-[#050505] border border-white/[0.08] p-8 min-h-[220px] flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 0.3rem), radial-gradient(circle at 80% 65%, rgba(255,255,255,0.08), transparent 0.35rem)" }} />
                <div className="relative z-10">
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-4">
                    Collaboration
                  </p>
                  <p className="font-display text-[1.8rem] leading-[0.95] tracking-[0.02em] text-void-white">
                    Let us build
                    <br />
                    something sharp.
                  </p>
                </div>
                <Link
                  href="mailto:hello@hazzard.com"
                  className="relative z-10 inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid hover:text-white transition-colors duration-300"
                >
                  hello@hazzard.com
                  <span>→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  multiline = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-void-mid mb-2">
        {label}
      </span>
      {multiline ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent border border-white/15 px-5 py-4 text-[0.9rem] text-void-white placeholder-white/20 font-body tracking-[0.04em] focus:outline-none focus:border-white/45 transition-colors duration-300"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border border-white/15 px-5 py-4 text-[0.9rem] text-void-white placeholder-white/20 font-body tracking-[0.04em] focus:outline-none focus:border-white/45 transition-colors duration-300"
        />
      )}
    </label>
  );
}