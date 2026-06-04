"use client";

import Link from "next/link";

type ProductCardMode = "catalog" | "featured";

type ProductCardProps = {
  mode?: ProductCardMode;
  image: string;
  name: string;
  category: string;
  price: string;
  tag?: string;
  label?: string;
  href?: string;
  isNew?: boolean;
  quickAddLabel?: string;
  onQuickAdd?: () => void;
  className?: string;
  mediaClassName?: string;
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
}: ProductCardProps) {
  if (mode === "featured") {
    return (
      <article className={`group relative overflow-hidden bg-void-dark min-h-[440px] ${className}`}>
        {href ? (
          <Link
            href={href}
            aria-label={`View ${name}`}
            className="absolute inset-0 z-30 block"
          />
        ) : null}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-80 contrast-105 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-4">
            {tag ? (
              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-4 py-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-void-white/70 backdrop-blur-sm">
                {tag}
              </span>
            ) : (
              <span />
            )}
            <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-void-mid text-right max-w-[120px]">
              {category}
            </span>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-void-mid mb-2">
              {price}
            </p>
            <h3
              className="font-display text-void-white leading-[0.92] tracking-[0.02em] mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
            >
              {name}
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
      {href ? (
        <Link
          href={href}
          aria-label={`View ${name}`}
          className="absolute inset-0 z-30 block"
        />
      ) : null}
      <div
        className={`relative z-20 ${mediaClassName} bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center font-display text-white/[0.05] overflow-hidden transition-transform duration-600`}
      >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-80 contrast-105 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        {label ? <span className="relative z-10" style={{ fontSize: "clamp(26px, 2.8vw, 44px)" }}>{label}</span> : null}

        {onQuickAdd ? (
          <div className="absolute inset-0 z-40 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={onQuickAdd}
              className="pointer-events-auto font-mono text-[0.6rem] tracking-[0.2em] uppercase bg-void-white text-void-black px-4 py-2 hover:bg-void-gray transition-colors"
            >
              {quickAddLabel}
            </button>
          </div>
        ) : null}
      </div>

      {isNew ? (
        <div className="absolute top-4 left-4 bg-void-white text-void-black font-mono text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1">
          NEW
        </div>
      ) : null}

      <div className="relative z-20 p-5 bg-black/45 border-t border-white/10 overflow-hidden">
        {/* Silverish gradient shine matching the login/signup page style */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)] transition-opacity duration-300 group-hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_40%)] pointer-events-none" />
        
        <div className="relative z-10">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid mb-1">
            {category}
          </p>
          <p className="text-[0.85rem] tracking-[0.05em] mb-2 text-white/90 group-hover:text-white transition-colors duration-300">{name}</p>
          <p className="font-mono text-[0.75rem] text-white/80 group-hover:text-white transition-colors duration-300">{price}</p>
        </div>
      </div>
    </article>
  );
}