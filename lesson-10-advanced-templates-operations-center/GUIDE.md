# Lesson 10 Guide: Advanced Templates

This lesson explores a different side of Angular reuse.

Earlier lessons reused logic and components. This lesson focuses on reusing template structure in more flexible ways.

## Why Advanced Templates Matter

Sometimes a component should provide structure without fully controlling the content inside it.

Examples:

- a panel shell that always has a consistent frame
- a list container that lets the parent decide how rows render
- a reusable area for actions, headers, or empty states

This is where Angular template features become very useful.

## Main Concepts in This Lesson

This lesson likely includes:

- `ng-content`
- `ng-template`
- `ngTemplateOutlet`

These features are about making components flexible without turning them into copy-pasted markup.

## `ng-content`

`ng-content` lets a parent project content into a child component.

You can think of it as giving the child a slot where the parent can place custom markup.

This is useful when the child should own the outer structure, but not every inner detail.

## `ng-template`

`ng-template` defines a piece of template content without rendering it immediately.

It is like storing a template fragment so it can be used later.

This is useful when the same structure is needed conditionally or in a reusable rendering pattern.

## `ngTemplateOutlet`

`ngTemplateOutlet` renders a template reference where needed.

This is especially helpful when a reusable component should accept a parent-defined rendering strategy.

That is a more advanced form of reuse than simply passing data through inputs.

## Why This Is an Important Step

Not all reuse is about extracting another ordinary child component.

Sometimes the reusable thing is not a single fixed UI block.

Sometimes it is:

- a layout pattern
- a shell
- a row rendering strategy
- a customizable empty state

Angular templates provide tools for that level of flexibility.

## What to Focus On

When reading the lesson, ask:

- which parts of the UI are fixed by the reusable component?
- which parts are supplied by the parent?
- why is projection or a template outlet a better fit than plain inputs here?

Those questions help you understand the design reason, not just the syntax.

## Common Beginner Confusion

This lesson often feels abstract at first.

That is normal.

The important thing to remember is:

Inputs pass data.
Content projection and templates pass pieces of UI structure.

That is the conceptual difference.

## Exercises

1. Add another projected action area.
2. Add a different parent-provided row template.
3. Create an empty-state template for one reusable component.
4. Replace a repeated wrapper section with a shell component.

## Before Moving On

Make sure you understand:

- what content projection solves
- why `ng-template` is useful
- when `ngTemplateOutlet` is a better choice than another input

The next lesson moves into directives and pipes, which are another kind of reusable Angular building block.
