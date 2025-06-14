import AirOps from "@airops/airops-js";
import { WorkflowApiResponse } from "../types/types";

export const getExecutionResult = async (
  executionId: string
): Promise<WorkflowApiResponse> => {
  const airopsInstance = new AirOps();

  const result = await airopsInstance.apps.getResults({
    executionId,
  });

  return result.output as WorkflowApiResponse;
};
