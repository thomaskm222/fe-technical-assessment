import { IconProps } from "@/types";

export const TrashIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="24" height="24" rx="6" fill="#09090B" fillOpacity="0.04" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3519 7.13324H10.6481L10.1074 7.67399H8.21472V8.75549H15.7852V7.67399H13.8926L13.3519 7.13324ZM14.163 10.3777V15.7853H9.83698V10.3777H14.163ZM8.75547 9.29624H15.2445V15.7853C15.2445 16.3801 14.7578 16.8668 14.163 16.8668H9.83698C9.24215 16.8668 8.75547 16.3801 8.75547 15.7853V9.29624Z"
      fill="#09090B"
    />
  </svg>
);
