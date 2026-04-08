import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "friendlyStatus",
  standalone: true,
})
export class FriendlyStatusPipe implements PipeTransform {
  transform(value: "new" | "waiting" | "resolved"): string {
    switch (value) {
      case "new":
        return "Needs triage";
      case "waiting":
        return "Waiting on customer";
      case "resolved":
        return "Resolved";
    }
  }
}
