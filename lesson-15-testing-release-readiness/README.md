# Lesson 15: Testing Components and Services with a Release Readiness Board

This lesson is a Vite-based Angular application that teaches how to test Angular services and standalone components with Vitest and Angular TestBed.

## What this lesson teaches

- How to add a Vitest test command to a Vite-based Angular project
- How to configure Angular test setup with `@analogjs/vitest-angular`
- How to test service business rules without touching the DOM
- How to test a standalone component by replacing a real dependency with a mock provider
- How to assert rendered output from Angular templates

## Main files

- `src/test-setup.ts`: shared Angular + Vitest setup
- `src/app/services/release-readiness.service.ts`: business logic used by the UI
- `src/app/services/release-readiness.service.spec.ts`: service-focused tests
- `src/app/app.component.spec.ts`: component rendering test with a mocked provider

## Suggested exploration order

1. Open `src/test-setup.ts` to see how Angular testing is initialized for Vitest.
2. Read `release-readiness.service.ts` and identify the business rule branches.
3. Compare the service implementation to `release-readiness.service.spec.ts`.
4. Read `app.component.spec.ts` and notice how the real service is replaced with a mock.
5. Run the test suite and verify that both logic-level and DOM-level behaviors are covered.

## Why this example is realistic

Angular teams usually test at two levels: pure business logic in services and rendered behavior in components. This lesson keeps both small enough to understand quickly while still reflecting a common production pattern: a UI that depends on a service-owned decision model.

## Run the lesson

```bash
npm install
npm run dev
npm test
```

## Next lesson

Lesson 16 will focus on feature architecture and scalable Angular project structure.
