import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const WORKFLOW_TYPES = {
  workflow: "workflow",
  agent: "agent",
} as const;

export type WorkflowType = (typeof WORKFLOW_TYPES)[keyof typeof WORKFLOW_TYPES];

export interface Tag {
  name: string;
  color: string;
}

export interface WorkflowItem {
  id: number;
  type: WorkflowType;
  name: string;
  tags: Tag[];
  lastUpdated: number;
}

export interface WorkflowApiResponse {
  count: number;
  data: WorkflowItem[];
}
