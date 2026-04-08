import { createSelector } from "@ngrx/store";

import { incidentsFeature } from "./incidents.reducer";

export const {
  selectIncidentsState,
  selectIncidents,
  selectSelectedIncidentId,
  selectSearchTerm,
  selectPriorityFilter,
  selectIsLoading,
  selectErrorMessage,
} = incidentsFeature;

export const selectFilteredIncidents = createSelector(
  selectIncidents,
  selectSearchTerm,
  selectPriorityFilter,
  (incidents, searchTerm, priorityFilter) => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return incidents.filter((incident) => {
      const matchesPriority =
        priorityFilter === "All" || incident.priority === priorityFilter;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        incident.title.toLowerCase().includes(normalizedQuery) ||
        incident.customer.toLowerCase().includes(normalizedQuery) ||
        incident.owner.toLowerCase().includes(normalizedQuery);

      return matchesPriority && matchesSearch;
    });
  },
);

export const selectSelectedIncident = createSelector(
  selectIncidents,
  selectSelectedIncidentId,
  (incidents, selectedIncidentId) =>
    incidents.find((incident) => incident.id === selectedIncidentId) ?? null,
);

export const selectIncidentSummary = createSelector(
  selectIncidents,
  selectFilteredIncidents,
  (allIncidents, filteredIncidents) => ({
    total: allIncidents.length,
    visible: filteredIncidents.length,
    unresolved: filteredIncidents.filter(
      (incident) => incident.status !== "Resolved",
    ).length,
    blocked: filteredIncidents.filter(
      (incident) => incident.status === "Blocked",
    ).length,
    highPriority: filteredIncidents.filter(
      (incident) =>
        incident.priority === "High" && incident.status !== "Resolved",
    ).length,
  }),
);
