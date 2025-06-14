import { IconProps } from "@/types";
import { twMerge } from "tailwind-merge";

export const PlusIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={twMerge("size-5", className)}
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="0.1875" width="26" height="26" rx="13" fill="currentFill" />
    <path
      d="M13 7.1875V19.1875M19 13.1875L7 13.1875"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
