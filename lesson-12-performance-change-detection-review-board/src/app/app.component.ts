import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";

import { ReviewRowComponent } from "./components/review-row.component";
import { ReviewItem, ReviewStatus } from "./review-item.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ReviewRowComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly query = signal("");
  readonly statusFilter = signal<ReviewStatus>("all");
  readonly limit = signal(30);

  // The board starts with many items to make list rendering and filtering relevant.
  readonly items = signal<ReviewItem[]>(this.createItems());

  // computed caches derived results until one dependency changes.
  readonly filteredItems = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();

    return this.items().filter((item) => {
      const matchesStatus =
        this.statusFilter() === "all" || item.status === this.statusFilter();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.owner.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });
  });

  readonly visibleItems = computed(() =>
    this.filteredItems().slice(0, this.limit()),
  );
  readonly totalCount = computed(() => this.items().length);
  readonly approvedCount = computed(
    () => this.items().filter((item) => item.status === "approved").length,
  );
  readonly blockedCount = computed(
    () => this.items().filter((item) => item.status === "blocked").length,
  );

  onQueryChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
    this.limit.set(30);
  }

  onStatusChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.statusFilter.set(target.value as ReviewStatus);
    this.limit.set(30);
  }

  loadMore(): void {
    this.limit.update((currentLimit) => currentLimit + 30);
  }

  approve(itemId: number): void {
    this.items.update((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, status: "approved" } : item,
      ),
    );
  }

  block(itemId: number): void {
    this.items.update((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, status: "blocked" } : item,
      ),
    );
  }

  private createItems(): ReviewItem[] {
    const teams: ReviewItem["team"][] = ["Platform", "Support", "Revenue"];
    const statuses: Exclude<ReviewStatus, "all">[] = [
      "pending",
      "approved",
      "blocked",
    ];

    return Array.from({ length: 180 }, (_, index) => {
      const team = teams[index % teams.length];
      const status = statuses[index % statuses.length];
      const humanIndex = index + 1;

      return {
        id: humanIndex,
        title: `${team} review task ${humanIndex}`,
        team,
        owner: ["Alicia", "Dina", "Marco"][index % 3],
        status,
        score: 60 + (index % 41),
        summary:
          "Review rollout readiness, ownership, and next-step coordination before the change is accepted.",
      };
    });
  }
}
