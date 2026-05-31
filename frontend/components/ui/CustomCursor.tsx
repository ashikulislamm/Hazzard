"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      follower.current.x += (mouse.current.x - follower.current.x) * 0.12;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${follower.current.x}px`;
        followerRef.current.style.top = `${follower.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor]")) setExpanded(true);
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("a, button, [data-cursor]")) setExpanded(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor${expanded ? " expanded" : ""}`}
      />
      <div
        ref={followerRef}
        className={`cursor-follower${expanded ? " expanded" : ""}`}
      />
    </>
  );
}