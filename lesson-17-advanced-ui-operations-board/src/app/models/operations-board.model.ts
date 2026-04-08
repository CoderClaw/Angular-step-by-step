export type BoardColumnId = "queued" | "active" | "ready";

export interface BoardTask {
  id: string;
  title: string;
  owner: string;
  summary: string;
  detail: string;
  status: BoardColumnId;
}

export interface BoardColumn {
  id: BoardColumnId;
  title: string;
  description: string;
}
