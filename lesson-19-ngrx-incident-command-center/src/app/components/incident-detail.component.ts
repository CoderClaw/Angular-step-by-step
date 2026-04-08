import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import { IncidentsActions } from "../state/incidents.actions";
import { selectSelectedIncident } from "../state/incidents.selectors";

@Component({
  selector: "app-incident-detail",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <aside class="panel">
      <p class="eyebrow">Selected entity</p>
      <h2>Incident detail</h2>

      @if (selectedIncident$ | async; as incident) {
        <article class="detail-card">
          <div class="badge-row">
            <span class="badge">{{ incident.priority }} priority</span>
            <span class="badge status">{{ incident.status }}</span>
          </div>

          <h3>{{ incident.title }}</h3>

          <dl>
            <div>
              <dt>Customer</dt>
              <dd>{{ incident.customer }}</dd>
            </div>
            <div>
              <dt>Owner</dt>
              <dd>{{ incident.owner }}</dd>
            </div>
            <div>
              <dt>Last update</dt>
              <dd>{{ incident.updatedMinutesAgo }} minutes ago</dd>
            </div>
          </dl>

          <p class="summary">{{ incident.summary }}</p>

          <button
            type="button"
            class="primary-button"
            (click)="toggleResolved(incident.id)"
          >
            {{
              incident.status === "Resolved"
                ? "Reopen incident"
                : "Resolve incident"
            }}
          </button>
        </article>
      } @else {
        <div class="empty-state">
          Load the feature, then select an incident from the queue to inspect
          its global state.
        </div>
      }
    </aside>
  `,
  styles: `
    .panel {
      padding: 22px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 22px;
      box-shadow: var(--shadow);
      position: sticky;
      top: 18px;
    }

    .eyebrow {
      margin: 0 0 8px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent-strong);
    }

    h2,
    h3,
    p {
      margin-top: 0;
    }

    .detail-card {
      display: grid;
      gap: 18px;
      margin-top: 16px;
    }

    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .badge {
      padding: 7px 11px;
      border-radius: 999px;
      background: var(--warning-soft);
      color: #8a4b07;
      font-size: 0.78rem;
      font-weight: 700;
    }

    .badge.status {
      background: var(--accent-soft);
      color: var(--accent-strong);
    }

    dl {
      display: grid;
      gap: 12px;
      margin: 0;
    }

    dt {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    dd {
      margin: 6px 0 0;
      font-weight: 600;
    }

    .summary {
      color: var(--text-muted);
      line-height: 1.6;
    }

    .primary-button {
      justify-self: start;
      padding: 11px 16px;
      border: none;
      border-radius: 14px;
      background: var(--accent);
      color: white;
      font-weight: 700;
      cursor: pointer;
    }

    .empty-state {
      margin-top: 16px;
      padding: 16px;
      border-radius: 16px;
      background: var(--accent-soft);
      color: var(--accent-strong);
      line-height: 1.55;
    }

    @media (max-width: 960px) {
      .panel {
        position: static;
      }
    }
  `,
})
export class IncidentDetailComponent {
  private readonly store = inject(Store);

  readonly selectedIncident$ = this.store.select(selectSelectedIncident);

  toggleResolved(incidentId: string): void {
    this.store.dispatch(IncidentsActions.toggleResolved({ incidentId }));
  }
}
