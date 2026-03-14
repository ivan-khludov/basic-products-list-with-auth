import { cn } from "@/shared/utils/cn";

interface PaginationSummaryProps {
  from: number;
  to: number;
  total: number;
  className?: string;
}

export const PaginationSummary = ({
  from,
  to,
  total,
  className,
}: PaginationSummaryProps) => {
  return (
    <p className={cn("text-note", className)}>
      <span className="text-(--neutral-150)">Показано</span>{" "}
      <span className="text-(--neutral-600)">
        {from}-{to}
      </span>{" "}
      <span className="text-(--neutral-150)">из</span>{" "}
      <span className="text-(--neutral-600)">{total}</span>
    </p>
  );
};
