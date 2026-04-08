import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

import { Incident } from "../models/incident.model";

const INCIDENTS: Incident[] = [
  {
    id: "inc-101",
    title: "Failed SSO rollout for EMEA workspace",
    customer: "Northwind Health",
    owner: "Iris Chen",
    priority: "High",
    status: "Blocked",
    updatedMinutesAgo: 12,
    summary:
      "The identity provider metadata changed during rollout, leaving new users unable to complete sign-in.",
  },
  {
    id: "inc-102",
    title: "Webhook retries causing duplicate shipment notices",
    customer: "Harbor Commerce",
    owner: "Omar Patel",
    priority: "Medium",
    status: "Open",
    updatedMinutesAgo: 24,
    summary:
      "A downstream timeout is triggering retried notifications, and support needs a triage owner before business hours start.",
  },
  {
    id: "inc-103",
    title: "Dashboard exports missing Q2 revenue columns",
    customer: "Aster Advisory",
    owner: "Mina Lopez",
    priority: "Low",
    status: "Resolved",
    updatedMinutesAgo: 46,
    summary:
      "The reporting schema was updated and export mapping lagged behind one release. A patch has already been validated.",
  },
  {
    id: "inc-104",
    title: "Priority queue latency spike for premium tenants",
    customer: "Vertex Fleet",
    owner: "Noah Kim",
    priority: "High",
    status: "Open",
    updatedMinutesAgo: 7,
    summary:
      "Request timing crossed the internal threshold after a configuration rollout, and response times are still unstable.",
  },
  {
    id: "inc-105",
    title: "Bulk user import rejects valid regional phone formats",
    customer: "Cinder Campus",
    owner: "Evelyn Hart",
    priority: "Medium",
    status: "Open",
    updatedMinutesAgo: 31,
    summary:
      "Validation rules are too strict for several locale-specific number patterns, causing onboarding delays.",
  },
];

@Injectable({ providedIn: "root" })
export class IncidentsApiService {
  getIncidents(): Observable<Incident[]> {
    return of(INCIDENTS.map((incident) => ({ ...incident }))).pipe(delay(550));
  }
}
