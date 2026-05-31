const ITEMS = [
  { text: "HAZZARD", accent: true },
  { text: "— SNEAKERS —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— OUTERWEAR —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— ACCESSORIES —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— STREETWEAR —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— SNEAKERS —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— OUTERWEAR —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— ACCESSORIES —", accent: false },
  { text: "HAZZARD", accent: true },
  { text: "— STREETWEAR —", accent: false },
];

export default function MarqueeBar() {
  return (
    <div className="border-t border-white/[0.08] border-b border-white/[0.08] py-5 overflow-hidden bg-void-dark mt-10">
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={`font-display text-[1rem] tracking-[0.4em] px-12 ${
              item.accent
                ? "text-white/70"
                : "text-white/30"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}