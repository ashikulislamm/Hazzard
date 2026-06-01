export type Product = {
  id: string;
  slug: string;
  label: string;
  category: string;
  name: string;
  price: number;
  image: string;
  gallery: string[];
  colors: Array<{
    name: string;
    hex: string;
  }>;
  sizes: string[];
  rating: number;
  reviewCount: number;
  description: string;
  isNew: boolean;
  isBestSeller: boolean;
  featuredTag?: string;
  features: string[];
  details: {
    fit: string;
    material: string;
    origin: string;
    care: string;
  };
  sizeGuide: Array<{
    size: string;
    chest: string;
    length: string;
    fit: string;
  }>;
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "runner-obsidian",
    label: "V1",
    category: "Sneakers",
    name: "HAZZARD Runner Obsidian",
    price: 485,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Obsidian", hex: "#111111" },
      { name: "Bone", hex: "#d6d2c7" },
      { name: "Steel", hex: "#7b8591" },
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    rating: 4.8,
    reviewCount: 126,
    description:
      "A sharp daily runner with a matte finish, sculpted sole, and a premium streetwear profile.",
    isNew: true,
    isBestSeller: true,
    featuredTag: "Best Seller",
    features: [
      "Lightweight sculpted sole",
      "Breathable mesh lining",
      "Reinforced heel counter",
    ],
    details: {
      fit: "True to size",
      material: "Leather and mesh upper",
      origin: "Made in Portugal",
      care: "Spot clean with a soft cloth",
    },
    sizeGuide: [
      { size: "EU 40", chest: "N/A", length: "26 cm", fit: "Regular" },
      { size: "EU 41", chest: "N/A", length: "26.7 cm", fit: "Regular" },
      { size: "EU 42", chest: "N/A", length: "27.4 cm", fit: "Regular" },
      { size: "EU 43", chest: "N/A", length: "28.1 cm", fit: "Regular" },
      { size: "EU 44", chest: "N/A", length: "28.8 cm", fit: "Regular" },
    ],
  },
  {
    id: "p2",
    slug: "tactical-shell-jacket",
    label: "J1",
    category: "Jackets",
    name: "Tactical Shell Jacket",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Graphite", hex: "#2b2f36" },
      { name: "Black", hex: "#0e0e0f" },
      { name: "Olive", hex: "#4b5542" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 88,
    description:
      "Weather-ready outerwear with a structured cut, clean hardware, and a minimal technical look.",
    isNew: false,
    isBestSeller: true,
    featuredTag: "Top Rated",
    features: [
      "Water-resistant shell",
      "Adjustable hood system",
      "Hidden storm pockets",
    ],
    details: {
      fit: "Relaxed fit",
      material: "Water-resistant shell",
      origin: "Made in Italy",
      care: "Cold wash on gentle cycle",
    },
    sizeGuide: [
      { size: "S", chest: "112 cm", length: "68 cm", fit: "Relaxed" },
      { size: "M", chest: "116 cm", length: "70 cm", fit: "Relaxed" },
      { size: "L", chest: "120 cm", length: "72 cm", fit: "Relaxed" },
      { size: "XL", chest: "124 cm", length: "74 cm", fit: "Relaxed" },
    ],
  },
  {
    id: "p3",
    slug: "heavyweight-arch-hoodie",
    label: "H1",
    category: "Hoodies",
    name: "Heavyweight Arch Hoodie",
    price: 245,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572495641004-28421ae8b8d7?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Ash", hex: "#b0b0aa" },
      { name: "Black", hex: "#111111" },
      { name: "Clay", hex: "#7c6f66" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 154,
    description:
      "A dense loopback hoodie built for layering, with a soft brushed interior and oversized shape.",
    isNew: true,
    isBestSeller: false,
    features: [
      "Heavyweight loopback fleece",
      "Double-lined hood",
      "Dropped shoulder fit",
    ],
    details: {
      fit: "Oversized",
      material: "Heavyweight cotton fleece",
      origin: "Made in Turkey",
      care: "Machine wash cold, inside out",
    },
    sizeGuide: [
      { size: "S", chest: "120 cm", length: "69 cm", fit: "Oversized" },
      { size: "M", chest: "124 cm", length: "71 cm", fit: "Oversized" },
      { size: "L", chest: "128 cm", length: "73 cm", fit: "Oversized" },
      { size: "XL", chest: "132 cm", length: "75 cm", fit: "Oversized" },
    ],
  },
  {
    id: "p4",
    slug: "oversized-hazzard-tee",
    label: "T1",
    category: "Tees",
    name: "Oversized Hazzard Tee",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "White", hex: "#f1f1ef" },
      { name: "Black", hex: "#111111" },
      { name: "Sand", hex: "#d0c2a8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 63,
    description:
      "An easy essential tee with a dropped shoulder, structured collar, and a washed finish.",
    isNew: false,
    isBestSeller: false,
    features: [
      "Heavy jersey cotton",
      "Washed finish",
      "Dropped shoulder cut",
    ],
    details: {
      fit: "Relaxed fit",
      material: "Organic cotton jersey",
      origin: "Made in Portugal",
      care: "Machine wash cold",
    },
    sizeGuide: [
      { size: "S", chest: "106 cm", length: "70 cm", fit: "Relaxed" },
      { size: "M", chest: "110 cm", length: "72 cm", fit: "Relaxed" },
      { size: "L", chest: "114 cm", length: "74 cm", fit: "Relaxed" },
      { size: "XL", chest: "118 cm", length: "76 cm", fit: "Relaxed" },
    ],
  },
  {
    id: "p5",
    slug: "runner-chalk",
    label: "V2",
    category: "Sneakers",
    name: "HAZZARD Runner Chalk",
    price: 485,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Chalk", hex: "#ece7de" },
      { name: "Graphite", hex: "#2e3135" },
      { name: "Sage", hex: "#7e8a78" },
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    rating: 4.8,
    reviewCount: 112,
    description:
      "A lighter-toned runner with the same sculpted sole and premium street-ready construction.",
    isNew: true,
    isBestSeller: true,
    featuredTag: "Best Seller",
    features: [
      "Lightweight EVA sole",
      "Textile padded tongue",
      "Signature HAZZARD heel tab",
    ],
    details: {
      fit: "True to size",
      material: "Leather and textile upper",
      origin: "Made in Portugal",
      care: "Use a soft brush and damp cloth",
    },
    sizeGuide: [
      { size: "EU 40", chest: "N/A", length: "26 cm", fit: "Regular" },
      { size: "EU 41", chest: "N/A", length: "26.7 cm", fit: "Regular" },
      { size: "EU 42", chest: "N/A", length: "27.4 cm", fit: "Regular" },
      { size: "EU 43", chest: "N/A", length: "28.1 cm", fit: "Regular" },
      { size: "EU 44", chest: "N/A", length: "28.8 cm", fit: "Regular" },
    ],
  },
  {
    id: "p6",
    slug: "utility-shoulder-bag",
    label: "A1",
    category: "Accessories",
    name: "Utility Shoulder Bag",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Black", hex: "#0f0f10" },
      { name: "Stone", hex: "#b1aba2" },
      { name: "Olive", hex: "#5a624c" },
    ],
    sizes: ["One Size"],
    rating: 4.5,
    reviewCount: 49,
    description:
      "A compact carry-all with clean storage, adjustable strap hardware, and a utilitarian edge.",
    isNew: false,
    isBestSeller: true,
    featuredTag: "Core",
    features: [
      "Adjustable shoulder strap",
      "Compact internal storage",
      "Durable coated nylon",
    ],
    details: {
      fit: "One size",
      material: "Reinforced nylon",
      origin: "Made in Japan",
      care: "Wipe clean with a damp cloth",
    },
    sizeGuide: [
      { size: "One Size", chest: "N/A", length: "28 cm", fit: "Universal" },
    ],
  },
  {
    id: "p7",
    slug: "waxed-cotton-parka",
    label: "J2",
    category: "Jackets",
    name: "Waxed Cotton Parka",
    price: 740,
    image:
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Forest", hex: "#444f3d" },
      { name: "Black", hex: "#111111" },
      { name: "Clay", hex: "#7b6759" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 57,
    description:
      "A heavier outer layer with structured drape, storm-ready detailing, and a longline silhouette.",
    isNew: false,
    isBestSeller: false,
    features: [
      "Waxed cotton finish",
      "Storm flap closure",
      "Fleece-lined hand pockets",
    ],
    details: {
      fit: "Regular fit",
      material: "Waxed cotton canvas",
      origin: "Made in the UK",
      care: "Do not machine wash; wipe clean",
    },
    sizeGuide: [
      { size: "S", chest: "114 cm", length: "82 cm", fit: "Regular" },
      { size: "M", chest: "118 cm", length: "84 cm", fit: "Regular" },
      { size: "L", chest: "122 cm", length: "86 cm", fit: "Regular" },
      { size: "XL", chest: "126 cm", length: "88 cm", fit: "Regular" },
    ],
  },
  {
    id: "p8",
    slug: "zip-up-hazzard-hoodie",
    label: "H2",
    category: "Hoodies",
    name: "Zip-up Hazzard Hoodie",
    price: 195,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Heather", hex: "#b5b0ab" },
      { name: "Clay", hex: "#7c6d63" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 71,
    description:
      "A versatile zip hoodie with a smooth hand-feel, structured hood, and clean lines.",
    isNew: true,
    isBestSeller: false,
    features: [
      "Full zip front",
      "Brushed inner fleece",
      "Ribbed cuffs and hem",
    ],
    details: {
      fit: "Relaxed fit",
      material: "Midweight cotton fleece",
      origin: "Made in Portugal",
      care: "Machine wash cold on gentle cycle",
    },
    sizeGuide: [
      { size: "S", chest: "118 cm", length: "68 cm", fit: "Relaxed" },
      { size: "M", chest: "122 cm", length: "70 cm", fit: "Relaxed" },
      { size: "L", chest: "126 cm", length: "72 cm", fit: "Relaxed" },
      { size: "XL", chest: "130 cm", length: "74 cm", fit: "Relaxed" },
    ],
  },
  {
    id: "p9",
    slug: "thermal-contrast-tee",
    label: "T2",
    category: "Tees",
    name: "Thermal Contrast Tee",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Ash", hex: "#d2d0cb" },
      { name: "Olive", hex: "#7a836f" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviewCount: 35,
    description:
      "A textured tee with subtle contrast panels and a clean silhouette for daily wear.",
    isNew: false,
    isBestSeller: false,
    features: [
      "Textured cotton blend",
      "Contrast panel finish",
      "Soft touch hand feel",
    ],
    details: {
      fit: "Slim relaxed fit",
      material: "Textured cotton blend",
      origin: "Made in Spain",
      care: "Machine wash cold with similar colors",
    },
    sizeGuide: [
      { size: "S", chest: "104 cm", length: "69 cm", fit: "Slim relaxed" },
      { size: "M", chest: "108 cm", length: "71 cm", fit: "Slim relaxed" },
      { size: "L", chest: "112 cm", length: "73 cm", fit: "Slim relaxed" },
      { size: "XL", chest: "116 cm", length: "75 cm", fit: "Slim relaxed" },
    ],
  },
];

export const PRODUCT_CATEGORIES = ["Sneakers", "Jackets", "Hoodies", "Tees", "Accessories"] as const;

export const NEW_ARRIVALS = PRODUCTS.filter((product) => product.isNew);

export const BEST_SELLERS = PRODUCTS.filter((product) => product.isBestSeller);

export const FEATURED_PRODUCTS = BEST_SELLERS.slice(0, 4);

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function sortProducts(products: Product[], sort: string) {
  const sorted = [...products];

  switch (sort) {
    case "Price ↑":
      return sorted.sort((left, right) => left.price - right.price);
    case "Price ↓":
      return sorted.sort((left, right) => right.price - left.price);
    case "A–Z":
      return sorted.sort((left, right) => left.name.localeCompare(right.name));
    default:
      return sorted;
  }
}