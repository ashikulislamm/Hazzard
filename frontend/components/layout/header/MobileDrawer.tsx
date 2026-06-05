"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuX,
  LuSearch,
  LuHeart,
  LuShoppingBag,
  LuUser,
  LuChevronRight,
  LuPlus,
  LuMinus,
} from "react-icons/lu";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { NAV_ITEMS, SOCIAL_LINKS, MEGA_MENUS } from "./data";
import { mobileDrawerVariants } from "./animations";
import { useCart } from "@/components/ui/CartContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { items, toggleCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    if (expandedCategory === label) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(label);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to shop page with search query
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      onClose();
    }
  };

  const renderSocialIcon = (name: string) => {
    const props = { className: "w-4 h-4 text-white/50 hover:text-white transition-colors duration-200" };
    switch (name) {
      case "Instagram":
        return <FaInstagram {...props} />;
      case "Facebook":
        return <FaFacebookF {...props} />;
      case "Tiktok":
        return <FaTiktok {...props} />;
      case "Pinterest":
        return <FaPinterestP {...props} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] lg:hidden">
          {/* Backdrop */}
          <motion.div
            variants={mobileDrawerVariants}
            initial="backdropHidden"
            animate="backdropVisible"
            exit="backdropHidden"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Body */}
          <motion.div
            variants={mobileDrawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-0 bottom-0 w-full max-w-[400px] bg-black border-r border-white/10 flex flex-col justify-between"
          >
            {/* Top Bar / Header inside Drawer */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <span className="font-display text-2xl tracking-[0.2em] text-white">HAZZARD</span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-white/60 hover:text-white transition-colors cursor-none"
                aria-label="Close menu"
              >
                <LuX className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Section: Scrollable Nav & Search */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search store..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/15 rounded-full pl-5 pr-11 py-3 text-[12px] font-mono text-white placeholder-white/30 outline-none focus:border-white/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-none"
                  aria-label="Submit search"
                >
                  <LuSearch className="w-4 h-4" />
                </button>
              </form>

              {/* Main Navigation Links */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Categories</p>
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const hasMega = item.hasMegaMenu && MEGA_MENUS[item.label];
                    const isExpanded = expandedCategory === item.label;

                    return (
                      <div key={item.label} className="border-b border-white/[0.04]">
                        <div className="flex items-center justify-between py-3">
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={`text-xs font-mono tracking-wider font-medium uppercase ${
                              item.label === "Sale" ? "text-red-500" : "text-white/80 hover:text-white"
                            }`}
                          >
                            {item.label}
                          </Link>
                          {hasMega && (
                            <button
                              onClick={() => toggleExpand(item.label)}
                              className="p-1.5 text-white/45 hover:text-white transition-colors cursor-none"
                              aria-label={`Toggle subcategories for ${item.label}`}
                            >
                              {isExpanded ? <LuMinus className="w-3.5 h-3.5" /> : <LuPlus className="w-3.5 h-3.5" />}
                            </button>
                          )}
                        </div>

                        {/* Collapsible Sub-items */}
                        <AnimatePresence initial={false}>
                          {hasMega && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden bg-white/[0.02] rounded-xl px-4 py-2 mb-2 space-y-4"
                            >
                              {MEGA_MENUS[item.label].sections.map((section) => (
                                <div key={section.title} className="space-y-2">
                                  <h5 className="text-[9px] font-mono tracking-widest text-white/30 uppercase font-semibold">
                                    {section.title}
                                  </h5>
                                  <ul className="space-y-1.5">
                                    {section.links.map((link) => (
                                      <li key={link.label}>
                                        <Link
                                          href={link.href}
                                          onClick={onClose}
                                          className="text-[11px] font-mono text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                                        >
                                          <LuChevronRight className="w-3 h-3 text-white/20" />
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick User Actions */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Quick Actions</p>
                <div className="grid grid-cols-2 gap-3.5">
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex items-center gap-2.5 justify-center py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[11px] font-mono text-white/80 transition-colors cursor-none"
                  >
                    <LuUser className="w-4 h-4 text-white/40" />
                    <span>Account</span>
                  </Link>

                  <Link
                    href="/shop?filter=wishlist"
                    onClick={onClose}
                    className="flex items-center gap-2.5 justify-center py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-[11px] font-mono text-white/80 transition-colors cursor-none"
                  >
                    <LuHeart className="w-4 h-4 text-white/40" />
                    <span>Wishlist</span>
                  </Link>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => toggleCart(), 300);
                  }}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white transition-colors cursor-none"
                >
                  <span className="flex items-center gap-2.5">
                    <LuShoppingBag className="w-4 h-4 text-white/40" />
                    <span>Shopping Cart</span>
                  </span>
                  <span className="bg-white text-black font-sans font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {items.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Section: Social Icons & Store Info */}
            <div className="px-6 py-6 border-t border-white/10 space-y-4">
              <div className="flex justify-center gap-6">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="cursor-none"
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
              <p className="text-center text-[9px] font-mono text-white/30 uppercase tracking-widest">
                © HAZZARD 2026. Made in Bangladesh.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
