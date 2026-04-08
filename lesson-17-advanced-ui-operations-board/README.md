# Lesson 17: Advanced UI Integration Patterns with an Operations Board

This lesson is a Vite-based Angular application that teaches how to combine Angular UI primitives with browser capabilities to build richer interactive workflows.

## What this lesson teaches

- How to use Angular CDK drag-and-drop in a standalone component
- How to coordinate selected-item state with a detail panel
- How to keep complex UI interactions predictable with immutable state updates
- How to integrate the browser Clipboard API from Angular event handlers
- How to structure interaction-heavy code so the template stays readable

## Main files

- `src/app/app.component.ts`: drag-drop logic, selected-item state, and clipboard integration
- `src/app/app.component.html`: board layout, drag-drop lists, and detail panel
- `src/app/app.component.css`: visual states for the board, selected card, and drag feedback
- `src/app/models/operations-board.model.ts`: typed board and task models
- `src/app/app.component.spec.ts`: component tests for board state transitions and clipboard integration

## Suggested exploration order

1. Open `app.component.ts` and inspect the task state and selected task computation.
2. Read the `drop()` method and see how the drag-drop event is mapped back into application state.
3. Inspect the template and notice where `cdkDropList`, `cdkDrag`, and `cdkDragHandle` are applied.
4. Review `copySelectedTaskSummary()` and see how Angular code can wrap browser APIs cleanly.
5. Run the app, drag tasks across columns, and copy the selected task summary.

## Why this example is realistic

Product teams often need boards, queues, planners, or operational dashboards where users drag work between states, inspect details, and share or copy structured updates. Angular applications rarely live on forms and tables alone; they often need these richer interaction patterns too.

## Run the lesson

```bash
npm install
npm run dev
npm test
```

## Next lesson

Lesson 18 will be the capstone application that combines the series concepts into one larger Angular project.
