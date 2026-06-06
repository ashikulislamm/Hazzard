import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HAZZARD | Modern Fashion Store",
    template: "%s | HAZZARD",
  },
  description:
    "HAZZARD is a modern fashion store for premium sneakers, jackets, and everyday essentials with a clean editorial feel.",
  keywords: [
    "Hazzard",
    "fashion store",
    "premium sneakers",
    "jackets",
    "streetwear",
    "modern clothing",
  ],
  openGraph: {
    title: "HAZZARD | Modern Fashion Store",
    description:
      "Discover premium sneakers, jackets, and essentials at HAZZARD.",
    type: "website",
    locale: "en_US",
    siteName: "HAZZARD",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAZZARD | Modern Fashion Store",
    description:
      "Discover premium sneakers, jackets, and essentials at HAZZARD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <QueryProvider>
          <AuthProvider>
            <SiteChrome>{children}</SiteChrome>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
