# Lesson 16: Feature Architecture and Scalable Angular Structure with a Support Workspace

This lesson is a Vite-based Angular application that teaches how to organize a growing Angular project into `core`, `shared`, `layout`, and `features` areas.

## What this lesson teaches

- How to separate app-wide services and models into a `core` area
- How to keep reusable presentational UI inside `shared`
- How to use a `layout` shell to host navigation and route framing
- How to group domain screens under `features`
- How route-level feature boundaries help a codebase scale beyond a single `app.component.ts`

## Main files

- `src/app/app.routes.ts`: top-level route map and feature boundaries
- `src/app/core/services/support-workspace.service.ts`: app-wide data source used by multiple features
- `src/app/layout/workspace-shell.component.ts`: shared shell for navigation and metrics
- `src/app/shared/ui/metric-card/metric-card.component.ts`: reusable UI component
- `src/app/features/triage/pages/triage-page.component.ts`: triage feature screen
- `src/app/features/handoff/pages/handoff-page.component.ts`: handoff feature screen
- `src/app/core/services/support-workspace.service.spec.ts`: service-level verification for shared workspace data
- `src/app/layout/workspace-shell.component.spec.ts`: shell rendering verification

## Suggested exploration order

1. Start with `app.routes.ts` and inspect how the feature areas are separated.
2. Read `layout/workspace-shell.component.ts` to see what belongs in a shell.
3. Open `core/services/support-workspace.service.ts` and identify which data is shared across features.
4. Compare the two feature page components and notice how each owns only its own screen.
5. Inspect `shared/ui/metric-card` and see how reusable UI stays decoupled from domain behavior.

## Why this example is realistic

Large Angular applications become hard to maintain when everything is added to one folder or one root component. Real teams usually need a consistent place for shared UI, app-wide services, feature-specific screens, and layout concerns. This lesson keeps the app small but demonstrates the structure that scales.

## Run the lesson

```bash
npm install
npm run dev
npm test
```

## Next lesson

Lesson 17 will focus on advanced UI integration patterns in Angular.
