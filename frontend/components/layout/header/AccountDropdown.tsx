"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuUser,
  LuShoppingBag,
  LuHeart,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import { dropdownVariants } from "./animations";
import { useAuthStore } from "@/store/useAuthStore";

interface AccountDropdownProps {
  onClose: () => void;
}

export default function AccountDropdown({ onClose }: AccountDropdownProps) {
  const { user, logout, isInitialized } = useAuthStore();

  const menuItems = [
    { label: "My Profile", href: "/profile", icon: LuUser },
    { label: "Orders", href: "/profile/orders", icon: LuShoppingBag },
    { label: "Wishlist", href: "/shop?filter=wishlist", icon: LuHeart },
    { label: "Settings", href: "/profile/settings", icon: LuSettings },
  ];

  if (!isInitialized) {
    return null;
  }

  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute right-0 mt-3 w-56 bg-black/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl z-[100] overflow-hidden"
      onMouseLeave={onClose}
    >
      {user ? (
        <>
          <div className="px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Signed in as</p>
            <p className="text-xs font-semibold text-white/95 truncate mt-0.5">{user.email}</p>
          </div>

          <div className="py-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-3.5 px-5 py-3 text-[11px] font-mono tracking-wider text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 cursor-none"
                >
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-200" />
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {item.label}
                    </span>
                    <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white font-semibold">
                      {item.label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-white/10 py-1 bg-white/[0.01]">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="group w-full flex items-center gap-3.5 px-5 py-3.5 text-[11px] font-mono tracking-wider text-red-400 hover:text-red-300 hover:bg-red-500/[0.04] transition-all duration-200 cursor-none text-left"
            >
              <LuLogOut className="w-4 h-4 text-red-400/50 group-hover:text-red-400 transition-colors duration-200" />
              <span>Logout</span>
            </button>
          </div>
        </>
      ) : (
        <div className="px-5 py-5 flex flex-col gap-3">
          <div className="mb-1 text-center">
            <p className="text-[9px] font-mono tracking-[0.25em] text-white/40 uppercase">Welcome to HAZZARD</p>
          </div>
          <Link
            href="/login"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 font-mono text-[10px] tracking-widest uppercase text-black transition-all duration-200 hover:bg-white/90 text-center cursor-none font-semibold"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-2.5 font-mono text-[10px] tracking-widest uppercase text-white transition-all duration-200 text-center cursor-none"
          >
            Create Account
          </Link>
        </div>
      )}
    </motion.div>
  );
}
