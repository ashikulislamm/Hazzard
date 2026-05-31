"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/ui/CartContext";

const STEPS = ["Contact", "Shipping", "Payment"];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const { items, total } = useCart();

  return (
    <div className="min-h-screen bg-black">
      {/* Minimal nav */}
      <nav className="page-shell flex items-center justify-between py-7 border-b border-white/[0.08]">
          <Link href="/" className="font-display text-[1.8rem] tracking-[0.3em]">HAZZARD</Link>
          <div className="flex items-center gap-8">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase flex items-center gap-2 transition-colors duration-300 ${
                  i === step ? "text-white" : i < step ? "text-void-mid" : "text-white/20"
                }`}
              >
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[0.55rem] ${
                  i === step ? "border-white" : i < step ? "border-void-mid bg-void-mid text-black" : "border-white/15"
                }`}>
                  {i < step ? "✓" : i + 1}
                </span>
                {s}
              </button>
            ))}
          </div>
          <div className="font-mono text-[0.65rem] text-void-mid tracking-[0.15em]">
            SSL SECURED
          </div>
        </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] min-h-[calc(100vh-80px)]">

          {/* Left: form */}
          <div className="page-shell py-16 max-w-[580px] mx-auto w-full">
            <h1
              className="font-display tracking-[0.02em] leading-[0.9] mb-12"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              {STEPS[step]}
            </h1>

            {step === 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <CheckoutInput label="First Name" placeholder="Alex" />
                  <CheckoutInput label="Last Name" placeholder="Morgan" />
                </div>
                <CheckoutInput label="Email Address" placeholder="alex@example.com" type="email" />
                <CheckoutInput label="Phone (optional)" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <CheckoutInput label="Address Line 1" placeholder="123 Main Street" />
                <CheckoutInput label="Address Line 2" placeholder="Apt, Suite, etc." />
                <div className="grid grid-cols-2 gap-4">
                  <CheckoutInput label="City" placeholder="New York" />
                  <CheckoutInput label="ZIP / Postcode" placeholder="10001" />
                </div>
                <CheckoutInput label="Country" placeholder="United States" />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <CheckoutInput label="Card Number" placeholder="•••• •••• •••• ••••" />
                <div className="grid grid-cols-2 gap-4">
                  <CheckoutInput label="Expiry" placeholder="MM / YY" />
                  <CheckoutInput label="CVC" placeholder="•••" />
                </div>
                <CheckoutInput label="Name on Card" placeholder="Alex Morgan" />
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 flex items-center gap-6">
              {step > 0 && (
                <button
                  onClick={() => setStep((p) => p - 1)}
                  className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid hover:text-void-white transition-colors"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => step < 2 ? setStep((p) => p + 1) : undefined}
                className="flex-1 py-5 bg-void-white text-void-black font-display text-base tracking-[0.3em] uppercase hover:bg-void-gray active:scale-y-[0.97] transition-all duration-300"
              >
                {step === 2 ? "PLACE ORDER →" : "CONTINUE →"}
              </button>
            </div>
          </div>

          {/* Right: order summary */}
          <div className="border-l border-white/[0.08] bg-void-dark px-10 py-16">
            <h2 className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-8">
              Order Summary
            </h2>

            {/* Items */}
            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-16 h-20 bg-black flex items-center justify-center font-display text-[1.2rem] text-white/10 shrink-0 overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${item.id}-checkout/160/220`}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-85"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <span className="relative z-10">{item.label}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.8rem] tracking-[0.05em] mb-1">{item.name}</p>
                    <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-void-mid">
                      {item.variant}
                    </p>
                  </div>
                  <p className="font-mono text-[0.8rem]">${item.price}</p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-white/[0.08] pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">Subtotal</span>
                <span className="font-mono text-[0.75rem]">${total}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">Shipping</span>
                <span className="font-mono text-[0.75rem] text-void-mid">FREE</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Total</span>
                <span className="font-display text-[1.8rem] tracking-[0.05em]">${total}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

function CheckoutInput({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-void-mid mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/15 px-5 py-4 text-[0.85rem] text-void-white placeholder-white/20 font-body tracking-[0.05em] focus:outline-none focus:border-white/50 transition-colors duration-300"
      />
    </div>
  );
}