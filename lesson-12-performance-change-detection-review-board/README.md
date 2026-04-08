# Lesson 12: Performance and Change Detection with a Review Board

This lesson is a Vite-based Angular application that teaches practical performance patterns for medium and large UI lists.

## What this lesson teaches

- How to use `ChangeDetectionStrategy.OnPush` in standalone components
- How immutable updates help OnPush components stay predictable
- How `computed()` can avoid repeated derivation work for filtered views
- How `track item.id` reduces DOM churn in large lists
- How to reveal large result sets incrementally instead of rendering everything at once

## Main files

- `src/app/app.component.ts`: source state, computed filters, and immutable list updates
- `src/app/components/review-row.component.ts`: optimized row component using OnPush
- `src/app/app.component.html`: tracked large-list rendering and incremental loading

## Suggested exploration order

1. Open `review-row.component.ts` and confirm it uses `ChangeDetectionStrategy.OnPush`.
2. Read `app.component.ts` and inspect `filteredItems`, `visibleItems`, and immutable update methods.
3. Inspect the `@for` loop in `app.component.html` and note the `track item.id` expression.
4. Run the app and approve or block several rows while filters are active.
5. Compare this structure with earlier lessons and notice how the performance guidance appears in both state updates and template rendering.

## Why this example is realistic

Admin queues, audit lists, moderation dashboards, review boards, and support backlogs often render many rows at once and update them frequently. Performance work in Angular usually starts with sensible change-detection boundaries, immutable updates, and stable list tracking rather than premature complexity.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 13 will introduce authentication and protected application flows.
