import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { KnowledgeBaseService } from "../knowledge-base.service";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./dashboard-page.component.html",
  styleUrl: "./page-shared.css",
})
export class DashboardPageComponent {
  private readonly knowledgeBaseService = inject(KnowledgeBaseService);

  readonly articles = this.knowledgeBaseService.getArticles();
}
