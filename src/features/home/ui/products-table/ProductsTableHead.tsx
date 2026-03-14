import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

import { productsTableStyles } from "./products-table.styles";

export type ProductsTableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const ProductsTableHead = forwardRef<
  HTMLTableSectionElement,
  ProductsTableHeadProps
>(({ className, children, ...rest }, ref) => {
  const styles = productsTableStyles();

  return (
    <thead
      ref={ref}
      className={styles.headSlot({ className: cn(className) })}
      {...rest}
    >
      {children}
    </thead>
  );
});

ProductsTableHead.displayName = "ProductsTableHead";
