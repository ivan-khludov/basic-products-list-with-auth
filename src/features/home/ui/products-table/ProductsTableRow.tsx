import { forwardRef, memo, type HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

import { useProductsTableContext } from "./products-table-context";
import { productsTableStyles } from "./products-table.styles";

export interface ProductsTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  rowId: string;
  selectable?: boolean;
  isSelected?: boolean;
  onToggleSelect?: () => void;
  variant?: "head" | "body";
}

const ProductsTableRowComponent = forwardRef<
  HTMLTableRowElement,
  ProductsTableRowProps
>(
  (
    {
      rowId,
      selectable,
      isSelected,
      onToggleSelect,
      variant = "body",
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const styles = productsTableStyles();
    const {
      selectable: tableSelectable,
      selectedRowIds,
      onToggleRow,
    } = useProductsTableContext();

    const isSelectionEnabled = selectable ?? tableSelectable ?? false;

    const resolvedSelected =
      isSelected ??
      (isSelectionEnabled && selectedRowIds
        ? selectedRowIds.includes(rowId)
        : false);

    const handleToggleSelect = () => {
      if (onToggleSelect) {
        onToggleSelect();

        return;
      }

      if (onToggleRow && isSelectionEnabled) {
        onToggleRow(rowId);
      }
    };

    return (
      <tr
        ref={ref}
        className={styles.rowSlot({
          rowSelected: resolvedSelected,
          rowSection: variant,
          className: cn(className),
        })}
        data-row-id={rowId}
        data-selected={resolvedSelected ? "true" : "false"}
        data-selectable={isSelectionEnabled ? "true" : "false"}
        onClick={isSelectionEnabled ? handleToggleSelect : rest.onClick}
        {...rest}
      >
        {children}
      </tr>
    );
  },
);

ProductsTableRowComponent.displayName = "ProductsTableRow";

export const ProductsTableRow = memo(ProductsTableRowComponent);
