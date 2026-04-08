import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import { selectIncidentSummary } from "../state/incidents.selectors";

@Component({
  selector: "app-incident-summary",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="summary-grid">
      @if (summary$ | async; as summary) {
        <article class="stat-card">
          <span class="label">Visible</span>
          <strong>{{ summary.visible }}</strong>
          <small>of {{ summary.total }} total incidents</small>
        </article>

        <article class="stat-card">
          <span class="label">Unresolved</span>
          <strong>{{ summary.unresolved }}</strong>
          <small>open or blocked after filtering</small>
        </article>

        <article class="stat-card">
          <span class="label">Blocked</span>
          <strong>{{ summary.blocked }}</strong>
          <small>active blockers requiring coordination</small>
        </article>

        <article class="stat-card accent">
          <span class="label">High Priority</span>
          <strong>{{ summary.highPriority }}</strong>
          <small>high-severity incidents still unresolved</small>
        </article>
      }
    </section>
  `,
  styles: `
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
    }

    .stat-card {
      display: grid;
      gap: 8px;
      padding: 18px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      box-shadow: var(--shadow);
    }

    .stat-card.accent {
      background: linear-gradient(
        160deg,
        rgba(217, 242, 247, 0.98),
        rgba(255, 255, 255, 0.98)
      );
    }

    .label {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    strong {
      font-size: 2rem;
      line-height: 1;
    }

    small {
      color: var(--text-muted);
      line-height: 1.45;
    }

    @media (max-width: 960px) {
      .summary-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 560px) {
      .summary-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class IncidentSummaryComponent {
  private readonly store = inject(Store);

  readonly summary$ = this.store.select(selectIncidentSummary);
}
