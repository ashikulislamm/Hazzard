"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProductCard from "@/components/ui/ProductCard";
import { FEATURED_PRODUCTS } from "@/data/products";

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
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            mode="featured"
            image={product.image}
            name={product.name}
            category={product.category}
            price={`$${product.price}`}
            tag={product.featuredTag}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>
    </section>
  );
}