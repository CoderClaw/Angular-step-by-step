# Lesson 15 Guide: Testing Angular Components and Services

This lesson introduces testing as a normal part of Angular development rather than an optional extra.

By this point in the series, you have seen components, services, routing, HTTP, signals, and shared state. Testing is how you gain confidence that those behaviors still work as the app changes.

## Why Testing Matters

Without tests, every change depends more heavily on manual checking.

That becomes risky as a codebase grows.

Tests help answer questions like:

- does this business rule still work?
- does this component still render the expected content?
- did a refactor break something subtle?

## Why This Lesson Uses Two Levels of Testing

The example focuses on two very common test targets:

- a service with business logic
- a component with rendered UI

That is a good teaching split because it shows that not everything needs the same style of test.

## Service Tests

Service tests are good when you want to verify logic without the DOM getting in the way.

This is often the cleanest place to test:

- calculations
- summary building
- decision rules
- value transformations

If the business rule is correct in the service, the component can stay simpler.

## Component Tests

Component tests are useful when the important question is:

What does the user actually see?

These tests often verify:

- rendered text
- conditional UI
- interaction behavior
- template output based on mock dependencies

In this lesson, the component test likely replaces the real service with a mock provider so the UI can be checked with known data.

## Why Mocking Matters

Mocking is useful because a component test should usually focus on the component.

If the real service logic is already tested separately, the component test can use a simpler fake version and just verify rendering behavior.

That keeps tests focused and easier to understand.

## Vitest and Angular TestBed

This lesson uses Vitest with Angular TestBed.

TestBed creates a realistic Angular testing environment so components and services can run with Angular features available.

That means the tests are not just plain TypeScript scripts. They run in an Angular-aware context.

## The Main Lesson Here

Testing is easier when the code is well-structured.

Earlier lessons separated responsibilities between components and services. This lesson shows one reason that separation matters.

If business rules live in a service and rendering behavior lives in a component, each part can be tested more clearly.

## How to Study the Lesson

Read it in this order:

1. Read the service implementation.
2. Read the service spec and compare each test to a business rule.
3. Read the component implementation.
4. Read the component spec and notice how the service is mocked.

This order helps you connect each test to a deliberate responsibility boundary.

## Exercises

1. Add another service test for a new business-rule branch.
2. Add another component test for a different UI state.
3. Replace one hardcoded mock value with a second scenario.
4. Refactor the service and verify that the tests still pass.

## Before Moving On

Make sure you understand:

- why services and components often need different kinds of tests
- why mocking helps keep tests focused
- why structured code is easier to test than tangled code

The next lesson returns to application structure and shows how larger Angular apps stay organized as features multiply.
