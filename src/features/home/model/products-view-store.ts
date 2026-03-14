import { create } from "zustand";

import type {
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";

interface ProductsViewState {
  page: number;
  sortBy: ProductSortField;
  sortDirection: ProductSortDirection;
  setPage: (page: number) => void;
  setSort: (field: ProductSortField, direction: ProductSortDirection) => void;
  resetPage: () => void;
}

const initialState = {
  page: 1,
  sortBy: "title" as ProductSortField,
  sortDirection: "asc" as ProductSortDirection,
};

export const useProductsViewStore = create<ProductsViewState>()((set) => ({
  ...initialState,
  setPage: (page) => set({ page }),
  setSort: (field, direction) =>
    set({ sortBy: field, sortDirection: direction, page: 1 }),
  resetPage: () => set({ page: 1 }),
}));
