import { Styled } from "@/types";
import { type ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { SelectArrowIcon } from "../icons";

const selectVariants = tv({
  slots: {
    container: "relative flex flex-col gap-1.5",
    select:
      "flex w-full rounded-lg appearance-none border border-gray-200 bg-white pl-3 pr-6 py-2 text-base shadow-sm focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    wrapper: "relative",
    arrow:
      "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600",
  },
});

const { container, select, wrapper, arrow } = selectVariants();

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<ComponentProps<"select">, "placeholder">,
    Styled {
  containerClassName?: string;
  placeholder?: string;
  options: SelectOption[];
}

export const Select = ({
  className,
  containerClassName,
  placeholder,
  options,
  ...props
}: SelectProps) => {
  return (
    <div className={container({ className: containerClassName })}>
      <div className={wrapper()}>
        <select className={select({ className })} {...props}>
          {placeholder && <option>{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={arrow()}>
          <SelectArrowIcon />
        </div>
      </div>
    </div>
  );
};
