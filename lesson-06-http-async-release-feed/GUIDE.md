# Lesson 06 Guide: HTTP and Async Data

This lesson introduces one of the biggest transitions in frontend development: moving from local data to asynchronous data loaded from outside the component.

So far, the lessons mostly used data already available in memory. This lesson shows what changes when the data must be requested first.

## Why Async Data Matters

Most real Angular applications need to fetch information from somewhere else:

- an API
- a backend service
- a JSON endpoint
- a search service
- a reporting service

That means the component cannot assume the data already exists.

Instead, the UI must handle a timeline:

1. the request starts
2. the UI waits
3. the request succeeds or fails
4. the screen updates accordingly

This lesson is about understanding that timeline.

## What the Example Builds

The project is a release feed.

That is a realistic example because operational dashboards often need to show:

- recent updates
- publishing status
- currently selected item details
- a refresh action
- last loaded information

This makes it a good lesson for combining remote data with simple UI state.

## `HttpClient`

Angular uses `HttpClient` to make HTTP requests.

This service gives Angular applications a standard way to:

- send requests
- receive typed responses
- work with Observables
- handle errors consistently

The important point is that `HttpClient` does not return the final data immediately.

It returns an Observable.

That means the data may arrive later.

## Why the Response Is Async

A network request takes time.

The browser has to:

- send the request
- wait for the server or file response
- parse the response
- hand the result back to the application

Because of that, the component cannot treat the result like a normal synchronous return value.

That is why the lesson uses `subscribe(...)`.

## Observable and Subscription

An Observable is a source of values over time.

For HTTP in Angular, it usually means:

- one response value if successful
- an error if the request fails

A subscription is how the component says:

"Start this async work, and tell me what happens."

This is why the `subscribe` block is so important in the lesson.

Inside it, the component defines what to do for success and what to do for failure.

## The Three Main UI States

This lesson is especially important because it teaches that async UI is not just about fetching data. It is about handling UI states.

The component usually needs at least three states:

### Loading

The request started, but the data has not arrived yet.

The UI may show:

- a loading message
- a spinner
- disabled controls

### Success

The data arrived and can now be rendered.

The component updates properties like:

- the feed item list
- the selected item
- the last loaded timestamp

### Error

Something went wrong.

The component should stop loading and show a useful message.

This is important because failures are part of normal application behavior, not rare exceptions that UI code can ignore.

## Why a Service Is Still Useful Here

The lesson likely uses a service to own the HTTP request.

That is good architecture because:

- the component stays focused on UI state
- the service stays focused on data access

The component should not need to know every request detail. It should know that it wants the release feed.

## Typed Responses

One of the best Angular habits is to give HTTP responses explicit types.

That way, the rest of the app knows what kind of data to expect.

This improves:

- editor help
- refactoring safety
- readability
- consistency between model and UI

## The Main Learning Goal

Do not reduce this lesson to:

"How do I call `.get()`?"

The deeper lesson is:

How should a component behave when its data is not available immediately?

That question appears in almost every business application.

## How to Read the Lesson

Study it in this order:

1. Read the model for the release items.
2. Read the service and understand what endpoint it calls.
3. Read the component and focus on loading, success, and error state transitions.
4. Then inspect the template and see how those states are reflected in the UI.

The important learning happens in the relationship between service, subscription, and template state.

## Exercises

Try these changes:

1. Add a manual refresh button.
2. Show a different empty state when the response returns no items.
3. Display more metadata in the selected item panel.
4. Add another derived getter based on the feed items.

## Before Moving On

Make sure you can explain:

- why `HttpClient` returns an Observable
- what `subscribe(...)` is doing
- why loading and error states belong in the component
- why HTTP logic usually belongs in a service

The next lesson goes deeper into Observables and RxJS by composing multiple streams together instead of handling only one HTTP request.
