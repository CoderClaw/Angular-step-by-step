import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay } from "rxjs";

import { OperationsOverview } from "../operations-overview.model";

@Injectable({
  providedIn: "root",
})
export class OperationsApiService {
  private readonly http = inject(HttpClient);

  // The service exposes a clean API to the component.
  // The component does not need to know about URL rewriting or shared headers.
  getOverview(simulateFailure = false): Observable<OperationsOverview> {
    const endpoint = simulateFailure
      ? "/api/missing-operations-overview.json"
      : "/api/operations-overview.json";

    return this.http.get<OperationsOverview>(endpoint).pipe(delay(450));
  }
}
