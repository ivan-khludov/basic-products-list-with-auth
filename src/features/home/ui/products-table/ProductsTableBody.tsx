import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

import { productsTableStyles } from "./products-table.styles";

export type ProductsTableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const ProductsTableBody = forwardRef<
  HTMLTableSectionElement,
  ProductsTableBodyProps
>(({ className, children, ...rest }, ref) => {
  const styles = productsTableStyles();

  return (
    <tbody
      ref={ref}
      className={styles.bodySlot({ className: cn(className) })}
      {...rest}
    >
      {children}
    </tbody>
  );
});

ProductsTableBody.displayName = "ProductsTableBody";
