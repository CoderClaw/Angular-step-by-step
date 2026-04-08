# Lesson 19: NgRx Incident Command Center

This lesson is a Vite-based Angular application that introduces formal global state management with NgRx through a small incident triage workspace.

## What this lesson teaches

- How actions, reducers, selectors, and effects fit together in one Angular feature
- How components read state with `store.select(...)` and update state by dispatching actions
- How to keep reducers pure while moving HTTP work into effects
- How derived state belongs in selectors rather than being recalculated in every component
- How to model loading, filters, selection, and detail panels in one coherent global store

## Main files

- `src/app/state/incidents.actions.ts`: all named state transition events for the feature
- `src/app/state/incidents.reducer.ts`: feature state and reducer logic
- `src/app/state/incidents.selectors.ts`: reusable read models and derived state
- `src/app/state/incidents.effects.ts`: async loading side effects
- `src/app/services/incidents-api.service.ts`: mock API that simulates remote incident loading
- `src/app/components/incident-toolbar.component.ts`: dispatches filter and reload actions
- `src/app/components/incident-list.component.ts`: renders filtered incidents and dispatches selection and resolution changes
- `src/app/components/incident-detail.component.ts`: shows the currently selected incident from store state

## Suggested exploration order

1. Start with `incidents.actions.ts` and identify the feature events.
2. Read `incidents.reducer.ts` and trace which parts of state change for each action.
3. Open `incidents.selectors.ts` and find the derived state used by the UI.
4. Read `incidents.effects.ts` to see where async loading happens.
5. Compare the toolbar and list components to see how components dispatch actions and select state without owning the data directly.

## Why this example is realistic

Support systems, operations dashboards, incident boards, and admin tools often have multiple distant UI regions that all need the same global truth: active filters, selected entities, async status, and computed summaries. NgRx is a practical fit when those flows grow beyond a small custom store.

## Run the lesson

```bash
npm install
npm run dev
```

## Previous lesson

Lesson 18 combined many Angular ideas in one capstone app. This lesson revisits the shared-state problem with the more formal NgRx architecture.
