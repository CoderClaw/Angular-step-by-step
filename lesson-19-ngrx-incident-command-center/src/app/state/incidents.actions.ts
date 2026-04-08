import { createActionGroup, emptyProps, props } from "@ngrx/store";

import { Incident, IncidentPriorityFilter } from "../models/incident.model";

export const IncidentsActions = createActionGroup({
  source: "Incidents",
  events: {
    "Load Incidents": emptyProps(),
    "Load Incidents Success": props<{ incidents: Incident[] }>(),
    "Load Incidents Failure": props<{ errorMessage: string }>(),
    "Set Search Term": props<{ searchTerm: string }>(),
    "Set Priority Filter": props<{ priorityFilter: IncidentPriorityFilter }>(),
    "Select Incident": props<{ incidentId: string }>(),
    "Toggle Resolved": props<{ incidentId: string }>(),
  },
});
