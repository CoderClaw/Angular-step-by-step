// A small model file keeps the component easier to scan.
// It also introduces the idea that Angular apps benefit from typed domain models.
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type TaskFilter = "all" | "open" | "completed";
