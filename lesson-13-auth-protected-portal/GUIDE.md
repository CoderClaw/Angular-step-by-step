# Lesson 13 Guide: Authentication and Protected Flows

This lesson shows how Angular applications control access to certain routes and guide users through a login flow.

## Why This Matters

Many applications have areas that should only be available after sign-in.

Examples:

- internal admin pages
- customer account areas
- operational dashboards
- tools with sensitive data

That means the app must answer two questions:

- is the user authenticated?
- what should happen if they are not?

This lesson focuses on that flow.

## What the Example Builds

The example is a protected internal portal.

That is realistic because a portal usually includes:

- a login page
- a protected dashboard
- route-level access control
- redirect behavior when the user is not signed in

## Mock Authentication

This lesson usually uses a mock auth service rather than a real backend auth system.

That is a good teaching choice.

It keeps the focus on frontend behavior:

- storing a session-like state
- checking it in the router
- redirecting correctly
- restoring intended navigation after login

## Route Guards

Route guards are one of the main concepts here.

A guard decides whether navigation to a route should be allowed.

If the user is authenticated, the route can continue.

If not, the app can redirect them somewhere else.

This is a very common Angular pattern.

## `CanActivateFn`

Modern Angular supports functional route guards such as `CanActivateFn`.

This is useful because it keeps guard logic compact and easy to read.

The lesson likely shows how the guard:

- checks auth state
- redirects unauthenticated users
- preserves a return URL

## Why `returnUrl` Matters

The return URL is a very practical detail.

Without it, a user who gets redirected to login may lose the page they originally wanted.

With it, the app can send them back after successful authentication.

This makes the experience feel much more polished and realistic.

## Session State

Even in a mock app, the frontend still needs session state.

That means a service often owns:

- whether the user is logged in
- who the current user is
- how login and logout update state

This continues the same pattern from earlier lessons: components and routes react to state, while services own the underlying logic.

## How to Study the Lesson

Read it in this order:

1. Inspect the route definitions.
2. Identify which routes are protected.
3. Read the guard and understand the allow vs redirect logic.
4. Read the auth service and see how session state is modeled.
5. Read the login page and trace the return flow.

That reading order mirrors the actual navigation flow.

## The Big Lesson

Authentication in frontend code is not only about showing or hiding a button.

It is about controlling navigation and preserving user intent in a predictable way.

This is why routing and session state must work together.

## Exercises

1. Add a logout button that returns the user to login.
2. Add another protected route.
3. Show the current user name in the dashboard.
4. Add a small message that explains why a redirect happened.

## Before Moving On

Make sure you understand:

- what a route guard does
- why a session service is useful
- why `returnUrl` improves the login flow
- why auth is often a routing concern as much as a UI concern

The next lesson moves into interceptors and centralized API infrastructure, which expands the app-wide side of Angular even further.
