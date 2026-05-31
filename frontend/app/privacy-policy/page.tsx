import type { Metadata } from "next";

const policySections = [
  {
    id: "personal-information",
    title: "Personal Information We Collect or Process",
    description:
      "We may collect or process information that identifies or can reasonably be linked to you, depending on how you use the Services and where required by law.",
    items: [
      "Contact details including your name, billing and shipping address, phone number, and email address.",
      "Financial information including payment card details, account numbers, and transaction records.",
      "Account information including your username, password, security questions, preferences, and settings.",
      "Transaction information including the items you view, add to cart, purchase, return, exchange, or cancel.",
      "Communications with us including support requests and messages you send us.",
      "Device information including your device, browser, network connection, IP address, and identifiers.",
      "Usage information including how and when you interact with the Services.",
    ],
  },
  {
    id: "sources",
    title: "Personal Information Sources",
    description:
      "We may collect personal information from several sources across the customer journey.",
    items: [
      "Directly from you when you create an account, make a purchase, or contact us.",
      "Automatically through the Services, including via cookies and similar technologies.",
      "From service providers that help us operate, secure, and improve the Services.",
      "From partners or other third parties where permitted by law.",
    ],
  },
  {
    id: "usage",
    title: "How We Use Your Personal Information",
    description:
      "We use personal information to operate the store, improve the experience, and meet legal and security obligations.",
    items: [
      "Provide, tailor, and improve the Services, including order processing, fulfillment, account management, and recommendations.",
      "Send marketing and promotional communications and show relevant advertisements.",
      "Prevent fraud, secure accounts, and protect the Services and our customers.",
      "Communicate with you about your orders, questions, and support requests.",
      "Comply with law, respond to legal requests, and enforce our policies.",
    ],
  },
  {
    id: "disclosure",
    title: "How We Disclose Personal Information",
    description:
      "We may disclose personal information to trusted third parties only for legitimate business purposes and in line with this policy.",
    items: [
      "With Shopify, vendors, and service providers that support payments, analytics, shipping, and support.",
      "With business and marketing partners to support advertising and promotional activity.",
      "When you request or consent to a disclosure, such as shipping or social integrations.",
      "With affiliates or within our corporate group, where applicable.",
      "In connection with legal obligations, business transactions, or to protect the Services and our users.",
    ],
  },
] as const;

const quickFacts = [
  { label: "Last updated", value: "April 15, 2026" },
  { label: "Brand", value: "Hazzard" },
  { label: "Scope", value: "Store, website, and related Services" },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy | HAZZARD",
  description:
    "Read the HAZZARD Privacy Policy to understand how we collect, use, and disclose personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 text-white">
      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="lg:sticky lg:top-32 space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-white/45">
                Legal Notice
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.92] tracking-[0.02em] sm:text-6xl">
                Privacy
                <br />
                Policy
              </h1>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                Hazzard uses your information to deliver a curated shopping experience and to keep our Services secure, responsive, and compliant.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-void-dark p-7">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid">
                At a glance
              </p>
              <ul className="mt-5 space-y-4">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="block font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/45">
                      {fact.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-white/80">
                      {fact.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-white/45">
                Last updated: April 15, 2026
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-[1.02rem]">
                Hazzard operates this store and website, including all related information, content, features, tools, products and services, in order to provide you with a curated shopping experience. Hazzard is powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 sm:text-[1.02rem]">
                Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.
              </p>
            </div>

            <div className="grid gap-5">
              {policySections.map((section, index) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-[2rem] border border-white/10 bg-black/70 p-7 sm:p-8"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid">
                        Section {index + 1}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
                        {section.title}
                      </h2>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.65rem] tracking-[0.22em] uppercase text-white/55">
                      Hazzard Policy
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-[0.96rem]">
                    {section.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/75">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-white/45">
                Closing Note
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-[0.96rem]">
                If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}