"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
      >
        <div className="relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&q=80"
            alt="Premium Sneaker"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80"
            alt="Premium Jacket"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 text-[clamp(3rem,8vw,8rem)] font-bold leading-none tracking-tighter text-white"
        >
          NOT JUST FASHION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-12 text-[clamp(1.25rem,3vw,2rem)] tracking-wide text-white/90"
        >
          Wear your identity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
