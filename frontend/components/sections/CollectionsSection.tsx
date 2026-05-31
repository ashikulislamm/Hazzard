"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COLLECTIONS = [
  {
    id: "c1",
    label: "SNKR",
    category: "Category 001",
    title: ["HAZZARD", "RUNNERS"],
    slug: "sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c2",
    label: "BOOT",
    category: "Category 002",
    title: ["HAZZARD", "BOOTS"],
    slug: "boots",
    image: "https://images.unsplash.com/photo-1511556532299-8a7a1a3b8f8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c3",
    label: "RUN",
    category: "Category 003",
    title: ["RUNNING", "SHOES"],
    slug: "running-shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c4",
    label: "ACC",
    category: "Category 004",
    title: ["ACCESS", "ORIES"],
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c5",
    label: "LEA",
    category: "Category 005",
    title: ["LEATHER", "JACKETS"],
    slug: "leather-jackets",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c6",
    label: "OWR",
    category: "Category 006",
    title: ["OUTER", "WEAR"],
    slug: "outerwear",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CollectionsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="collections"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal section-shell"
    >
      {/* Label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="font-mono text-[0.65rem] text-white/20">01</span>
        <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-void-mid">
          Featured Collections
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]">
        {COLLECTIONS.map((col) => (
          <div
            key={col.id}
            className="relative overflow-hidden bg-void-dark flex items-end group aspect-[4/5] min-h-[360px]"
          >
            <img
              src={col.image}
              alt={`${col.title[0]} ${col.title[1]}`}
              className="absolute inset-0 h-full w-full object-cover opacity-70 contrast-105 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />

            {/* Placeholder label */}
            <div
              className="absolute inset-0 flex items-center justify-center font-display text-white/5 select-none transition-colors duration-500 group-hover:text-white/[0.08]"
              style={{ fontSize: "clamp(42px, 5vw, 84px)", letterSpacing: "0.1em" }}
            >
              {col.label}
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 w-full">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-void-mid mb-3">
                {col.category}
              </p>
              <h2
                className="font-display leading-[0.9] tracking-[0.02em] text-void-white mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                {col.title[0]}
                <br />
                {col.title[1]}
              </h2>
              <Link
                href={`#${col.slug}`}
                className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid hover:text-void-white inline-flex items-center gap-3 hover:gap-6 transition-all duration-300"
              >
                Explore Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}