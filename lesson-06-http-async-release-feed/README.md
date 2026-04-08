# Lesson 06: HTTP and Async Data with a Release Feed

This lesson is a Vite-based Angular application that teaches how to load API data with `HttpClient` and how to represent loading, success, and error states in the UI.

## What this lesson teaches

- How to register `HttpClient` with `provideHttpClient`
- How to create an Angular service that wraps an HTTP request
- How `HttpClient.get<T>()` uses typed API responses
- How a component reacts to loading, success, and error states
- How to keep API logic inside a service instead of in the template
- How to use a mock API endpoint during frontend development

## Main files

- `src/app/app.config.ts`: global `HttpClient` registration
- `src/app/services/release-feed.service.ts`: typed API request and response transformation
- `src/app/app.component.ts`: async UI state and request lifecycle
- `public/mock-api/release-feed.json`: mock API payload served by Vite

## Suggested exploration order

1. Open `public/mock-api/release-feed.json` and inspect the response shape.
2. Read `src/app/release-item.model.ts` and compare it to the mock payload.
3. Read `src/app/services/release-feed.service.ts` and inspect the typed HTTP call.
4. Read `src/app/app.component.ts` and trace the loading, success, and error states.
5. Run the app, refresh the feed, and watch how the UI responds during the async request.

## Why this example is realistic

Many Angular applications need to fetch dashboards, release notes, notifications, or content feeds from an API. Even when the backend is still in progress, frontend teams often develop against a mock endpoint first and keep the same `HttpClient` structure.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 07 will focus on RxJS essentials for Angular, including stream composition and live search behavior.
