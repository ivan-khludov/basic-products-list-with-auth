import type { ApiResult } from "@/shared/types/api";

export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  sku?: string;
  price: number;
  rating: number;
  thumbnail?: string;
}

export interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type ProductsListData = Pick<ProductsApiResponse, "products" | "total">;

export type FetchProductsResult = ApiResult<ProductsListData>;

export type ProductSortField = "title" | "brand" | "sku" | "rating" | "price";

export type ProductSortDirection = "asc" | "desc";
