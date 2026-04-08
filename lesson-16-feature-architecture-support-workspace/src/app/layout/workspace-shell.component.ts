import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { SupportWorkspaceService } from "../core/services/support-workspace.service";
import { MetricCardComponent } from "../shared/ui/metric-card/metric-card.component";

@Component({
  selector: "app-workspace-shell",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MetricCardComponent,
  ],
  templateUrl: "./workspace-shell.component.html",
  styleUrl: "./workspace-shell.component.css",
})
export class WorkspaceShellComponent {
  private readonly workspaceService = inject(SupportWorkspaceService);

  readonly metrics = this.workspaceService.getMetrics();
}
