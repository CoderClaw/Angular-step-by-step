import { Injectable } from "@angular/core";

import {
  HandoffItem,
  SupportWorkspaceSnapshot,
  TriageItem,
  WorkspaceMetric,
} from "../models/support-workspace.model";

@Injectable({
  providedIn: "root",
})
export class SupportWorkspaceService {
  private readonly snapshot: SupportWorkspaceSnapshot = {
    metrics: [
      { label: "Open escalations", value: "18", tone: "accent" },
      { label: "Launches this week", value: "4", tone: "navy" },
      { label: "Median resolution", value: "2.4h", tone: "navy" },
    ],
    triageQueue: [
      {
        id: "triage-1",
        customer: "Northwind Logistics",
        issue: "SSO invite flow stalls on step two",
        priority: "High",
        nextStep: "Pair support with identity engineering after standup.",
      },
      {
        id: "triage-2",
        customer: "Hearth Foods",
        issue: "Bulk export permissions need a policy exception",
        priority: "Medium",
        nextStep: "Confirm security sign-off and update rollout checklist.",
      },
      {
        id: "triage-3",
        customer: "Blue Mesa Care",
        issue: "Usage report labels need localization review",
        priority: "Low",
        nextStep: "Collect screenshots and hand over to product ops.",
      },
    ],
    handoffQueue: [
      {
        id: "handoff-1",
        owner: "Mara",
        stream: "Premium onboarding",
        status: "Ready for launch",
        note: "Success criteria and support macros are fully approved.",
      },
      {
        id: "handoff-2",
        owner: "Devin",
        stream: "Billing corrections",
        status: "Needs follow-up",
        note: "Revenue operations still needs one more dry run.",
      },
      {
        id: "handoff-3",
        owner: "Ari",
        stream: "Healthcare tenant migration",
        status: "Blocked",
        note: "The rollback plan is incomplete for the final wave.",
      },
    ],
  };

  getMetrics(): WorkspaceMetric[] {
    return this.snapshot.metrics;
  }

  getTriageQueue(): TriageItem[] {
    return this.snapshot.triageQueue;
  }

  getHandoffQueue(): HandoffItem[] {
    return this.snapshot.handoffQueue;
  }
}
