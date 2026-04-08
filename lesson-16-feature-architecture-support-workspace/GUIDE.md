# Lesson 16 Guide: Feature Architecture

This lesson is about scaling Angular project structure.

By now, you know many Angular features individually. The next challenge is organizing them so a larger application remains understandable.

## Why Structure Matters

As projects grow, one big `app` folder quickly becomes hard to navigate.

Developers need clear answers to questions like:

- where do shared services live?
- where does reusable UI live?
- where do feature-specific pages live?
- where should layout code go?

This lesson answers those questions with a practical folder strategy.

## The Main Structure in This Lesson

The project uses areas such as:

- `core`
- `shared`
- `layout`
- `features`

This is not the only valid Angular structure, but it is a useful and realistic one.

## `core`

The `core` area usually contains application-wide concerns.

Examples:

- models used broadly across the app
- services that several features depend on
- infrastructure or central logic

If something belongs to the app as a whole rather than one feature, `core` is often the right place.

## `shared`

The `shared` area usually contains reusable UI pieces.

These are things that multiple features may use, but that are not themselves a business feature.

Examples:

- cards
- badges
- small presentational components

The important idea is that `shared` should stay general enough to be reused, not become a dumping ground for random unrelated code.

## `layout`

The `layout` area usually holds app shells and route framing.

This is where you put structures that define how major areas of the app are presented, such as:

- top-level navigation
- a workspace shell
- persistent sidebars or headers

Layout is about structure around features, not the features themselves.

## `features`

The `features` area is where domain-specific functionality lives.

Examples in this lesson include separate routed feature pages such as triage and handoff.

This is often the most important area in a real application because it lets the codebase grow by business capability rather than by technical file type alone.

## Why Route-Based Features Help

Route-based features naturally encourage separation.

Each feature can own:

- its pages
- its local UI
- its local logic
- its place in the user journey

That makes the code easier to scale than one flat folder full of unrelated files.

## The Big Lesson

This lesson is not just about folders.

It is about ownership.

Every part of the project should have a reason to exist in its chosen place.

Good structure reduces confusion and helps teams change the application safely.

## How to Study the Lesson

Start from the route map.

Then ask:

- what belongs to the app as a whole?
- what belongs to the shell?
- what belongs to reusable UI?
- what belongs only to one feature?

Those questions are more important than memorizing the folder names themselves.

## Exercises

1. Add a third feature page and place it correctly.
2. Move a reusable UI piece into `shared` if it is duplicated.
3. Add a new app-wide service to `core`.
4. Create a second shell-only layout concern and keep it out of feature code.

## Before Moving On

Make sure you understand:

- why large apps need a structure beyond one component tree
- what kinds of code belong in `core`, `shared`, `layout`, and `features`
- why route boundaries often align well with feature boundaries

The next lesson explores advanced UI integration, where rich user interactions add another layer of complexity.
