import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { ReleaseReadinessService } from "./services/release-readiness.service";

describe("AppComponent", () => {
  beforeEach(async () => {
    // La prueba del componente reemplaza el servicio real para que la plantilla use valores conocidos.
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ReleaseReadinessService,
          useValue: {
            getChecks: () => [
              {
                id: "one",
                title: "Runbook approval",
                owner: "Lena",
                status: "Ready",
              },
            ],
            buildSummary: () => ({
              totalChecks: 1,
              readyChecks: 1,
              needsAttentionChecks: 0,
              blockedChecks: 0,
              launchState: "On track",
              nextAction: "Proceed with the release checklist review.",
            }),
          },
        },
      ],
    }).compileComponents();
  });

  it("renders the mocked launch state and next action", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain("On track");
    expect(text).toContain("Proceed with the release checklist review.");
    expect(text).toContain("Runbook approval");
  });
});
