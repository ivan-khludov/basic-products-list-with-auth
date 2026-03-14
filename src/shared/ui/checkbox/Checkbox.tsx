import { useId, type InputHTMLAttributes } from "react";

import { tv } from "tailwind-variants";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  className?: string;
}

const checkboxStyles = tv({
  slots: {
    rootSlot: [
      "inline-flex rounded-[4px]",
      "focus-within:ring-2 focus-within:ring-(--brand-primary) focus-within:ring-offset-2",
    ],
    boxWrapperSlot: "w-6 h-6 p-[2px]",
    boxSlot: [
      "inline-flex h-5 w-5 items-center justify-center box-border",
      "rounded-[4px] border-2 border-(--neutral-50)",
      "transition-colors",
    ],
    labelSlot: "inline-flex items-center gap-2.5 cursor-pointer select-none",
    labelTextSlot: [
      "text-[16px] font-medium leading-[150%]",
      "text-(--neutral-200) [font-family:var(--font-description)]",
    ],
  },
  variants: {
    checked: {
      true: {
        boxSlot: "bg-(--neutral-500)",
      },
      false: {},
    },
    disabled: {
      true: {
        rootSlot: "cursor-not-allowed opacity-60",
      },
      false: {},
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
  },
});

export const Checkbox = ({
  id,
  label,
  className,
  disabled,
  checked,
  defaultChecked,
  ...rest
}: CheckboxProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const { rootSlot, boxWrapperSlot, boxSlot, labelSlot, labelTextSlot } =
    checkboxStyles({
      checked: Boolean(checked ?? defaultChecked),
      disabled,
    });

  return (
    <div className={rootSlot({ className })}>
      <input
        {...rest}
        id={inputId}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        className="sr-only"
      />
      <label htmlFor={inputId} className={labelSlot()}>
        <div className={boxWrapperSlot()}>
          <span aria-hidden="true" className={boxSlot()} />
        </div>

        {label && <span className={labelTextSlot()}>{label}</span>}
      </label>
    </div>
  );
};
