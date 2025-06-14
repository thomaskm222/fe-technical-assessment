import { IconProps } from "@/types";

export const EditIcon = ({ className, ...props }: IconProps) => (
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
      d="M15.06 7.13324C14.9248 7.13324 14.7842 7.18731 14.6815 7.29006L13.6919 8.27963L15.7197 10.3074L16.7093 9.31787C16.9202 9.10698 16.9202 8.76631 16.7093 8.55542L15.4439 7.29006C15.3358 7.18191 15.2006 7.13324 15.06 7.13324ZM13.1133 10.3886L13.6108 10.8861L8.71156 15.7853H8.21407V15.2878L13.1133 10.3886ZM7.13257 14.839L13.1133 8.85825L15.1411 10.8861L9.16039 16.8668H7.13257V14.839Z"
      fill="#09090B"
    />
  </svg>
);
