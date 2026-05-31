"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProductCard from "@/components/ui/ProductCard";

const PRODUCTS = [
  {
    id: "fp1",
    tag: "Best Seller",
    category: "Sneakers",
    name: "HAZZARD Runner Obsidian",
    price: "$485",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    link: "#shop",
  },
  {
    id: "fp2",
    tag: "Top Rated",
    category: "Leather Jackets",
    name: "Tactical Shell Jacket",
    price: "$620",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    link: "#collections",
  },
  {
    id: "fp3",
    tag: "Best Seller",
    category: "Running Shoes",
    name: "HAZZARD Runner Chalk",
    price: "$485",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
    link: "#shop",
  },
  {
    id: "fp4",
    tag: "Core",
    category: "Accessories",
    name: "Utility Shoulder Bag",
    price: "$185",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    link: "#shop",
  },
];

export default function FeaturedProductsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="featured-products"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal section-shell-lg bg-black"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.65rem] text-white/20">04</span>
            <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-void-mid">
              Featured Products
            </span>
          </div>
          <h2
            className="font-display leading-[0.9] tracking-[0.02em] text-void-white"
            style={{ fontSize: "clamp(54px, 8vw, 110px)" }}
          >
            BEST
            <br />
            SELLING
            <br />
            PRODUCTS
          </h2>
        </div>

        <p className="font-editorial italic text-void-mid text-[1.05rem] leading-relaxed max-w-[360px]">
          The pieces customers keep returning for. Same dark, minimal visual system, with the strongest sellers up front.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[2px]">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            mode="featured"
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            tag={product.tag}
            href={product.link}
          />
        ))}
      </div>
    </section>
  );
}