import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { HubStoreService } from "../../../core/services/hub-store.service";

@Component({
  selector: "app-preferences-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./preferences-page.component.html",
  styleUrl: "./preferences-page.component.css",
})
export class PreferencesPageComponent {
  readonly store = inject(HubStoreService);
}
