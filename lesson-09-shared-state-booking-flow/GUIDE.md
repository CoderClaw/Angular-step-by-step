# Lesson 09 Guide: Shared State Patterns

This lesson moves from local state inside one component to shared state used by multiple parts of the UI.

That is a major architectural step.

## Why Shared State Matters

Many applications have several UI areas that all depend on the same underlying data.

Examples:

- a filter panel
- a results list
- a summary panel
- a selected item preview

If each component keeps its own separate version of the data, the UI becomes inconsistent.

Shared state solves that by creating one central source of truth.

## What This Lesson Builds

The example is a booking flow.

This is a strong shared-state example because booking interfaces often have several coordinated pieces:

- the current filters
- the available offers
- the selected option
- the booking summary

All those pieces must stay synchronized.

## The Main Pattern

This lesson likely uses a store-like service.

That service becomes the owner of state that multiple components care about.

Instead of one component passing everything through many levels, each relevant component can read from the shared service.

This is helpful because it reduces tangled parent-child chains and keeps coordination logic in one place.

## Why This Is Not Yet a Full State Library

This lesson is important because it teaches the pattern without requiring a large external state-management library.

The idea is simpler:

- keep shared state in one place
- expose read methods or computed state
- expose meaningful update methods

That gives you the benefit of central coordination without unnecessary complexity.

## The Role of a Store-Like Service

A store-like service usually answers questions like:

- what is the current filter state?
- what item is selected?
- what data should be visible right now?
- how do I update one part of the shared state safely?

This is why the service often exposes both:

- current or computed data
- methods that change that data

## Why This Pattern Is Better Than Duplicating State

If the filter component owns one version of the current filter and the summary panel owns another, bugs appear quickly.

Shared state avoids that problem by making one place authoritative.

That is why people often call it a single source of truth.

## How to Study the Lesson

Read it this way:

1. Identify what data is shared.
2. Find where that state is owned.
3. Find which components read it.
4. Find which methods update it.
5. Observe how one user action affects several UI regions.

That last step is the most important one.

## What This Teaches Beyond the Example

The booking flow is just one scenario.

The bigger lesson is about coordination.

Whenever several components must stay in sync, a central shared state owner is often the cleanest solution.

## Exercises

1. Add a new filter and make all dependent UI update correctly.
2. Add another summary field derived from the selected booking.
3. Add a reset action in the store.
4. Move one piece of duplicated logic into the shared service.

## Before Moving On

Make sure you understand:

- why several components should not own copies of the same state
- what a single source of truth means
- what responsibilities belong in the shared store service

The next lesson explores advanced templates, which focuses more on flexible UI composition than shared state.
