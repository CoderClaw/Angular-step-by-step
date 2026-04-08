import { Component, input, output } from "@angular/core";

import { CatalogFilter } from "../product.model";

@Component({
  selector: "app-product-filter",
  standalone: true,
  templateUrl: "./product-filter.component.html",
  styleUrl: "./product-filter.component.css",
})
export class ProductFilterComponent {
  readonly categories = input.required<readonly CatalogFilter[]>();
  readonly currentCategory = input.required<CatalogFilter>();
  readonly searchTerm = input<string>("");

  readonly categoryChanged = output<CatalogFilter>();
  readonly searchChanged = output<string>();

  // Los componentes hijos deben mantenerse enfocados en la presentacion y en los eventos de UI.
  // No mutan directamente el estado del catalogo; simplemente emiten intencion.
  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchChanged.emit(target.value);
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.categoryChanged.emit(target.value as CatalogFilter);
  }
}
