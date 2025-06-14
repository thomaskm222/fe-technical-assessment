import { Styled } from "@/types";
import { type ComponentProps, type ReactNode } from "react";
import { tv } from "tailwind-variants";

const inputVariants = tv({
  slots: {
    container: "relative flex flex-col gap-1.5",
    input:
      "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex-1 bg-transparent text-base outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    wrapper:
      "relative flex flex-row items-center rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-300 focus-within:border-gray-300",
  },
});

const { container, input, wrapper } = inputVariants();

interface InputProps extends ComponentProps<"input">, Styled {
  containerClassName?: string;
  leftIcon?: ReactNode;
}

export const Input = ({
  className,
  containerClassName,
  leftIcon,
  ...props
}: InputProps) => {
  return (
    <div className={container({ className: containerClassName })}>
      <div className={wrapper()}>
        {leftIcon && <div className="mr-2 text-gray-400">{leftIcon}</div>}
        <input className={input({ className })} type="text" {...props} />
      </div>
    </div>
  );
};
