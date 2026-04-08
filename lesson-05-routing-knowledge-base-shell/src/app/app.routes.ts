import { Routes } from "@angular/router";

import { ArticleDetailPageComponent } from "./pages/article-detail-page.component";
import { ArticlesPageComponent } from "./pages/articles-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page.component";
import { TeamPageComponent } from "./pages/team-page.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "dashboard",
    component: DashboardPageComponent,
  },
  {
    path: "articles",
    component: ArticlesPageComponent,
  },
  {
    path: "articles/:articleId",
    component: ArticleDetailPageComponent,
  },
  {
    path: "team",
    component: TeamPageComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];
