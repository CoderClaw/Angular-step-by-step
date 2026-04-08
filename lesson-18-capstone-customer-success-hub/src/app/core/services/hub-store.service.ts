import { Injectable, computed, effect, inject, signal } from "@angular/core";

import {
  HubMetric,
  HubPreferences,
  HubSnapshot,
  Milestone,
  WorkItem,
  WorkItemPriority,
} from "../models/customer-success-hub.model";
import { HubApiService } from "./hub-api.service";

const preferencesKey = "lesson-18-capstone-preferences";

function readPreferences(): HubPreferences {
  if (typeof localStorage === "undefined") {
    return { compactMode: false, highlightHighPriority: true };
  }

  const rawValue = localStorage.getItem(preferencesKey);

  if (!rawValue) {
    return { compactMode: false, highlightHighPriority: true };
  }

  try {
    return JSON.parse(rawValue) as HubPreferences;
  } catch {
    return { compactMode: false, highlightHighPriority: true };
  }
}

@Injectable({
  providedIn: "root",
})
export class HubStoreService {
  private readonly api = inject(HubApiService);

  readonly isLoading = signal(false);
  readonly errorMessage = signal("");
  readonly snapshot = signal<HubSnapshot | null>(null);

  readonly query = signal("");
  readonly priority = signal<"All" | WorkItemPriority>("All");
  readonly includeResolved = signal(false);
  readonly preferences = signal<HubPreferences>(readPreferences());

  readonly metrics = computed<HubMetric[]>(
    () => this.snapshot()?.metrics ?? [],
  );
  readonly milestones = computed<Milestone[]>(
    () => this.snapshot()?.milestones ?? [],
  );
  readonly allWorkItems = computed<WorkItem[]>(
    () => this.snapshot()?.workItems ?? [],
  );

  readonly filteredWorkItems = computed<WorkItem[]>(() => {
    const normalizedQuery = this.query().trim().toLowerCase();

    return this.allWorkItems().filter((item) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.account.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery) ||
        item.owner.toLowerCase().includes(normalizedQuery);

      const matchesPriority =
        this.priority() === "All" || item.priority === this.priority();
      const matchesResolution =
        this.includeResolved() || item.status !== "Resolved";

      return matchesQuery && matchesPriority && matchesResolution;
    });
  });

  readonly urgentCount = computed(
    () =>
      this.allWorkItems().filter(
        (item) => item.priority === "High" && item.status !== "Resolved",
      ).length,
  );

  constructor() {
    effect(() => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          preferencesKey,
          JSON.stringify(this.preferences()),
        );
      }
    });
  }

  // The capstone uses a small signals-based store to keep pages in sync.
  // Feature pages read computed state and update filters without duplicating logic.
  loadSnapshot(): void {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set("");

    this.api.getSnapshot().subscribe({
      next: (snapshot) => {
        this.snapshot.set(snapshot);
        this.isLoading.set(false);
      },
      error: (error: Error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      },
    });
  }

  updateQuery(value: string): void {
    this.query.set(value);
  }

  updatePriority(value: "All" | WorkItemPriority): void {
    this.priority.set(value);
  }

  updateIncludeResolved(value: boolean): void {
    this.includeResolved.set(value);
  }

  updatePreferences(patch: Partial<HubPreferences>): void {
    this.preferences.update((current) => ({ ...current, ...patch }));
  }
}
