"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}