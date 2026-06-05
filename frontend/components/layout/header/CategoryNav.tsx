"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import { NAV_ITEMS, MEGA_MENUS } from "./data";

interface CategoryNavProps {
  onHoverCategory: (category: string | null) => void;
  hoveredCategory: string | null;
  openDropdown: string | null;
  onToggleDropdown: (label: string | null) => void;
}

export default function CategoryNav({ onHoverCategory, hoveredCategory, openDropdown, onToggleDropdown }: CategoryNavProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [focusedItem, setFocusedItem] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      onToggleDropdown(null);
    } else {
      onToggleDropdown(label);
    }
  };

  return (
    <nav className="h-[58px] border-t border-white/[0.06] bg-black text-white flex items-center justify-center relative z-40">
      <div className="flex items-center gap-8 xl:gap-12 h-full px-4">
        {NAV_ITEMS.map((item) => {
          const isHovered = hoveredCategory === item.label;
          const isFocused = focusedItem === item.label;
          const isOpen = openDropdown === item.label;
          const hasMega = item.hasMegaMenu && MEGA_MENUS[item.label];

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
              <div className="flex items-center gap-1">
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
                  className={`font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 py-1 cursor-none focus:outline-none ${
                    item.label === "Sale"
                      ? "text-red-500 hover:text-red-400 font-bold"
                      : isHovered || isFocused || isOpen
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative">
                    <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                      {item.label}
                    </span>

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

                {hasMega && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown(item.label);
                      onHoverCategory(null);
                    }}
                    className={`p-1.5 text-white/50 hover:text-white transition-colors duration-200 cursor-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <LuChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
