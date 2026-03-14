import type { ButtonHTMLAttributes } from "react";

import { tv } from "tailwind-variants";

import { PlusIcon } from "@/shared/icons/PlusIcon";

const productsTableAddButtonStyles = tv({
  base: [
    "inline-flex h-[27px] w-[52px] cursor-pointer items-center justify-center rounded-[23px] bg-(--brand-primary) text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-40",
  ],
});

interface ProductsTableAddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ProductsTableAddButton = ({
  className,
  ...rest
}: ProductsTableAddButtonProps) => {
  return (
    <button
      className={productsTableAddButtonStyles({ className })}
      aria-label="Добавить товар"
      {...rest}
    >
      <PlusIcon size={24} className="text-white" />
    </button>
  );
};
