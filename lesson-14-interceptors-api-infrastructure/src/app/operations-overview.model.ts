export interface OperationsOverview {
  generatedAt: string;
  announcements: Array<{
    id: string;
    title: string;
    team: "Platform" | "Support" | "Revenue";
    summary: string;
  }>;
  checks: Array<{
    id: string;
    name: string;
    status: "Healthy" | "Warning" | "Action needed";
    owner: string;
  }>;
}
