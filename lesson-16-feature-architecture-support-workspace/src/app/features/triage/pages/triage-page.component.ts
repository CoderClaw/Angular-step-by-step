import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { SupportWorkspaceService } from "../../../core/services/support-workspace.service";

@Component({
  selector: "app-triage-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./triage-page.component.html",
  styleUrl: "./triage-page.component.css",
})
export class TriagePageComponent {
  private readonly workspaceService = inject(SupportWorkspaceService);

  readonly queue = this.workspaceService.getTriageQueue();
}
