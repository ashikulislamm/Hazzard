"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = [
  { name: "SNEAKERS", count: "48 ITEMS", slug: "sneakers" },
  { name: "JACKETS", count: "24 ITEMS", slug: "jackets" },
  { name: "HOODIES", count: "32 ITEMS", slug: "hoodies" },
  { name: "T-SHIRTS", count: "56 ITEMS", slug: "tshirts" },
  { name: "ACCESSORIES", count: "18 ITEMS", slug: "accessories" },
];

export default function CategoriesSection() {
  const sectionRef = useScrollReveal();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="shop"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal pb-32"
    >
      {CATEGORIES.map((cat) => (
        <div
          key={cat.slug}
          className="relative border-t border-white/[0.08] last:border-b overflow-hidden group cursor-none"
          onMouseEnter={() => setHovered(cat.slug)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Ghost hover text */}
          <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none z-0">
            <span
              className="font-display text-white/[0.04] whitespace-nowrap select-none"
              style={{
                fontSize: "clamp(100px, 14vw, 200px)",
                letterSpacing: "0.05em",
                transform: hovered === cat.slug ? "translateX(0)" : "translateX(20px)",
                transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {cat.name}
            </span>
          </div>

          {/* Row content */}
          <div
            className={`category-row-shell relative z-10 flex items-center justify-between transition-all duration-400 ${
              hovered === cat.slug ? "is-hovered" : ""
            }`}
          >
            <h3
              className="font-display transition-all duration-400"
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                letterSpacing: hovered === cat.slug ? "0.08em" : "0.02em",
                transition: "letter-spacing 0.4s ease",
              }}
            >
              {cat.name}
            </h3>

            <div className="flex items-center gap-12">
              
              <span
                className="text-void-mid transition-all duration-400"
                style={{
                  transform: hovered === cat.slug
                    ? "translateX(12px) rotate(-45deg)"
                    : "translateX(0) rotate(0deg)",
                  color: hovered === cat.slug ? "#FAFAFA" : "#888888",
                  transition: "transform 0.4s ease, color 0.3s",
                  fontSize: "1.5rem",
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}