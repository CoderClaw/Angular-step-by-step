import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay, map } from "rxjs";

import { ReleaseItem } from "../release-item.model";

@Injectable({
  providedIn: "root",
})
export class ReleaseFeedService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = "/mock-api/release-feed.json";

  // Angular apps usually hide HTTP details behind a service.
  // That keeps components focused on UI state instead of request wiring.
  getReleaseFeed(): Observable<ReleaseItem[]> {
    return this.http.get<ReleaseItem[]>(this.endpoint).pipe(
      delay(700),
      map((items) =>
        [...items].sort((leftItem, rightItem) =>
          rightItem.publishedAt.localeCompare(leftItem.publishedAt),
        ),
      ),
    );
  }
}
