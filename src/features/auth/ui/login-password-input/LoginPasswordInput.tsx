import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";

import { tv } from "tailwind-variants";

import { EyeOffIcon } from "@/shared/icons/EyeOffIcon";
import { LockIcon } from "@/shared/icons/LockIcon";

interface LoginPasswordInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange"
> {
  label: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
}

const loginPasswordInputStyles = tv({
  slots: {
    rootSlot: "flex w-full flex-col gap-1.5",
    labelSlot:
      "text-[18px] font-medium leading-[150%] tracking-[-0.015em] text-(--neutral-700) [font-family:var(--font-description)]",
    inputWrapperSlot:
      "relative flex h-[55px] gap-3.5 w-full items-center rounded-[12px] border border-(--neutral-60) bg-white pl-4 pr-5",
    iconLeftSlot: "text-(--neutral-110)",
    inputSlot:
      "flex-1 border-none bg-transparent text-[18px] font-medium leading-[150%] tracking-[-0.015em] text-(--neutral-700) outline-none placeholder:text-(--text-muted) [font-family:var(--font-description)]",
    toggleButtonSlot:
      "flex cursor-pointer items-center justify-center rounded-full text-(--neutral-120) transition-colors hover:text-(--text-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
  },
  variants: {
    filled: {
      true: {},
      false: {},
    },
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
    filled: false,
    disabled: false,
    error: false,
  },
});

export const LoginPasswordInput = ({
  id,
  label,
  value,
  error,
  className,
  disabled,
  placeholder,
  name,
  autoComplete = "current-password",
  onChange,
  ...rest
}: LoginPasswordInputProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    rootSlot,
    labelSlot,
    inputWrapperSlot,
    iconLeftSlot,
    inputSlot,
    toggleButtonSlot,
  } = loginPasswordInputStyles({
    filled: Boolean(value),
    disabled,
    error: Boolean(error),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleToggleVisibilityClick = () => {
    if (disabled) {
      return;
    }

    setIsPasswordVisible((prev) => !prev);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const inputType = isPasswordVisible ? "text" : "password";
  const visibilityLabel = isPasswordVisible
    ? "Скрыть пароль"
    : "Показать пароль";

  return (
    <div className={rootSlot({ className })}>
      <label htmlFor={inputId} className={labelSlot()}>
        {label}
      </label>
      <div className={inputWrapperSlot()}>
        <LockIcon size={24} className={iconLeftSlot()} />
        <input
          {...rest}
          ref={inputRef}
          id={inputId}
          name={name}
          type={inputType}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={inputSlot()}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          type="button"
          onClick={handleToggleVisibilityClick}
          className={toggleButtonSlot()}
          aria-label={visibilityLabel}
        >
          <EyeOffIcon size={24} />
        </button>
      </div>
      {error && (
        <p id={errorId} className="text-sm text-(--danger)" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
