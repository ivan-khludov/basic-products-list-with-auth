import type { SVGProps } from "react";

type IconBaseProps = {
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "role" | "aria-hidden">;

export type IconProps =
  | ({
      size?: number;
      width?: never;
      height?: never;
    } & IconBaseProps)
  | ({
      size?: never;
      width?: number;
      height?: number;
    } & IconBaseProps);
