# Lesson 11: Directives and Pipes with a Support Inbox

This lesson is a Vite-based Angular application that teaches how to package reusable presentation behavior into a custom attribute directive and custom pipes.

## What this lesson teaches

- How to build a standalone custom attribute directive
- How to use `HostBinding` to control host element styles
- How to use `HostListener` to react to host events
- How to create standalone custom pipes for domain-specific formatting
- How directives and pipes reduce repeated view logic across templates

## Main files

- `src/app/directives/priority-emphasis.directive.ts`: reusable host styling and hover behavior
- `src/app/pipes/friendly-status.pipe.ts`: transforms internal status values into user-facing text
- `src/app/pipes/relative-time.pipe.ts`: formats timestamps into simple relative labels
- `src/app/app.component.html`: applies the directive and pipes in a realistic inbox screen

## Suggested exploration order

1. Open `priority-emphasis.directive.ts` and inspect the host bindings and host listeners.
2. Read both pipe files and compare their transform responsibilities.
3. Open `app.component.html` and find where each reusable piece is applied.
4. Change ticket priorities and statuses to see the directive and pipes update the view.
5. Consider how much repeated logic would appear in the template without these reusable pieces.

## Why this example is realistic

Support dashboards, admin tools, back-office screens, and internal workflows often repeat the same formatting and visual emphasis rules across many views. Directives and pipes help keep those rules consistent and reusable.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 12 will focus on performance and change-detection-oriented patterns.
