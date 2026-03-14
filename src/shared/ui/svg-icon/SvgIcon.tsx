import type { IconProps } from "@/shared/types/icons";
import { getIconDimensions } from "@/shared/utils/icons";

type SvgIconProps = IconProps & {
  viewBox: string;
  defaultSize: number;
};

export const SvgIcon = (props: SvgIconProps) => {
  const { defaultSize, viewBox, className, children, ...rest } = props;
  const { width, height } = getIconDimensions(rest, defaultSize);

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
};
