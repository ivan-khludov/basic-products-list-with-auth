import type { ButtonHTMLAttributes } from "react";

import { RefreshIcon } from "@/shared/icons/RefreshIcon";
import { cn } from "@/shared/utils/cn";

interface RefreshButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "aria-label"
> {
  ariaLabel?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
}

export const RefreshButton = ({
  ariaLabel,
  className,
  ...rest
}: RefreshButtonProps) => {
  return (
    <button
      aria-label={ariaLabel ?? "Обновить список"}
      className={cn(
        "inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-[8px] border border-(--neutral-50) bg-white text-(--neutral-400) transition-colors",
        "hover:text-(--text-primary)",
        "focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...rest}
    >
      <RefreshIcon size={22} />
    </button>
  );
};
