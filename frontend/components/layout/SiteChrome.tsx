"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartPanel from "@/components/cart/CartPanel";
import CustomCursor from "@/components/ui/CustomCursor";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showFullChrome = pathname !== "/checkout";

  return (
    <>
      <CustomCursor />
      <CartPanel />
      {showFullChrome ? <Navbar /> : null}
      {children}
      {showFullChrome ? <Footer /> : null}
    </>
  );
}