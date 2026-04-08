export interface ApprovalItem {
  id: string;
  name: string;
  owner: string;
  priority: "Low" | "Medium" | "High";
  due: string;
}

export interface IncidentItem {
  id: string;
  service: string;
  status: "Investigating" | "Monitoring" | "Resolved";
  commander: string;
  startedAt: string;
}
