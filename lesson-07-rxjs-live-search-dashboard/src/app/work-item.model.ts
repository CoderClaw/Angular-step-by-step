export type WorkItemStatus = "All" | "Open" | "Waiting" | "Closed";

export interface WorkItem {
  id: string;
  title: string;
  customer: string;
  owner: string;
  status: Exclude<WorkItemStatus, "All">;
  priority: "Low" | "Medium" | "High";
  summary: string;
  updatedAt: string;
}

export interface SearchViewModel {
  query: string;
  status: WorkItemStatus;
  results: WorkItem[];
  isLoading: boolean;
  totalResults: number;
}
