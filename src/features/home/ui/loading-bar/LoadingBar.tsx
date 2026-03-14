import { cn } from "@/shared/utils/cn";

interface LoadingBarProps {
  className?: string;
}

export const LoadingBar = ({ className }: LoadingBarProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 left-0 z-10 h-1 overflow-hidden rounded-full bg-(--neutral-40)",
        className,
      )}
    >
      <div className="animate-loading-bar h-full w-1/3 rounded-full bg-(--brand-primary)" />
    </div>
  );
};
