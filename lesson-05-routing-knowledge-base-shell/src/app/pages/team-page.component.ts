import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-team-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./team-page.component.html",
  styleUrl: "./page-shared.css",
})
export class TeamPageComponent {
  readonly teamMembers = [
    { name: "Alicia Stone", role: "Frontend Engineer" },
    { name: "Marco Li", role: "Operations Manager" },
    { name: "Dina Owens", role: "Support Lead" },
  ];
}
