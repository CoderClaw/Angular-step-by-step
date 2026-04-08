import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import {
  ReleaseCheck,
  ReleaseReadinessSummary,
} from "./models/release-readiness.model";
import { ReleaseReadinessService } from "./services/release-readiness.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly releaseReadinessService = inject(ReleaseReadinessService);

  readonly checks: ReleaseCheck[] = this.releaseReadinessService.getChecks();
  readonly summary: ReleaseReadinessSummary =
    this.releaseReadinessService.buildSummary(this.checks);
}
