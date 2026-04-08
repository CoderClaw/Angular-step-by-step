import { Routes } from "@angular/router";

import { WorkspaceShellComponent } from "./layout/workspace-shell.component";

export const routes: Routes = [
  {
    path: "",
    component: WorkspaceShellComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "triage",
      },
      {
        path: "triage",
        loadComponent: () =>
          import("./features/triage/pages/triage-page.component").then(
            (module) => module.TriagePageComponent,
          ),
      },
      {
        path: "handoff",
        loadComponent: () =>
          import("./features/handoff/pages/handoff-page.component").then(
            (module) => module.HandoffPageComponent,
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];
