# Lesson 01 Guide: Angular Foundations

This guide explains the ideas behind Lesson 1 in a slower, more didactic way than the main README. It is written for someone who is just starting with Angular and wants to understand not only what the code does, but also why Angular is structured this way.

## What You Are Building

In this lesson, you work with a small task tracker.

The app lets you:

- see a list of tasks
- add a new task
- mark a task as completed
- remove a task
- filter tasks by status
- display counters such as total, completed, and open tasks

This is a very good first Angular example because it includes the basic ingredients of many real interfaces:

- some data
- some user input
- some buttons
- a list rendered from state
- some derived values shown in the UI

Even though the app is small, the same ideas will appear again in larger Angular projects.

## The Main Idea of Angular

Angular is a framework for building user interfaces with components.

A component usually has two sides:

- TypeScript code that holds state and behavior
- an HTML template that describes what the UI should look like

The important idea is this:

The template is a reflection of the component state.

That means you usually do not manually edit the DOM yourself. Instead, you change the component data, and Angular updates the screen for you.

In this lesson, when `tasks`, `newTaskTitle`, or `selectedFilter` changes, Angular recalculates the template and shows the new result.

## Project Structure

Start by looking at these files:

- `src/main.ts`
- `src/app/app.config.ts`
- `src/app/task.model.ts`
- `src/app/app.component.ts`
- `src/app/app.component.html`

Each file has a different responsibility.

### `src/main.ts`

This is the entry point of the app.

Its job is to start Angular in the browser.

The key function is `bootstrapApplication(...)`.

You can think of bootstrapping as:

"Start Angular and render this root component as the application."

Angular needs a starting point, and the root component becomes that starting point.

### `src/app/app.config.ts`

This file contains application-level configuration.

In later lessons, this is where you will often register things like:

- routing
- HTTP features
- global providers

In Lesson 1, the configuration is small because the app is intentionally simple.

### `src/app/task.model.ts`

This file defines the shapes of your data with TypeScript.

The `Task` interface says that every task should have:

- an `id`
- a `title`
- a `completed` flag

This is important because it makes your data explicit.

Without types, it becomes easier to accidentally create inconsistent objects. With types, TypeScript helps you catch mistakes earlier.

The `TaskFilter` type is also useful. It restricts the allowed filter values to:

- `"all"`
- `"open"`
- `"completed"`

That makes the filtering logic easier to reason about and safer to maintain.

## Understanding the Root Component

The main lesson lives in `src/app/app.component.ts`.

This file defines the root component of the app.

At the top, the `@Component(...)` decorator tells Angular how this component should behave.

Important parts of that decorator are:

- `selector`: the HTML tag Angular uses for the component
- `standalone: true`: this component does not need an Angular NgModule
- `imports`: other Angular features this component uses
- `templateUrl`: the HTML template file
- `styleUrl`: the CSS file

### Why `standalone: true` matters

Modern Angular often uses standalone components instead of older NgModule-heavy patterns.

That means the component declares its own dependencies directly.

For example, this lesson imports:

- `CommonModule`
- `FormsModule`

That tells Angular which template features are available in this component.

## Component State

Inside the class, you will see several properties.

These properties are the component state.

### `newTaskTitle`

This stores what the user is typing in the input field.

Angular connects it to the template with `[(ngModel)]`, which is a two-way binding feature from `FormsModule`.

That means:

- when the user types, `newTaskTitle` updates
- when `newTaskTitle` changes in code, the input updates too

For a beginner, this is one of the clearest examples of Angular linking UI and state.

### `selectedFilter`

This stores which filter is currently active.

It is not domain data like the tasks themselves. It is view state.

That distinction is useful:

- domain data describes the business objects in the app
- view state describes how the user is currently looking at the app

Real Angular applications almost always have both kinds.

### `tasks`

This is the main list of task data.

The lesson starts with seed data so the UI is meaningful immediately.

That is a good teaching choice because beginners can explore rendering and interaction without first needing to create data manually.

## Derived State with Getters

The component also includes getters:

- `totalTasks`
- `completedTasks`
- `openTasks`
- `visibleTasks`

These are not stored separately. They are calculated from the existing state.

