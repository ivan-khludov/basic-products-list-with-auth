import type { IconProps } from "@/shared/types/icons";
import { SvgIcon } from "@/shared/ui/svg-icon";

export const ChevronIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16.0184 18.0081" defaultSize={18}>
      <g>
        <path
          d="M0 0L21.2603 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          transform="matrix(0.658505,0.752577,-0.752577,0.658505,1.01428,1.00404)"
        />
        <path
          d="M0 0L21.2603 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          transform="matrix(-0.658505,0.752577,0.752577,0.658505,15.004,1.00404)"
        />
      </g>
    </SvgIcon>
  );
};
