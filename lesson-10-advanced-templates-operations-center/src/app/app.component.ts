import { CommonModule, DatePipe } from "@angular/common";
import { Component } from "@angular/core";

import { PanelShellComponent } from "./components/panel-shell.component";
import { TemplateGridComponent } from "./components/template-grid.component";
import { ApprovalItem, IncidentItem } from "./operations-item.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, DatePipe, PanelShellComponent, TemplateGridComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly approvalColumns = ["Request", "Owner", "Priority", "Due date"];
  readonly incidentColumns = ["Service", "Status", "Commander", "Started"];

  readonly approvals: ApprovalItem[] = [
    {
      id: "ap-401",
      name: "Vendor access review",
      owner: "Alicia Stone",
      priority: "High",
      due: "2026-04-04T16:00:00.000Z",
    },
    {
      id: "ap-402",
      name: "Q2 feature flag audit",
      owner: "Marco Li",
      priority: "Medium",
      due: "2026-04-05T11:30:00.000Z",
    },
  ];

  readonly incidents: IncidentItem[] = [
    {
      id: "in-110",
      service: "Global search",
      status: "Investigating",
      commander: "Dina Owens",
      startedAt: "2026-04-04T07:20:00.000Z",
    },
    {
      id: "in-111",
      service: "Billing export",
      status: "Monitoring",
      commander: "Marco Li",
      startedAt: "2026-04-03T18:45:00.000Z",
    },
  ];
}
