import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { ProductDetailComponent } from "./components/product-detail.component";
import { ProductFilterComponent } from "./components/product-filter.component";
import { ProductListComponent } from "./components/product-list.component";
import { CatalogFilter, Product, ProductCategory } from "./product.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ProductFilterComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // El componente padre posee la fuente de verdad.
  // Los componentes hijos reciben datos mediante inputs y devuelven acciones del usuario
  // mediante outputs tipados.
  searchTerm = "";
  selectedCategory: CatalogFilter = "All";
  selectedProductId: number | null = 101;

  products: Product[] = [
    {
      id: 101,
      name: "Clarity Studio Headphones",
      category: "Audio",
      price: 199,
      description:
        "Closed-back headphones used by support and media teams for focused work.",
      inventory: 14,
      leadTime: "Ships in 2 business days",
      featured: true,
      shortlisted: true,
    },
    {
      id: 102,
      name: "FocusView 27 Monitor",
      category: "Display",
      price: 329,
      description:
        "A 27-inch display chosen for engineering desks and design review sessions.",
      inventory: 6,
      leadTime: "Ships next week",
      featured: true,
      shortlisted: false,
    },
    {
      id: 103,
      name: "Lift Desk Mini",
      category: "Workspace",
      price: 449,
      description:
        "Compact sit-stand desk for smaller home-office or satellite-office layouts.",
      inventory: 4,
      leadTime: "Built to order in 10 days",
      featured: false,
      shortlisted: false,
    },
    {
      id: 104,
      name: "Conference Beam Speaker",
      category: "Audio",
      price: 149,
      description:
        "Portable speaker for small meeting rooms and hybrid standups.",
      inventory: 21,
      leadTime: "Ships tomorrow",
      featured: false,
      shortlisted: false,
    },
  ];

  get categories(): CatalogFilter[] {
    const uniqueCategories: ProductCategory[] = Array.from(
      new Set(this.products.map((product) => product.category)),
    );

    return ["All", ...uniqueCategories];
  }

  get visibleProducts(): Product[] {
    const normalizedSearch = this.searchTerm.trim().toLowerCase();

    return this.products.filter((product) => {
      const matchesCategory =
        this.selectedCategory === "All" ||
        product.category === this.selectedCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }

  get shortlistedCount(): number {
    return this.products.filter((product) => product.shortlisted).length;
  }

  get selectedProduct(): Product | null {
    return (
      this.visibleProducts.find(
        (product) => product.id === this.selectedProductId,
      ) ?? null
    );
  }

  onSearchChanged(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.syncSelection();
  }

  onCategoryChanged(category: CatalogFilter): void {
    this.selectedCategory = category;
    this.syncSelection();
  }

  onProductSelected(productId: number): void {
    this.selectedProductId = productId;
  }

  onShortlistToggled(productId: number): void {
    this.products = this.products.map((product) =>
      product.id === productId
        ? { ...product, shortlisted: !product.shortlisted }
        : product,
    );
  }

  private syncSelection(): void {
    const stillVisible = this.visibleProducts.some(
      (product) => product.id === this.selectedProductId,
    );

    if (stillVisible) {
      return;
    }

    this.selectedProductId = this.visibleProducts[0]?.id ?? null;
  }
}
