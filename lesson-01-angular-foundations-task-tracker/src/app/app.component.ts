import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Task, TaskFilter } from "./task.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // Esta propiedad esta conectada a la entrada mediante ngModel.
  // Quienes empiezan pueden observar como cambiar la entrada actualiza este campo al instante.
  newTaskTitle = "";

  // Una app realista casi siempre tiene estado de vista, no solo datos de dominio.
  selectedFilter: TaskFilter = "all";

  // Los datos semilla hacen util la primera pantalla y ayudan a explicar el renderizado de listas.
  tasks: Task[] = [
    { id: 1, title: "Read the lesson overview", completed: true },
    { id: 2, title: "Add a new task with the form", completed: false },
    { id: 3, title: "Mark one task as completed", completed: false },
  ];

  // Los getters son una forma simple de derivar datos de UI a partir del estado fuente.
  // Lecciones posteriores retomaran el estado derivado usando signals y RxJS.
  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  get openTasks(): number {
    return this.totalTasks - this.completedTasks;
  }

  get visibleTasks(): Task[] {
    switch (this.selectedFilter) {
      case "open":
        return this.tasks.filter((task) => !task.completed);
      case "completed":
        return this.tasks.filter((task) => task.completed);
      default:
        return this.tasks;
    }
  }

  addTask(): void {
    const normalizedTitle = this.newTaskTitle.trim();

    if (!normalizedTitle) {
      return;
    }

    // La tarea nueva se anade de forma inmutable para que Angular vea una transicion de estado limpia.
    this.tasks = [
      {
        id: Date.now(),
        title: normalizedTitle,
        completed: false,
      },
      ...this.tasks,
    ];

    this.newTaskTitle = "";
  }

  toggleTask(taskId: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
