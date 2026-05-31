"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AVAILABILITY = [
  {
    id: "instock",
    tag: "In Stock",
    status: "Ready to ship",
    title: ["READY", "NOW"],
    copy:
      "Core pieces held in inventory for immediate dispatch. Built for fast turnover and everyday rotation.",
    note: "Ships within 24 hours",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    link: "#shop",
  },
  {
    id: "preorder",
    tag: "Pre Order",
    status: "Reserve now",
    title: ["ARRIVING", "SOON"],
    copy:
      "Limited-run pieces produced in the next delivery cycle. Reserve your size early before the drop closes.",
    note: "Estimated 3-4 weeks",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    link: "#collections",
  },
];

export default function AvailabilitySection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="availability"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal section-shell-lg bg-black"
    >
      <div className="flex items-center gap-3 mb-16">
        <span className="font-mono text-[0.65rem] text-white/20">03</span>
        <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-void-mid">
          Availability
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
        {AVAILABILITY.map((item) => (
          <article
            key={item.id}
            className="relative min-h-[620px] overflow-hidden bg-void-dark group"
          >
            <img
              src={item.image}
              alt={item.tag}
              className="absolute inset-0 h-full w-full object-cover opacity-75 contrast-105 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-2">
                    {item.tag}
                  </p>
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-white/50">
                    {item.status}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-white/70 backdrop-blur-sm">
                  <span className="block h-2 w-2 rounded-full bg-void-white" />
                  Live
                </span>
              </div>

              <div className="max-w-[420px]">
                <h2
                  className="font-display leading-[0.9] tracking-[0.02em] text-void-white mb-5"
                  style={{ fontSize: "clamp(44px, 5vw, 78px)" }}
                >
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h2>

                <p className="font-editorial italic text-void-mid text-[1.05rem] leading-relaxed mb-8 max-w-[360px]">
                  {item.copy}
                </p>

                <div className="flex items-center gap-5 flex-wrap">
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-void-white text-void-black font-mono text-[0.65rem] tracking-[0.25em] uppercase hover:bg-void-gray transition-colors duration-300"
                  >
                    Explore
                  </Link>

                  <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">
                    {item.note}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}