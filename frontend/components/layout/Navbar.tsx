"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/ui/CartContext";
import { HiOutlineBars3, HiOutlineMagnifyingGlass, HiOutlineShoppingBag, HiOutlineUserCircle, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleCart, items } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Shop", href: "/shop" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Manifesto", href: "#manifesto" },
  ];

  const searchSuggestions = ["Sneakers", "Jackets", "New Arrivals", "Accessories"];

  return (
    <nav
      className={`nav-shell fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        scrolled
          ? "nav-shell--scrolled bg-black/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "nav-shell--top"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="shrink-0 font-display text-[1.7rem] sm:text-[2rem] md:text-[2.4rem] tracking-[0.24em] text-white"
      >
        HAZZARD
      </Link>

      {/* Center links */}
      <div className="hidden lg:flex flex-1 justify-center gap-8 xl:gap-12">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-mono text-[0.92rem] xl:text-[0.98rem] tracking-[0.18em] uppercase text-white/90 hover:text-white transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right actions */}
      <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 md:gap-8">
        <button
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => {
            setSearchOpen(false);
            setMobileMenuOpen((value) => !value);
          }}
          className="inline-flex lg:hidden rounded-full border border-white/10 bg-white/5 p-2 text-[1.5rem] sm:text-2xl text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
        <button
          aria-label="Search"
          aria-expanded={searchOpen}
          aria-controls="search-panel"
          onClick={() => {
            setMobileMenuOpen(false);
            setSearchOpen((value) => !value);
          }}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-[1.5rem] sm:text-2xl md:text-[1.7rem] text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          <HiOutlineMagnifyingGlass />
        </button>
        <button aria-label="Account" className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-[1.5rem] sm:text-2xl md:text-[1.7rem] text-white/90 hover:bg-white/10 hover:text-white transition-colors">
          <HiOutlineUserCircle />
        </button>
        <button
          onClick={toggleCart}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.82rem] sm:text-[0.92rem] md:text-[0.98rem] tracking-[0.13em] uppercase text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          <HiOutlineShoppingBag className="text-[1.2rem] sm:text-xl md:text-[1.35rem]" />
          <span className="hidden sm:inline">BAG ({items.length})</span>
        </button>
      </div>

      {searchOpen ? (
        <div className="fixed inset-0 z-[65]" aria-hidden={!searchOpen}>
          <button
            aria-label="Close search backdrop"
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          />

          <div
            id="search-panel"
            className="absolute left-1/2 top-24 w-[min(92vw,48rem)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">
                    Search
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-[0.16em] text-white">
                    Find products
                  </h2>
                </div>
                <button
                  aria-label="Close search"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <HiOutlineXMark className="text-[1.35rem]" />
                </button>
              </div>
            </div>

            <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search for sneakers, jackets, accessories..."
                  className="w-full bg-transparent text-[0.95rem] text-white placeholder:text-white/35 outline-none"
                />
              </div>

              <div>
                <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">
                  Popular searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {searchSuggestions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSearchQuery(item)}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-white/80 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" aria-hidden={!mobileMenuOpen}>
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            id="mobile-menu-panel"
            className="absolute left-0 right-0 top-20 mx-3 overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:mx-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-white/45">
                  Menu
                </p>
                <h2 className="mt-1 font-display text-2xl tracking-[0.16em] text-white">
                  HAZZARD
                </h2>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <HiOutlineXMark className="text-[1.35rem]" />
              </button>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <span className="font-mono text-[0.9rem] sm:text-[0.96rem] tracking-[0.22em] uppercase text-white">
                      {item.label}
                    </span>
                    <span className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}