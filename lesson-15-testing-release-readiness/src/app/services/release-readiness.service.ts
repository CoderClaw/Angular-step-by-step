import { Injectable } from "@angular/core";

import {
  ReleaseCheck,
  ReleaseReadinessSummary,
} from "../models/release-readiness.model";

@Injectable({
  providedIn: "root",
})
export class ReleaseReadinessService {
  private readonly checks: ReleaseCheck[] = [
    {
      id: "check-1",
      title: "Migration support playbook",
      owner: "Rina",
      status: "Ready",
    },
    {
      id: "check-2",
      title: "Revenue reconciliation sign-off",
      owner: "Hugo",
      status: "Needs attention",
    },
    {
      id: "check-3",
      title: "SSO recovery drills",
      owner: "Maya",
      status: "Blocked",
    },
  ];

  getChecks(): ReleaseCheck[] {
    return this.checks;
  }

  // The service is a good place for business rules that multiple components could reuse.
  // Keeping the summary logic here makes it easy to test without touching the DOM.
  buildSummary(checks: ReleaseCheck[]): ReleaseReadinessSummary {
    const readyChecks = checks.filter(
      (check) => check.status === "Ready",
    ).length;
    const needsAttentionChecks = checks.filter(
      (check) => check.status === "Needs attention",
    ).length;
    const blockedChecks = checks.filter(
      (check) => check.status === "Blocked",
    ).length;

    let launchState: ReleaseReadinessSummary["launchState"] = "On track";
    let nextAction = "Proceed with the release checklist review.";

    if (blockedChecks > 0) {
      launchState = "Blocked";
      nextAction = "Resolve blocked checks before moving the release window.";
    } else if (needsAttentionChecks > 0) {
      launchState = "At risk";
      nextAction = "Close attention items and repeat the readiness review.";
    }

    return {
      totalChecks: checks.length,
      readyChecks,
      needsAttentionChecks,
      blockedChecks,
      launchState,
      nextAction,
    };
  }
}
