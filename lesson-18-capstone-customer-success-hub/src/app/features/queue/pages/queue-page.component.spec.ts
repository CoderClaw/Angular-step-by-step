import { signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { HubStoreService } from "../../../core/services/hub-store.service";
import { QueuePageComponent } from "./queue-page.component";

describe("QueuePageComponent", () => {
  const mockStore = {
    query: signal(""),
    priority: signal<"All" | "High" | "Medium" | "Low">("All"),
    includeResolved: signal(false),
    preferences: signal({ compactMode: false, highlightHighPriority: true }),
    filteredWorkItems: signal([
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
    ]),
    updateQuery: vi.fn(),
    updatePriority: vi.fn(),
    updateIncludeResolved: vi.fn(),
  };

  beforeEach(async () => {
    mockStore.updateQuery.mockClear();
    mockStore.updatePriority.mockClear();
    mockStore.updateIncludeResolved.mockClear();

    await TestBed.configureTestingModule({
      imports: [QueuePageComponent],
      providers: [
        {
          provide: HubStoreService,
          useValue: mockStore,
        },
      ],
    }).compileComponents();
  });

  it("renders queue copy and the mocked work item", () => {
    const fixture = TestBed.createComponent(QueuePageComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain("Shared queue filters with reactive forms");
    expect(text).toContain("Northwind Logistics");
  });

  it("pushes form changes into the shared store", () => {
    const fixture = TestBed.createComponent(QueuePageComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.filterForm.setValue({
      query: "northwind",
      priority: "High",
      includeResolved: true,
    });

    expect(mockStore.updateQuery).toHaveBeenLastCalledWith("northwind");
    expect(mockStore.updatePriority).toHaveBeenLastCalledWith("High");
    expect(mockStore.updateIncludeResolved).toHaveBeenLastCalledWith(true);
  });
});
