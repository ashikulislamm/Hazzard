"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProductCard from "@/components/ui/ProductCard";
import { NEW_ARRIVALS, PRODUCT_CATEGORIES } from "@/data/products";

const FILTERS = ["All", ...PRODUCT_CATEGORIES];

export default function NewArrivals() {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? NEW_ARRIVALS
      : NEW_ARRIVALS.filter((product) => product.category === activeFilter);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal section-shell bg-void-dark"
    >
      {/* Header */}
      <div className="flex items-end gap-12 mb-20">
        <h2
          className="font-display leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(64px, 9vw, 130px)" }}
        >
          NEW
          <br />
          ARRIVALS
        </h2>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-16">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 ${
              activeFilter === f
                ? "border-void-white text-void-white"
                : "border-white/15 text-white/50 hover:border-void-white hover:text-void-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry-style columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            mediaClassName="h-[250px] sm:h-[270px]"
          />
        ))}
      </div>
    </section>
  );
}