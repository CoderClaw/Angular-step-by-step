export type ProductCategory = "Audio" | "Display" | "Workspace";
export type CatalogFilter = ProductCategory | "All";

// A typed model gives every component the same vocabulary.
// This becomes more important as apps grow and more components share the data.
export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  inventory: number;
  leadTime: string;
  featured: boolean;
  shortlisted: boolean;
}
