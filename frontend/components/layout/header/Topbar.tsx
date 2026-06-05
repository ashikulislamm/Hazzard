"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import {
  LuPhone,
  LuMail,
  LuTruck,
  LuMapPin,
  LuChevronDown,
  LuGlobe,
} from "react-icons/lu";
import { SOCIAL_LINKS, LANGUAGES, CURRENCIES } from "./data";
import { Language, Currency } from "./types";
import { dropdownVariants } from "./animations";

export default function Topbar() {
  const [activeLang, setActiveLang] = useState<Language>(LANGUAGES[0]);
  const [activeCurrency, setActiveCurrency] = useState<Currency>(CURRENCIES[0]);

  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSocialIcon = (name: string) => {
    const props = { className: "w-4 h-4 transition-transform duration-300 hover:scale-110" };
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
    <div className="h-[38px] bg-black border-b border-white/[0.08] text-white/70 text-xs font-mono tracking-wider transition-all duration-300 mt-3 mb-2">
      <div className="max-w-[1800px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Info (Ticker/List on Mobile, Grid on Desktop) */}
        <div className="flex items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuPhone className="w-4 h-4 text-white/50" />
            <span className="hidden md:inline">+880 1700-000000</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuMail className="w-4 h-4 text-white/50" />
            <span className="hidden md:inline">support@hazzard.com</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuMapPin className="w-4 h-4 text-white/50" />
            <span>Bangladesh</span>
          </div>
        </div>

        {/* Right Side: Social Media, Language & Currency Selectors */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-3.5 border-r border-white/10 pr-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-white transition-colors duration-300 cursor-none"
              >
                {renderSocialIcon(social.iconName)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