This is called derived state.

For example, `completedTasks` is derived from `tasks` by counting how many are completed.

This is often better than storing both the tasks and a separate completed count, because duplicated state can get out of sync.

If Angular can compute a value from a single source of truth, that is usually simpler.

## Template Basics

The template in `src/app/app.component.html` is where Angular expressions and bindings appear.

This lesson introduces several of the most important template ideas.

### Interpolation

Interpolation uses `{{ ... }}`.

It lets you display a value from the component inside the template.

Examples in a lesson like this usually include:

- counters
- task titles
- labels derived from state

When the component value changes, Angular updates the displayed text.

### Event Binding

Event binding uses syntax like `(click)="..."`.

It tells Angular to run some component code when a browser event happens.

In this task tracker, button clicks trigger actions such as:

- adding a task
- toggling completion
- removing a task
- changing the filter

This is how user interaction enters the component logic.

### Two-Way Binding with `[(ngModel)]`

Two-way binding is a combination of:

- reading a value from the component
- writing changes back to the component

This lesson uses it for the input where the user types a new task title.

This is a good early teaching tool because it makes form input easy to understand before moving to more advanced forms in later lessons.

## Modern Angular Control Flow

This lesson also introduces modern Angular control flow.

Instead of older structural directive syntax like `*ngIf` and `*ngFor`, newer Angular versions support block syntax such as:

- `@if`
- `@for`

These make templates feel more explicit and closer to normal programming flow.

### `@if`

Use `@if` when part of the UI should only appear in certain conditions.

Example ideas in a task tracker include:

- showing an empty-state message when no tasks match the filter
- showing one area only when there are tasks to display

### `@for`

Use `@for` when you want to render repeated UI from an array.

In this lesson, the task list is produced from the `visibleTasks` array.

This is a core Angular pattern:

Take a collection of data and describe how one item should be rendered.

Angular repeats that UI for each item.

## Understanding the Methods

The component methods are a good place to learn how state changes drive the UI.

### `addTask()`

This method:

1. trims the input text
2. checks whether the value is empty
3. creates a new task object
4. adds it to the task list
5. clears the input

One especially useful detail is that the task list is updated immutably.

Instead of mutating the array with something like `push`, the code creates a new array:

- the new task first
- the previous tasks after it

This makes the state transition clearer and is a very common frontend pattern.

### `toggleTask(taskId)`

This method updates a task by mapping over the array.

If the task id matches, it creates a new object with the `completed` flag flipped.

If not, it returns the task unchanged.

Again, the important lesson is:

Change application state through explicit transformations.

### `removeTask(taskId)`

This method filters the array and removes the matching task.

This is another example of immutable state updates.

## The Flow of Data in This Lesson

It is helpful to think about the app in this sequence:

1. The component starts with some state.
2. Angular renders the template from that state.
3. The user interacts with the page.
4. Event bindings call component methods.
5. Those methods update the state.
6. Angular updates the UI to match the new state.

That loop is one of the most important mental models in Angular.

## Why This Lesson Matters

Lesson 1 is not only about building a to-do style app.

It is really about learning the foundation for almost everything that comes later:

- components
- templates
- state
- user interaction
- typed data
- list rendering
- conditional UI

If these ideas feel natural, later lessons on services, routing, HTTP, signals, and testing will make much more sense.

## What to Try Yourself

To understand the lesson more deeply, try these small experiments:

1. Change the starter tasks in `tasks` and see how the template updates.
2. Add another getter such as `hasCompletedTasks` and show it in the UI.
3. Change the default filter from `"all"` to `"open"`.
4. Add another property to `Task`, such as `priority`, and display it.
5. Change the order in which new tasks are inserted.

These exercises are useful because they force you to connect the TypeScript code to the template behavior.

## Before Moving to Lesson 2

Make sure you are comfortable with these questions:

- What is a component?
- What is component state?
- How does Angular update the UI when state changes?
- What is interpolation?
- What is event binding?
- What does `[(ngModel)]` do?
- Why is the task list rendered from an array instead of hardcoded in HTML?
- Why are derived values like counts implemented as getters?

If you can answer those confidently, you are ready for the next lesson.
