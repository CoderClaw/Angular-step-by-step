import { Routes } from "@angular/router";

import { HubShellComponent } from "./layout/hub-shell.component";

export const routes: Routes = [
  {
    path: "",
    component: HubShellComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
      },
      {
        path: "dashboard",
        loadComponent: () =>
          import("./features/dashboard/pages/dashboard-page.component").then(
            (module) => module.DashboardPageComponent,
          ),
      },
      {
        path: "queue",
        loadComponent: () =>
          import("./features/queue/pages/queue-page.component").then(
            (module) => module.QueuePageComponent,
          ),
      },
      {
        path: "preferences",
        loadComponent: () =>
          import("./features/preferences/pages/preferences-page.component").then(
            (module) => module.PreferencesPageComponent,
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];
