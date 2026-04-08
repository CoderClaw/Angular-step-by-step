import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { HubStoreService } from "../../../core/services/hub-store.service";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard-page.component.html",
  styleUrl: "./dashboard-page.component.css",
})
export class DashboardPageComponent {
  readonly store = inject(HubStoreService);
}
