import {
  useCallback,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import {
  ProductsTableContext,
  type ProductsTableColumn,
  type ProductsTableLayoutContextValue,
  type ProductsTableSelectionConfig,
  type ProductsTableSortingConfig,
} from "./products-table-context";

interface ProductsTableProviderProps
  extends ProductsTableSelectionConfig, ProductsTableSortingConfig {
  columns: ProductsTableColumn[];
  children: ReactNode;
}

export const ProductsTableProvider = ({
  columns,
  selectable,
  selectedRowIds,
  onToggleRow,
  onToggleAll,
  sortBy,
  sortDirection,
  onSortChange,
  children,
}: ProductsTableProviderProps) => {
  const [internalColumns] = useState(columns);

  const getCellStyle = useCallback(
    (columnIndex: number) => {
      const column = internalColumns[columnIndex];

      if (!column) {
        return undefined;
      }

      const style: CSSProperties = {};

      if (column.width != null) {
        const width =
          typeof column.width === "number" ? `${column.width}px` : column.width;

        style.width = width;
        style.minWidth = width;
      } else {
        const flexGrow = column.flex ?? 1;

        style.flexGrow = flexGrow;
        style.flexBasis = 0;
      }

      return style;
    },
    [internalColumns],
  );

  const value = useMemo<ProductsTableLayoutContextValue>(
    () => ({
      columns: internalColumns,
      selectable,
      selectedRowIds,
      onToggleRow,
      onToggleAll,
      sortBy,
      sortDirection,
      onSortChange,
      getCellStyle,
    }),
    [
      getCellStyle,
      internalColumns,
      onSortChange,
      onToggleAll,
      onToggleRow,
      selectable,
      selectedRowIds,
      sortBy,
      sortDirection,
    ],
  );

  return (
    <ProductsTableContext.Provider value={value}>
      {children}
    </ProductsTableContext.Provider>
  );
};
