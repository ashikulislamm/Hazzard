import { motion } from "framer-motion";

const footerLinkSections = [
  {
    title: "SHOP",
    links: [
      { label: "Sneakers", href: "/shop#sneakers" },
      { label: "Jackets", href: "/shop#jackets" },
      { label: "Accessories", href: "/shop#accessories" },
      { label: "New Arrivals", href: "/shop#new-arrivals" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "TikTok", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-black py-24 text-white">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-bold tracking-tighter"
            >
              HAZZARD
            </motion.h3>
            <p className="text-white/60">Redefining fashion through minimalism and purpose.</p>
          </div>

          {footerLinkSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-sm tracking-widest">{section.title}</h4>
              <ul className="space-y-3 text-white/60">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-sm tracking-widest">STAY CONNECTED</h4>
            <p className="mb-6 text-white/60">Subscribe for exclusive releases and content.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white px-6 py-3 text-sm tracking-widest text-black">
                →
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 md:flex-row">
          <p className="text-sm text-white/40">© 2026 HAZZARD. All rights reserved.</p>
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -3 }}
                href={social.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}