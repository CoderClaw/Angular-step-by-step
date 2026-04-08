# Lesson 18: Capstone Customer Success Hub

This capstone is a Vite-based Angular application that combines the major ideas from the series into one small but realistic product workspace.

## What this lesson teaches

- How routing, layout shells, and feature pages fit together in one app
- How to centralize HTTP behavior with an interceptor and a typed API service
- How to keep shared app state in a signals-based store
- How to connect reactive forms to shared filtered state
- How to persist user preferences and let multiple pages respond to them
- How feature structure, reusable UI, and data flow work together in a production-style Angular app

## Main files

- `src/app/app.routes.ts`: application routes and feature boundaries
- `src/app/interceptors/customer-success-api.interceptor.ts`: centralized request behavior
- `src/app/core/services/hub-api.service.ts`: typed API access layer
- `src/app/core/services/hub-store.service.ts`: shared signals store and persisted preferences
- `src/app/layout/hub-shell.component.ts`: shell, navigation, loading, and error states
- `src/app/features/queue/pages/queue-page.component.ts`: reactive filter form connected to shared state
- `public/mock-api/customer-success-hub.json`: mock backend data for the capstone
- `src/app/core/services/hub-store.service.spec.ts`: store-level tests for loading, filtering, and preferences
- `src/app/features/queue/pages/queue-page.component.spec.ts`: feature-page tests for reactive form wiring

## Suggested exploration order

1. Start with `app.routes.ts` and see how the capstone is divided into features.
2. Read `hub-store.service.ts` and identify which parts of the state are raw, computed, and persisted.
3. Compare `hub-api.service.ts` with `customer-success-api.interceptor.ts` to see how HTTP concerns are separated.
4. Open `queue-page.component.ts` and trace how the reactive form updates the store.
5. Visit the preferences page and confirm that queue rendering changes based on shared settings.

## Why this example is realistic

Many Angular products are not single-page demos with one concept at a time. They combine routing, shared state, HTTP infrastructure, filters, user preferences, and reusable layout patterns in one workspace. This capstone keeps the scope small while showing how those pieces fit together coherently.

## Run the lesson

```bash
npm install
npm run dev
npm test
```

## Next lesson

Lesson 19 revisits global state with a dedicated NgRx example so you can compare a lightweight custom store with a more formal action-reducer-effect architecture.
