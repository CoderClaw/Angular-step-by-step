import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";

import { ReleaseItem } from "./release-item.model";
import { ReleaseFeedService } from "./services/release-feed.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  private readonly releaseFeedService = inject(ReleaseFeedService);

  feedItems: ReleaseItem[] = [];
  selectedItemId: string | null = null;
  isLoading = false;
  errorMessage = "";
  lastLoadedAt: Date | null = null;

  ngOnInit(): void {
    this.loadFeed();
  }

  get publishedCount(): number {
    return this.feedItems.filter((item) => item.status === "Published").length;
  }

  get selectedItem(): ReleaseItem | null {
    return (
      this.feedItems.find((item) => item.id === this.selectedItemId) ?? null
    );
  }

  loadFeed(): void {
    this.isLoading = true;
    this.errorMessage = "";

    // The component reacts to async request states: loading, success, and error.
    // getReleaseFeed() returns an Observable, which is a value source that may produce data later.
    // Nothing actually happens until we subscribe: subscribe() tells Angular/RxJS that this
    // component wants to listen for the result of the HTTP request.
    //
    // A subscription connects this component to the Observable execution.
    // For HttpClient requests, that means Angular sends the request and then calls our handlers
    // as the request finishes. In this object form of subscribe(), we provide callbacks for the
    // outcomes we care about.
    this.releaseFeedService.getReleaseFeed().subscribe({
      // next runs when the Observable successfully emits data.
      // HttpClient usually emits one response value here, so this is our "success" path.
      next: (items) => {
        this.feedItems = items;
        this.selectedItemId = items[0]?.id ?? null;
        this.lastLoadedAt = new Date();
        this.isLoading = false;
      },
      // error runs if the Observable fails before producing a successful result.
      // This is where we switch the UI out of the loading state and show an error message.
      error: () => {
        this.errorMessage = "The release feed could not be loaded. Try again.";
        this.isLoading = false;
      },
    });

    // In this lesson we subscribe directly in the component because the example is small.
    // In larger apps, subscriptions are often composed with the AsyncPipe, signals, or cleanup
    // logic so long-lived streams do not stay connected longer than needed.
  }

  selectItem(itemId: string): void {
    this.selectedItemId = itemId;
  }
}
