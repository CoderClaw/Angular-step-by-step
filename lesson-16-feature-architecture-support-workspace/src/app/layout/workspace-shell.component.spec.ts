import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

import { SupportWorkspaceService } from "../core/services/support-workspace.service";
import { WorkspaceShellComponent } from "./workspace-shell.component";

describe("WorkspaceShellComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceShellComponent],
      providers: [
        provideRouter([]),
        {
          provide: SupportWorkspaceService,
          useValue: {
            getMetrics: () => [
              { label: "Open escalations", value: "21", tone: "accent" },
              { label: "Launches this week", value: "5", tone: "navy" },
            ],
          },
        },
      ],
    }).compileComponents();
  });

  it("renders the shell headline, navigation, and metric content", () => {
    const fixture = TestBed.createComponent(WorkspaceShellComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain(
      "Feature architecture for a scalable Angular workspace",
    );
    expect(text).toContain("Triage");
    expect(text).toContain("Handoff");
    expect(text).toContain("Open escalations");
    expect(text).toContain("21");
  });
});
