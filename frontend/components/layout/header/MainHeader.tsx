"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LuSearch, LuHeart, LuUser, LuShoppingBag, LuMenu } from "react-icons/lu";
import { useCart } from "@/components/ui/CartContext";
import AccountDropdown from "./AccountDropdown";
import { iconHoverVariants, badgeVariants } from "./animations";
import Logo from "@/public/logo.png";
import Image from "next/image";

interface MainHeaderProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  isSticky: boolean;
}

export default function MainHeader({
  onOpenSearch,
  onOpenMobileMenu,
  isSticky,
}: MainHeaderProps) {
  const { toggleCart, items } = useCart();
  const [accountHovered, setAccountHovered] = useState(false);
  const [prevCartCount, setPrevCartCount] = useState(items.length);
  const [shouldPulse, setShouldPulse] = useState(false);

  // Cart badge pulse animation when items count changes
  useEffect(() => {
    if (items.length > prevCartCount) {
      setShouldPulse(true);
      const timer = setTimeout(() => setShouldPulse(false), 500);
      return () => clearTimeout(timer);
    }
    setPrevCartCount(items.length);
  }, [items.length, prevCartCount]);

  return (
    <div
      className={`relative px-4 sm:px-6 lg:px-8 bg-black transition-all duration-500 ease-out border-b border-white/[0.06] ${
        isSticky ? "h-[70px] lg:h-[75px]" : "h-[85px] lg:h-[95px]"
      }`}
    >
      <div className="max-w-[1800px] mx-auto h-full grid grid-cols-3 items-center">
        
        {/* Left Column: Search Bar (Desktop) / Hamburger (Mobile) */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 -ml-2 text-white hover:text-white/80 transition-colors cursor-none mr-2"
            aria-label="Open mobile menu"
          >
            <LuMenu className="w-6 h-6" />
          </button>

          {/* Desktop Search Trigger */}
          <div className="hidden lg:block w-[320px] xl:w-[400px]">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center gap-3.5 bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] px-5 py-3 rounded-full text-white/40 hover:text-white/60 transition-all duration-300 text-left focus:outline-none focus:border-white/40 cursor-none"
            >
              <LuSearch className="w-5 h-5 text-white/50" />
              <span className="font-mono text-xs tracking-wider">Search sneakers, jackets, bags...</span>
            </button>
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors cursor-none"
            aria-label="Search products"
          >
            <LuSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Center Column: Perfectly Centered Brand Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="font-display text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] tracking-[0.28em] text-white hover:text-white/90 transition-all duration-300 select-none cursor-none flex items-center gap-1"
          >
            <Image src={Logo} alt="Hazzard Logo" width={180} height={180} />
            
          </Link>
        </div>

        {/* Right Column: Actions (Wishlist, Account, Cart) */}
        <div className="flex items-center justify-end gap-3.5 md:gap-5 lg:gap-6">

          {/* Account Icon + Hover Dropdown */}
          <div
            className="hidden lg:flex relative"
            onMouseEnter={() => setAccountHovered(true)}
            onMouseLeave={() => setAccountHovered(false)}
          >
            <Link
              href="/login"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 cursor-none py-2"
              aria-label="User Account"
            >
              <motion.div whileHover="hover" variants={iconHoverVariants}>
                <LuUser className="w-[18px] h-[18px] text-white/50" />
              </motion.div>
              <span className="font-mono text-xs tracking-widest uppercase hidden lg:inline">Account</span>
            </Link>

            <AnimatePresence>
              {accountHovered && (
                <AccountDropdown onClose={() => setAccountHovered(false)} />
              )}
            </AnimatePresence>
          </div>

          {/* Cart Icon + Badge */}
          <button
            onClick={toggleCart}
            className="flex items-center gap-2 text-white bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] px-4 py-2.5 rounded-full transition-all duration-300 cursor-none group relative overflow-hidden"
            aria-label={`Open shopping cart with ${items.length} items`}
          >
            {/* Subtle silver reflection hover effect */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                <LuShoppingBag className="w-[16px] h-[16px] text-white/75 group-hover:text-white transition-colors" />
              </motion.div>
              
              <span className="font-mono text-xs tracking-wider uppercase hidden sm:inline text-white/80 group-hover:text-white">
                Bag
              </span>

              {/* Animated Item Badge */}
              <motion.span
                variants={badgeVariants}
                animate={shouldPulse ? "pulse" : "initial"}
                className="bg-white text-black font-sans font-extrabold text-[11px] w-6 h-6 flex items-center justify-center rounded-full shadow-lg shadow-black/30"
              >
                {items.length}
              </motion.span>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
