import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { LuInstagram, LuTwitter, LuYoutube, LuFacebook } from "react-icons/lu";

const footerLinkSections = [
  {
    title: "SHOP",
    links: [
      { label: "Sneakers", href: "/shop?category=Sneakers" },
      { label: "Jackets", href: "/shop?category=Jackets" },
      { label: "Bags", href: "/shop?category=Bags" },
      { label: "New Arrivals", href: "/shop" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Order Tracker", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "COLLECTIONS",
    links: [
      { label: "SS25 Brutalist Core", href: "#" },
      { label: "HAZZARD LABS", href: "#" },
      { label: "VOID STUDIO", href: "#" },
      { label: "Featured Sellers", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;

const socialLinks = [
  { icon: LuInstagram, label: "Instagram", href: "#" },
  { icon: LuTwitter, label: "Twitter", href: "#" },
  { icon: LuYoutube, label: "YouTube", href: "#" },
  { icon: LuFacebook, label: "Facebook", href: "#" },
] as const;

//border-t border-white/10 bg-gradient-to-b from-[#1d1d22] via-[#0d0d10] to-[#040405]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-24 text-white">
      {/* Premium silver/chrome gradient highlight reflections */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-screen-2xl px-8 relative z-10">
        
        {/* Full-width Centered Newsletter Section */}
        <div className="border-b border-white/5 pb-16 mb-16 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h4 className="font-mono text-[0.75rem] tracking-[0.3em] text-white uppercase mb-3">
            STAY CONNECTED
          </h4>
          <p className="text-sm text-white/50 leading-relaxed max-w-[420px] mb-6">
            Subscribe for exclusive collections, drop notifications, and editorial releases.
          </p>
          <div className="relative flex items-center w-full max-w-[380px]">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-6 pr-16 py-3.5 text-xs font-mono tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-1.5 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md hover:bg-neutral-200 transition-colors cursor-none"
              aria-label="Subscribe"
            >
              →
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Info Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image src={Logo} alt="Hazzard Logo" width={185} height={185} className="mb-4" />
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
              Redefining modern streetwear through industrial structures, raw utility, and high-performance design.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinkSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="font-mono text-[0.75rem] tracking-[0.25em] text-white uppercase">{section.title}</h4>
              <ul className="space-y-3.5 text-[0.82rem] font-mono uppercase tracking-wider text-white/50">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.a
                      whileHover={{ x: 3, color: "#fff" }}
                      href={item.href}
                      className="transition-all duration-300 block hover:text-white"
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
          <p className="font-mono text-[0.78rem] tracking-wider">© 2026 HAZZARD. ALL RIGHTS RESERVED.</p>
          
          {/* Social Icons row */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3, scale: 1.1, color: "#fff" }}
                  href={social.href}
                  className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] hover:border-white/20 text-white/50 hover:text-white transition-all duration-300 flex items-center justify-center cursor-none"
                  aria-label={social.label}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}