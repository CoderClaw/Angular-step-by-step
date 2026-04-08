import { Component } from "@angular/core";

import { IncidentDetailComponent } from "./components/incident-detail.component";
import { IncidentListComponent } from "./components/incident-list.component";
import { IncidentSummaryComponent } from "./components/incident-summary.component";
import { IncidentToolbarComponent } from "./components/incident-toolbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    IncidentToolbarComponent,
    IncidentSummaryComponent,
    IncidentListComponent,
    IncidentDetailComponent,
  ],
  template: `
    <main class="page-shell">
      <section class="hero-panel">
        <p class="eyebrow">Lesson 19</p>
        <h1>NgRx incident command center</h1>
        <p class="hero-copy">
          This lesson turns global state into a formal flow. Components dispatch
          actions, reducers update state, selectors shape read models, and
          effects handle async loading.
        </p>

        <div class="hero-flow">
          <span>Action</span>
          <span>Reducer</span>
          <span>Selector</span>
          <span>Effect</span>
        </div>
      </section>

      <app-incident-toolbar />
      <app-incident-summary />

      <section class="content-grid">
        <app-incident-list />
        <app-incident-detail />
      </section>
    </main>
  `,
  styles: `
    .page-shell {
      max-width: 1180px;
      margin: 0 auto;
      padding: 32px 20px 48px;
      display: grid;
      gap: 20px;
    }

    .hero-panel {
      padding: 28px;
      border-radius: 24px;
      background: linear-gradient(
        140deg,
        rgba(255, 255, 255, 0.98),
        rgba(217, 242, 247, 0.88)
      );
      border: 1px solid rgba(216, 226, 236, 0.9);
      box-shadow: var(--shadow);
    }

    .eyebrow {
      margin: 0 0 8px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent-strong);
    }

    h1 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.04;
    }

    .hero-copy {
      max-width: 760px;
      margin: 14px 0 0;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .hero-flow {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
    }

    .hero-flow span {
      padding: 10px 14px;
      border-radius: 999px;
      background: var(--surface-strong);
      border: 1px solid var(--border);
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--accent-strong);
    }

    .content-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.95fr);
      gap: 20px;
      align-items: start;
    }

    @media (max-width: 960px) {
      .content-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class AppComponent {}
