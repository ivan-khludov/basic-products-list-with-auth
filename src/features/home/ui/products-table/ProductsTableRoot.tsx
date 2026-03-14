import { forwardRef, type ReactNode, type TableHTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

import type {
  ProductsTableColumn,
  ProductsTableSelectionConfig,
  ProductsTableSortingConfig,
} from "./products-table-context";
import { productsTableStyles } from "./products-table.styles";
import { ProductsTableProvider } from "./ProductsTableContext";

export interface ProductsTableRootProps
  extends
    TableHTMLAttributes<HTMLTableElement>,
    ProductsTableSelectionConfig,
    ProductsTableSortingConfig {
  columns: ProductsTableColumn[];
  children: ReactNode;
}

export const ProductsTableRoot = forwardRef<
  HTMLTableElement,
  ProductsTableRootProps
>(
  (
    {
      columns,
      selectable,
      selectedRowIds,
      sortBy,
      sortDirection,
      className,
      children,
      onToggleRow,
      onToggleAll,
      onSortChange,
      ...rest
    },
    ref,
  ) => {
    const styles = productsTableStyles();

    return (
      <ProductsTableProvider
        columns={columns}
        selectable={selectable}
        selectedRowIds={selectedRowIds}
        onToggleRow={onToggleRow}
        onToggleAll={onToggleAll}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={onSortChange}
      >
        <table
          ref={ref}
          className={styles.rootSlot({ className: cn(className) })}
          {...rest}
        >
          {children}
        </table>
      </ProductsTableProvider>
    );
  },
);

ProductsTableRoot.displayName = "ProductsTableRoot";
