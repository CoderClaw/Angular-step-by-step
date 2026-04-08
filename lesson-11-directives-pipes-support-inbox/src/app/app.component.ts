import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { PriorityEmphasisDirective } from "./directives/priority-emphasis.directive";
import { FriendlyStatusPipe } from "./pipes/friendly-status.pipe";
import { RelativeTimePipe } from "./pipes/relative-time.pipe";
import { SupportTicket } from "./support-ticket.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    PriorityEmphasisDirective,
    FriendlyStatusPipe,
    RelativeTimePipe,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly tickets: SupportTicket[] = [
    {
      id: "sup-101",
      customerName: "Northwind Labs",
      subject: "Billing export still missing tax details",
      priority: "high",
      status: "new",
      owner: "Alicia",
      updatedAt: "2026-04-04T09:10:00.000Z",
    },
    {
      id: "sup-102",
      customerName: "Blue Cedar Group",
      subject: "SSO invite loop after new admin setup",
      priority: "high",
      status: "waiting",
      owner: "Dina",
      updatedAt: "2026-04-04T07:50:00.000Z",
    },
    {
      id: "sup-103",
      customerName: "River Peak Health",
      subject: "Search feels slower after region migration",
      priority: "medium",
      status: "waiting",
      owner: "Marco",
      updatedAt: "2026-04-03T18:20:00.000Z",
    },
    {
      id: "sup-104",
      customerName: "Internal support",
      subject: "Bulk macros validated for next rollout",
      priority: "low",
      status: "resolved",
      owner: "Dina",
      updatedAt: "2026-04-02T15:00:00.000Z",
    },
  ];

  get highPriorityCount(): number {
    return this.tickets.filter((ticket) => ticket.priority === "high").length;
  }

  get waitingCount(): number {
    return this.tickets.filter((ticket) => ticket.status === "waiting").length;
  }
}
