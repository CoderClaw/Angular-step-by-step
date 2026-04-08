# Lesson 07: RxJS Essentials with a Live Search Dashboard

This lesson is a Vite-based Angular application that teaches how RxJS streams combine user input, filter state, and async search results into one UI model.

## What this lesson teaches

- How to model user input as RxJS streams
- How `debounceTime` reduces noisy input events
- How `distinctUntilChanged` ignores repeated values
- How `combineLatest` merges independent streams into one search context
- How `switchMap` cancels old async searches when a new search begins
- How `AsyncPipe` renders observable state directly in the template
- How `shareReplay` helps keep a derived stream reusable

## Main files

- `src/app/app.component.ts`: stream composition and view-model creation
- `src/app/services/work-item-search.service.ts`: async search source used by the UI
- `src/app/work-item.model.ts`: typed search result and view-model structures

## Suggested exploration order

1. Open `src/app/services/work-item-search.service.ts` and inspect the async search source.
2. Read `src/app/app.component.ts` and follow `query$`, `statusFilter$`, and `vm$`.
3. Inspect the `switchMap` block and note where loading state is introduced.
4. Run the app and type quickly to see debounced searching in action.
5. Change the status filter and watch how `combineLatest` drives a new result set.

## Why this example is realistic

Search screens, dashboards, inboxes, and admin tools often depend on multiple changing inputs at once. RxJS becomes valuable when those inputs need to be combined, debounced, cancelled, and presented as a single stream-driven UI state.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 08 will introduce Angular signals and compare signal-based state with stream-based state.
