import Table from "../table/Table";
import { Tag } from "../tag/Tag";
import { TrashIcon } from "../icons";
import { EditIcon } from "../icons/EditIcon";
import { WorkflowItem } from "@/types";
import { formatLastUpdatedDate } from "../../utils/formatLastUpdatedDate";

interface WorkflowsTableProps {
  data: WorkflowItem[];
  isLoading: boolean;
}

export const WorkflowsTable = ({ data, isLoading }: WorkflowsTableProps) => {
  return (
    <div className="bg-white shadow-sm px-5  overflow-hidden">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[6.75rem] ">Type</Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head className="w-[11.25rem] ">Tags</Table.Head>
            <Table.Head className="w-[8.5rem] ">Last Updated</Table.Head>
            <Table.Head className="w-[5.5rem]  ">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading && <Table.Skeleton columnsLength={5} pageSize={8} />}

          {data?.map((workflow) => (
            <Table.Row key={workflow.id}>
              <Table.Cell className="text-gray-500 text-sm font-light">
                <span className="capitalize">{workflow.type}</span>
              </Table.Cell>
              <Table.Cell className=" text-gray-900">
                {workflow.name}
              </Table.Cell>
              <Table.Cell>
                <Tag tags={workflow.tags} />
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-sm font-light">
                {formatLastUpdatedDate(workflow.lastUpdated)}
              </Table.Cell>
              <Table.Cell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <EditIcon />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <TrashIcon />
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}

          {!isLoading && data.length === 0 ? (
            <Table.Row>
              <Table.Cell className="h-24 text-center" colSpan={5}>
                No workflows found.
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
