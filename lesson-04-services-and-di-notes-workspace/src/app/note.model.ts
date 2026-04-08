export type NoteCategory = "Product" | "Customer" | "Ops";
export type NoteFilter = NoteCategory | "All";

export interface Note {
  id: number;
  title: string;
  body: string;
  category: NoteCategory;
  pinned: boolean;
  archived: boolean;
  updatedAt: string;
}
