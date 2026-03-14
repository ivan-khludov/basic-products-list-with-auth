import {
  errorResponseSchema,
  productsApiResponseSchema,
} from "@/features/home/api/products-api-schema";
import type {
  FetchProductsResult,
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";
import { fetchWithTimeout } from "@/shared/api/fetch-with-timeout";
import { safeParseJson } from "@/shared/api/safe-parse-json";
import { ERROR_MESSAGE } from "@/shared/constants/messages";

const PRODUCTS_BASE_URL = "https://dummyjson.com/products";

const DEFAULT_FETCH_OPTIONS: RequestInit = {
  headers: {
    Accept: "application/json",
  },
};

const fetchProductsByUrl = async (
  url: string,
): Promise<FetchProductsResult> => {
  try {
    const response = await fetchWithTimeout(url, DEFAULT_FETCH_OPTIONS);

    const parsed = await safeParseJson(response);

    if (!parsed.ok) {
      return { success: false, error: parsed.error };
    }

    const json = parsed.data;

    if (!response.ok) {
      const errorResult = errorResponseSchema.safeParse(json);
      const message =
        errorResult.success && typeof errorResult.data.message === "string"
          ? errorResult.data.message
          : ERROR_MESSAGE.UNKNOWN_ERROR;

      return { success: false, error: message };
    }

    const parseResult = productsApiResponseSchema.safeParse(json);

    if (!parseResult.success) {
      return { success: false, error: ERROR_MESSAGE.INVALID_JSON_RESPONSE };
    }

    const data = parseResult.data;
    const products = (data.products ?? []).map((p) => ({
      ...p,
      brand: p.brand ?? "",
    }));

    return {
      success: true,
      data: {
        products,
        total: data.total ?? 0,
      },
    };
  } catch {
    return { success: false, error: ERROR_MESSAGE.NETWORK_ERROR };
  }
};

export const fetchProducts = (params: {
  limit: number;
  skip: number;
  sortBy: ProductSortField;
  order: ProductSortDirection;
}): Promise<FetchProductsResult> => {
  const { limit, skip, sortBy, order } = params;
  const url = `${PRODUCTS_BASE_URL}?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;

  return fetchProductsByUrl(url);
};

export const searchProducts = (params: {
  q: string;
  limit: number;
  skip: number;
}): Promise<FetchProductsResult> => {
  const { q, limit, skip } = params;
  const url = `${PRODUCTS_BASE_URL}/search?q=${encodeURIComponent(q)}&limit=${limit}&skip=${skip}`;

  return fetchProductsByUrl(url);
};
