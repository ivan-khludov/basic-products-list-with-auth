import type { IconProps } from "@/shared/types/icons";

export const getIconDimensions = (
  { size, width, height }: Pick<IconProps, "size" | "width" | "height">,
  defaultSize: number,
) => {
  return {
    width: width ?? size ?? defaultSize,
    height: height ?? size ?? defaultSize,
  };
};
