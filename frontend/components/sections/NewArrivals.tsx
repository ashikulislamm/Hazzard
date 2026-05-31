"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCart } from "@/components/ui/CartContext";
import ProductCard from "@/components/ui/ProductCard";

const FILTERS = ["All", "Sneakers", "Jackets", "Hoodies", "Tees", "Accessories"];

const PRODUCTS = [
  { id: "p1", label: "V1", cat: "Sneakers", name: "HAZZARD Runner Obsidian", price: 485, isNew: true, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80" },
  { id: "p2", label: "J1", cat: "Jackets", name: "Tactical Shell Jacket", price: 620, isNew: false, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80" },
  { id: "p3", label: "H1", cat: "Hoodies", name: "Heavyweight Arch Hoodie", price: 245, isNew: true, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" },
  { id: "p4", label: "T1", cat: "Tees", name: "Oversized Hazzard Tee", price: 95, isNew: false, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80" },
  { id: "p5", label: "V2", cat: "Sneakers", name: "HAZZARD Runner Chalk", price: 485, isNew: true, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80" },
  { id: "p6", label: "A1", cat: "Accessories", name: "Utility Shoulder Bag", price: 185, isNew: false, height: "h-[250px] sm:h-[270px]", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80" },
];

export default function NewArrivals() {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const { addItem } = useCart();

  const filtered =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeFilter);

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
            image={p.image}
            name={p.name}
            category={p.cat}
            price={`$${p.price}`}
            label={p.label}
            isNew={p.isNew}
            onQuickAdd={() =>
              addItem({ id: p.id, name: p.name, variant: `${p.cat} · M`, price: p.price, label: p.label })
            }
            mediaClassName={p.height}
          />
        ))}
      </div>
    </section>
  );
}