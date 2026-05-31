"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  label: string;
}

interface CartContextType {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: "v1",
    name: "HAZZARD Runner Obsidian",
    variant: "BLACK · EU 43",
    price: 485,
    label: "V1",
  },
  {
    id: "h1",
    name: "Heavyweight Arch Hoodie",
    variant: "CHARCOAL · L",
    price: 245,
    label: "H1",
  },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((p) => !p);

  const addItem = (item: CartItem) =>
    setItems((prev) =>
      prev.find((i) => i.id === item.id) ? prev : [...prev, item]
    );

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <CartContext.Provider
      value={{ isOpen, items, openCart, closeCart, toggleCart, addItem, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}