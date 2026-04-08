import { CommonModule } from "@angular/common";
import { Component, DestroyRef, effect, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { HubStoreService } from "../../../core/services/hub-store.service";
import { WorkItemPriority } from "../../../core/models/customer-success-hub.model";

@Component({
  selector: "app-queue-page",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./queue-page.component.html",
  styleUrl: "./queue-page.component.css",
})
export class QueuePageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  readonly store = inject(HubStoreService);

  readonly filterForm = this.formBuilder.group({
    query: this.store.query(),
    priority: this.store.priority() as "All" | WorkItemPriority,
    includeResolved: this.store.includeResolved(),
  });

  constructor() {
    this.filterForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.store.updateQuery(value.query ?? "");
        this.store.updatePriority(
          (value.priority ?? "All") as "All" | WorkItemPriority,
        );
        this.store.updateIncludeResolved(value.includeResolved ?? false);
      });

    effect(() => {
      this.filterForm.patchValue(
        {
          query: this.store.query(),
          priority: this.store.priority(),
          includeResolved: this.store.includeResolved(),
        },
        { emitEvent: false },
      );
    });
  }
}
