export type ProductCategory = "Audio" | "Display" | "Workspace";
export type CatalogFilter = ProductCategory | "All";

// Un modelo tipado le da a cada componente el mismo vocabulario.
// Esto se vuelve mas importante a medida que la app crece y mas componentes comparten los datos.
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
