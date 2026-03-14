import type { IconProps } from "@/shared/types/icons";
import { SvgIcon } from "@/shared/ui/svg-icon";

export const LockIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" defaultSize={24}>
      <path
        d="M7 11V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.2 11C16.8802 11 17.7202 11 18.362 11.327C18.9265 11.6146 19.3854 12.0735 19.673 12.638C20 13.2798 20 14.1198 20 15.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V15.8C4 14.1198 4 13.2798 4.32698 12.638C4.6146 12.0735 5.07354 11.6146 5.63803 11.327C6.27976 11 7.11984 11 8.8 11H15.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
