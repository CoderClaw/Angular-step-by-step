import { TestBed } from "@angular/core/testing";

import { SupportWorkspaceService } from "./support-workspace.service";

describe("SupportWorkspaceService", () => {
  let service: SupportWorkspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportWorkspaceService);
  });

  it("returns the shared metric snapshot", () => {
    const metrics = service.getMetrics();

    expect(metrics).toHaveLength(3);
    expect(metrics[0]).toEqual({
      label: "Open escalations",
      value: "18",
      tone: "accent",
    });
  });

  it("exposes separate triage and handoff queues", () => {
    expect(service.getTriageQueue()).toHaveLength(3);
    expect(service.getHandoffQueue()).toHaveLength(3);
    expect(service.getHandoffQueue()[2]?.status).toBe("Blocked");
  });
});
