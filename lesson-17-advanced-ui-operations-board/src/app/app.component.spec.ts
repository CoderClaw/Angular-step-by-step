import { TestBed } from "@angular/core/testing";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { BoardTask } from "./models/operations-board.model";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it("renders the board headline and initial selected task", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain("Advanced UI integration patterns in Angular");
    expect(text).toContain("Finalize SSO incident note");
  });

  it("moves a task to a different column when dropped", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const movedTask = component.tasksFor("queued")[0] as BoardTask;

    component.drop(
      {
        item: { data: movedTask },
        currentIndex: 1,
      } as CdkDragDrop<BoardTask[]>,
      "ready",
    );

    expect(component.tasksFor("ready").map((task) => task.id)).toContain(
      movedTask.id,
    );
    expect(component.selectedTaskId()).toBe(movedTask.id);
  });

  it("copies the selected task summary through the clipboard API", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(window.navigator, "clipboard", {
      configurable: true,
      value: {
        writeText,
      },
    });

    await component.copySelectedTaskSummary();

    expect(writeText).toHaveBeenCalledWith(
      "Finalize SSO incident note | Nadia | Document the recovery steps for the enterprise launch review.",
    );
    expect(component.copyMessage()).toBe("Copied summary to clipboard.");
  });
});
