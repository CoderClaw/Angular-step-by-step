import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard-page.component.html",
  styleUrl: "./page-shared.css",
})
export class DashboardPageComponent {
  readonly authService = inject(AuthService);

  readonly secureTasks = [
    "Approve vendor access changes",
    "Review escalated renewals",
    "Publish incident update summary",
  ];
}
