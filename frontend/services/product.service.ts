import { apiClient } from "@/api/client";
import type { Product } from "@/types";

export interface GetProductsResponse {
  products: Product[];
  total: number;
  pages?: number;
  currentPage?: number;
}

export const ProductService = {
  async getAll(params?: {
    category?: string;
    brand?: string;
    sort?: string;
    price?: number;
    page?: number;
    limit?: number;
    search?: string;
  }) {
    // If the backend has queries matching the schema, we map them directly
    const queryParams: Record<string, unknown> = {};
    if (params) {
      if (params.category && params.category !== "All") queryParams.category = params.category;
      if (params.brand && params.brand !== "All") queryParams.brand = params.brand;
      if (params.sort) queryParams.sort = params.sort;
      if (params.price) queryParams.price = params.price;
      if (params.page) queryParams.page = params.page;
      if (params.limit) queryParams.limit = params.limit;
      if (params.search) queryParams.search = params.search;
    }

    return apiClient.get<unknown, GetProductsResponse>("/products", { params: queryParams });
  },

  async getBySlug(slug: string) {
    return apiClient.get<unknown, Product>(`/products/${slug}`);
  },
};
