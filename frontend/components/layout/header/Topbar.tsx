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
    const props = { className: "w-3.5 h-3.5 transition-transform duration-300 hover:scale-110" };
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
    <div className="h-[38px] bg-black border-b border-white/[0.08] text-white/70 text-[11px] font-mono tracking-wider transition-all duration-300">
      <div className="max-w-[1800px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Info (Ticker/List on Mobile, Grid on Desktop) */}
        <div className="flex items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuPhone className="w-3.5 h-3.5 text-white/50" />
            <span className="hidden md:inline">+880 1700-000000</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuMail className="w-3.5 h-3.5 text-white/50" />
            <span className="hidden md:inline">support@hazzard.com</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuTruck className="w-3.5 h-3.5 text-white/50" />
            <span>Free Shipping Above $100</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-none">
            <LuMapPin className="w-3.5 h-3.5 text-white/50" />
            <span>Bangladesh</span>
          </div>
        </div>

        {/* Right Side: Social Media, Language & Currency Selectors */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-3.5 border-r border-white/10 pr-5">
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

          {/* Custom Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => {
                setLangOpen(!langOpen);
                setCurrencyOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 focus:outline-none cursor-none py-1"
              aria-label="Select Language"
              aria-expanded={langOpen}
            >
              <LuGlobe className="w-3.5 h-3.5 text-white/50" />
              <span>{activeLang.code}</span>
              <motion.div
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <LuChevronDown className="w-3 h-3 text-white/45" />
              </motion.div>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute right-0 mt-2 w-36 bg-black border border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-[100] overflow-hidden"
                >
                  <div className="py-1">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setActiveLang(lang);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-none block ${
                          activeLang.code === lang.code ? "text-white bg-white/[0.04]" : "text-white/60"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Custom Currency Selector */}
          <div className="relative" ref={currencyRef}>
            <button
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLangOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 focus:outline-none cursor-none py-1"
              aria-label="Select Currency"
              aria-expanded={currencyOpen}
            >
              <span className="text-white/50">{activeCurrency.symbol}</span>
              <span>{activeCurrency.code}</span>
              <motion.div
                animate={{ rotate: currencyOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <LuChevronDown className="w-3 h-3 text-white/45" />
              </motion.div>
            </button>

            <AnimatePresence>
              {currencyOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute right-0 mt-2 w-44 bg-black border border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-[100] overflow-hidden"
                >
                  <div className="py-1">
                    {CURRENCIES.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setActiveCurrency(curr);
                          setCurrencyOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-none flex justify-between items-center ${
                          activeCurrency.code === curr.code ? "text-white bg-white/[0.04]" : "text-white/60"
                        }`}
                      >
                        <span>{curr.name}</span>
                        <span className="text-[10px] text-white/40">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
