import type { ButtonHTMLAttributes } from "react";

import { PlusCircleIcon } from "@/shared/icons/PlusCircleIcon";
import { cn } from "@/shared/utils/cn";

interface AddProductButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const AddProductButton = ({
  className,
  children,
  ...rest
}: AddProductButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-[15px] rounded-[6px] bg-(--brand-primary) px-5 py-2.5",
        "focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...rest}
    >
      <PlusCircleIcon size={22} className="text-(--text-inverse)" />
      <span className="text-label-2 text-(--success-soft)">
        {children ?? "Добавить"}
      </span>
    </button>
  );
};
