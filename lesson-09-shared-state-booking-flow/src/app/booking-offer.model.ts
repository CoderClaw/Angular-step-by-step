export type OfferTeam = "All" | "Platform" | "Support" | "Revenue";

export interface BookingOffer {
  id: string;
  title: string;
  team: Exclude<OfferTeam, "All">;
  location: string;
  seatsLeft: number;
  pricePerSeat: number;
  summary: string;
}

export interface BookingSelection {
  offer: BookingOffer;
  seats: number;
  subtotal: number;
}
