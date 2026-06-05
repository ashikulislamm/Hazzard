"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import Topbar from "./header/Topbar";
import MainHeader from "./header/MainHeader";
import CategoryNav from "./header/CategoryNav";
import MegaMenu from "./header/MegaMenu";
import SearchPanel from "./header/SearchPanel";
import MobileDrawer from "./header/MobileDrawer";
import { MEGA_MENUS } from "./header/data";
import { dropdownVariants } from "./header/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

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
          style={{ height: scrolled ? 0 : "58px", opacity: scrolled ? 0 : 1 }}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <CategoryNav
            onHoverCategory={setHoveredCategory}
            hoveredCategory={hoveredCategory}
            openDropdown={openDropdown}
            onToggleDropdown={setOpenDropdown}
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

        {/* CLICK DROPDOWN: Rendered outside overflow-hidden so it isn't clipped */}
        <AnimatePresence>
          {openDropdown && MEGA_MENUS[openDropdown] && (
            <motion.div
              ref={dropdownRef}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 bg-black/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl z-[100] overflow-hidden"
              style={{ top: scrolled ? 75 : 191 }}
            >
              <div className="p-7 grid grid-cols-3 gap-8 min-w-[580px]">
                {MEGA_MENUS[openDropdown].sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h5 className="text-xs font-mono tracking-widest text-white/50 uppercase font-semibold border-b border-white/10 pb-2.5">
                      {section.title}
                    </h5>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm font-mono text-white/60 hover:text-white transition-colors flex items-center gap-2"
                          >
                            <LuChevronRight className="w-3.5 h-3.5 text-white/20" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Placeholder to prevent layout jump on load since header is fixed */}
      <div className="h-[123px] lg:h-[191px] w-full bg-black block shrink-0" />

      {/* SEARCH PANEL OVERLAY */}
      <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* MOBILE SIDE MENU DRAWER */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}