import { twMerge } from "tailwind-merge";
import { Styled } from "@/types/styledInterface";

type EmptyStateProps = React.TdHTMLAttributes<HTMLTableCellElement> &
  Styled & {
    message: string;
  };

export const EmptyState = ({
  message,
  className,
  ...props
}: EmptyStateProps) => (
  <tr>
    <td className={twMerge("border-t border-gray-300", className)} {...props}>
      <div
        className={twMerge(
          "flex h-full w-full flex-col items-center justify-center gap-4 py-12",
          className
        )}
      >
        <p className="text-center text-base leading-5 text-gray-500">
          {message}
        </p>
      </div>
    </td>
  </tr>
);
