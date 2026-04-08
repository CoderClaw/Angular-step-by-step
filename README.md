# Modern Angular Tutorial Series

This workspace contains a complete beginner-to-advanced Angular tutorial series built with TypeScript and Vite.

Each lesson lives in its own folder as a small self-contained Angular application. The projects stay intentionally focused, but each one uses patterns that are common in real Angular codebases.

## Series Goals

- Teach modern Angular progressively from foundations to integrated app architecture
- Use standalone Angular patterns throughout the series
- Keep examples small enough to study quickly
- Show realistic frontend structure, state, routing, forms, HTTP, and UI behavior
- Use Vite for every lesson in the series

## How to Use This Series

1. Start at Lesson 1 and move in order.
2. For each lesson, read that folder’s README first.
3. Run `npm install` and `npm run dev` inside the lesson folder you want to explore.
4. Compare the progression between lessons instead of treating them as isolated examples.

## Lesson Roadmap

1. [lesson-01-angular-foundations-task-tracker](./lesson-01-angular-foundations-task-tracker/README.md)
   Angular foundations, bindings, events, `ngModel`, modern control flow.

2. [lesson-02-component-composition-product-catalog](./lesson-02-component-composition-product-catalog/README.md)
   Component composition, `input()`, `output()`, and parent-child communication.

3. [lesson-03-reactive-forms-profile-editor](./lesson-03-reactive-forms-profile-editor/README.md)
   Typed reactive forms, validators, and custom validation rules.

4. [lesson-04-services-and-di-notes-workspace](./lesson-04-services-and-di-notes-workspace/README.md)
   Services, dependency injection, and persistence through a simple data layer.

5. [lesson-05-routing-knowledge-base-shell](./lesson-05-routing-knowledge-base-shell/README.md)
   Routing, app shells, redirects, route params, and page composition.

6. [lesson-06-http-async-release-feed](./lesson-06-http-async-release-feed/README.md)
   `HttpClient`, async data loading, and loading/error UI states.

7. [lesson-07-rxjs-live-search-dashboard](./lesson-07-rxjs-live-search-dashboard/README.md)
   RxJS streams, filtering, `switchMap`, combined state, and async templates.

8. [lesson-08-signals-dashboard-preferences](./lesson-08-signals-dashboard-preferences/README.md)
   Signals, `computed`, `effect`, and persisted local preferences.

9. [lesson-09-shared-state-booking-flow](./lesson-09-shared-state-booking-flow/README.md)
   Shared application state and store-like coordination across components.

10. [lesson-10-advanced-templates-operations-center](./lesson-10-advanced-templates-operations-center/README.md)
    Content projection, `ng-template`, `ngTemplateOutlet`, and reusable template-driven UI.

11. [lesson-11-directives-pipes-support-inbox](./lesson-11-directives-pipes-support-inbox/README.md)
    Custom directives, pipes, host bindings, and template reuse.

12. [lesson-12-performance-change-detection-review-board](./lesson-12-performance-change-detection-review-board/README.md)
    `OnPush`, immutable updates, tracked lists, and performance-oriented rendering.

13. [lesson-13-auth-protected-portal](./lesson-13-auth-protected-portal/README.md)
    Authentication flow, route guards, redirects, and protected pages.

14. [lesson-14-interceptors-api-infrastructure](./lesson-14-interceptors-api-infrastructure/README.md)
    Interceptors, centralized request behavior, shared headers, and normalized HTTP errors.

15. [lesson-15-testing-release-readiness](./lesson-15-testing-release-readiness/README.md)
    Service and component testing with Vitest and Angular TestBed.

16. [lesson-16-feature-architecture-support-workspace](./lesson-16-feature-architecture-support-workspace/README.md)
    Scalable folder structure with `core`, `shared`, `layout`, and `features`.

17. [lesson-17-advanced-ui-operations-board](./lesson-17-advanced-ui-operations-board/README.md)
    Advanced UI integration with Angular CDK drag-and-drop and browser APIs.

18. [lesson-18-capstone-customer-success-hub](./lesson-18-capstone-customer-success-hub/README.md)
    Capstone app combining routing, API infrastructure, shared state, reactive forms, and persisted preferences.

19. [lesson-19-ngrx-incident-command-center](./lesson-19-ngrx-incident-command-center/README.md)
    NgRx state management with actions, reducers, selectors, effects, and formal global-state architecture.

## Recommended Milestones

- Lessons 1 to 5: Core Angular application building blocks
- Lessons 6 to 9: Data flow, async patterns, and shared state
- Lessons 10 to 13: Reuse, performance, and application security patterns
- Lessons 14 to 19: Infrastructure, testing, scalable architecture, advanced UI, capstone integration, and formal NgRx state management

## Tooling Notes

- All lessons use TypeScript.
- All lessons use Vite.
- Angular integration is based on `@analogjs/vite-plugin-angular`.
- Testing lessons use Vitest with Angular TestBed setup.

## Suggested Next Improvements

- Add a top-level script or helper to run a selected lesson more quickly.
- Add tests to additional later lessons beyond Lesson 15.
- Add diagrams that compare how state and routing evolve across the series.
