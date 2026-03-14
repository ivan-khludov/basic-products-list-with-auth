import { cn } from "@/shared/utils/cn";

interface LoginSubmitButtonProps {
  disabled?: boolean;
  className?: string;
}

export const LoginSubmitButton = ({
  disabled,
  className,
}: LoginSubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "w-full cursor-pointer rounded-xl border border-(--brand-accent) py-3.5 text-center text-white [box-shadow:var(--btn-login-box-shadow)] [background:var(--btn-login-background)]",
        "focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 focus-visible:outline-none",
        disabled && "cursor-not-allowed opacity-70",
        className,
      )}
    >
      Войти
    </button>
  );
};
