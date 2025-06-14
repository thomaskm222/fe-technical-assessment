import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const tableVariants = tv({
  slots: {
    root: "w-full table-fixed border-separate border-spacing-0 text-left",
    header: "h-fit w-full border-b border-gray-10 text-left text-sm text-black",
    head: "whitespace-nowrap p-4 text-left font-medium leading-4",
    body: "bg-white text-sm text-gray-700",
    row: "transition-colors",
    cell: "border-t border-gray-10 px-4 py-3",
    skeleton: "bg-gray-200 h-4 animate-pulse rounded",
  },
});

const { root, header, head, body, row, cell, skeleton } = tableVariants();

const Root = ({ className, ...props }: ComponentProps<"table">) => {
  return <table className={root({ className })} data-slot="table" {...props} />;
};

const Header = ({ className, ...props }: ComponentProps<"thead">) => {
  return (
    <thead
      className={header({ className })}
      data-slot="table-header"
      {...props}
    />
  );
};

const Head = ({ className, ...props }: ComponentProps<"th">) => {
  return (
    <th className={head({ className })} data-slot="table-head" {...props} />
  );
};

const Body = ({ className, ...props }: ComponentProps<"tbody">) => {
  return (
    <tbody className={body({ className })} data-slot="table-body" {...props} />
  );
};

const Row = ({ className, ...props }: ComponentProps<"tr">) => {
  return <tr className={row({ className })} data-slot="table-row" {...props} />;
};

const Cell = ({ className, ...props }: ComponentProps<"td">) => {
  return (
    <td className={cell({ className })} data-slot="table-cell" {...props} />
  );
};

type SkeletonProps = {
  columnsLength: number;
  pageSize?: number;
};

const Skeleton = ({ columnsLength, pageSize = 5 }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: pageSize }).map((_, rowIndex) => (
        <Row key={rowIndex}>
          {Array.from({ length: columnsLength }).map((_, cellIndex) => (
            <Cell key={cellIndex}>
              <div className={skeleton()} />
            </Cell>
          ))}
        </Row>
      ))}
    </>
  );
};

const Table = {
  Root,
  Header,
  Head,
  Body,
  Row,
  Cell,
  Skeleton,
};

export default Table;
