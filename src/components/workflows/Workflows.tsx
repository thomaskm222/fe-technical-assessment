import { useState } from "react";
import { useGetExecutionResult } from "../../hooks";
import { WorkflowsHeader } from "./WorkflowsHeader";
import { WorkflowsTable } from "./WorkflowsTable";

const EXECUTION_ID = "07353c56-0670-4547-a8a9-42c4887f32e2";

export const Workflows = () => {
  const [searchText, setSearchText] = useState("");

  const { data: executionResult, isLoading } =
    useGetExecutionResult(EXECUTION_ID);

  const workflowData = executionResult?.data || [];

  const displayData = workflowData.filter((workflow) =>
    workflow.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <WorkflowsHeader searchText={searchText} setSearchText={setSearchText} />
      <WorkflowsTable data={displayData} isLoading={isLoading} />
    </>
  );
};
