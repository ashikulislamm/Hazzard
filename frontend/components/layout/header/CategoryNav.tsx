"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./data";

interface CategoryNavProps {
  onHoverCategory: (category: string | null) => void;
  hoveredCategory: string | null;
}

export default function CategoryNav({ onHoverCategory, hoveredCategory }: CategoryNavProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [focusedItem, setFocusedItem] = useState<string | null>(null);

  return (
    <nav className="h-[55px] border-t border-white/[0.06] bg-black text-white flex items-center justify-center relative z-40">
      <div className="flex items-center gap-8 xl:gap-12 h-full px-4">
        {NAV_ITEMS.map((item) => {
          const isHovered = hoveredCategory === item.label;
          const isFocused = focusedItem === item.label;

          return (
            <div
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                if (item.hasMegaMenu) {
                  onHoverCategory(item.label);
                } else {
                  onHoverCategory(null);
                }
              }}
            >
              <Link
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                onFocus={() => {
                  setFocusedItem(item.label);
                  if (item.hasMegaMenu) {
                    onHoverCategory(item.label);
                  }
                }}
                onBlur={() => {
                  setFocusedItem(null);
                }}
                className={`font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 py-1 cursor-none focus:outline-none ${
                  item.label === "Sale"
                    ? "text-red-500 hover:text-red-400 font-bold"
                    : isHovered || isFocused
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span className="relative">
                  {/* Subtle hover offset animation */}
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                    {item.label}
                  </span>

                  {/* Underline Indicator */}
                  {isHovered && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute left-0 right-0 -bottom-1.5 h-[1.5px] bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
