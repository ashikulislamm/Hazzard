"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import type { Product } from "@/types";

type ProductDetailClientProps = {
  product: Product;
};

function StarRating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating));

  return (
    <div className="flex items-center gap-1 text-[0.8rem] text-white/80">
      {stars.map((filled, index) => (
        <span key={index} className={filled ? "text-[#f1d37a]" : "text-white/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem, openCart } = useCartStore();
  const router = useRouter();
  const gallery = [product.image, ...product.gallery.filter((image) => image !== product.image)];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const displayPrice = `$${(product.price * quantity).toLocaleString()}`;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      variant: selectedColor && selectedSize 
        ? `${selectedColor} · ${selectedSize}` 
        : selectedColor || selectedSize || "M",
      price: product.price,
      label: product.label,
      quantity: quantity,
    });
    openCart();
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      variant: selectedColor && selectedSize 
        ? `${selectedColor} · ${selectedSize}` 
        : selectedColor || selectedSize || "M",
      price: product.price,
      label: product.label,
      quantity: quantity,
    });
    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,_#141414_0%,_#060606_100%)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Product Detail</p>
            <h1 className="mt-3 font-display text-4xl tracking-[0.14em] text-white sm:text-5xl">
              {product.name}
            </h1>
          </div>
          <Link
            href="/shop"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-white transition-colors hover:bg-white/[0.08]"
          >
            Back to Shop
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Left Column: Image Gallery (Same height as card on desktop) */}
          <section className="flex flex-col h-full gap-4">
            <div className="flex-1 min-h-0 relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:absolute lg:inset-0 w-full h-full overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2 z-10">
                  <span className="rounded-full border border-white/10 bg-black/45 px-3 py-2 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-white/80 backdrop-blur-md">
                    {product.category}
                  </span>
                  {product.featuredTag ? (
                    <span className="rounded-full border border-white/10 bg-black/45 px-3 py-2 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-white/80 backdrop-blur-md">
                      {product.featuredTag}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Thumbnails grid */}
            <div className="grid grid-cols-3 gap-3 flex-shrink-0">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${selectedImage === image
                    ? "border-white bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
                    }`}
                >
                  <div className="relative aspect-square">
                    <img
                      src={image}
                      alt={`${product.name} gallery ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Right Column: Product Detail Card (Same height as gallery on desktop) */}
          <aside className="lg:sticky lg:top-24 h-full flex flex-col justify-between rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase text-white/55">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{product.category}</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{product.details.fit}</span>
                {product.isNew ? <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">New</span> : null}
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Price</p>
                  <p className="mt-2 font-display text-4xl tracking-[0.08em] text-white">
                    {displayPrice}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex justify-end">
                    <StarRating rating={product.rating} />
                  </div>
                  <p className="mt-2 font-mono text-[0.62rem] tracking-[0.22em] uppercase text-white/45">
                    {product.rating.toFixed(1)} rating · {product.reviewCount} reviews
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Size</p>
                    <button
                      type="button"
                      className="font-mono text-[0.64rem] tracking-[0.22em] uppercase text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white cursor-none"
                      onClick={() => setIsSizeChartOpen(true)}
                    >
                      View size chart
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-2xl border px-4 py-3 font-mono text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-300 ${selectedSize === size
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25 hover:bg-white/[0.08]"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Color</p>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`group flex items-center gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${selectedColor === color.name
                          ? "border-white bg-white/[0.06]"
                          : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]"
                          }`}
                      >
                        <span
                          className="h-6 w-6 rounded-full border border-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-white/75 group-hover:text-white">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Quantity</p>
                    <div className="inline-flex items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                      <button
                        type="button"
                        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                        className="px-4 py-3 font-mono text-[0.9rem] text-white/75 transition-colors hover:bg-white/[0.08] hover:text-white"
                      >
                        -
                      </button>
                      <span className="min-w-12 px-4 py-3 text-center font-mono text-[0.8rem] tracking-[0.18em] text-white">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((value) => value + 1)}
                        className="px-4 py-3 font-mono text-[0.9rem] text-white/75 transition-colors hover:bg-white/[0.08] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <button
                      type="button"
                      onClick={() => setWishlisted((value) => !value)}
                      aria-pressed={wishlisted}
                      className={`h-fit rounded-full border px-5 py-3 font-mono text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 ${wishlisted
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
                        }`}
                    >
                      {wishlisted ? "Wishlisted" : "Add to Wishlist"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 mt-8">
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full border border-white/10 bg-white px-6 py-4 font-mono text-[0.76rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-mono text-[0.76rem] tracking-[0.22em] uppercase text-white transition-colors hover:bg-white/[0.08]"
              >
                Buy Now
              </button>
            </div>
          </aside>
        </div>

        {/* Bottom Section: Editorial Product description deck */}
        <section className="mt-16 border-t border-white/10 pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Story / Description */}
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Design Story</p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.14em] text-white uppercase">The Narrative</h2>
              </div>
              <p className="font-editorial text-2xl md:text-3xl italic text-white/90 leading-relaxed font-light">
                “A synthesis of brutalist structure, raw utility, and high-performance design.”
              </p>
              <div className="space-y-4 text-sm leading-8 text-white/70 font-light">
                <p>
                  {product.description}
                </p>
                <p>
                  Engineered for urban exploration, this piece leverages a premium construction that balances comfort, durability, and a highly defined silhouette. An authentic reflection of modern streetwear aesthetics.
                </p>
              </div>
            </div>

            {/* Specifications & Details */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-white/45">Key Features</p>
                <div className="mt-5 space-y-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                      <span className="mt-[0.5rem] h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-white/45">Technical Profile</p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Fit Profile</dt>
                    <dd className="text-right text-white/80 font-mono text-[0.75rem] uppercase tracking-wider">{product.details.fit}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Material Composition</dt>
                    <dd className="text-right text-white/80 font-mono text-[0.75rem] uppercase tracking-wider">{product.details.material}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Crafted In</dt>
                    <dd className="text-right text-white/80 font-mono text-[0.75rem] uppercase tracking-wider">{product.details.origin}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">Care Instructions</dt>
                    <dd className="text-right text-white/80 font-mono text-[0.75rem] uppercase tracking-wider">{product.details.care}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Size Chart Modal Popup */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div
            onClick={() => setIsSizeChartOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          />
          {/* Modal Container */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8 transition-transform duration-300 scale-100 max-h-[90vh] flex flex-col z-10 animate-[fadeIn_0.2s_ease-out]">
            <button
              onClick={() => setIsSizeChartOpen(false)}
              className="absolute right-6 top-6 text-white/50 hover:text-white transition-colors text-lg cursor-none"
              aria-label="Close size guide"
            >
              ✕
            </button>
            <div className="overflow-y-auto pr-1">
              <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Size Guide</p>
              <h2 className="mt-3 font-display text-3xl tracking-[0.14em] text-white">Size Chart</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Use this chart as a reference. Measurements are approximate and may vary slightly by fabric and cut.
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
                <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[0.65rem] tracking-[0.22em] uppercase text-white/45">
                  <span>Size</span>
                  <span>Measure</span>
                  <span>Length</span>
                  <span>Fit</span>
                </div>
                <div className="divide-y divide-white/10 bg-black/35">
                  {product.sizeGuide.map((row) => (
                    <div key={row.size} className="grid grid-cols-4 gap-4 px-4 py-4 text-sm text-white/75">
                      <span className="font-mono tracking-[0.18em] uppercase text-white">{row.size}</span>
                      <span>{product.category === "Sneakers" ? row.length : row.chest}</span>
                      <span>{row.length}</span>
                      <span>{row.fit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
