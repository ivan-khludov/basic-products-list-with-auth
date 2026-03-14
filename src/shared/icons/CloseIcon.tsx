import type { IconProps } from "@/shared/types/icons";
import { SvgIcon } from "@/shared/ui/svg-icon";

export const CloseIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17 18" defaultSize={17}>
      <path
        d="M1.01031 1.00002L15.0103 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 1.00002L1 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
