import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import { IncidentsActions } from "../state/incidents.actions";
import {
  selectErrorMessage,
  selectFilteredIncidents,
  selectIsLoading,
  selectSelectedIncidentId,
} from "../state/incidents.selectors";

@Component({
  selector: "app-incident-list",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="panel">
      <header class="panel-header">
        <div>
          <p class="eyebrow">Selector output</p>
          <h2>Incident queue</h2>
        </div>
        <p class="panel-copy">
          This list is filtered entirely by selectors. The component only reads
          store state and dispatches actions.
        </p>
      </header>

      @if (isLoading$ | async) {
        <div class="state-card loading">
          Loading incidents through an NgRx effect...
        </div>
      } @else if (errorMessage$ | async; as errorMessage) {
        <div class="state-card error">{{ errorMessage }}</div>
      } @else if (incidents$ | async; as incidents) {
        @if (incidents.length === 0) {
          <div class="state-card empty">
            No incidents match the current filters.
          </div>
        } @else {
          <div class="list-grid">
            @for (incident of incidents; track incident.id) {
              <article
                class="incident-card"
                [class.selected]="(selectedIncidentId$ | async) === incident.id"
              >
                <button
                  type="button"
                  class="card-hit-area"
                  (click)="selectIncident(incident.id)"
                >
                  <div class="card-topline">
                    <span
                      class="priority"
                      [class.high]="incident.priority === 'High'"
                    >
                      {{ incident.priority }}
                    </span>
                    <span
                      class="status"
                      [class.resolved]="incident.status === 'Resolved'"
                    >
                      {{ incident.status }}
                    </span>
                  </div>

                  <h3>{{ incident.title }}</h3>

                  <p class="meta">
                    {{ incident.customer }} · {{ incident.owner }} · updated
                    {{ incident.updatedMinutesAgo }}m ago
                  </p>

                  <p class="summary">{{ incident.summary }}</p>
                </button>

                <button
                  type="button"
                  class="toggle-button"
                  (click)="toggleResolved(incident.id)"
                >
                  {{
                    incident.status === "Resolved" ? "Reopen" : "Mark resolved"
                  }}
                </button>
              </article>
            }
          </div>
        }
      }
    </section>
  `,
  styles: `
    .panel {
      padding: 22px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 22px;
      box-shadow: var(--shadow);
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: end;
      margin-bottom: 18px;
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
    h3 {
      margin: 0;
    }

    .panel-copy {
      max-width: 320px;
      margin: 0;
      color: var(--text-muted);
      line-height: 1.5;
      text-align: right;
    }

    .list-grid {
      display: grid;
      gap: 14px;
    }

    .incident-card {
      display: grid;
      gap: 12px;
      padding: 16px;
      border-radius: 18px;
      border: 1px solid var(--border);
      background: var(--surface-strong);
      transition:
        transform 120ms ease,
        border-color 120ms ease;
    }

    .incident-card.selected {
      border-color: var(--accent);
      transform: translateY(-1px);
    }

    .card-hit-area {
      border: none;
      background: transparent;
      padding: 0;
      text-align: left;
      cursor: pointer;
    }

    .card-topline {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
    }

    .priority,
    .status {
      display: inline-flex;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
    }

    .priority {
      background: var(--warning-soft);
      color: #8a4b07;
    }

    .priority.high {
      background: var(--danger-soft);
      color: #a2342c;
    }

    .status {
      background: var(--accent-soft);
      color: var(--accent-strong);
    }

    .status.resolved {
      background: var(--success-soft);
      color: #24633a;
    }

    .meta,
    .summary {
      color: var(--text-muted);
    }

    .meta {
      margin: 10px 0 0;
      font-size: 0.92rem;
    }

    .summary {
      margin: 10px 0 0;
      line-height: 1.55;
    }

    .toggle-button {
      justify-self: start;
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text-main);
      font-weight: 700;
      cursor: pointer;
    }

    .state-card {
      padding: 18px;
      border-radius: 16px;
      background: var(--surface-strong);
      border: 1px dashed var(--border);
      color: var(--text-muted);
    }

    .state-card.loading {
      background: var(--accent-soft);
      color: var(--accent-strong);
    }

    .state-card.error {
      background: var(--danger-soft);
      color: #912c24;
      border-style: solid;
    }

    @media (max-width: 760px) {
      .panel-header {
        flex-direction: column;
        align-items: start;
      }

      .panel-copy {
        text-align: left;
      }
    }
  `,
})
export class IncidentListComponent {
  private readonly store = inject(Store);

  readonly incidents$ = this.store.select(selectFilteredIncidents);
  readonly selectedIncidentId$ = this.store.select(selectSelectedIncidentId);
  readonly isLoading$ = this.store.select(selectIsLoading);
  readonly errorMessage$ = this.store.select(selectErrorMessage);

  selectIncident(incidentId: string): void {
    this.store.dispatch(IncidentsActions.selectIncident({ incidentId }));
  }

  toggleResolved(incidentId: string): void {
    this.store.dispatch(IncidentsActions.toggleResolved({ incidentId }));
  }
}
