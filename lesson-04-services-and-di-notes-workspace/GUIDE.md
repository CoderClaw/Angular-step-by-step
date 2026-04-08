# Lesson 04 Guide: Services and Dependency Injection

This lesson introduces a new kind of Angular building block: the service.

Until now, most of the application behavior lived directly inside components. That works for small demos, but real applications usually need logic that should not belong to the UI layer.

## Why Services Exist

Components are mainly responsible for presentation and interaction.

They should answer questions like:

- what should the user see?
- what happens when a button is clicked?
- which values are currently shown?

But they should not necessarily own everything else.

For example:

- persistence
- data transformations
- shared business logic
- state used in more than one place

Those responsibilities often belong in a service.

## What This Lesson Demonstrates

The example is a notes workspace.

That is a good service lesson because the app needs to:

- store notes
- add, remove, and update notes
- persist notes in local storage
- keep those responsibilities organized

Instead of putting all of that directly in the component, the lesson places the note logic in a service.

## What a Service Is

A service is usually a plain TypeScript class that Angular manages through dependency injection.

That means Angular can create the class for you and provide it wherever it is needed.

The service becomes a shared place for logic that is not primarily about rendering HTML.

## `@Injectable`

The `@Injectable(...)` decorator tells Angular that the class participates in the dependency injection system.

In this lesson, you will likely see:

- `providedIn: 'root'`

That means Angular creates one application-wide instance in the root injector.

This matters because every component that injects the service gets access to the same shared instance.

That is how a service can act as a central logic or state owner.

## Dependency Injection

Dependency injection is the mechanism Angular uses to supply objects to classes that need them.

Instead of doing this manually:

- `const service = new NotesService()`

Angular lets you declare the dependency and it provides the instance.

This is useful because Angular can control:

- how the instance is created
- how long it lives
- whether it is shared
- what implementation should be used

That leads to cleaner code and easier testing.

## The Main Design Lesson

The biggest lesson here is not just how to use a service.

It is how to separate responsibilities.

The notes component should mostly describe the interface.

The notes service should mostly describe the note behavior and persistence.

This kind of separation makes apps easier to read and change.

## Local Storage as a Teaching Tool

This lesson uses local storage.

That is a good educational choice because it introduces persistence without needing a real backend.

You can learn the core architectural idea:

The component asks for data and triggers actions, but the persistence details stay elsewhere.

Later, local storage could be replaced with HTTP or another backend source without forcing the component to own all that logic.

## How to Read the Lesson

Study it in this order:

1. Read the model file and understand what a note looks like.
2. Read the service and identify every responsibility it owns.
3. Notice where local storage is read and written.
4. Then read the component and compare how much smaller it becomes because the service exists.

That comparison is the real value of the lesson.

## The Service API

A good service exposes a clear set of methods.

In a notes example, that usually means methods like:

- get all notes
- add a note
- update a note
- delete a note
- toggle a flag like pinned or archived

This is useful because the component does not need to know the implementation details. It just asks the service to perform meaningful actions.

## Why This Pattern Scales

As applications grow, the same pattern becomes more valuable.

If logic stays inside components, the app becomes harder to maintain.

If logic is moved into services where appropriate, the code tends to become:

- more organized
- easier to test
- easier to reuse
- easier to extend

## Common Mistakes to Avoid

When beginners first learn services, they sometimes:

- move every piece of code into a service even when it belongs in the component
- let components and services both partially own the same logic
- create services with unclear responsibilities

The goal is balance.

Use a service when logic should live outside the UI layer, especially when it is about data, coordination, or persistence.

## Exercises

Try these changes:

1. Add a method that edits an existing note.
2. Add a new property to the note model and persist it.
3. Create a derived service method that returns only archived notes.
4. Replace starter data with your own categories.

## Before Moving On

Make sure you can answer:

- what a service is
- why dependency injection is useful
- what `providedIn: 'root'` means
- why local storage logic belongs in the service rather than the component

The next lesson introduces routing, which expands Angular from a single page into a multi-page application structure.
