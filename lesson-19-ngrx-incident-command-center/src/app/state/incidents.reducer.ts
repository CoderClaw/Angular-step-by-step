import { createFeature, createReducer, on } from "@ngrx/store";

import {
  Incident,
  IncidentPriorityFilter,
  IncidentStatus,
} from "../models/incident.model";
import { IncidentsActions } from "./incidents.actions";

export interface IncidentsState {
  incidents: Incident[];
  selectedIncidentId: string | null;
  searchTerm: string;
  priorityFilter: IncidentPriorityFilter;
  isLoading: boolean;
  errorMessage: string | null;
}

export const initialIncidentsState: IncidentsState = {
  incidents: [],
  selectedIncidentId: null,
  searchTerm: "",
  priorityFilter: "All",
  isLoading: false,
  errorMessage: null,
};

function deriveSelectedIncidentId(
  currentSelectedId: string | null,
  incidents: Incident[],
): string | null {
  if (
    currentSelectedId &&
    incidents.some((incident) => incident.id === currentSelectedId)
  ) {
    return currentSelectedId;
  }

  return incidents[0]?.id ?? null;
}

function nextStatus(status: IncidentStatus): IncidentStatus {
  return status === "Resolved" ? "Open" : "Resolved";
}

const reducer = createReducer(
  initialIncidentsState,
  on(IncidentsActions.loadIncidents, (state) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  })),
  on(IncidentsActions.loadIncidentsSuccess, (state, { incidents }) => ({
    ...state,
    incidents,
    isLoading: false,
    selectedIncidentId: deriveSelectedIncidentId(
      state.selectedIncidentId,
      incidents,
    ),
  })),
  on(IncidentsActions.loadIncidentsFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),
  on(IncidentsActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(IncidentsActions.setPriorityFilter, (state, { priorityFilter }) => ({
    ...state,
    priorityFilter,
  })),
  on(IncidentsActions.selectIncident, (state, { incidentId }) => ({
    ...state,
    selectedIncidentId: incidentId,
  })),
  on(IncidentsActions.toggleResolved, (state, { incidentId }) => ({
    ...state,
    incidents: state.incidents.map((incident) =>
      incident.id === incidentId
        ? {
            ...incident,
            status: nextStatus(incident.status),
            updatedMinutesAgo: 0,
          }
        : incident,
    ),
  })),
);

export const incidentsFeature = createFeature({
  name: "incidents",
  reducer,
});
