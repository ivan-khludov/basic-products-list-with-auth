import {
  forwardRef,
  memo,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import type { ProductSortField } from "@/features/home/types/product";
import { cn } from "@/shared/utils/cn";

import { useProductsTableContext } from "./products-table-context";
import { productsTableStyles } from "./products-table.styles";

type TableCellElement = HTMLTableCellElement;

export interface ProductsTableCellProps extends HTMLAttributes<TableCellElement> {
  columnIndex: number;
  asHeader?: boolean;
  align?: "left" | "center" | "right";
  children: ReactNode;
  sortable?: boolean;
  sortField?: ProductSortField;
}

const ProductsTableCellComponent = forwardRef<
  TableCellElement,
  ProductsTableCellProps
>(
  (
    {
      columnIndex,
      asHeader,
      align = "left",
      className,
      style,
      children,
      sortable,
      sortField,
      ...rest
    },
    ref,
  ) => {
    const { getCellStyle, sortBy, sortDirection, onSortChange } =
      useProductsTableContext();

    const isSortableHeader = Boolean(asHeader && sortable);

    const effectiveSortField: ProductSortField | undefined = sortField;

    const isActive =
      isSortableHeader &&
      effectiveSortField != null &&
      sortBy === effectiveSortField;

    const styles = productsTableStyles({
      align,
      headerLabelActive: isActive,
    });

    const layoutStyle = getCellStyle(columnIndex);

    const mergedStyle: CSSProperties | undefined =
      layoutStyle || style
        ? {
            ...(layoutStyle ?? {}),
            ...(style ?? {}),
          }
        : undefined;

    const Component = asHeader ? "th" : "td";

    const baseClassName = asHeader
      ? styles.headerCellSlot()
      : styles.cellSlot();

    const handleSortClick = () => {
      if (!isSortableHeader || !effectiveSortField || !onSortChange) {
        return;
      }

      const nextDirection =
        sortBy !== effectiveSortField ||
        !sortDirection ||
        sortDirection === "desc"
          ? "asc"
          : "desc";

      onSortChange(effectiveSortField, nextDirection);
    };

    return (
      <Component
        ref={ref}
        className={cn(baseClassName, className)}
        style={mergedStyle}
        {...rest}
      >
        {isSortableHeader ? (
          <button
            type="button"
            className={styles.headerButtonSlot()}
            onClick={handleSortClick}
          >
            <span className={styles.headerInnerSlot()}>{children}</span>
          </button>
        ) : (
          children
        )}
      </Component>
    );
  },
);

ProductsTableCellComponent.displayName = "ProductsTableCell";

export const ProductsTableCell = memo(ProductsTableCellComponent);
