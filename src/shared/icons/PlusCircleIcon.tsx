import type { IconProps } from "@/shared/types/icons";
import { SvgIcon } from "@/shared/ui/svg-icon";

export const PlusCircleIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22" defaultSize={22}>
      <circle
        cx="11"
        cy="11"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 11H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
