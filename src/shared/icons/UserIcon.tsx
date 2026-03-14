import type { IconProps } from "@/shared/types/icons";
import { SvgIcon } from "@/shared/ui/svg-icon";

export const UserIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" defaultSize={24}>
      <circle
        fill="none"
        cx="12"
        cy="7.25"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 16.75C19 14.5409 17.2091 12.75 15 12.75H9C6.79086 12.75 5 14.5409 5 16.75V21.75H19V16.75ZM17 19.75V16.75C17 16.4739 16.9512 16.2179 16.8536 15.9822C16.7559 15.7465 16.6095 15.531 16.4142 15.3358C16.219 15.1405 16.0035 14.9941 15.7678 14.8964C15.5321 14.7988 15.2761 14.75 15 14.75H9C8.72386 14.75 8.46794 14.7988 8.23223 14.8964C7.99653 14.9941 7.78105 15.1405 7.58579 15.3358C7.39052 15.531 7.24408 15.7465 7.14645 15.9822C7.04882 16.2179 7 16.4739 7 16.75V19.75H17Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
