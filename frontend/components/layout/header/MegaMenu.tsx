"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { MegaMenuData } from "./types";
import { megaMenuVariants } from "./animations";

interface MegaMenuProps {
  data: MegaMenuData;
  onClose: () => void;
}

export default function MegaMenu({ data, onClose }: MegaMenuProps) {
  const { sections, featuredProduct } = data;

  return (
    <motion.div
      variants={megaMenuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1500px] mx-auto grid grid-cols-12 gap-8 py-10 px-8">
        
        {/* Navigation Links Columns (Left Side) */}
        <div className="col-span-8 grid grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-[11px] font-mono tracking-widest text-black/40 uppercase font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-xs text-black/75 hover:text-black hover:pl-1 transition-all duration-300 cursor-none"
                    >
                      <span className="relative font-medium py-0.5">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Product Column (Right Side) */}
        <div className="col-span-4 border-l border-gray-100 pl-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono tracking-widest text-black/40 uppercase font-semibold">
              Featured Release
            </h4>

            <Link
              href={`/products/${featuredProduct.slug}`}
              onClick={onClose}
              className="group block relative rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 cursor-none"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-black/40 uppercase">
                      {featuredProduct.category}
                    </span>
                    <h5 className="text-[12px] font-bold text-black mt-0.5 group-hover:text-black/85 transition-colors">
                      {featuredProduct.name}
                    </h5>
                  </div>
                  <span className="text-xs font-mono font-semibold text-black/80">
                    ${featuredProduct.price}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              href={`/products/${featuredProduct.slug}`}
              onClick={onClose}
              className="group w-full py-3.5 bg-black hover:bg-black/90 text-white font-mono text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 cursor-none"
            >
              <span>Explore Collection</span>
              <LuArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
