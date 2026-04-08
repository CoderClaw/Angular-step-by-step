import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { IncidentsApiService } from "../services/incidents-api.service";
import { IncidentsActions } from "./incidents.actions";

@Injectable()
export class IncidentsEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(IncidentsApiService);

  readonly loadIncidents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IncidentsActions.loadIncidents),
      switchMap(() =>
        this.api.getIncidents().pipe(
          map((incidents) =>
            IncidentsActions.loadIncidentsSuccess({ incidents }),
          ),
          catchError(() =>
            of(
              IncidentsActions.loadIncidentsFailure({
                errorMessage:
                  "Could not load incidents. Try the reload action again.",
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
