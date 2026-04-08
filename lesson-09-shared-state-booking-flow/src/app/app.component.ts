import { Component } from "@angular/core";

import { BookingFiltersComponent } from "./components/booking-filters.component";
import { BookingOffersComponent } from "./components/booking-offers.component";
import { BookingSummaryComponent } from "./components/booking-summary.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    BookingFiltersComponent,
    BookingOffersComponent,
    BookingSummaryComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
