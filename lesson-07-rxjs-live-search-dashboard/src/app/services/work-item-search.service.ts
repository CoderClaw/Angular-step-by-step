import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

import { WorkItem, WorkItemStatus } from "../work-item.model";

@Injectable({
  providedIn: "root",
})
export class WorkItemSearchService {
  private readonly workItems: WorkItem[] = [
    {
      id: "case-201",
      title: "Billing export does not include tax column",
      customer: "Northwind Labs",
      owner: "Alicia",
      status: "Open",
      priority: "High",
      summary:
        "Finance teams cannot reconcile exported billing data without the missing tax field.",
      updatedAt: "2026-04-04T08:25:00.000Z",
    },
    {
      id: "case-202",
      title: "New workspace search feels slower after migration",
      customer: "River Peak Health",
      owner: "Dina",
      status: "Waiting",
      priority: "Medium",
      summary:
        "The customer reported slower global search after moving to the new data region.",
      updatedAt: "2026-04-04T07:50:00.000Z",
    },
    {
      id: "case-203",
      title: "Retention dashboard definitions approved",
      customer: "Internal analytics",
      owner: "Marco",
      status: "Closed",
      priority: "Low",
      summary:
        "Metric naming and final chart definitions have been approved for the next release.",
      updatedAt: "2026-04-03T15:10:00.000Z",
    },
    {
      id: "case-204",
      title: "Single sign-on invite loop for new admins",
      customer: "Blue Cedar Group",
      owner: "Alicia",
      status: "Open",
      priority: "High",
      summary:
        "Admins accepted their invite but were redirected back to the setup screen repeatedly.",
      updatedAt: "2026-04-03T10:00:00.000Z",
    },
    {
      id: "case-205",
      title: "Support macros ready for rollout",
      customer: "Internal support",
      owner: "Dina",
      status: "Waiting",
      priority: "Medium",
      summary:
        "The bulk macro definitions are ready, pending final operations sign-off.",
      updatedAt: "2026-04-02T13:40:00.000Z",
    },
  ];

  search(query: string, status: WorkItemStatus): Observable<WorkItem[]> {
    const normalizedQuery = query.trim().toLowerCase();

    const results = this.workItems.filter((item) => {
      const matchesStatus = status === "All" || item.status === status;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.customer.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });

    // A small delay makes the stream behavior visible in the UI.
    return of(results).pipe(delay(450));
  }
}
