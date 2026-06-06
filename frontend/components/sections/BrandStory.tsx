"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { num: "180+", label: "Countries" },
  { num: "48K", label: "Pieces Sold" },
  { num: "6", label: "Seasons" },
];

export default function BrandStory() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="story"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal section-shell relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Vertical center line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.05]" />

      <div className="text-center max-w-[1000px] relative z-10">
        {/* Year tag */}
        <p className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-void-mid mb-12">
          EST. 2019 — HAZZARD
        </p>

        {/* Headline */}
        <h2
          className="font-display leading-[0.9] tracking-[0.02em] mb-12"
          style={{ fontSize: "clamp(64px, 10vw, 150px)" }}
        >
          WEAR
          <br />
          THE{" "}
          <span
            className="font-editorial italic"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.4)",
            }}
          >
            HAZZARD
          </span>
        </h2>

        {/* Body */}
        <p className="font-editorial italic text-void-mid leading-[1.8] max-w-[700px] mx-auto mb-16"
          style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
        >
          We don&apos;t make clothes. We architect identity. Every silhouette, every stitch, every sole is a manifesto against the ordinary. Wear nothing. Wear everything. Wear HAZZARD.
        </p>

        {/* CTA */}
        <button className="inline-block px-12 py-5 border border-white/30 font-mono text-[0.7rem] tracking-[0.25em] uppercase text-void-white hover:bg-void-white hover:text-void-black transition-all duration-400">
          Read Our Manifesto
        </button>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-16 mt-20">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <span
                className="font-display block tracking-[0.02em]"
                style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
              >
                {s.num}
              </span>
              <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}