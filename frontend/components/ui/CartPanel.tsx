"use client";
import { useCart } from "@/components/ui/CartContext";

export default function CartPanel() {
  const { isOpen, closeCart, items, total, removeItem } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/60 z-[2000] transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        className={`cart-panel fixed right-0 top-0 bottom-0 z-[2001] flex flex-col w-full max-w-[480px] bg-void-dark border-l border-white/[0.08] ${
          isOpen ? "open" : ""
        }`}
      >
        {/* Header */}
        <div className="panel-pad panel-pad-y flex items-center justify-between border-b border-white/[0.08]">
          <span className="font-display text-[1.5rem] tracking-[0.1em]">
            YOUR BAG
          </span>
          <button
            onClick={closeCart}
            className="text-void-white/50 hover:text-void-white transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="panel-content-pad flex-1 overflow-y-auto space-y-8">
          {items.length === 0 && (
            <p className="font-mono text-[0.7rem] tracking-[0.2em] text-void-mid uppercase text-center pt-12">
              Your bag is empty
            </p>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 pb-8 border-b border-white/[0.06] last:border-0"
            >
              {/* Thumb */}
              <div className="relative w-20 h-24 bg-black flex items-center justify-center font-display text-[1.4rem] text-white/10 shrink-0 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item.id}-cart/200/260`}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/45" />
                <span className="relative z-10">{item.label}</span>
              </div>
              {/* Info */}
              <div className="flex-1">
                <p className="text-[0.85rem] tracking-[0.05em] mb-1">
                  {item.name}
                </p>
                <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-void-mid">
                  {item.variant}
                </p>
                <p className="font-mono text-[0.8rem] mt-3">
                  ${item.price}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-void-mid hover:text-void-white text-sm self-start transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="panel-pad panel-pad-y border-t border-white/[0.08]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-void-mid">
              Total
            </span>
            <span className="font-display text-[2rem] tracking-[0.05em]">
              ${total}
            </span>
          </div>
          <p className="font-mono text-[0.6rem] tracking-[0.15em] text-void-mid uppercase mb-6">
            Free shipping on orders over $500
          </p>
          <button className="w-full py-5 bg-void-white text-void-black font-display text-base tracking-[0.3em] uppercase hover:bg-void-gray transition-colors duration-300 active:scale-y-[0.97] transition-transform">
            CHECKOUT →
          </button>
        </div>
      </aside>
    </>
  );
}