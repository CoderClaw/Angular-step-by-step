# Lesson 11 Guide: Directives and Pipes

This lesson introduces two Angular tools that help you reuse behavior and formatting directly in templates.

## Why Directives and Pipes Matter

As templates grow, two kinds of repetition often appear:

- repeated UI behavior
- repeated formatting rules

If that logic stays duplicated in every component, templates become noisy and hard to maintain.

Directives and pipes solve those two problems in different ways.

## Directives

A directive adds behavior to an existing element.

It does not necessarily create a whole new component. Instead, it enhances an element that already exists.

This is useful when you want reusable behavior such as:

- emphasis for priority levels
- hover interaction
- dynamic classes or styles
- host event handling

### `HostBinding`

`HostBinding` lets a directive bind values directly to the host element.

That means the directive can control things like:

- CSS classes
- inline styles
- ARIA attributes

### `HostListener`

`HostListener` lets a directive react to events on its host element.

That means the directive can respond to:

- clicks
- mouseenter and mouseleave
- keyboard events

Together, `HostBinding` and `HostListener` make directives a powerful way to package reusable UI behavior.

## Pipes

A pipe transforms a value for display in the template.

It is usually used when you want formatting logic to stay out of the component class.

Examples:

- turning a status code into a friendlier label
- formatting relative time
- converting domain values into UI-friendly text

Pipes are especially useful because they keep templates readable while still making formatting rules reusable.

## Why This Lesson Uses a Support Inbox

A support inbox is a good example because it naturally has:

- status labels
- priority emphasis
- dates and times
- repeated rows of similar data

That makes it a practical place to teach both directives and pipes.

## The Big Design Lesson

This lesson is really about choosing the right form of reuse.

Use a component when you are reusing a chunk of UI structure.

Use a directive when you are reusing behavior on existing elements.

Use a pipe when you are reusing display transformation logic.

That distinction is very important in Angular design.

## How to Study the Lesson

Read it in this order:

1. Identify the repeated formatting problems.
2. See which ones are solved with pipes.
3. Identify the repeated UI behavior problems.
4. See which ones are solved with a directive.

This helps you connect the code choice to the problem being solved.

## Exercises

1. Add another custom pipe for a display value.
2. Extend the directive with another host style or class rule.
3. Add keyboard behavior to the directive.
4. Replace one inline formatting expression with a reusable pipe.

## Before Moving On

Make sure you understand:

- what a directive is good for
- what a pipe is good for
- why not all reuse should become a component

The next lesson moves into performance and change detection, where Angular efficiency becomes a more explicit concern.
