# Lesson 14: Interceptors and API Infrastructure with an Operations Overview

This lesson is a Vite-based Angular application that teaches how to centralize request behavior and error handling with `HttpClient` interceptors and a service layer.

## What this lesson teaches

- How to register functional interceptors with `provideHttpClient`
- How an interceptor can rewrite API URLs before the request is sent
- How an interceptor can attach shared headers such as auth or tracing metadata
- How to normalize HTTP failures into consistent application-level errors
- How a service layer keeps endpoint details out of components

## Main files

- `src/app/app.config.ts`: `HttpClient` registration with interceptor wiring
- `src/app/interceptors/api-infrastructure.interceptor.ts`: shared request and error behavior
- `src/app/services/operations-api.service.ts`: typed API access layer
- `public/mock-api/operations-overview.json`: mock API response used by the service

## Suggested exploration order

1. Open `operations-api.service.ts` and inspect the simple `/api/...` endpoint usage.
2. Read `api-infrastructure.interceptor.ts` and see how the URL is rewritten to `/mock-api/...`.
3. Inspect the interceptor error mapping and compare it to the component’s error handling.
4. Run the app and trigger the simulated failed request.
5. Notice how the component stays focused on view state rather than shared HTTP concerns.

## Why this example is realistic

As Angular applications grow, repeated request headers, base URLs, tracing IDs, auth tokens, and error normalization quickly become cross-cutting concerns. Interceptors are the right place for those concerns, while API services keep components thin and predictable.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 15 will focus on testing Angular components and services.
