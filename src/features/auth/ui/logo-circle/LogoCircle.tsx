import { cn } from "@/shared/utils/cn";

interface LogoCircleProps {
  className?: string;
}

export const LogoCircle = ({ className }: LogoCircleProps) => {
  return (
    <div
      className={cn(
        "flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-solid border-transparent shadow-(--shadow-logo) [background:var(--bg-gradient-soft)_padding-box,var(--bg-gradient-stroke)_border-box]",
        className,
      )}
    >
      <img
        src="/logo.svg"
        alt=""
        className="h-[34px] w-[35px]"
        aria-hidden="true"
      />
    </div>
  );
};
