import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { SupportWorkspaceService } from "../../../core/services/support-workspace.service";

@Component({
  selector: "app-handoff-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./handoff-page.component.html",
  styleUrl: "./handoff-page.component.css",
})
export class HandoffPageComponent {
  private readonly workspaceService = inject(SupportWorkspaceService);

  readonly queue = this.workspaceService.getHandoffQueue();
}
