import type { ChangeEvent } from "react";

import { tv } from "tailwind-variants";

import { SearchIcon } from "@/shared/icons/SearchIcon";

interface SearchInputProps {
  name?: string;
  value: string;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  onChange: (value: string) => void;
}

const searchInputStyles = tv({
  slots: {
    rootSlot: "relative h-12 w-full rounded-lg bg-(--neutral-40)",
    iconSlot:
      "pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 transition-colors",
    inputSlot:
      "h-full w-full pr-5 pl-13 text-placeholder text-(--text-primary) outline-none placeholder:text-(--text-muted)",
  },
  variants: {
    filled: {
      true: {
        iconSlot: "text-(--text-primary)",
      },
      false: {
        iconSlot: "text-(--text-muted)",
      },
    },
  },
  defaultVariants: {
    filled: false,
  },
});

export const SearchInput = ({
  name = "search",
  value,
  placeholder = "Найти",
  ariaLabel = "Поиск товаров",
  className,
  onChange,
}: SearchInputProps) => {
  const { rootSlot, iconSlot, inputSlot } = searchInputStyles({
    filled: Boolean(value),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className={rootSlot({ className })}
      role="search"
      onSubmit={handleSubmit}
    >
      <SearchIcon size={24} className={iconSlot()} />
      <input
        type="search"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={inputSlot()}
      />
    </form>
  );
};
