import { Routes } from "@angular/router";

import { authGuard } from "./auth.guard";
import { DashboardPageComponent } from "./pages/dashboard-page.component";
import { LoginPageComponent } from "./pages/login-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
  {
    path: "dashboard",
    component: DashboardPageComponent,
    canActivate: [authGuard],
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];
