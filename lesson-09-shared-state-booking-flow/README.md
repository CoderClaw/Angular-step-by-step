# Lesson 09: Shared State Patterns with a Booking Flow

This lesson is a Vite-based Angular application that teaches how multiple parts of a screen can share one centralized state service instead of passing everything through a parent component.

## What this lesson teaches

- How to centralize state in a service that acts like a small store
- How several standalone components can read and mutate the same shared state
- How to separate source state, mutation methods, and derived state
- How `computed()` can be used in a shared-state service, not only inside one component
- How to avoid unnecessary parent-component coordination when state is truly shared

## Main files

- `src/app/services/booking-store.service.ts`: shared source of truth, mutations, and derived state
- `src/app/components/booking-filters.component.ts`: filter controls that write into shared state
- `src/app/components/booking-offers.component.ts`: offer list that reads filtered state and updates seat counts
- `src/app/components/booking-summary.component.ts`: summary sidebar that reads the same state directly

## Suggested exploration order

1. Open `src/app/services/booking-store.service.ts` and identify source signals, mutations, and computed values.
2. Read `booking-filters.component.ts` and note how it updates the store.
3. Read `booking-offers.component.ts` and see how it reads and mutates selection state.
4. Read `booking-summary.component.ts` and notice that it stays in sync without parent inputs.
5. Run the app and observe how changes in one component immediately affect the others.

## Why this example is realistic

Booking flows, carts, multi-step checkouts, staffing planners, and internal scheduling tools often need multiple independent UI areas to stay synchronized. A small shared-state service is a practical pattern before introducing larger external state libraries.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 10 will focus on advanced templates and content reuse patterns.
