export type ReviewStatus = "all" | "pending" | "approved" | "blocked";

export interface ReviewItem {
  id: number;
  title: string;
  team: "Platform" | "Support" | "Revenue";
  owner: string;
  status: Exclude<ReviewStatus, "all">;
  score: number;
  summary: string;
}
