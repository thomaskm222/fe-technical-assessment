import { Input } from "../input";
import { SearchIcon } from "../icons";

import { Select } from "../select";

interface WorkflowsHeaderProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const WorkflowsHeader = ({
  searchText,
  setSearchText,
}: WorkflowsHeaderProps) => {
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "date", label: "Date" },
    { value: "type", label: "Type" },
  ];

  return (
    <div className="p-5 border-b-[0.5px] w-full flex flex-row justify-between border-gray-40">
      <h1 className="text-3xl font-bold text-gray-900">Workflows</h1>
      <div className="flex gap-2 items-center">
        <Select placeholder="Sort" options={sortOptions} />
        <Input
          className="max-w-sm"
          leftIcon={<SearchIcon className="text-black" />}
          onChange={(event) => {
            return setSearchText(event.target.value);
          }}
          placeholder="Search workflows"
          value={searchText ?? ""}
        />
      </div>
    </div>
  );
};
