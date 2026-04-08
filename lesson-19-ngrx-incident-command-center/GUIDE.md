# Lesson 19 Guide: NgRx State Management

This lesson introduces NgRx as a formal state-management architecture for Angular.

It builds directly on the earlier shared-state lesson, but adds more explicit structure.

## Why NgRx Exists

A simple store service works well for many applications.

But as applications grow, teams often need stronger conventions around:

- how state can change
- where async work happens
- how derived data is exposed
- how to reason about event history

NgRx answers that need with a clearer data-flow model.

## The Main Flow

The main NgRx flow in this lesson is:

1. A component dispatches an action.
2. A reducer updates state synchronously.
3. An effect reacts when async work is needed.
4. A success or failure action returns the async result to the store.
5. Selectors expose exactly what each UI region needs.

That flow matters because every responsibility has a clear home.

## What This Lesson Builds

The example is an incident command center.

This is a strong NgRx scenario because several UI regions need coordinated global state:

- toolbar filters
- async loading state
- a filtered incident list
- a selected incident detail panel
- summary counts

All of those areas depend on the same feature state.

## What to Look For

When you study the lesson, focus on these questions:

1. Which events are modeled as actions?
2. Which state changes happen in the reducer?
3. Which logic is derived in selectors instead of components?
4. Which work is side-effectful and therefore belongs in an effect?
5. How do components stay thin by reading selectors and dispatching actions?

## Why Selectors Matter

Selectors are one of the most valuable ideas in NgRx.

They let the store own read models such as:

- filtered collections
- summary counts
- the selected entity
- empty-state conditions

That keeps components from duplicating the same filtering and counting logic.

## Why Effects Matter

Reducers must stay pure.

That means reducers should not call APIs, generate random values, navigate, or write to storage.

Effects exist so async workflows can stay explicit without polluting reducers or components.

## Exercises

1. Add a new status filter action and selector.
2. Add a second effect that simulates saving a triage update.
3. Introduce another derived selector for unresolved high-priority incidents.
4. Add a failure banner component that reads only the error selector.
5. Refactor the incident collection into a normalized entity-style shape.

## Before Moving On

Make sure you understand:

- why actions are useful even though they add ceremony
- why reducers must stay pure
- why selectors should own derived state
- why effects are the right place for HTTP and other side effects

Once those boundaries make sense, NgRx stops feeling like extra boilerplate and starts feeling like a system for making application state predictable.
