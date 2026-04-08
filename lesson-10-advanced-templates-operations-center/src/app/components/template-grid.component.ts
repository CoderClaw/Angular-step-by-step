import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Component, TemplateRef, input } from "@angular/core";

@Component({
  selector: "app-template-grid",
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: "./template-grid.component.html",
  styleUrl: "./template-grid.component.css",
})
export class TemplateGridComponent {
  readonly columns = input.required<readonly string[]>();
  readonly items = input.required<readonly unknown[]>();
  readonly rowTemplate = input.required<TemplateRef<{ $implicit: unknown }>>();
  readonly emptyTemplate = input<TemplateRef<{ count: number }> | null>(null);
}
