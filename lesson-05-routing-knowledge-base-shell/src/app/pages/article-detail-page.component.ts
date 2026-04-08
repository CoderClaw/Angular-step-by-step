import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { KnowledgeArticle } from "../knowledge-article.model";
import { KnowledgeBaseService } from "../knowledge-base.service";

@Component({
  selector: "app-article-detail-page",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./article-detail-page.component.html",
  styleUrl: "./page-shared.css",
})
export class ArticleDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly knowledgeBaseService = inject(KnowledgeBaseService);

  readonly article: KnowledgeArticle | undefined =
    this.knowledgeBaseService.getArticleById(
      this.route.snapshot.paramMap.get("articleId") ?? "",
    );
}
