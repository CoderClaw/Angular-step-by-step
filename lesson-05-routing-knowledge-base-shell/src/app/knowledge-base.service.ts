import { Injectable } from "@angular/core";

import { KnowledgeArticle } from "./knowledge-article.model";

@Injectable({
  providedIn: "root",
})
export class KnowledgeBaseService {
  private readonly articles: KnowledgeArticle[] = [
    {
      id: "first-week-checklist",
      title: "First-week checklist for new team members",
      section: "Getting Started",
      summary:
        "A concise launch checklist for onboarding into the product and support workflow.",
      body: "Review the product map, meet your onboarding buddy, request sandbox access, and complete the first customer walkthrough before taking live tickets.",
      updatedAt: "2026-04-02T09:30:00.000Z",
    },
    {
      id: "release-day-playbook",
      title: "Release-day playbook",
      section: "Operations",
      summary:
        "Operational steps for shipping a product release with clear ownership and rollback expectations.",
      body: "Confirm release ownership, document customer-facing changes, verify observability dashboards, and keep rollback criteria visible throughout the rollout window.",
      updatedAt: "2026-04-03T14:00:00.000Z",
    },
    {
      id: "handling-urgent-escalations",
      title: "Handling urgent customer escalations",
      section: "Support",
      summary:
        "A framework for triaging, escalating, and closing high-priority customer issues.",
      body: "Capture the customer impact, assign a directly responsible engineer, update the internal incident thread, and maintain a predictable communication cadence until resolution.",
      updatedAt: "2026-04-04T07:45:00.000Z",
    },
  ];

  getArticles(): KnowledgeArticle[] {
    return [...this.articles];
  }

  getArticleById(articleId: string): KnowledgeArticle | undefined {
    return this.articles.find((article) => article.id === articleId);
  }
}
