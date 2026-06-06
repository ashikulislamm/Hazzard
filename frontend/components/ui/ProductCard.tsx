"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuHeart, LuShoppingBag } from "react-icons/lu";
import { useCart } from "@/components/ui/CartContext";
import { PRODUCTS, type Product } from "@/data/products";

type ProductCardMode = "catalog" | "featured";

type ProductCardProps = {
  mode?: ProductCardMode;
  image?: string;
  name?: string;
  category?: string;
  price?: string | number;
  tag?: string;
  label?: string;
  href?: string;
  isNew?: boolean;
  quickAddLabel?: string;
  onQuickAdd?: () => void;
  className?: string;
  mediaClassName?: string;
  product?: Product;
};

export default function ProductCard({
  mode = "catalog",
  image,
  name,
  category,
  price,
  tag,
  label,
  href,
  isNew,
  quickAddLabel = "+ QUICK ADD",
  onQuickAdd,
  className = "",
  mediaClassName = "",
  product,
}: ProductCardProps) {
  // Resolve product data from prop or search by name / slug
  const productData = product ?? PRODUCTS.find(
    (p) => p.name === name || p.slug === href?.split("/").pop()
  );

  const itemImage = productData?.image ?? image ?? "";
  const itemName = productData?.name ?? name ?? "";
  const itemCategory = productData?.category ?? category ?? "";
  const itemPriceNum = productData?.price ?? (typeof price === "number" ? price : parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0);
  const itemPriceStr = `$${itemPriceNum}`;
  const itemTag = productData?.featuredTag ?? tag;
  const itemLabel = productData?.label ?? label;
  const itemHref = productData ? `/products/${productData.slug}` : href;
  const itemIsNew = productData?.isNew ?? isNew;
  const itemBrand = productData?.brand;
  const itemRating = productData?.rating;
  const itemReviewCount = productData?.reviewCount;
  const itemColors = productData?.colors ?? [];
  const itemSizes = productData?.sizes ?? [];

  const { addItem, openCart } = useCart();
  const router = useRouter();

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (productData?.id) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setIsWishlisted(wishlist.includes(productData.id));
    }
  }, [productData?.id]);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!productData?.id) return;

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    let updatedWishlist;
    if (wishlist.includes(productData.id)) {
      updatedWishlist = wishlist.filter((id: string) => id !== productData.id);
      setIsWishlisted(false);
    } else {
      updatedWishlist = [...wishlist, productData.id];
      setIsWishlisted(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedColor = itemColors[0]?.name ?? "";
    const selectedSize = itemSizes[0] ?? "";
    const variant = selectedColor && selectedSize 
      ? `${selectedColor} · ${selectedSize}` 
      : selectedColor || selectedSize || "M";

    addItem({
      id: productData?.id ?? "unknown",
      name: itemName,
      variant,
      price: itemPriceNum,
      label: itemLabel ?? "",
    });
    openCart();
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedColor = itemColors[0]?.name ?? "";
    const selectedSize = itemSizes[0] ?? "";
    const variant = selectedColor && selectedSize 
      ? `${selectedColor} · ${selectedSize}` 
      : selectedColor || selectedSize || "M";

    addItem({
      id: productData?.id ?? "unknown",
      name: itemName,
      variant,
      price: itemPriceNum,
      label: itemLabel ?? "",
    });
    router.push("/checkout");
  };

  if (mode === "featured") {
    return (
      <article className={`group relative overflow-hidden bg-void-dark min-h-[440px] ${className}`}>
        {itemHref ? (
          <Link
            href={itemHref}
            aria-label={`View ${itemName}`}
            className="absolute inset-0 z-30 block"
          />
        ) : null}
        <img
          src={itemImage}
          alt={itemName}
          className="absolute inset-0 h-full w-full object-cover opacity-80 contrast-105 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-4">
            {itemTag ? (
              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-4 py-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-white/70 backdrop-blur-sm">
                {itemTag}
              </span>
            ) : (
              <span />
            )}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-void-mid text-right max-w-[120px]">
                {itemCategory}
              </span>
              {productData?.id && (
                <button
                  onClick={handleToggleWishlist}
                  className={`rounded-full border p-2 backdrop-blur-md transition-all duration-300 cursor-none z-40 ${
                    isWishlisted
                      ? "border-white bg-white text-black scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                      : "border-white/15 bg-black/30 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <LuHeart className={`w-3 h-3 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
              )}
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-void-mid mb-2">
              {itemPriceStr}
            </p>
            <h3
              className="font-display text-void-white leading-[0.92] tracking-[0.02em] mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
            >
              {itemName}
            </h3>
            <span className="inline-flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">
              View Product
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`bg-black/55 backdrop-blur-2xl border border-white/10 rounded-2xl relative overflow-hidden group cursor-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${className}`}>
      {itemHref ? (
        <Link
          href={itemHref}
          aria-label={`View ${itemName}`}
          className="absolute inset-0 z-30 block"
        />
      ) : null}
      <div
        className={`relative z-20 ${mediaClassName} bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center font-display text-white/[0.05] overflow-hidden transition-transform duration-600`}
      >
        <img
          src={itemImage}
          alt={itemName}
          className="absolute inset-0 h-full w-full object-cover opacity-80 contrast-105 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        {itemLabel ? <span className="relative z-10" style={{ fontSize: "clamp(26px, 2.8vw, 44px)" }}>{itemLabel}</span> : null}
      </div>

      {itemIsNew ? (
        <div className="absolute top-4 left-4 bg-void-white text-void-black font-mono text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1 z-35">
          NEW
        </div>
      ) : null}

      {/* Wishlist Button */}
      {productData?.id && (
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-4 right-4 z-40 rounded-full border p-2.5 backdrop-blur-md transition-all duration-300 cursor-none flex items-center justify-center ${
            isWishlisted
              ? "border-white bg-white text-black scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              : "border-white/10 bg-black/45 text-white/70 hover:border-white/35 hover:text-white hover:bg-black/75 hover:scale-105"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <LuHeart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
      )}

      <div className="relative z-20 p-5 bg-black/45 border-t border-white/10 overflow-hidden">
        {/* Silverish gradient shine matching the login/signup page style */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)] transition-opacity duration-300 group-hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_40%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-1.5">
          {/* Brand/Category Row */}
          {itemBrand ? (
            <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white/45">
              {itemBrand}
            </p>
          ) : (
            <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">
              {itemCategory}
            </p>
          )}

          {/* Product Name */}
          <p className="text-[0.88rem] leading-snug tracking-[0.03em] font-medium text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-1">
            {itemName}
          </p>

          {/* Price & Rating Row */}
          <div className="flex items-center justify-between gap-2 mt-1">
            <p className="font-mono text-[0.82rem] font-bold text-white/90 group-hover:text-white transition-colors duration-300">
              {itemPriceStr}
            </p>
            
            {itemRating && (
              <div className="flex items-center gap-1 font-mono text-[0.62rem] text-void-mid" title={`${itemRating} rating`}>
                <span className="text-yellow-400/90">★</span>
                <span className="text-white/80">{itemRating.toFixed(1)}</span>
                <span className="text-white/30">({itemReviewCount})</span>
              </div>
            )}
          </div>

          {/* Always Visible Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/[0.08] relative z-40">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-1.5 font-mono text-[0.6rem] tracking-[0.15em] uppercase bg-white text-black py-2.5 rounded-xl font-bold hover:bg-neutral-200 transition-colors duration-300 shadow-md cursor-none"
            >
              <LuShoppingBag className="w-3 h-3" />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full font-mono text-[0.6rem] tracking-[0.15em] uppercase bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm cursor-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}