import { ApplicationConfig } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";

import { IncidentsEffects } from "./state/incidents.effects";
import { incidentsFeature } from "./state/incidents.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState(incidentsFeature),
    provideEffects(IncidentsEffects),
  ],
};
