import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { Product } from "../product.model";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.css",
})
export class ProductDetailComponent {
  readonly product = input<Product | null>(null);
}
