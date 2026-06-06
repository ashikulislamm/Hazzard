import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string, variant?: string) => void;
  updateQuantity: (id: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addItem: (newItem) => {
        const items = [...get().items];
        const existing = items.find(
          (i) => i.id === newItem.id && i.variant === newItem.variant
        );
        const quantityToAdd = newItem.quantity ?? 1;

        if (existing) {
          existing.quantity += quantityToAdd;
        } else {
          items.push({ ...newItem, quantity: quantityToAdd });
        }
        set({ items });
      },
      removeItem: (id, variant) => {
        set({
          items: get().items.filter(
            (i) => !(i.id === id && (!variant || i.variant === variant))
          ),
        });
      },
      updateQuantity: (id, variant, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id, variant);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === id && i.variant === variant ? { ...i, quantity } : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    }),
    {
      name: "hazzard_cart_storage",
      partialize: (state) => ({ items: state.items }), // Only persist items array
    }
  )
);
