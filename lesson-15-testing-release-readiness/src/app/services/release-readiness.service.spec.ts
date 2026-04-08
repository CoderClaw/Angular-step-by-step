import { TestBed } from "@angular/core/testing";

import { ReleaseCheck } from "../models/release-readiness.model";
import { ReleaseReadinessService } from "./release-readiness.service";

describe("ReleaseReadinessService", () => {
  let service: ReleaseReadinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseReadinessService);
  });

  it("builds a blocked summary when any check is blocked", () => {
    const checks: ReleaseCheck[] = [
      {
        id: "1",
        title: "API migration sign-off",
        owner: "Nina",
        status: "Ready",
      },
      {
        id: "2",
        title: "Rollback rehearsal",
        owner: "Omar",
        status: "Blocked",
      },
    ];

    const summary = service.buildSummary(checks);

    expect(summary.launchState).toBe("Blocked");
    expect(summary.blockedChecks).toBe(1);
    expect(summary.nextAction).toContain("Resolve blocked checks");
  });

  it("builds an at-risk summary when attention items remain but nothing is blocked", () => {
    const checks: ReleaseCheck[] = [
      {
        id: "1",
        title: "Revenue validation",
        owner: "Jules",
        status: "Needs attention",
      },
      {
        id: "2",
        title: "Support macros",
        owner: "Kai",
        status: "Ready",
      },
    ];

    const summary = service.buildSummary(checks);

    expect(summary.launchState).toBe("At risk");
    expect(summary.needsAttentionChecks).toBe(1);
    expect(summary.blockedChecks).toBe(0);
  });
});
