"use client";

import { useState } from "react";
import { useCart } from "@/components/ui/CartContext";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCT_CATEGORIES, PRODUCTS, sortProducts } from "@/data/products";

const SORTS = ["Newest", "Price ↑", "Price ↓", "A–Z"];

const FILTERS = ["All", ...PRODUCT_CATEGORIES];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Newest");
  const { addItem } = useCart();

  const filtered = sortProducts(
    PRODUCTS.filter((product) => activeFilter === "All" || product.category === activeFilter),
    activeSort
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
                category={p.category}
                price={`$${p.price}`}
                label={p.label}
                isNew={p.isNew}
                href={`/products/${p.slug}`}
                onQuickAdd={() =>
                  addItem({ id: p.id, name: p.name, variant: `${p.category} · M`, price: p.price, label: p.label })
                }
                mediaClassName="h-[250px] sm:h-[270px]"
              />
            ))}
          </div>
        </div>
    </main>
  );
}