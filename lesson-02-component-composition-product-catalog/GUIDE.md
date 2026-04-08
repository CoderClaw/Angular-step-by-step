# Lesson 02 Guide: Component Composition

This lesson builds on Lesson 1. You already know that Angular apps are made of components. Now the goal is to learn that a real page is usually not one giant component.

Instead, Angular applications are usually composed from smaller components with clear responsibilities.

## What Changes in This Lesson

In Lesson 1, one root component handled the whole page.

In Lesson 2, the page is split into smaller pieces such as:

- a filtering area
- a product list
- a product card or summary
- a product detail area

This teaches one of the most important frontend design ideas:

Break a large screen into smaller units that are easier to understand, reuse, and test.

## The Main Problem This Lesson Solves

If one component does everything, it becomes difficult to maintain.

A large component usually has these problems:

- too many properties in one class
- too much template logic in one file
- repeated UI blocks
- unclear ownership of state and events

Component composition solves this by letting each component focus on one part of the page.

## Parent and Child Components

This lesson introduces a parent-child relationship.

The parent component usually:

- owns the main state
- decides what data to pass down
- reacts to events coming back up

The child component usually:

- receives data from the parent
- renders one focused part of the UI
- emits events when the user interacts with it

This creates a very common Angular pattern:

Data flows down. Events flow up.

## `input()`

Child components need a way to receive data.

Modern Angular provides this through `input()`.

You can think of an input as:

"A value the parent gives to the child."

Examples in a product catalog might include:

- the list of products to show
- the selected product
- the current filter value
- the details for one card

Inputs make components configurable. The child does not need to know where the data came from. It only needs to know how to render it.

## `output()`

Child components also need a way to communicate user actions back to the parent.

That is what `output()` is for.

You can think of an output as:

"An event the child raises so the parent can respond."

Examples in this lesson likely include:

- the user selected a product
- the user changed a filter
- the user clicked a card

This is important because child components should not directly control parent state. Instead, they notify the parent, and the parent decides what to do.

## Why This Pattern Matters

This is not just an Angular-specific detail. It is a broader UI architecture principle.

When components have clear inputs and outputs:

- they are easier to reuse
- they are easier to reason about
- they are easier to test
- they are less tightly coupled

In other words, component composition is how you prevent a growing app from turning into one massive, fragile file.

## How to Read This Lesson

A good way to study this project is:

1. Find the top-level page component.
2. Identify which parts of the screen were extracted into child components.
3. For each child, ask two questions:
   What data does it receive?
   What events does it emit?
4. Trace how the parent updates its own state when those outputs fire.

That reading strategy is more useful than memorizing syntax.

## The Mental Model to Keep

In Lesson 1, the key mental model was:

State changes, then Angular updates the template.

In Lesson 2, add this second mental model:

The parent coordinates state, while child components focus on presentation and interaction boundaries.

## Common Beginner Mistakes

When learning component composition, beginners often:

- put too much logic inside child components
- mutate parent-owned data from a child
- create too many tiny components too early
- pass too much unrelated data into one child

The lesson should help you see a better balance.

A component should be extracted when it represents a meaningful UI unit, not just because a file got a little longer.

## What to Practice

Try these exercises after reading the code:

1. Add one more product field and pass it through the component tree.
2. Create a new output event for a secondary action.
3. Move one repeated UI section into its own child component.
4. Rename one input to make its purpose clearer and update every usage.

These exercises strengthen your understanding of how components collaborate.

## Before Moving On

Make sure you can answer these questions:

- Why split a page into child components?
- What is the difference between an input and an output?
- Why should the parent usually own the main state?
- How do child components stay reusable?

Once those ideas are comfortable, reactive forms in the next lesson will make much more sense.
