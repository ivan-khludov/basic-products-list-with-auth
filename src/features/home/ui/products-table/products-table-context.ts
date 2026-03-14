import { createContext, useContext, type CSSProperties } from "react";

import type {
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";

export interface ProductsTableColumn {
  id: string;
  width?: number | string;
  flex?: number;
}

export interface ProductsTableSelectionConfig {
  selectable?: boolean;
  selectedRowIds?: string[];
  onToggleRow?: (id: string) => void;
  onToggleAll?: () => void;
}

export type ProductsTableSortDirection = ProductSortDirection;

export interface ProductsTableSortingConfig {
  sortBy?: ProductSortField;
  sortDirection?: ProductsTableSortDirection;
  onSortChange?: (
    field: ProductSortField,
    direction: ProductsTableSortDirection,
  ) => void;
}

export interface ProductsTableLayoutContextValue
  extends ProductsTableSelectionConfig, ProductsTableSortingConfig {
  columns: ProductsTableColumn[];
  getCellStyle: (columnIndex: number) => CSSProperties | undefined;
}

export const ProductsTableContext =
  createContext<ProductsTableLayoutContextValue | null>(null);

export const useProductsTableContext = () => {
  const context = useContext(ProductsTableContext);

  if (!context) {
    throw new Error(
      "useProductsTableContext must be used within ProductsTableProvider",
    );
  }

  return context;
};
