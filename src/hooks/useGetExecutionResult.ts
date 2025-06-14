import { useQuery } from "@tanstack/react-query";
import { getExecutionResult } from "../api/workflows";
import { WorkflowApiResponse } from "../types/types";

export const useGetExecutionResult = (executionId?: string) => {
  return useQuery<WorkflowApiResponse>({
    queryFn: () => getExecutionResult(executionId ?? ""),
    queryKey: ["getExecutionResult", executionId],
    enabled: !!executionId,
  });
};
