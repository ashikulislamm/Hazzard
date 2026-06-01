"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/ui/CartContext";
import type { Product } from "@/data/products";

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
  const { addItem, openCart } = useCart();
  const gallery = [product.image, ...product.gallery.filter((image) => image !== product.image)];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const displayPrice = `$${(product.price * quantity).toLocaleString()}`;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      variant: `${selectedColor}${selectedSize ? ` · ${selectedSize}` : ""} x${quantity}`,
      price: product.price * quantity,
      label: product.label,
    });
    openCart();
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_28%),linear-gradient(180deg,_#151515_0%,_#070707_100%)] px-4 py-24 sm:px-6 lg:px-8">
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

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
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

            <div className="grid grid-cols-3 gap-3">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    selectedImage === image
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

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-white/45">Features</p>
                <div className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                      <span className="mt-[0.4rem] h-2 w-2 rounded-full bg-white/60" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-white/45">Product Details</p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Fit</dt>
                    <dd className="text-right text-white/80">{product.details.fit}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Material</dt>
                    <dd className="text-right text-white/80">{product.details.material}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-white/45">Origin</dt>
                    <dd className="text-right text-white/80">{product.details.origin}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">Care</dt>
                    <dd className="text-right text-white/80">{product.details.care}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <aside className="lg:sticky lg:top-24 h-fit rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase text-white/55">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{product.category}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{product.details.fit}</span>
              {product.isNew ? <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">New</span> : null}
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
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

            <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
              {product.description}
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Size</p>
                  <button
                    type="button"
                    className="font-mono text-[0.64rem] tracking-[0.22em] uppercase text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                    onClick={() => {
                      const guide = document.getElementById("size-guide");
                      guide?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
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
                      className={`rounded-2xl border px-4 py-3 font-mono text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-300 ${
                        selectedSize === size
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
                      className={`group flex items-center gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
                        selectedColor === color.name
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
                    className={`h-fit rounded-full border px-5 py-3 font-mono text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 ${
                      wishlisted
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
                    }`}
                  >
                    {wishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="rounded-full border border-white/10 bg-white px-6 py-4 font-mono text-[0.76rem] tracking-[0.22em] uppercase text-black transition-transform transition-colors hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Add to Cart
                </button>
                <button className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-mono text-[0.76rem] tracking-[0.22em] uppercase text-white transition-colors hover:bg-white/[0.08]">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </aside>
        </div>

        <section id="size-guide" className="mt-8 rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">Size Guide</p>
              <h2 className="mt-3 font-display text-3xl tracking-[0.14em] text-white">Size Chart</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/60">
              Use this chart as a reference. Measurements are approximate and may vary slightly by fabric and cut.
            </p>
          </div>

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
        </section>
      </div>
    </main>
  );
}
