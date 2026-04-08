import { AsyncPipe, CommonModule, DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  concat,
  map,
  of,
  debounceTime,
  distinctUntilChanged,
  shareReplay,
  startWith,
  switchMap,
} from "rxjs";

import { SearchViewModel, WorkItemStatus } from "./work-item.model";
import { WorkItemSearchService } from "./services/work-item-search.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, AsyncPipe, DatePipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private readonly workItemSearchService = inject(WorkItemSearchService);

  private readonly rawQueryInput$ = new Subject<string>();
  private readonly statusFilter$ = new BehaviorSubject<WorkItemStatus>("All");

  readonly statusOptions: readonly WorkItemStatus[] = [
    "All",
    "Open",
    "Waiting",
    "Closed",
  ];

  // El stream de consulta usa debounce para que escribir rapido no dispare busquedas inmediatas.
  readonly query$ = this.rawQueryInput$.pipe(
    startWith(""),
    debounceTime(250),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  // combineLatest une varios streams independientes en un unico contexto de peticion de busqueda.
  readonly vm$: Observable<SearchViewModel> = combineLatest([
    this.query$,
    this.statusFilter$,
  ]).pipe(
    switchMap(([query, status]) =>
      concat(
        of({
          query,
          status,
          results: [],
          isLoading: true,
          totalResults: 0,
        }),
        this.workItemSearchService.search(query, status).pipe(
          map((results) => ({
            query,
            status,
            results,
            isLoading: false,
            totalResults: results.length,
          })),
        ),
      ),
    ),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  onQueryChanged(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.rawQueryInput$.next(target.value);
  }

  onStatusChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.statusFilter$.next(target.value as WorkItemStatus);
  }
}
