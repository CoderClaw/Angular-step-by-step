export interface WorkspaceMetric {
  label: string;
  value: string;
  tone: "accent" | "navy";
}

export interface TriageItem {
  id: string;
  customer: string;
  issue: string;
  priority: "High" | "Medium" | "Low";
  nextStep: string;
}

export interface HandoffItem {
  id: string;
  owner: string;
  stream: string;
  status: "Ready for launch" | "Needs follow-up" | "Blocked";
  note: string;
}

export interface SupportWorkspaceSnapshot {
  metrics: WorkspaceMetric[];
  triageQueue: TriageItem[];
  handoffQueue: HandoffItem[];
}
