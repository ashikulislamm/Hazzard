import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product.service";

export function useProducts(params?: Parameters<typeof ProductService.getAll>[0]) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => ProductService.getAll(params),
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => ProductService.getBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
}
