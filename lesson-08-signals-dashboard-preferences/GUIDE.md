# Lesson 08 Guide: Angular Signals

This lesson introduces Angular signals, which are a modern reactive way to manage local application state.

You have already seen derived state with getters and reactive streams with RxJS. Signals give Angular another tool for state that is especially good for local synchronous reactivity.

## What Signals Solve

Many UI values depend on other UI values.

Examples:

- a selected filter
- whether a panel is visible
- a computed count
- user preferences stored locally

These values often change in direct response to user actions. Signals make those relationships explicit.

## The Main Building Blocks

This lesson likely introduces three key functions:

- `signal()`
- `computed()`
- `effect()`

### `signal()`

A signal stores a reactive value.

It is similar to a normal property, but Angular can track when it changes.

This makes it useful for UI state that changes over time.

### `computed()`

A computed signal derives one value from other signals.

This is similar in spirit to a getter, but now Angular tracks the dependencies automatically.

That means the computed value updates when the signals it depends on change.

### `effect()`

An effect runs side-effect logic in response to signal changes.

This is useful for things like:

- persisting preferences
- logging
- syncing state to browser APIs

The key point is that effects are for side effects, not for replacing every other form of logic.

## Why This Lesson Uses Preferences

Preferences are a good teaching example because they are:

- local to the app
- reactive in the UI
- often persisted to local storage

That makes them a natural fit for signals.

You can see clearly how:

- a user changes a preference
- the signal updates
- the UI reacts
- the new value can be persisted

## Signals vs RxJS

Signals and RxJS are both reactive, but they are not the same tool.

Signals are often a great fit for:

- local synchronous UI state
- derived values inside a component or store-like service
- template-facing state

RxJS is often a better fit for:

- async streams
- event coordination over time
- HTTP and stream composition

This lesson is important because it helps you see where signals are a cleaner solution than a full Observable pipeline.

## The Key Mental Model

With signals, Angular can automatically understand:

- what value changed
- which derived values depend on it
- which parts of the template need to update

That makes signal-based code feel direct and readable for local state.

## How to Study This Lesson

Read it in this order:

1. Find the base signals.
2. Find the computed signals that derive from them.
3. Find the effect that persists or synchronizes values.
4. Trace how the template reads the signal state.

That reading order helps you see the dependency graph instead of just the syntax.

## Exercises

1. Add one more preference and persist it.
2. Create another computed value from the existing signals.
3. Remove one derived getter and rewrite it with `computed()`.
4. Add a reset button that restores default preferences.

## Before Moving On

Make sure you understand:

- what a signal stores
- what `computed()` is doing
- why `effect()` is different from computed state
- why preferences are a good use case for signals

The next lesson uses shared state across components, which is where these ideas become even more useful.
