import {
  useId,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";

import { tv } from "tailwind-variants";

import { CloseIcon } from "@/shared/icons/CloseIcon";
import { UserIcon } from "@/shared/icons/UserIcon";

interface LoginTextInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> {
  label: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
}

const loginTextInputStyles = tv({
  slots: {
    rootSlot: "flex w-full flex-col gap-1.5",
    labelSlot:
      "text-[18px] font-medium leading-[150%] tracking-[-0.015em] text-(--neutral-700) [font-family:var(--font-description)]",
    inputWrapperSlot:
      "relative flex h-[55px] gap-3.5 w-full items-center rounded-[12px] border border-(--neutral-60) bg-white pl-4 pr-6",
    iconLeftSlot: "text-(--neutral-110)",
    inputSlot:
      "flex-1 border-none bg-transparent text-[18px] font-medium leading-[150%] tracking-[-0.015em] text-(--neutral-700) outline-none placeholder:text-(--text-muted) [font-family:var(--font-description)]",
    clearButtonSlot:
      "flex cursor-pointer items-center justify-center rounded-full text-(--neutral-120) transition-colors hover:text-(--text-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
  },
  variants: {
    disabled: {
      true: {
        inputWrapperSlot: "bg-(--neutral-40) opacity-70 cursor-not-allowed",
      },
      false: {},
    },
    error: {
      true: {
        inputWrapperSlot: "border-(--danger)",
      },
      false: {},
    },
  },
  defaultVariants: {
    disabled: false,
    error: false,
  },
});

export const LoginTextInput = ({
  id,
  label,
  value,
  error,
  className,
  disabled,
  placeholder,
  name,
  autoComplete,
  onChange,
  ...rest
}: LoginTextInputProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    rootSlot,
    labelSlot,
    inputWrapperSlot,
    iconLeftSlot,
    inputSlot,
    clearButtonSlot,
  } = loginTextInputStyles({
    disabled,
    error: Boolean(error),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClearClick = () => {
    if (disabled) {
      return;
    }

    onChange("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={rootSlot({ className })}>
      <label htmlFor={inputId} className={labelSlot()}>
        {label}
      </label>
      <div className={inputWrapperSlot()}>
        <UserIcon size={24} className={iconLeftSlot()} />
        <input
          {...rest}
          ref={inputRef}
          id={inputId}
          name={name}
          type="text"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={inputSlot()}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        {value && (
          <button
            type="button"
            onClick={handleClearClick}
            className={clearButtonSlot()}
            aria-label="Очистить поле"
          >
            <CloseIcon />
          </button>
        )}
      </div>
      {error && (
        <p id={errorId} className="text-sm text-(--danger)" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
