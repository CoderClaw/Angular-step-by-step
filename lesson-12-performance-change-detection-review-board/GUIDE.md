# Lesson 12 Guide: Performance and Change Detection

This lesson introduces performance thinking in Angular.

Up to now, the lessons focused mostly on correctness and structure. This lesson adds another question:

How can the UI stay responsive as the amount of data grows?

## Why Performance Matters

Many business applications render:

- large lists
- dashboards
- queues
- review boards
- reporting tables

If Angular updates too much work too often, the interface becomes slower and harder to use.

This lesson shows some of the techniques Angular developers use to keep rendering efficient.

## `OnPush`

One of the main ideas in this lesson is `ChangeDetectionStrategy.OnPush`.

Normally, Angular checks components for changes very often.

With `OnPush`, Angular becomes more selective about when it needs to re-evaluate a component.

This can improve performance because Angular avoids unnecessary work.

The tradeoff is that the code must follow clearer state-update patterns.

## Why Immutable Updates Matter Here

When using performance-oriented patterns, immutable updates become especially important.

Instead of mutating arrays or objects in place, the code creates new references.

That makes state transitions clearer and helps Angular detect meaningful changes more reliably.

This is why lessons about performance often repeat the importance of immutable data updates.

## Tracking Repeated Lists

Large lists can be expensive to rerender.

Angular needs a way to understand which items are actually new, changed, or removed.

That is why tracked list rendering matters.

If Angular can identify items predictably, it avoids replacing more DOM than necessary.

## Incremental Rendering Thinking

Performance is not only about one Angular setting.

It is also about designing the UI carefully.

For example:

- render only what is needed
- derive values efficiently
- avoid unnecessary recalculation
- keep row components focused

This lesson likely shows those ideas through a review board or moderation queue.

## What the Example Teaches

A review board is a good performance lesson because it simulates a screen with many repeated items and frequent state changes.

That is exactly the kind of place where poor change-detection habits become visible.

## The Main Mindset Shift

The key shift is this:

Do not only ask whether the UI works.

Also ask whether the UI updates efficiently.

That is a more advanced frontend skill, but it matters a lot in real applications.

## How to Study the Lesson

Read it in this order:

1. Find where `OnPush` is enabled.
2. Inspect how the data is updated.
3. Observe how the repeated list is tracked.
4. Identify where derived or computed values reduce unnecessary work.

That reading strategy will reveal the lesson much more clearly than starting from the CSS or markup.

## Exercises

1. Add another list action and keep the update immutable.
2. Remove the tracking expression temporarily and observe the difference in code intent.
3. Create another small row component and consider whether `OnPush` belongs there too.
4. Add another derived summary value without duplicating source state.

## Before Moving On

Make sure you understand:

- what `OnPush` is trying to optimize
- why immutable updates help Angular
- why list tracking matters in repeated UIs

The next lesson moves into authentication and protected flows, where routing and state combine in another real application pattern.
