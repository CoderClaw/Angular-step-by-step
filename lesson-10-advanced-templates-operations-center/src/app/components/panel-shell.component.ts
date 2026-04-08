import { Component, input } from "@angular/core";

@Component({
  selector: "app-panel-shell",
  standalone: true,
  templateUrl: "./panel-shell.component.html",
  styleUrl: "./panel-shell.component.css",
})
export class PanelShellComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>("");
}
