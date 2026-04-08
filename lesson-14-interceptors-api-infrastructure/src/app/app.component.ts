import { CommonModule, DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";

import { OperationsOverview } from "./operations-overview.model";
import { OperationsApiService } from "./services/operations-api.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly operationsApiService = inject(OperationsApiService);

  overview: OperationsOverview | null = null;
  errorMessage = "";
  isLoading = false;

  constructor() {
    this.loadOverview();
  }

  loadOverview(simulateFailure = false): void {
    this.isLoading = true;
    this.errorMessage = "";

    this.operationsApiService.getOverview(simulateFailure).subscribe({
      next: (overview) => {
        this.overview = overview;
        this.isLoading = false;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
        this.overview = null;
        this.isLoading = false;
      },
    });
  }
}
