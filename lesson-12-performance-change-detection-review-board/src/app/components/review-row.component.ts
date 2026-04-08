import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";

import { ReviewItem } from "../review-item.model";

@Component({
  selector: "app-review-row",
  standalone: true,
  templateUrl: "./review-row.component.html",
  styleUrl: "./review-row.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewRowComponent {
  readonly item = input.required<ReviewItem>();

  readonly approved = output<number>();
  readonly blocked = output<number>();
}
