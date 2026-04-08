import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, inject } from "@angular/core";

import { BookingStoreService } from "../services/booking-store.service";

@Component({
  selector: "app-booking-offers",
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: "./booking-offers.component.html",
  styleUrl: "./booking-offers.component.css",
})
export class BookingOffersComponent {
  readonly store = inject(BookingStoreService);
}
