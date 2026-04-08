import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay } from "rxjs";

import { HubSnapshot } from "../models/customer-success-hub.model";

@Injectable({
  providedIn: "root",
})
export class HubApiService {
  private readonly http = inject(HttpClient);

  getSnapshot(): Observable<HubSnapshot> {
    return this.http
      .get<HubSnapshot>("/api/customer-success-hub.json")
      .pipe(delay(350));
  }
}
