import { CommonModule } from "@angular/common";
import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";
import { Component, computed, signal } from "@angular/core";

import {
  BoardColumn,
  BoardColumnId,
  BoardTask,
} from "./models/operations-board.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly columns: BoardColumn[] = [
    {
      id: "queued",
      title: "Queued",
      description: "Work waiting for a specialist to pick it up.",
    },
    {
      id: "active",
      title: "Active",
      description: "Work currently being coordinated across teams.",
    },
    {
      id: "ready",
      title: "Ready to launch",
      description: "Work that can move into the next release wave.",
    },
  ];

  readonly tasks = signal<BoardTask[]>([
    {
      id: "task-1",
      title: "Finalize SSO incident note",
      owner: "Nadia",
      summary: "Document the recovery steps for the enterprise launch review.",
      detail:
        "Support and identity engineering need a shared note before the next customer briefing.",
      status: "queued",
    },
    {
      id: "task-2",
      title: "Validate billing rollback checklist",
      owner: "Ibrahim",
      summary:
        "Confirm finance and ops can reverse the new plan mapping safely.",
      detail:
        "This item blocks the final approval meeting if the rollback path is incomplete.",
      status: "active",
    },
    {
      id: "task-3",
      title: "Publish launch-ready support macros",
      owner: "Elena",
      summary:
        "Support needs consistent messaging for the premium onboarding rollout.",
      detail:
        "The macros are approved and only need a final packaging pass before release.",
      status: "ready",
    },
    {
      id: "task-4",
      title: "Review localization screenshots",
      owner: "Mateo",
      summary:
        "Double-check the final reporting labels for the regional pilot.",
      detail:
        "Product ops wants screenshots attached to the final sign-off note.",
      status: "queued",
    },
  ]);

  readonly selectedTaskId = signal<string>(this.tasks()[0]?.id ?? "");
  readonly copyMessage = signal("");

  readonly selectedTask = computed(
    () =>
      this.tasks().find((task) => task.id === this.selectedTaskId()) ?? null,
  );

  tasksFor(columnId: BoardColumnId): BoardTask[] {
    return this.tasks().filter((task) => task.status === columnId);
  }

  selectTask(taskId: string): void {
    this.selectedTaskId.set(taskId);
  }

  drop(event: CdkDragDrop<BoardTask[]>, targetColumnId: BoardColumnId): void {
    const task = event.item.data;
    const sourceColumnId = task.status;
    const sourceItems = this.tasksFor(sourceColumnId);
    const targetItems = this.tasksFor(targetColumnId);

    const sourceIndex = sourceItems.findIndex((item) => item.id === task.id);
    const targetIndex = event.currentIndex;

    // El evento de drag-drop entrega posiciones dentro de arreglos de columnas filtradas.
    // Mapeamos esas posiciones de vuelta a un unico arreglo inmutable de tareas para que Angular pueda refrescar de forma predecible.
    const updatedSource = sourceItems.filter((item) => item.id !== task.id);
    const movedTask: BoardTask = { ...task, status: targetColumnId };
    const updatedTarget = [...targetItems];
    updatedTarget.splice(targetIndex, 0, movedTask);

    const nextTasks: BoardTask[] = [];

    for (const column of this.columns) {
      if (column.id === sourceColumnId && column.id === targetColumnId) {
        const reordered = [...sourceItems];
        reordered.splice(sourceIndex, 1);
        reordered.splice(targetIndex, 0, movedTask);
        nextTasks.push(...reordered);
      } else if (column.id === sourceColumnId) {
        nextTasks.push(...updatedSource);
      } else if (column.id === targetColumnId) {
        nextTasks.push(...updatedTarget);
      } else {
        nextTasks.push(...this.tasksFor(column.id));
      }
    }

    this.tasks.set(nextTasks);
    this.selectedTaskId.set(movedTask.id);
    this.copyMessage.set("");
  }

  async copySelectedTaskSummary(): Promise<void> {
    const task = this.selectedTask();

    if (!task) {
      return;
    }

    const summary = `${task.title} | ${task.owner} | ${task.summary}`;

    try {
      await navigator.clipboard.writeText(summary);
      this.copyMessage.set("Copied summary to clipboard.");
    } catch {
      this.copyMessage.set(
        "Clipboard access was unavailable in this browser session.",
      );
    }
  }
}
