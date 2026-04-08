export type MetricTone = "teal" | "amber";
export type WorkItemPriority = "High" | "Medium" | "Low";
export type WorkItemStatus = "Open" | "Waiting" | "Resolved";

export interface HubMetric {
  label: string;
  value: string;
  tone: MetricTone;
}

export interface Milestone {
  id: string;
  title: string;
  owner: string;
  status: "On track" | "Needs review" | "Blocked";
  dueLabel: string;
}

export interface WorkItem {
  id: string;
  account: string;
  summary: string;
  owner: string;
  priority: WorkItemPriority;
  status: WorkItemStatus;
  nextStep: string;
}

export interface HubSnapshot {
  metrics: HubMetric[];
  milestones: Milestone[];
  workItems: WorkItem[];
}

export interface HubPreferences {
  compactMode: boolean;
  highlightHighPriority: boolean;
}
