import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import { IncidentPriorityFilter } from "../models/incident.model";
import { IncidentsActions } from "../state/incidents.actions";
import {
  selectPriorityFilter,
  selectSearchTerm,
} from "../state/incidents.selectors";

@Component({
  selector: "app-incident-toolbar",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="toolbar">
      <label class="field field-search">
        <span>Search incidents</span>
        <input
          type="search"
          [value]="(searchTerm$ | async) ?? ''"
          placeholder="Filter by title, customer, or owner"
          (input)="updateSearchTerm($event)"
        />
      </label>

      <label class="field">
        <span>Priority</span>
        <select
          [value]="(priorityFilter$ | async) ?? 'All'"
          (change)="updatePriorityFilter($event)"
        >
          @for (priority of priorities; track priority) {
            <option [value]="priority">{{ priority }}</option>
          }
        </select>
      </label>

      <button type="button" class="reload-button" (click)="reload()">
        Reload from effect
      </button>
    </section>
  `,
  styles: `
    .toolbar {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(170px, 220px) auto;
      gap: 14px;
      align-items: end;
      padding: 18px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      box-shadow: var(--shadow);
    }

    .field {
      display: grid;
      gap: 8px;
      font-size: 0.92rem;
      color: var(--text-muted);
    }

    .field span {
      font-weight: 700;
      color: var(--text-main);
    }

    input,
    select {
      width: 100%;
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--surface-strong);
      color: var(--text-main);
    }

    .reload-button {
      height: 46px;
      padding: 0 18px;
      border: none;
      border-radius: 14px;
      background: var(--accent);
      color: white;
      font-weight: 700;
      cursor: pointer;
    }

    .reload-button:hover {
      background: var(--accent-strong);
    }

    @media (max-width: 860px) {
      .toolbar {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class IncidentToolbarComponent {
  private readonly store = inject(Store);

  readonly searchTerm$ = this.store.select(selectSearchTerm);
  readonly priorityFilter$ = this.store.select(selectPriorityFilter);
  readonly priorities: IncidentPriorityFilter[] = [
    "All",
    "High",
    "Medium",
    "Low",
  ];

  reload(): void {
    this.store.dispatch(IncidentsActions.loadIncidents());
  }

  updateSearchTerm(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.store.dispatch(IncidentsActions.setSearchTerm({ searchTerm }));
  }

  updatePriorityFilter(event: Event): void {
    const priorityFilter = (event.target as HTMLSelectElement)
      .value as IncidentPriorityFilter;

    this.store.dispatch(IncidentsActions.setPriorityFilter({ priorityFilter }));
  }
}
