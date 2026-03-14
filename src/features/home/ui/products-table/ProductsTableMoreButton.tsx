import type { ButtonHTMLAttributes } from "react";

import { tv } from "tailwind-variants";

import { MoreIcon } from "@/shared/icons/MoreIcon";

const productsTableMoreButtonStyles = tv({
  base: [
    "shrink-0 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-40",
  ],
});

interface ProductsTableMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ProductsTableMoreButton = ({
  className,
  ...rest
}: ProductsTableMoreButtonProps) => {
  return (
    <button
      className={productsTableMoreButtonStyles({ className })}
      aria-label="Дополнительные действия"
      {...rest}
    >
      <MoreIcon size={32} className="text-(--neutral-140)" />
    </button>
  );
};
