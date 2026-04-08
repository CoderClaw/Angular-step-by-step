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
  // This property is connected to the input with ngModel.
  // Beginners can inspect how changing the input updates this field immediately.
  newTaskTitle = "";

  // A realistic app almost always has view state, not only domain data.
  selectedFilter: TaskFilter = "all";

  // Seed data makes the first screen useful and helps explain list rendering.
  tasks: Task[] = [
    { id: 1, title: "Read the lesson overview", completed: true },
    { id: 2, title: "Add a new task with the form", completed: false },
    { id: 3, title: "Mark one task as completed", completed: false },
  ];

  // Getters are a simple way to derive UI data from the source state.
  // Later lessons will revisit derived state using signals and RxJS.
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

    // The new task is added immutably so Angular sees a clean state transition.
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
