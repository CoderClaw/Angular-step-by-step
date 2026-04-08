import { CommonModule } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

import {
  DashboardPreferences,
  DashboardTile,
  TileTeam,
} from "./dashboard-tile.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly storageKey = "angular-tutorial.lesson-08.preferences";

  readonly teamOptions: readonly TileTeam[] = [
    "All",
    "Platform",
    "Support",
    "Revenue",
  ];

  // Signals are a direct way to model local component state.
  // Reading them in the template is synchronous and does not require subscriptions.
  readonly query = signal(this.loadPreferences().query);
  readonly selectedTeam = signal<TileTeam>(this.loadPreferences().team);
  readonly showSavedOnly = signal(this.loadPreferences().showSavedOnly);
  readonly compactMode = signal(this.loadPreferences().compactMode);

  readonly tiles = signal<DashboardTile[]>([
    {
      id: "tile-1",
      title: "Release readiness",
      team: "Platform",
      metric: "92% complete",
      context:
        "Tracks migration readiness and remaining blockers before rollout.",
      saved: true,
    },
    {
      id: "tile-2",
      title: "Escalation backlog",
      team: "Support",
      metric: "14 open cases",
      context:
        "Highlights high-priority customer issues that need direct ownership.",
      saved: false,
    },
    {
      id: "tile-3",
      title: "Revenue risk watchlist",
      team: "Revenue",
      metric: "$48k at risk",
      context: "Surfaces deals or renewals that need coordination this week.",
      saved: true,
    },
    {
      id: "tile-4",
      title: "Search latency trend",
      team: "Platform",
      metric: "184 ms p95",
      context:
        "Monitors how recent backend changes affect search responsiveness.",
      saved: false,
    },
  ]);

  // Computed values derive state from source signals.
  // Angular recalculates them only when one of the dependencies changes.
  readonly visibleTiles = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();

    return this.tiles().filter((tile) => {
      const matchesTeam =
        this.selectedTeam() === "All" || tile.team === this.selectedTeam();
      const matchesSaved = !this.showSavedOnly() || tile.saved;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        tile.title.toLowerCase().includes(normalizedQuery) ||
        tile.context.toLowerCase().includes(normalizedQuery);

      return matchesTeam && matchesSaved && matchesQuery;
    });
  });

  readonly totalTiles = computed(() => this.tiles().length);
  readonly savedCount = computed(
    () => this.tiles().filter((tile) => tile.saved).length,
  );
  readonly visibleCount = computed(() => this.visibleTiles().length);

  // Effects are useful for reacting to signal changes with side effects.
  // Persisting preferences is a good example because it should not live in a computed.
  readonly persistPreferences = effect(() => {
    if (typeof localStorage === "undefined") {
      return;
    }

    const preferences: DashboardPreferences = {
      query: this.query(),
      team: this.selectedTeam(),
      showSavedOnly: this.showSavedOnly(),
      compactMode: this.compactMode(),
    };

    localStorage.setItem(this.storageKey, JSON.stringify(preferences));
  });

  onQueryChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
  }

  onTeamChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTeam.set(target.value as TileTeam);
  }

  onSavedOnlyChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.showSavedOnly.set(target.checked);
  }

  onCompactModeChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.compactMode.set(target.checked);
  }

  toggleSaved(tileId: string): void {
    this.tiles.update((tiles) =>
      tiles.map((tile) =>
        tile.id === tileId ? { ...tile, saved: !tile.saved } : tile,
      ),
    );
  }

  resetPreferences(): void {
    this.query.set("");
    this.selectedTeam.set("All");
    this.showSavedOnly.set(false);
    this.compactMode.set(false);
  }

  private loadPreferences(): DashboardPreferences {
    if (typeof localStorage === "undefined") {
      return this.defaultPreferences();
    }

    const storedValue = localStorage.getItem(this.storageKey);

    if (!storedValue) {
      return this.defaultPreferences();
    }

    try {
      return {
        ...this.defaultPreferences(),
        ...(JSON.parse(storedValue) as Partial<DashboardPreferences>),
      };
    } catch {
      return this.defaultPreferences();
    }
  }

  private defaultPreferences(): DashboardPreferences {
    return {
      query: "",
      team: "All",
      showSavedOnly: false,
      compactMode: false,
    };
  }
}
