import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";

import { Product } from "../product.model";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css",
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly selected = input<boolean>(false);

  readonly viewRequested = output<number>();
  readonly shortlistToggled = output<number>();

  requestView(): void {
    this.viewRequested.emit(this.product().id);
  }

  toggleShortlist(event: Event): void {
    // El boton vive dentro de una tarjeta clicable, por eso detenemos la propagacion para mantener
    // separadas las dos interacciones y que resulten faciles de explicar.
    event.stopPropagation();
    this.shortlistToggled.emit(this.product().id);
  }
}
