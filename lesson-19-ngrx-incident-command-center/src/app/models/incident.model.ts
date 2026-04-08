export type IncidentPriority = "Low" | "Medium" | "High";

export type IncidentStatus = "Open" | "Blocked" | "Resolved";

export type IncidentPriorityFilter = "All" | IncidentPriority;

export interface Incident {
  id: string;
  title: string;
  customer: string;
  owner: string;
  priority: IncidentPriority;
  status: IncidentStatus;
  updatedMinutesAgo: number;
  summary: string;
}
