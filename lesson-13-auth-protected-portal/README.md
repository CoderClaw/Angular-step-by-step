# Lesson 13: Authentication and Protected Flows with an Internal Portal

This lesson is a Vite-based Angular application that teaches how to protect routes, manage a mock authenticated session, and redirect unauthenticated users into a login flow.

## What this lesson teaches

- How to register guarded routes with Angular Router
- How to write a `CanActivateFn` guard
- How to redirect unauthenticated users to a login page
- How to preserve a `returnUrl` during login redirects
- How to store a small mock session in a service
- How protected UI and routing concerns work together

## Main files

- `src/app/services/auth.service.ts`: mock session handling and persistence
- `src/app/auth.guard.ts`: route protection logic and redirect behavior
- `src/app/app.routes.ts`: login, dashboard, and fallback routes
- `src/app/pages/login-page.component.ts`: mock sign-in flow
- `src/app/pages/dashboard-page.component.ts`: protected authenticated page

## Suggested exploration order

1. Open `src/app/app.routes.ts` and inspect which route is guarded.
2. Read `src/app/auth.guard.ts` and see how the redirect is produced.
3. Read `src/app/services/auth.service.ts` and inspect the mock session logic.
4. Run the app, navigate to `/dashboard` while logged out, and watch the guard redirect.
5. Sign in and confirm that the protected route becomes available.

## Why this example is realistic

Most business Angular applications have protected areas, authenticated navigation, and route-level access checks. Even when the real backend auth system is more complex, the frontend still needs the same basic pieces: session state, redirects, and guarded routes.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 14 will introduce interceptors and centralized API infrastructure patterns.
