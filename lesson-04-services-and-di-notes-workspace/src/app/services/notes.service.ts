import { Injectable } from "@angular/core";

import { Note, NoteCategory } from "../note.model";

// @Injectable le dice a Angular que esta clase participa en la inyeccion de dependencias.
// Angular puede entonces crear el servicio por nosotros y suministrarlo donde se inyecte la clase.
@Injectable({
  // providedIn: "root" registra una instancia unica para toda la aplicacion en el inyector raiz de Angular.
  // Eso significa que los componentes pueden inyectar NotesService sin declararlo en su propio arreglo de providers,
  // y que todo consumidor comparte el mismo estado de notas durante la vida de la app.
  providedIn: "root",
})
export class NotesService {
  private readonly storageKey = "angular-tutorial.lesson-04.notes";

  private notes: Note[] = this.loadNotes();

  // El servicio posee los datos de notas y los detalles de persistencia.
  // Los componentes se mantienen mas pequenos porque ya no necesitan saber como funciona el almacenamiento.
  getNotes(): Note[] {
    return [...this.notes].sort((leftNote, rightNote) => {
      if (leftNote.pinned !== rightNote.pinned) {
        return leftNote.pinned ? -1 : 1;
      }

      return rightNote.updatedAt.localeCompare(leftNote.updatedAt);
    });
  }

  addNote(title: string, body: string, category: NoteCategory): void {
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();

    if (!trimmedTitle || !trimmedBody) {
      return;
    }

    const nextNote: Note = {
      id: Date.now(),
      title: trimmedTitle,
      body: trimmedBody,
      category,
      pinned: false,
      archived: false,
      updatedAt: new Date().toISOString(),
    };

    this.notes = [nextNote, ...this.notes];
    this.saveNotes();
  }

  togglePinned(noteId: number): void {
    this.updateNote(noteId, (note) => ({
      ...note,
      pinned: !note.pinned,
      updatedAt: new Date().toISOString(),
    }));
  }

  toggleArchived(noteId: number): void {
    this.updateNote(noteId, (note) => ({
      ...note,
      archived: !note.archived,
      updatedAt: new Date().toISOString(),
    }));
  }

  deleteNote(noteId: number): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    this.saveNotes();
  }

  private updateNote(noteId: number, updater: (note: Note) => Note): void {
    this.notes = this.notes.map((note) =>
      note.id === noteId ? updater(note) : note,
    );
    this.saveNotes();
  }

  private loadNotes(): Note[] {
    if (typeof localStorage === "undefined") {
      return this.createStarterNotes();
    }

    const storedValue = localStorage.getItem(this.storageKey);

    if (!storedValue) {
      const starterNotes = this.createStarterNotes();
      localStorage.setItem(this.storageKey, JSON.stringify(starterNotes));
      return starterNotes;
    }

    try {
      const parsed = JSON.parse(storedValue) as Note[];

      if (!Array.isArray(parsed)) {
        return this.createStarterNotes();
      }

      return parsed;
    } catch {
      return this.createStarterNotes();
    }
  }

  private saveNotes(): void {
    if (typeof localStorage === "undefined") {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
  }

  private createStarterNotes(): Note[] {
    return [
      this.buildStarterNote(
        401,
        "Customer onboarding checklist",
        "Confirm domain setup, first admin training, and success metrics before launch.",
        "Customer",
        true,
        false,
        "2026-04-04T08:30:00.000Z",
      ),
      this.buildStarterNote(
        402,
        "Q2 product feedback themes",
        "Users want better search, shorter setup time, and clearer ownership in dashboards.",
        "Product",
        false,
        false,
        "2026-04-03T14:10:00.000Z",
      ),
      this.buildStarterNote(
        403,
        "Ops handoff for release day",
        "Track rollout owner, support escalation path, and rollback checklist in one place.",
        "Ops",
        false,
        false,
        "2026-04-02T09:45:00.000Z",
      ),
    ];
  }

  private buildStarterNote(
    id: number,
    title: string,
    body: string,
    category: NoteCategory,
    pinned: boolean,
    archived: boolean,
    updatedAt: string,
  ): Note {
    return {
      id,
      title,
      body,
      category,
      pinned,
      archived,
      updatedAt,
    };
  }
}
