import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Note, NoteCategory, NoteFilter } from "./note.model";
import { NotesService } from "./services/notes.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly notesService = inject(NotesService);

  // El componente posee el estado de vista de corta duracion.
  // Los datos de vida mas larga y el comportamiento de persistencia permanecen en el servicio.
  titleDraft = "";
  bodyDraft = "";
  categoryDraft: NoteCategory = "Product";
  selectedFilter: NoteFilter = "All";
  includeArchived = false;

  readonly categories: readonly NoteCategory[] = ["Product", "Customer", "Ops"];

  get allNotes(): Note[] {
    return this.notesService.getNotes();
  }

  get visibleNotes(): Note[] {
    return this.allNotes.filter((note) => {
      const matchesCategory =
        this.selectedFilter === "All" || note.category === this.selectedFilter;
      const matchesArchiveState = this.includeArchived || !note.archived;

      return matchesCategory && matchesArchiveState;
    });
  }

  get pinnedCount(): number {
    return this.allNotes.filter((note) => note.pinned).length;
  }

  get archivedCount(): number {
    return this.allNotes.filter((note) => note.archived).length;
  }

  addNote(): void {
    this.notesService.addNote(
      this.titleDraft,
      this.bodyDraft,
      this.categoryDraft,
    );

    this.titleDraft = "";
    this.bodyDraft = "";
    this.categoryDraft = "Product";
  }

  togglePinned(noteId: number): void {
    this.notesService.togglePinned(noteId);
  }

  toggleArchived(noteId: number): void {
    this.notesService.toggleArchived(noteId);
  }

  deleteNote(noteId: number): void {
    this.notesService.deleteNote(noteId);
  }
}
