import { cn } from "@/shared/utils/cn";

const submitButtonClasses = cn(
  "inline-flex cursor-pointer items-center justify-center rounded-[6px] bg-(--brand-primary) px-4 py-2.5 text-label-2 text-(--success-soft)",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-40",
);

const cancelButtonClasses = cn(
  "inline-flex cursor-pointer items-center justify-center rounded-[6px] border border-(--neutral-60) bg-white px-4 py-2.5 text-label-2 text-(--text-primary)",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
);

interface FormActionsProps {
  submitLabel?: string;
  cancelLabel?: string;
  submitting?: boolean;
  className?: string;
  onCancel: () => void;
}

export const FormActions = ({
  submitLabel = "Сохранить",
  cancelLabel = "Отмена",
  submitting = false,
  className,
  onCancel,
}: FormActionsProps) => {
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <button
        type="submit"
        disabled={submitting}
        className={submitButtonClasses}
      >
        {submitLabel}
      </button>
      <button
        type="button"
        onClick={handleCancelClick}
        className={cancelButtonClasses}
      >
        {cancelLabel}
      </button>
    </div>
  );
};
