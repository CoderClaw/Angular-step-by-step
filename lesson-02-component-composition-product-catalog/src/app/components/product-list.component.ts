import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";

import { Product } from "../product.model";
import { ProductCardComponent } from "./product-card.component";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {
  readonly products = input.required<readonly Product[]>();
  readonly selectedProductId = input<number | null>(null);

  readonly productSelected = output<number>();
  readonly shortlistToggled = output<number>();
}
