export interface KnowledgeArticle {
  id: string;
  title: string;
  section: "Getting Started" | "Operations" | "Support";
  summary: string;
  body: string;
  updatedAt: string;
}
