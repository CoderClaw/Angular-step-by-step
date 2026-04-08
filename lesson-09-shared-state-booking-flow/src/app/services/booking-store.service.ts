import { Injectable, computed, signal } from "@angular/core";

import {
  BookingOffer,
  BookingSelection,
  OfferTeam,
} from "../booking-offer.model";

@Injectable({
  providedIn: "root",
})
export class BookingStoreService {
  readonly teamOptions: readonly OfferTeam[] = [
    "All",
    "Platform",
    "Support",
    "Revenue",
  ];

  readonly query = signal("");
  readonly selectedTeam = signal<OfferTeam>("All");
  readonly budgetFriendlyOnly = signal(false);

  private readonly seatSelections = signal<Record<string, number>>({});

  readonly offers = signal<BookingOffer[]>([
    {
      id: "bootcamp-platform",
      title: "Platform migration bootcamp",
      team: "Platform",
      location: "Berlin",
      seatsLeft: 12,
      pricePerSeat: 420,
      summary:
        "A one-day workshop covering rollout planning, observability, and rollback preparation.",
    },
    {
      id: "support-escalation-lab",
      title: "Support escalation lab",
      team: "Support",
      location: "Remote",
      seatsLeft: 18,
      pricePerSeat: 180,
      summary:
        "Hands-on practice for urgent triage, communication templates, and incident ownership.",
    },
    {
      id: "renewal-risk-briefing",
      title: "Renewal risk briefing",
      team: "Revenue",
      location: "London",
      seatsLeft: 8,
      pricePerSeat: 360,
      summary:
        "A focused session on renewal forecasting, account escalation, and pricing coordination.",
    },
    {
      id: "cross-team-ops-day",
      title: "Cross-team operations day",
      team: "Platform",
      location: "Remote",
      seatsLeft: 25,
      pricePerSeat: 140,
      summary:
        "Shared drills across platform, support, and revenue workflows with lower per-seat cost.",
    },
  ]);

  // This service acts like a small store: source state, mutations, and derived state
  // live in one place so several components can stay synchronized.
  readonly visibleOffers = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();

    return this.offers().filter((offer) => {
      const matchesTeam =
        this.selectedTeam() === "All" || offer.team === this.selectedTeam();
      const matchesBudget =
        !this.budgetFriendlyOnly() || offer.pricePerSeat <= 200;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        offer.title.toLowerCase().includes(normalizedQuery) ||
        offer.summary.toLowerCase().includes(normalizedQuery) ||
        offer.location.toLowerCase().includes(normalizedQuery);

      return matchesTeam && matchesBudget && matchesQuery;
    });
  });

  readonly selections = computed<BookingSelection[]>(() =>
    this.offers()
      .map((offer) => {
        const seats = this.seatSelections()[offer.id] ?? 0;

        if (seats === 0) {
          return null;
        }

        return {
          offer,
          seats,
          subtotal: seats * offer.pricePerSeat,
        } satisfies BookingSelection;
      })
      .filter((selection): selection is BookingSelection => selection !== null),
  );

  readonly selectedSeats = computed(() =>
    this.selections().reduce((total, selection) => total + selection.seats, 0),
  );

  readonly totalCost = computed(() =>
    this.selections().reduce(
      (total, selection) => total + selection.subtotal,
      0,
    ),
  );

  readonly totalOffers = computed(() => this.offers().length);

  setQuery(query: string): void {
    this.query.set(query);
  }

  setSelectedTeam(team: OfferTeam): void {
    this.selectedTeam.set(team);
  }

  setBudgetFriendlyOnly(enabled: boolean): void {
    this.budgetFriendlyOnly.set(enabled);
  }

  incrementSeats(offerId: string): void {
    const offer = this.offers().find((item) => item.id === offerId);

    if (!offer) {
      return;
    }

    this.seatSelections.update((current) => {
      const currentSeats = current[offerId] ?? 0;

      if (currentSeats >= offer.seatsLeft) {
        return current;
      }

      return {
        ...current,
        [offerId]: currentSeats + 1,
      };
    });
  }

  decrementSeats(offerId: string): void {
    this.seatSelections.update((current) => {
      const currentSeats = current[offerId] ?? 0;

      if (currentSeats <= 1) {
        const next = { ...current };
        delete next[offerId];
        return next;
      }

      return {
        ...current,
        [offerId]: currentSeats - 1,
      };
    });
  }

  clearSelections(): void {
    this.seatSelections.set({});
  }

  seatsFor(offerId: string): number {
    return this.seatSelections()[offerId] ?? 0;
  }
}
