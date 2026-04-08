# Lesson 14 Guide: Interceptors and API Infrastructure

This lesson shifts attention from individual components to application-wide HTTP behavior.

By this point in the series, you have already seen `HttpClient`. Now the question is:

How do you avoid repeating the same request setup and error-handling logic everywhere?

## Why Interceptors Matter

In a real application, many requests share the same concerns:

- a base URL
- auth headers
- request IDs or tracing metadata
- consistent error normalization

If every component or service repeats that work, the code becomes inconsistent and fragile.

Interceptors solve this by centralizing request and response behavior.

## What This Lesson Builds

The example is an operations overview loaded through a typed service and a functional interceptor.

That is a good example because it shows the separation clearly:

- the component asks for data
- the service calls a simple endpoint
- the interceptor handles shared HTTP concerns

## What an Interceptor Does

An interceptor sits between your app code and the underlying HTTP execution.

It can inspect or modify:

- outgoing requests
- incoming responses
- errors

This means it is a good place for cross-cutting concerns that should apply to many requests.

## Functional Interceptors

Modern Angular supports functional interceptors.

This is useful because they are compact and easy to read.

The lesson likely shows an interceptor doing things like:

- rewriting a URL
- attaching shared headers
- converting HTTP failures into clearer application-level errors

## Why URL Rewriting Is a Good Teaching Tool

URL rewriting demonstrates the idea of central infrastructure very clearly.

The service can call a simple `/api/...` endpoint, while the interceptor decides how that should really be resolved.

That means components and services do not need to know every environment or deployment detail.

## Shared Headers

Headers such as auth tokens or request IDs are classic interceptor work.

Without an interceptor, every request would need to repeat them.

With an interceptor, the behavior is centralized and consistent.

## Error Normalization

Raw HTTP errors are often too low-level for components.

A component usually wants a usable error message, not a full transport-level object.

An interceptor can translate those failures into a cleaner form that the rest of the app can work with more consistently.

## The Role of the Service Layer

This lesson also reinforces a pattern that matters a lot in real applications.

The service should expose a clear application-level method such as:

- get overview
- get feed
- get account summary

It should not force the component to think in terms of HTTP infrastructure.

This separation is important:

- components own UI behavior
- services own data access intent
- interceptors own shared HTTP infrastructure

## How to Study the Lesson

Read it in this order:

1. Look at the API service and see the clean endpoint call.
2. Then inspect the interceptor and identify the cross-cutting logic.
3. Then read the component and notice how little HTTP-specific code it needs.

That reading order highlights why the abstraction is useful.

## Exercises

1. Add another shared header in the interceptor.
2. Add a second endpoint that automatically benefits from the same infrastructure.
3. Change the error message format in one place and observe the app-wide effect.
4. Add a logging step for development use.

## Before Moving On

Make sure you understand:

- what an interceptor is for
- why repeated HTTP setup should be centralized
- how the service layer stays cleaner because of the interceptor

The next lesson covers testing, which becomes much easier when your responsibilities are separated this clearly.
