"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Topbar from "./header/Topbar";
import MainHeader from "./header/MainHeader";
import CategoryNav from "./header/CategoryNav";
import MegaMenu from "./header/MegaMenu";
import SearchPanel from "./header/SearchPanel";
import MobileDrawer from "./header/MobileDrawer";
import { MEGA_MENUS } from "./header/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Monitor window scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasMega = hoveredCategory && MEGA_MENUS[hoveredCategory];

  return (
    <>
      {/* 
        Header shell:
        Keeps top-0 fixed. Uses glassmorphism styling and border transitions when scrolled.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500 ease-out select-none ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] border-b border-white/[0.08]"
            : "bg-black border-b border-transparent"
        }`}
      >
        {/* SECTION 1: TOPBAR (Collapses on scroll on desktop) */}
        <div
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{ height: scrolled ? 0 : "38px", opacity: scrolled ? 0 : 1 }}
        >
          <Topbar />
        </div>

        {/* SECTION 2: MAIN HEADER */}
        <MainHeader
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          isSticky={scrolled}
        />

        {/* SECTION 3: CATEGORY NAVIGATION (Desktop only: Hidden/Collapsed on Scroll to maximize screen space) */}
        <div
          className="hidden lg:block overflow-hidden transition-all duration-500 ease-out relative"
          style={{ height: scrolled ? 0 : "55px", opacity: scrolled ? 0 : 1 }}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <CategoryNav
            onHoverCategory={setHoveredCategory}
            hoveredCategory={hoveredCategory}
          />

          {/* MEGA MENU: Anchored relative to the Category Nav container */}
          <AnimatePresence>
            {hasMega && (
              <MegaMenu
                data={MEGA_MENUS[hoveredCategory]}
                onClose={() => setHoveredCategory(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Placeholder to prevent layout jump on load since header is fixed */}
      <div className="h-[123px] lg:h-[178px] w-full bg-black block shrink-0" />

      {/* SEARCH PANEL OVERLAY */}
      <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* MOBILE SIDE MENU DRAWER */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}