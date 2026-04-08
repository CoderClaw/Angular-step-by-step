import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { KnowledgeBaseService } from "../knowledge-base.service";

@Component({
  selector: "app-articles-page",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./articles-page.component.html",
  styleUrl: "./page-shared.css",
})
export class ArticlesPageComponent {
  private readonly knowledgeBaseService = inject(KnowledgeBaseService);

  readonly articles = this.knowledgeBaseService.getArticles();
}
