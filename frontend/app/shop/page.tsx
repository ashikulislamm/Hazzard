"use client";

import { useState } from "react";
import { useCart } from "@/components/ui/CartContext";
import ProductCard from "@/components/ui/ProductCard";

const FILTERS = ["All", "Sneakers", "Jackets", "Hoodies", "T-Shirts", "Accessories"];
const SORTS = ["Newest", "Price ↑", "Price ↓", "A–Z"];

const ALL_PRODUCTS = [
  { id: "s1", label: "V1", cat: "Sneakers", name: "HAZZARD Runner Obsidian", price: 485, isNew: true, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80" },
  { id: "s2", label: "J1", cat: "Jackets", name: "Tactical Shell Jacket", price: 620, isNew: false, ratio: "aspect-square", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80" },
  { id: "s3", label: "H1", cat: "Hoodies", name: "Heavyweight Arch Hoodie", price: 245, isNew: true, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" },
  { id: "s4", label: "T1", cat: "T-Shirts", name: "Oversized Hazzard Tee", price: 95, isNew: false, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80" },
  { id: "s5", label: "V2", cat: "Sneakers", name: "HAZZARD Runner Chalk", price: 485, isNew: true, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80" },
  { id: "s6", label: "A1", cat: "Accessories", name: "Utility Shoulder Bag", price: 185, isNew: false, ratio: "aspect-[4/3]", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80" },
  { id: "s7", label: "J2", cat: "Jackets", name: "Waxed Cotton Parka", price: 740, isNew: false, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=1000&q=80" },
  { id: "s8", label: "H2", cat: "Hoodies", name: "Zip-up Hazzard Hoodie", price: 195, isNew: true, ratio: "aspect-square", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80" },
  { id: "s9", label: "T2", cat: "T-Shirts", name: "Thermal Contrast Tee", price: 110, isNew: false, ratio: "aspect-[3/4]", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Newest");
  const { addItem } = useCart();

  const filtered = ALL_PRODUCTS.filter(
    (p) => activeFilter === "All" || p.cat === activeFilter
  );

  return (
    <main className="pt-32 min-h-screen bg-black">
      {/* Page header */}
      <div className="page-shell pb-16 border-b border-white/[0.08]">
        <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-void-mid mb-4">
          SS25 Collection
        </p>
        <h1
          className="font-display leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
        >
          SHOP ALL
        </h1>
      </div>

        {/* Filter + Sort bar */}
        <div className="page-shell sticky top-[72px] z-30 bg-black/90 backdrop-blur-xl border-b border-white/[0.08] py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeFilter === f
                    ? "border-white text-white"
                    : "border-white/15 text-white/40 hover:border-white/50 hover:text-white/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-mid">Sort:</span>
            {SORTS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSort(s)}
                className={`font-mono text-[0.6rem] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  activeSort === s ? "text-white" : "text-white/30 hover:text-white/70"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="page-shell py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
                mediaClassName={p.ratio === "aspect-square" ? "h-[250px] sm:h-[270px]" : "h-[250px] sm:h-[270px]"}
              />
            ))}
          </div>
        </div>
    </main>
  );
}