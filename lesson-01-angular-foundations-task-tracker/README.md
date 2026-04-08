# Lesson 01: Angular Foundations with Vite

This lesson is a small Angular task tracker built with TypeScript and Vite.

## What this lesson teaches

- How a standalone Angular application is structured
- How `bootstrapApplication` starts the app
- How component state drives the template
- How interpolation displays values in the UI
- How event binding reacts to user actions
- How `[(ngModel)]` supports simple form input
- How modern Angular control flow uses `@if` and `@for`
- How TypeScript interfaces keep application data explicit

## Project structure

- `src/main.ts`: application entry point
- `src/app/app.config.ts`: global app configuration
- `src/app/task.model.ts`: typed task model for the lesson
- `src/app/app.component.ts`: lesson logic and state
- `src/app/app.component.html`: commented template examples
- `src/app/app.component.css`: simple, responsive styling

## Run the lesson

```bash
npm install
npm run dev
```

## Suggested exploration order

1. Open `src/app/task.model.ts` and inspect the `Task` interface.
2. Read `src/app/app.component.ts` and identify the component state.
3. Match each property and method to where it is used in the template.
4. Run the app and test adding, toggling, filtering, and removing tasks.
5. Change the starter data to see how Angular updates the page.

## Why this example is realistic

Even simple business applications often start with screens like this: a form, a list, a filter, and derived counters. The lesson stays small, but the patterns are the same ones used in larger Angular applications.

## Next lesson

Lesson 02 will split a larger page into reusable components and introduce typed parent-child communication.
