"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LuSearch, LuX, LuTrendingUp, LuHistory, LuArrowRight } from "react-icons/lu";
import { PRODUCTS } from "@/data/products";
import { searchPanelVariants } from "./animations";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Runner Obsidian",
    "Tactical Jacket",
    "Bags",
    "Oversized Tees",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Filter products based on search query
  const filteredProducts = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : PRODUCTS.slice(0, 4); // Default suggested products

  const trendingCategories = ["Sneakers", "Jackets", "Hoodies", "Bags", "Accessories"];

  const handleRecentClick = (search: string) => {
    setQuery(search);
  };

  const clearRecent = () => {
    setRecentSearches([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120]">
          {/* Backdrop Blur */}
          <motion.div
            variants={searchPanelVariants}
            initial="backdropHidden"
            animate="backdropVisible"
            exit="backdropHidden"
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Search Content */}
          <motion.div
            variants={searchPanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 right-0 top-0 bg-black border-b border-white/10 pt-10 pb-12 shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-50 px-4 sm:px-6 lg:px-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto">
              {/* Top Bar: Search Input */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex-1 flex items-center gap-4 bg-white/[0.03] border border-white/10 hover:border-white/20 focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/10 rounded-full px-6 py-4 transition-all duration-300">
                  <LuSearch className="w-5 h-5 text-white/40" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search sneakers, jackets, bags, apparel..."
                    className="w-full bg-transparent text-sm sm:text-base text-white placeholder-white/30 outline-none font-mono"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="text-white/40 hover:text-white transition-colors cursor-none"
                    >
                      <LuX className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/5 p-3.5 hover:bg-white/15 text-white transition-all duration-300 cursor-none flex items-center justify-center shrink-0"
                  aria-label="Close search"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>

              {/* Suggestions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
                {/* Left side: Recent & Trending */}
                <div className="md:col-span-5 space-y-8">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                          <LuHistory className="w-3.5 h-3.5" />
                          Recent Searches
                        </p>
                        <button
                          onClick={clearRecent}
                          className="text-[9px] font-mono tracking-wider text-white/30 hover:text-white transition-colors cursor-none uppercase"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search) => (
                          <button
                            key={search}
                            onClick={() => handleRecentClick(search)}
                            className="text-[11px] font-mono tracking-wide px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all duration-200 cursor-none"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Categories */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                      <LuTrendingUp className="w-3.5 h-3.5" />
                      Trending Categories
                    </p>
                    <ul className="space-y-1">
                      {trendingCategories.map((category) => (
                        <li key={category}>
                          <Link
                            href={`/shop?category=${category}`}
                            onClick={onClose}
                            className="group flex items-center justify-between py-2.5 text-[11px] font-mono tracking-wider text-white/70 hover:text-white transition-colors duration-200 cursor-none border-b border-white/[0.04]"
                          >
                            <span>{category}</span>
                            <LuArrowRight className="w-3 h-3 text-white/30 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side: Suggested Products */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                    {query ? "Suggested Results" : "Featured Products"}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="group flex gap-3.5 p-3.5 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 cursor-none"
                        >
                          <div className="relative w-16 h-16 rounded-lg bg-white/5 overflow-hidden shrink-0 border border-white/5">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col justify-center min-w-0">
                            <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
                              {product.category}
                            </span>
                            <h4 className="text-[11px] font-semibold text-white/95 truncate group-hover:text-white transition-colors mt-0.5">
                              {product.name}
                            </h4>
                            <span className="text-[10px] font-mono text-white/60 mt-1">
                              ${product.price}
                            </span>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-2 py-8 text-center text-white/35 text-xs font-mono">
                        No products match your search query.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
