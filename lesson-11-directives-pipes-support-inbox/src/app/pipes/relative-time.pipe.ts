import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "relativeTime",
  standalone: true,
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: string): string {
    const timestamp = new Date(value).getTime();
    const now = Date.now();
    const diffInMinutes = Math.max(1, Math.floor((now - timestamp) / 60000));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  }
}
