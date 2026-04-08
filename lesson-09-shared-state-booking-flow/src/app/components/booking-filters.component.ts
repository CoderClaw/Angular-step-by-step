import { Component, inject } from "@angular/core";

import { OfferTeam } from "../booking-offer.model";
import { BookingStoreService } from "../services/booking-store.service";

@Component({
  selector: "app-booking-filters",
  standalone: true,
  templateUrl: "./booking-filters.component.html",
  styleUrl: "./booking-filters.component.css",
})
export class BookingFiltersComponent {
  readonly store = inject(BookingStoreService);

  onQueryChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.store.setQuery(target.value);
  }

  onTeamChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.store.setSelectedTeam(target.value as OfferTeam);
  }

  onBudgetChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.store.setBudgetFriendlyOnly(target.checked);
  }
}
