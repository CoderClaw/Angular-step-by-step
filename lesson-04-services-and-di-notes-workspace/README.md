# Lesson 04: Services and Dependency Injection with a Notes Workspace

This lesson is a Vite-based Angular application that teaches how to move data logic and persistence out of a component and into an injected service.

## What this lesson teaches

- How to create an Angular service with `@Injectable`
- How `providedIn: 'root'` makes a service available through Angular DI
- How to use `inject()` inside a standalone component
- How to keep persistence and mutation rules out of the UI component
- How local storage can be hidden behind a service API
- How components can focus on view state while services manage application data

## Main files

- `src/app/services/notes.service.ts`: note storage, loading, saving, and mutation logic
- `src/app/app.component.ts`: UI state and service usage through dependency injection
- `src/app/note.model.ts`: note types used across the app

## Suggested exploration order

1. Open `src/app/note.model.ts` and inspect the note shape.
2. Read `src/app/services/notes.service.ts` and find where storage is isolated.
3. Read `src/app/app.component.ts` and notice how `inject()` gives the component access to the service.
4. Run the app, add notes, pin notes, archive notes, and refresh the page to confirm persistence.
5. Compare the component code with earlier lessons and notice how much less data logic it now owns.

## Why this example is realistic

Real Angular applications often need to persist small pieces of data, coordinate mutations, and share logic across screens. A service is the natural home for that work, while components stay focused on rendering and user interaction.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 05 will introduce routing and turn a single-screen app into a small multi-page Angular application shell.
