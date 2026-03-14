import { keepPreviousData, useQuery } from "@tanstack/react-query";

import {
  fetchProducts,
  searchProducts,
} from "@/features/home/api/products-api";
import { PRODUCTS_PAGE_SIZE } from "@/features/home/constants/pagination";
import type {
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";

export function useProductsList(params: {
  page: number;
  search: string;
  sortBy: ProductSortField;
  sortDirection: ProductSortDirection;
}) {
  const { page, search, sortBy, sortDirection } = params;
  const skip = (page - 1) * PRODUCTS_PAGE_SIZE;
  const limit = PRODUCTS_PAGE_SIZE;

  return useQuery({
    queryKey: ["products", page, search, sortBy, sortDirection],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const result = search.trim()
        ? await searchProducts({ q: search.trim(), limit, skip })
        : await fetchProducts({
            limit,
            skip,
            sortBy,
            order: sortDirection,
          });

      if (!result.success) {
        throw new Error(result.error);
      }

      return result.data;
    },
  });
}
