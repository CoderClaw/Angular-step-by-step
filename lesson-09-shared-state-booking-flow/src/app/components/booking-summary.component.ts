import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, inject } from "@angular/core";

import { BookingStoreService } from "../services/booking-store.service";

@Component({
  selector: "app-booking-summary",
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: "./booking-summary.component.html",
  styleUrl: "./booking-summary.component.css",
})
export class BookingSummaryComponent {
  readonly store = inject(BookingStoreService);
}
