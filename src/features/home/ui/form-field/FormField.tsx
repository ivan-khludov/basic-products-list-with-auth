import { cloneElement, isValidElement, type ReactElement } from "react";

import { cn } from "@/shared/utils/cn";

export const formFieldInputClasses =
  "h-10 w-full min-w-0 rounded-[8px] border bg-white px-3 text-body outline-none placeholder:text-(--text-muted) focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-1";

const labelClasses = "text-label-2 text-(--neutral-700)";
const errorClasses = "text-note text-(--danger)";

interface FormFieldChildProps {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  className?: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactElement;
}

export const FormField = ({
  id,
  label,
  error,
  className,
  children,
}: FormFieldProps) => {
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  const inputClassName = cn(
    formFieldInputClasses,
    hasError ? "border-(--danger)" : "border-(--neutral-60)",
  );

  const clonedChild = isValidElement(children)
    ? cloneElement(children as ReactElement<FormFieldChildProps>, {
        id,
        className: cn(
          inputClassName,
          (children.props as FormFieldChildProps).className,
        ),
        "aria-invalid": hasError,
        "aria-describedby": error ? errorId : undefined,
      })
    : children;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {clonedChild}
      {error && (
        <p id={errorId} className={errorClasses} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
