import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay } from "rxjs";

import { OperationsOverview } from "../operations-overview.model";

@Injectable({
  providedIn: "root",
})
export class OperationsApiService {
  private readonly http = inject(HttpClient);

  // El servicio expone una API limpia al componente.
  // El componente no necesita conocer la reescritura de URLs ni las cabeceras compartidas.
  getOverview(simulateFailure = false): Observable<OperationsOverview> {
    const endpoint = simulateFailure
      ? "/api/missing-operations-overview.json"
      : "/api/operations-overview.json";

    return this.http.get<OperationsOverview>(endpoint).pipe(delay(450));
  }
}
