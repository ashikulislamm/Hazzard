export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductDetails = {
  fit: string;
  material: string;
  origin: string;
  care: string;
};

export type SizeGuideRow = {
  size: string;
  chest: string;
  length: string;
  fit: string;
};

export type Product = {
  id: string;
  slug: string;
  label: string;
  brand: string;
  category: string;
  name: string;
  price: number;
  image: string;
  gallery: string[];
  colors: ProductColor[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  description: string;
  isNew: boolean;
  isBestSeller: boolean;
  featuredTag?: string;
  features: string[];
  details: ProductDetails;
  sizeGuide: SizeGuideRow[];
};

export interface User {
  email: string;
  name?: string;
}

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  label: string;
  quantity: number;
}
