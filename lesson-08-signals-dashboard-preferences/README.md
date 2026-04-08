# Lesson 08: Angular Signals with Dashboard Preferences

This lesson is a Vite-based Angular application that teaches how signals model local state directly in a component and how `computed()` and `effect()` build on top of that state.

## What this lesson teaches

- How to create local state with `signal()`
- How to derive UI state with `computed()`
- How to react to state changes with `effect()`
- How signal updates stay synchronous and explicit inside a component
- How to persist preferences without subscriptions
- How signal-based state differs from the RxJS-based approach in the previous lesson

## Main files

- `src/app/app.component.ts`: signals, computed values, and persistence effect
- `src/app/dashboard-tile.model.ts`: typed dashboard and preferences models

## Suggested exploration order

1. Open `src/app/app.component.ts` and identify the source signals.
2. Inspect `visibleTiles`, `totalTiles`, and other computed values.
3. Read the `effect()` block and note why persistence is a side effect rather than derived state.
4. Run the app and change filters to see computed values update immediately.
5. Refresh the page and confirm that the persisted signal state returns.

## Signals vs RxJS in this sequence

- Lesson 07 used RxJS streams for multi-event async composition.
- Lesson 08 uses signals for synchronous local state and derived UI.
- In real Angular apps, both approaches often coexist: signals for component-local state, RxJS for async streams and external event sources.

## Why this example is realistic

Dashboard preferences, panel visibility, saved widgets, compact mode, and view filters are all common pieces of state in internal tools and admin applications. Signals are a good fit when the state is local, synchronous, and heavily read by the template.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 09 will build on this with larger shared-state patterns across multiple parts of an application.
