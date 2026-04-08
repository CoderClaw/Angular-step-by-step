import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { HubStoreService } from "../core/services/hub-store.service";
import { StatCardComponent } from "../shared/ui/stat-card/stat-card.component";

@Component({
  selector: "app-hub-shell",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    StatCardComponent,
  ],
  templateUrl: "./hub-shell.component.html",
  styleUrl: "./hub-shell.component.css",
})
export class HubShellComponent {
  readonly store = inject(HubStoreService);

  constructor() {
    if (!this.store.snapshot()) {
      this.store.loadSnapshot();
    }
  }
}
