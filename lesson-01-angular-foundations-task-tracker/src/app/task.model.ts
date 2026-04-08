// Un archivo de modelo pequeno hace que el componente sea mas facil de revisar.
// Tambien introduce la idea de que las apps Angular se benefician de modelos de dominio tipados.
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type TaskFilter = "all" | "open" | "completed";
