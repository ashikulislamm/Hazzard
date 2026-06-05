import { SocialLink, Language, Currency, NavItem, MegaMenuData } from "./types";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
  { name: "Facebook", href: "https://facebook.com", iconName: "Facebook" },
  { name: "TikTok", href: "https://tiktok.com", iconName: "Tiktok" },
  { name: "Pinterest", href: "https://pinterest.com", iconName: "Pinterest" },
];

export const LANGUAGES: Language[] = [
  { code: "EN", name: "English" },
  { code: "BN", name: "বাংলা (BN)" },
  { code: "FR", name: "Français" },
  { code: "DE", name: "Deutsch" },
];

export const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Sneakers", href: "/shop?category=Sneakers", hasMegaMenu: true },
  { label: "Men", href: "/shop?gender=men", hasMegaMenu: true },
  { label: "Women", href: "/shop?gender=women", hasMegaMenu: true },
  { label: "Jackets", href: "/shop?category=Jackets" },
  { label: "Hoodies", href: "/shop?category=Hoodies" },
  { label: "Bags", href: "/shop?category=Bags" },
  { label: "Accessories", href: "/shop?category=Accessories", hasMegaMenu: true },
  { label: "Sale", href: "/shop?filter=sale" },
];

export const MEGA_MENUS: Record<string, MegaMenuData> = {
  Sneakers: {
    category: "Sneakers",
    sections: [
      {
        title: "Sneakers By Style",
        links: [
          { label: "Running", href: "/shop?category=Sneakers&style=running" },
          { label: "Basketball", href: "/shop?category=Sneakers&style=basketball" },
          { label: "Lifestyle", href: "/shop?category=Sneakers&style=lifestyle" },
          { label: "Limited Edition", href: "/shop?category=Sneakers&tag=limited" },
          { label: "All Sneakers", href: "/shop?category=Sneakers" },
        ],
      },
      {
        title: "Collaborations",
        links: [
          { label: "HAZZARD x VOID", href: "/shop?collab=void" },
          { label: "Arch Series", href: "/shop?series=arch" },
          { label: "Obsidian Core", href: "/shop?series=obsidian" },
          { label: "Chalk Matte Pack", href: "/shop?series=chalk" },
        ],
      },
      {
        title: "Sizing & Fit",
        links: [
          { label: "Size Guide", href: "/size-guide" },
          { label: "Care Guide", href: "/care" },
          { label: "Returns Policy", href: "/returns" },
        ],
      },
    ],
    featuredProduct: {
      id: "p1",
      slug: "runner-obsidian",
      name: "HAZZARD Runner Obsidian",
      price: 485,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      category: "Sneakers",
      label: "V1",
    },
  },
  Men: {
    category: "Men",
    sections: [
      {
        title: "Clothing",
        links: [
          { label: "T-Shirts", href: "/shop?gender=men&category=Tees" },
          { label: "Shirts", href: "/shop?gender=men&category=Shirts" },
          { label: "Hoodies", href: "/shop?gender=men&category=Hoodies" },
          { label: "Jackets", href: "/shop?gender=men&category=Jackets" },
          { label: "Denim", href: "/shop?gender=men&category=Denim" },
        ],
      },
      {
        title: "Trending",
        links: [
          { label: "Streetwear Essentials", href: "/shop?tag=streetwear" },
          { label: "Oversized Fit", href: "/shop?fit=oversized" },
          { label: "Utility & Tactical", href: "/shop?tag=utility" },
          { label: "Void Studio Collab", href: "/shop?brand=void" },
        ],
      },
      {
        title: "Shop By Fit",
        links: [
          { label: "Loose Fit", href: "/shop?fit=loose" },
          { label: "Boxy Fit", href: "/shop?fit=boxy" },
          { label: "Standard Fit", href: "/shop?fit=standard" },
        ],
      },
    ],
    featuredProduct: {
      id: "p3",
      slug: "heavyweight-arch-hoodie",
      name: "Heavyweight Arch Hoodie",
      price: 245,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      category: "Hoodies",
      label: "H1",
    },
  },
  Women: {
    category: "Women",
    sections: [
      {
        title: "Clothing",
        links: [
          { label: "T-Shirts", href: "/shop?gender=women&category=Tees" },
          { label: "Shirts", href: "/shop?gender=women&category=Shirts" },
          { label: "Hoodies", href: "/shop?gender=women&category=Hoodies" },
          { label: "Jackets", href: "/shop?gender=women&category=Jackets" },
          { label: "Dresses", href: "/shop?gender=women&category=Dresses" },
        ],
      },
      {
        title: "Trending",
        links: [
          { label: "Minimalist Luxe", href: "/shop?tag=minimalist" },
          { label: "Cropped Cuts", href: "/shop?style=crop" },
          { label: "Cozy Loungewear", href: "/shop?tag=lounge" },
          { label: "New Season Drops", href: "/shop?filter=new" },
        ],
      },
      {
        title: "Featured Sets",
        links: [
          { label: "Monochrome Sets", href: "/shop?set=mono" },
          { label: "Arch Loungewear Set", href: "/shop?set=arch" },
          { label: "Tactical Outerwear Set", href: "/shop?set=tactical" },
        ],
      },
    ],
    featuredProduct: {
      id: "p2",
      slug: "tactical-shell-jacket",
      name: "Tactical Shell Jacket",
      price: 620,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      category: "Jackets",
      label: "J1",
    },
  },
  Accessories: {
    category: "Accessories",
    sections: [
      {
        title: "Accessories",
        links: [
          { label: "Bags & Totes", href: "/shop?category=Bags" },
          { label: "Caps & Headwear", href: "/shop?category=Caps" },
          { label: "Watches", href: "/shop?category=Watches" },
          { label: "Sunglasses", href: "/shop?category=Sunglasses" },
          { label: "Jewelry", href: "/shop?category=Jewelry" },
        ],
      },
      {
        title: "Collections",
        links: [
          { label: "Full Grain Leather", href: "/shop?material=leather" },
          { label: "Durable Nylon Utility", href: "/shop?material=nylon" },
          { label: "Void Studio Accessories", href: "/shop?brand=void" },
          { label: "Hardware Accents", href: "/shop?tag=hardware" },
        ],
      },
      {
        title: "Daily Essentials",
        links: [
          { label: "Wallets", href: "/shop?category=Wallets" },
          { label: "Belts", href: "/shop?category=Belts" },
          { label: "Keychains", href: "/shop?category=Keychains" },
        ],
      },
    ],
    featuredProduct: {
      id: "p6",
      slug: "utility-shoulder-bag",
      name: "Utility Shoulder Bag",
      price: 185,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
      category: "Bags",
      label: "A1",
    },
  },
};
