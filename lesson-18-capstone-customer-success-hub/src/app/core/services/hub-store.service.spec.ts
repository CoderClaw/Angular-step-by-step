import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { HubSnapshot } from "../models/customer-success-hub.model";
import { HubApiService } from "./hub-api.service";
import { HubStoreService } from "./hub-store.service";

describe("HubStoreService", () => {
  const snapshot: HubSnapshot = {
    metrics: [{ label: "Open success plans", value: "12", tone: "teal" }],
    milestones: [
      {
        id: "m-1",
        title: "Healthcare rollout readiness",
        owner: "Priya",
        status: "On track",
        dueLabel: "Today 16:00",
      },
    ],
    workItems: [
      {
        id: "w-1",
        account: "Northwind Logistics",
        summary:
          "Confirm the enterprise SSO recovery script before the launch review.",
        owner: "Amira",
        priority: "High",
        status: "Open",
        nextStep:
          "Meet identity engineering and publish the final operator note.",
      },
      {
        id: "w-2",
        account: "Summit Retail",
        summary: "Close support follow-ups after the launch handoff retro.",
        owner: "Owen",
        priority: "Low",
        status: "Resolved",
        nextStep: "Archive the checklist after the CS lead signs off.",
      },
    ],
  };

  let service: HubStoreService;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HubApiService,
          useValue: {
            getSnapshot: () => of(snapshot),
          },
        },
      ],
    });

    service = TestBed.inject(HubStoreService);
  });

  it("loads the API snapshot into the shared signals store", () => {
    service.loadSnapshot();

    expect(service.snapshot()).toEqual(snapshot);
    expect(service.metrics()).toHaveLength(1);
    expect(service.urgentCount()).toBe(1);
    expect(service.isLoading()).toBe(false);
  });

  it("filters work items based on query, priority, and resolved visibility", () => {
    service.loadSnapshot();
    service.updateQuery("northwind");
    service.updatePriority("High");
    service.updateIncludeResolved(false);

    expect(service.filteredWorkItems().map((item) => item.id)).toEqual(["w-1"]);

    service.updateQuery("");
    service.updatePriority("All");
    service.updateIncludeResolved(true);

    expect(service.filteredWorkItems()).toHaveLength(2);
  });

  it("persists preference updates", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    service.updatePreferences({
      compactMode: true,
      highlightHighPriority: false,
    });
    TestBed.flushEffects();

    expect(service.preferences()).toEqual({
      compactMode: true,
      highlightHighPriority: false,
    });
    expect(setItemSpy).toHaveBeenCalledWith(
      "lesson-18-capstone-preferences",
      JSON.stringify({ compactMode: true, highlightHighPriority: false }),
    );
  });
});
