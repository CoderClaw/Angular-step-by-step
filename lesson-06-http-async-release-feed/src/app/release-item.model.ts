export interface ReleaseItem {
  id: string;
  title: string;
  team: "Platform" | "Support" | "Analytics";
  summary: string;
  details: string;
  status: "Published" | "Rolling Out" | "Planned";
  publishedAt: string;
}
