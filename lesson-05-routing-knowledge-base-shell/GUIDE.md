# Lesson 05 Guide: Routing

This lesson is where the series starts to feel like a real application instead of a single-screen demo.

Routing lets Angular respond to different URLs and display different screens inside the same application.

## Why Routing Matters

Without routing, every feature has to live on one page or be manually shown and hidden.

That becomes difficult quickly.

Most real Angular applications need:

- multiple pages or views
- navigation between sections
- URLs that represent where the user is
- the ability to link directly to a specific screen

Routing solves those problems.

## What This Lesson Builds

The example is a knowledge base shell.

That is a good routing example because a knowledge base naturally fits multiple sections:

- a home or landing area
- article lists
- article detail pages
- fallback behavior for unknown routes

It also introduces the idea of a persistent app shell around routed content.

## The Router's Job

Angular Router watches the browser URL and decides which component should be displayed.

At a high level, the process is:

1. The user navigates to a URL.
2. Angular compares that URL against route definitions.
3. The matching route determines which component to render.
4. Angular places that component into a `RouterOutlet`.

This is the core routing mental model.

## Route Definitions

Routes are usually configured as an array.

Each route typically answers questions like:

- which path should match?
- which component should render?
- should this path redirect somewhere else?
- does this route expect parameters?

This lesson likely includes:

- a default route
- one or more standard content routes
- a route with a parameter
- a wildcard route

That is a very realistic starting set.

## `provideRouter(...)`

The router is registered at the application level with `provideRouter(routes)`.

This matters because routing is an app-wide concern, not a local component concern.

When Angular receives that provider, it registers the services and route configuration needed for navigation to work.

## `RouterOutlet`

The `RouterOutlet` is the placeholder where routed components appear.

This is one of the most important pieces to understand.

The app shell stays visible, and the outlet is the place where the current route's component gets rendered.

That is how Angular supports a layout with persistent navigation and changing page content.

## `routerLink` and `routerLinkActive`

Navigation in Angular usually uses `routerLink` instead of raw anchor tags.

That is because Angular wants to manage navigation inside the application without forcing a full page reload.

`routerLinkActive` is helpful because it lets the UI reflect which section is active.

This is useful for menus, tabs, and app shells.

## Route Parameters

Some routes need dynamic values.

For example, an article detail page might need an id or slug.

Route parameters let one route definition support many specific URLs.

This is an important step because it turns routing from simple page switching into data-aware navigation.

## Redirects and Wildcards

Two practical routing features appear early for a good reason.

### Redirects

Redirects are useful when:

- the empty path should go to a default page
- an older route should point to a newer one

### Wildcard routes

Wildcard routes catch unmatched URLs.

This is important because users can type bad URLs, follow old links, or arrive from bookmarks.

The app should respond gracefully instead of breaking.

## The Big Architectural Lesson

Routing changes how you think about application structure.

Instead of one page with many toggled sections, the app becomes a set of navigable features connected by URLs.

That makes the application:

- easier to navigate
- easier to share
- easier to extend
- easier to reason about

## How to Study This Lesson

Use this reading order:

1. Read `app.routes.ts` first.
2. Understand each path and which component it renders.
3. Then read the shell component and locate the `RouterOutlet`.
4. Finally, inspect how links are wired to the router.

This order mirrors how Angular itself thinks about navigation.

## Exercises

Try these changes:

1. Add one new route and link to it from the shell.
2. Change the default redirect.
3. Add another route parameter and display it.
4. Create a friendlier wildcard page.

## Before Moving On

Make sure you understand:

- what a route definition is
- what `RouterOutlet` does
- why `routerLink` is used instead of plain links inside the app
- how route parameters let one page template handle many URLs

The next lesson introduces HTTP and async data, which is where Angular starts communicating with external data sources.
