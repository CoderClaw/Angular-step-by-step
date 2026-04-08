# Angular Guide

This document is a standalone guide to modern Angular. It is written as a theory-first companion for learning Angular from the ground up and then moving into more advanced architectural and application concerns.

It does not assume a specific project. Instead, it explains the concepts, mental models, and design decisions that matter when building Angular applications in real life.

---

## 1. What Angular Is

Angular is a frontend framework for building client-side applications with TypeScript.

At its core, Angular helps you answer a simple question:

How do I build a user interface that stays synchronized with application state as the user interacts with it?

Angular gives you a structured answer through:

- components for UI composition
- templates for declarative rendering
- dependency injection for object creation and sharing
- routing for navigation
- forms for user input
- HTTP utilities for remote data
- reactive tools such as RxJS and signals for state and async flows

Angular is not just a collection of utilities. It is an opinionated system for organizing application code.

That is one of its biggest strengths.

---

## 2. The Core Angular Mental Model

The most important Angular idea is:

The UI is a function of application state.

That means you usually do not manually update the DOM element by element. Instead, you update component state, and Angular recalculates what should appear on screen.

The general flow looks like this:

1. A component holds state.
2. A template reads that state.
3. The user interacts with the UI.
4. The component updates its state.
5. Angular updates the rendered output.

This sounds simple, but it is the foundation for almost every Angular feature.

---

## 3. TypeScript in Angular

Angular is designed to work well with TypeScript.

TypeScript matters in Angular because Angular applications often have:

- structured domain models
- forms with known field shapes
- services returning typed data
- reusable component APIs
- route and state models that benefit from explicit contracts

For example:

```ts
export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  active: boolean;
}
```

This type makes several things clearer:

- what fields exist
- what type each field has
- what other code can safely assume

Angular becomes easier to reason about when application data has explicit shapes.

---

## 4. Components

Components are the main building blocks of Angular user interfaces.

A component usually includes:

- a TypeScript class for state and behavior
- an HTML template for rendering
- optional CSS for presentation

Example:

```ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  template: `
    <h2>Count: {{ count() }}</h2>
    <button type="button" (click)="increment()">Increment</button>
  `,
})
export class CounterComponent {
  readonly count = signal(0);

  increment(): void {
    this.count.update((value) => value + 1);
  }
}
```

### What a component should own

A component usually owns:

- UI state
- event handling
- derived values used directly by the template
- orchestration of service calls or shared state

A component usually should not own:

- repeated business logic used elsewhere
- low-level persistence details
- application-wide infrastructure concerns

Those often belong in services or other shared layers.

---

## 5. Standalone Components

Modern Angular prefers standalone components.

Older Angular applications often centered around NgModules. Standalone components reduce that extra indirection by letting a component declare its own dependencies directly.

Example:

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [CommonModule],
  template: `<p>Hello Angular</p>`,
})
export class ExampleComponent {}
```

This style is easier to read because the component explicitly shows what Angular features it depends on.

---

## 6. Bootstrapping an Angular App

Angular applications need an entry point.

Modern Angular commonly uses `bootstrapApplication(...)`.

Example:

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((error) => {
  console.error(error);
});
```

This means:

Start Angular and use this component as the root of the application.

Application-level configuration is often added through an `app.config.ts` file using `ApplicationConfig`.

---

## 7. Templates

Angular templates are declarative. They describe what should appear based on component state.

Important features include:

- interpolation
- property binding
- event binding
- two-way binding
- control flow

### Interpolation

Interpolation uses `{{ ... }}`.

```html
<h1>{{ title }}</h1>
```

It is used to display a value in text content.

### Property binding

Property binding sends a component value into a DOM or component property.

```html
<button [disabled]="isSaving">Save</button>
```

### Event binding

Event binding listens to browser or component events.

```html
<button (click)="save()">Save</button>
```

### Two-way binding

For simple form scenarios, Angular supports `[(ngModel)]`.

```html
<input [(ngModel)]="searchText" />
```

This means:

- update the input when `searchText` changes
- update `searchText` when the user types

---

## 8. Modern Control Flow

Modern Angular provides block syntax such as `@if` and `@for`.

These replace older structural syntax in many codebases and often read more clearly.

Example:

```html
@if (items.length === 0) {
<p>No results found.</p>
} @else {
<ul>
  @for (item of items; track item.id) {
  <li>{{ item.name }}</li>
  }
</ul>
}
```

This style makes Angular templates feel closer to ordinary programming control flow while still remaining declarative.

---

## 9. Component State and Derived State

Angular components often have two kinds of state.

### Source state

This is the core stored state.

Examples:

- the array of tasks
- the selected item id
- the current filter value
- the loading flag

### Derived state

This is calculated from source state.

Examples:

- completed task count
- filtered list
- current selected object
- summary labels

Derived state should usually not be duplicated if it can be computed safely from a single source of truth.

---

## 10. Parent-Child Communication

Real Angular pages are usually composed of multiple components.

The most common communication pattern is:

- data flows down through inputs
- events flow up through outputs

Example:

```ts
import { Component, input, output } from "@angular/core";

@Component({
  selector: "app-user-card",
  standalone: true,
  template: `
    <article>
      <h3>{{ name() }}</h3>
      <button type="button" (click)="selected.emit()">Select</button>
    </article>
  `,
})
export class UserCardComponent {
  readonly name = input.required<string>();
  readonly selected = output<void>();
}
```

This keeps boundaries clear:

- the parent owns the broader state
- the child renders focused UI and emits meaningful actions

---

## 11. Forms

Angular supports two broad styles of forms.

### Template-driven forms

These are simple and useful for basic input handling.

They are often a good beginner choice.

### Reactive forms

These are more explicit and scalable.

Reactive forms are especially useful when you need:

- many fields
- complex validation
- cross-field rules
- explicit form-state control

Example:

```ts
import { FormControl, FormGroup, Validators } from "@angular/forms";

const profileForm = new FormGroup({
  displayName: new FormControl("", {
    nonNullable: true,
    validators: [Validators.required],
  }),
  email: new FormControl("", {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  }),
});
```

Reactive forms treat the form itself as structured application state.

---

## 12. Validation

Validation can happen at multiple levels.

### Field-level validation

Examples:

- required
- minimum length
- email format

### Group-level validation

Examples:

- two fields must agree with each other
- one field becomes required only when another field has a certain value

Validation is not only about preventing bad input. It is also about expressing business rules clearly in the form model.

---

## 13. Services

Services hold logic that does not primarily belong in the template or visual component layer.

Common service responsibilities include:

- data access
- persistence
- business rules
- shared state coordination
- infrastructure concerns

Example:

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private readonly storageKey = "app-settings";

  load(): string | null {
    return localStorage.getItem(this.storageKey);
  }
}
```

Services are one of the main ways Angular separates concerns.

---

## 14. Dependency Injection

Angular uses dependency injection to create and supply objects.

Instead of manually constructing every dependency, you declare what a class needs and Angular provides it.

This improves:

- reuse
- flexibility
- testing
- lifetime management

Example:

```ts
import { Component, inject } from "@angular/core";
import { SettingsService } from "./settings.service";

@Component({
  selector: "app-settings-panel",
  standalone: true,
  template: `...`,
})
export class SettingsPanelComponent {
  private readonly settingsService = inject(SettingsService);
}
```

### Providers

Providers tell Angular how to create or supply a dependency.

At runtime, Angular uses injectors to resolve these dependencies.

The root injector is application-wide. Feature-level or component-level providers can create narrower scopes when needed.

---

## 15. Routing

Routing lets Angular map URLs to components.

The router solves several important problems:

- navigation between screens
- deep linking
- route parameters
- redirects
- guarded access

Example route configuration:

```ts
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "users/:id",
    loadComponent: () =>
      import("./user-page.component").then((m) => m.UserPageComponent),
  },
  { path: "**", redirectTo: "dashboard" },
];
```

### `RouterOutlet`

The `RouterOutlet` is the placeholder where routed components are rendered.

### `routerLink`

Use `routerLink` for internal Angular navigation so the router can manage transitions properly.

---

## 16. Route Guards and Protected Flows

Angular applications often need to restrict access to certain routes.

Route guards help decide whether navigation should continue.

Example:

```ts
import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated = false;

  return isAuthenticated ? true : router.createUrlTree(["/login"]);
};
```

Guards are useful because authentication is not only a UI concern. It is also a navigation concern.

---

## 17. HTTP and `HttpClient`

Angular uses `HttpClient` for remote data access.

This service returns Observables rather than immediate synchronous values.

Example:

```ts
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserApiService {
  private readonly http = inject(HttpClient);

  getUsers(): Observable<{ id: string; name: string }[]> {
    return this.http.get<{ id: string; name: string }[]>("/api/users");
  }
}
```

The important shift is that the component must handle async states such as:

- loading
- success
- error

---

## 18. Observables and RxJS

RxJS is Angular's main toolkit for asynchronous and stream-based programming.

An Observable represents a stream of values over time.

This is useful for:

- HTTP responses
- user input streams
- route parameter changes
- combined filter behavior

Common operators include:

- `map`
- `filter`
- `debounceTime`
- `distinctUntilChanged`
- `combineLatest`
- `switchMap`
- `shareReplay`

Example:

```ts
import { combineLatest, map } from "rxjs";

const viewModel$ = combineLatest([query$, status$]).pipe(
  map(([query, status]) => ({ query, status })),
);
```

RxJS is especially valuable when several changing values must be coordinated over time.

---

## 19. Subscriptions

A subscription starts an Observable execution and listens for its results.

For HTTP, the component often defines handlers such as:

- `next` for success
- `error` for failure

Example:

```ts
this.userApiService.getUsers().subscribe({
  next: (users) => {
    this.users = users;
    this.isLoading = false;
  },
  error: () => {
    this.errorMessage = "Could not load users.";
    this.isLoading = false;
  },
});
```

Manual subscriptions are sometimes fine, but Angular developers often prefer `AsyncPipe`, signals, or well-scoped cleanup patterns for long-lived streams.

---

## 20. Signals

Signals are Angular's reactive primitive for local state.

The three main concepts are:

- `signal()` for stored reactive state
- `computed()` for derived reactive state
- `effect()` for side effects based on signal changes

Example:

```ts
import { computed, signal } from "@angular/core";

const tasks = signal([{ completed: true }, { completed: false }]);

const completedCount = computed(
  () => tasks().filter((task) => task.completed).length,
);
```

Signals are especially useful for local synchronous state and template-facing reactive values.

---

## 21. Shared State

When multiple components need the same state, it is often useful to centralize that state in a shared service or store-like abstraction.

The key principle is a single source of truth.

Instead of several components storing overlapping versions of the same information, the shared state owner exposes:

- source state
- derived state
- update methods

This improves consistency and coordination.

---

## 22. Global State with an RxJS Store

For application-wide state, a common Angular approach is to build a small store service on top of RxJS.

The core idea is simple:

- keep one private stream of state
- expose read-only streams derived from that state
- update state only through explicit store methods

This gives you many of the benefits people want from "global state" without introducing a heavier library too early.

An RxJS store is often a good fit when:

- multiple distant components need the same state
- async workflows update the same state from different places
- derived data should stay consistent across screens
- you want predictable updates and a single source of truth

### A minimal store shape

Most RxJS stores start with a typed state object and a `BehaviorSubject`.

```ts
import { Injectable, inject } from "@angular/core";
import {
  BehaviorSubject,
  catchError,
  distinctUntilChanged,
  map,
  of,
  tap,
} from "rxjs";
import { UserApiService } from "./user-api.service";

interface UsersState {
  users: { id: string; name: string; active: boolean }[];
  selectedUserId: string | null;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: UsersState = {
  users: [],
  selectedUserId: null,
  isLoading: false,
  errorMessage: null,
};

@Injectable({ providedIn: "root" })
export class UsersStore {
  private readonly api = inject(UserApiService);
  private readonly stateSubject = new BehaviorSubject<UsersState>(initialState);

  readonly state$ = this.stateSubject.asObservable();

  readonly users$ = this.state$.pipe(
    map((state) => state.users),
    distinctUntilChanged(),
  );

  readonly isLoading$ = this.state$.pipe(
    map((state) => state.isLoading),
    distinctUntilChanged(),
  );

  readonly selectedUser$ = this.state$.pipe(
    map(
      (state) =>
        state.users.find((user) => user.id === state.selectedUserId) ?? null,
    ),
    distinctUntilChanged(),
  );

  loadUsers(): void {
    this.patchState({ isLoading: true, errorMessage: null });

    this.api
      .getUsers()
      .pipe(
        tap((users) => {
          this.patchState({ users, isLoading: false });
        }),
        catchError(() => {
          this.patchState({
            isLoading: false,
            errorMessage: "Could not load users.",
          });

          return of([]);
        }),
      )
      .subscribe();
  }

  selectUser(userId: string): void {
    this.patchState({ selectedUserId: userId });
  }

  private patchState(patch: Partial<UsersState>): void {
    this.stateSubject.next({
      ...this.stateSubject.value,
      ...patch,
    });
  }
}
```

This store has the main building blocks you usually want:

- one private source of truth in `stateSubject`
- selector streams such as `users$` and `selectedUser$`
- imperative methods that are the only place allowed to change state

### Why selectors matter

The biggest mistake in homegrown stores is exposing the whole state everywhere and making every component understand too much.

Selectors reduce coupling.

Instead of every component reading the entire state object, a component subscribes only to the slice it needs:

```ts
readonly users$ = this.usersStore.users$;
readonly selectedUser$ = this.usersStore.selectedUser$;
readonly isLoading$ = this.usersStore.isLoading$;
```

That keeps component code simpler and lets the store own the derivation logic.

### Example component usage

A component using the store should usually read from selector streams and trigger intent methods.

```ts
import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { UsersStore } from "./users.store";

@Component({
  selector: "app-users-page",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button type="button" (click)="reload()">Reload</button>

    @if (isLoading$ | async) {
      <p>Loading users...</p>
    }

    <ul>
      @for (user of (users$ | async) ?? []; track user.id) {
        <li>
          <button type="button" (click)="selectUser(user.id)">
            {{ user.name }}
          </button>
        </li>
      }
    </ul>
  `,
})
export class UsersPageComponent {
  private readonly usersStore = inject(UsersStore);

  readonly users$ = this.usersStore.users$;
  readonly isLoading$ = this.usersStore.isLoading$;

  constructor() {
    this.usersStore.loadUsers();
  }

  reload(): void {
    this.usersStore.loadUsers();
  }

  selectUser(userId: string): void {
    this.usersStore.selectUser(userId);
  }
}
```

Notice the boundary:

- the component does not know how state is stored internally
- the component does not mutate arrays directly
- the component expresses user intent by calling store methods

That separation is what keeps global state manageable.

### Modeling async state

Global state is not only about storing data collections. It should usually model the whole async situation:

- the data
- loading status
- selected ids or filters
- error state

That is why `isLoading` and `errorMessage` belong in the store example above.

Without those fields, components often fall back to ad hoc booleans and duplicated error handling, which breaks the single source of truth.

### Good practices for an RxJS store

- Keep the writable subject private. Components should never call `.next(...)` directly.
- Expose selector observables, not the raw mutable state object when you can avoid it.
- Keep updates immutable. Create new arrays and objects instead of mutating existing ones in place.
- Put derived state in selectors. Do not make every component recalculate the same filtered lists or counts.
- Treat loading and error as real state, not temporary afterthoughts.
- Keep store methods intention-based, such as `selectUser`, `loadUsers`, or `updateFilter`, instead of generic "set anything" methods.
- Be careful with subscriptions inside the store. Short-lived HTTP subscriptions are acceptable, but long-lived streams should have clear lifecycle management.
- Do not put every piece of state in a global store. Keep purely local UI state local unless multiple parts of the app truly need it.
- Keep side effects separated from pure derivation. Selectors should derive data; store methods should coordinate updates and async work.

### When this approach starts to strain

A custom RxJS store works well for many Angular applications, but it can become harder to manage when you need:

- complex cross-feature coordination
- time-travel-style debugging or stricter action logs
- many async workflows with consistent effect handling
- team-wide conventions around reducers, actions, and dev tooling

At that point, a more formal library such as NgRx may be worth the extra structure.

The important lesson is not that every app needs a heavy state library. It is that global state should have clear ownership, predictable updates, and explicit read paths.

---

## 23. NgRx Deep Dive

NgRx is a formal state management library for Angular built around a few core ideas:

- state is stored centrally
- state changes happen through explicit actions
- reducers describe how state changes
- selectors expose slices and derived values
- effects handle async work and other side effects

Compared with a lightweight RxJS store, NgRx adds more structure, more ceremony, and better consistency for larger teams or more complex applications.

NgRx is often worth considering when:

- many features share state across the application
- async workflows are complex and happen in many places
- you want consistent state transitions through named actions
- debugging state history and behavior matters
- the team needs strong conventions for how data flows

### The core mental model

The usual NgRx flow looks like this:

1. A component dispatches an action.
2. A reducer updates state synchronously based on that action.
3. Selectors expose the new state to components.
4. Effects react to some actions to perform async work such as HTTP requests.
5. Effects dispatch follow-up success or failure actions.

The important boundary is that components describe intent, reducers update state, and effects handle side effects.

### Example state and actions

An NgRx feature usually starts by defining its state shape and the actions that can happen.

```ts
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export interface UsersState {
  users: { id: string; name: string; active: boolean }[];
  selectedUserId: string | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const initialUsersState: UsersState = {
  users: [],
  selectedUserId: null,
  isLoading: false,
  errorMessage: null,
};

export const UsersActions = createActionGroup({
  source: "Users",
  events: {
    "Load Users": emptyProps(),
    "Load Users Success": props<{
      users: { id: string; name: string; active: boolean }[];
    }>(),
    "Load Users Failure": props<{ errorMessage: string }>(),
    "Select User": props<{ userId: string }>(),
  },
});
```

This is useful because the application now has explicit names for the events that can affect this feature.

Instead of "something changed somewhere," you get a traceable action such as `UsersActions.loadUsers()` or `UsersActions.selectUser({ userId })`.

### Example reducer

A reducer is a pure function that takes the previous state and an action and returns the next state.

```ts
import { createReducer, on } from "@ngrx/store";

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    isLoading: false,
  })),
  on(UsersActions.loadUsersFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),
  on(UsersActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  })),
);
```

Reducers should stay boring and predictable.

That is a good thing.

They should not call services, start HTTP requests, or perform hidden side effects. Their job is only to compute the next state.

### Example selectors

Selectors are how components read state without knowing the store structure in too much detail.

```ts
import { createFeature, createSelector } from "@ngrx/store";

export const usersFeature = createFeature({
  name: "users",
  reducer: usersReducer,
});

export const {
  name: usersFeatureKey,
  reducer: usersFeatureReducer,
  selectUsersState,
  selectUsers,
  selectSelectedUserId,
  selectIsLoading,
  selectErrorMessage,
} = usersFeature;

export const selectSelectedUser = createSelector(
  selectUsers,
  selectSelectedUserId,
  (users, selectedUserId) =>
    users.find((user) => user.id === selectedUserId) ?? null,
);

export const selectActiveUsers = createSelector(selectUsers, (users) =>
  users.filter((user) => user.active),
);
```

This is one of the biggest strengths of NgRx.

Derived state has one clear home, and components consume selectors instead of duplicating filtering and lookup logic everywhere.

### Example effects

Effects listen for actions, run async work, and dispatch new actions with the results.

```ts
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UserApiService } from "./user-api.service";

@Injectable()
export class UsersEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(UserApiService);

  readonly loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.api.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError(() =>
            of(
              UsersActions.loadUsersFailure({
                errorMessage: "Could not load users.",
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
```

This keeps HTTP logic out of reducers and out of presentational components.

Effects are where you coordinate side effects such as:

- HTTP requests
- router navigation
- analytics events
- persistence to storage

### Example component usage

A component using NgRx usually selects state and dispatches actions.

```ts
import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-users-page",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button type="button" (click)="reload()">Reload</button>

    @if (isLoading$ | async) {
      <p>Loading users...</p>
    }

    <ul>
      @for (user of (users$ | async) ?? []; track user.id) {
        <li>
          <button type="button" (click)="selectUser(user.id)">
            {{ user.name }}
          </button>
        </li>
      }
    </ul>
  `,
})
export class UsersPageComponent {
  private readonly store = inject(Store);

  readonly users$ = this.store.select(selectUsers);
  readonly isLoading$ = this.store.select(selectIsLoading);

  constructor() {
    this.store.dispatch(UsersActions.loadUsers());
  }

  reload(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }

  selectUser(userId: string): void {
    this.store.dispatch(UsersActions.selectUser({ userId }));
  }
}
```

The component boundary is now even stricter than in a simple RxJS store:

- read through selectors
- write through actions
- leave side effects to effects

That discipline is why NgRx scales well in larger applications.

### Store setup

At the application level, NgRx is typically registered through providers.

```ts
import { ApplicationConfig } from "@angular/core";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ users: usersFeatureReducer }),
    provideEffects([UsersEffects]),
  ],
};
```

This makes the store and its effects available across the application.

### Good practices with NgRx

- Keep actions event-like when possible. Prefer names such as `Load Users Success` or `Select User` over vague mutation commands.
- Keep reducers pure. No service calls, no random values, no navigation, and no hidden mutations.
- Keep selectors as the home for derivation. Counts, filtered collections, and selected entities usually belong there.
- Keep effects focused on side effects and orchestration. Avoid turning them into a second reducer layer full of business state branching.
- Normalize complex collections when appropriate. Entity-style state often scales better than repeatedly scanning large arrays.
- Model loading and error state explicitly. Async workflows should have success and failure paths in the state model.
- Organize by feature. Keep actions, reducer, selectors, and effects close to the feature they belong to.
- Do not dispatch actions from everywhere without discipline. The action stream should still tell a coherent story about the application.

### Common mistakes with NgRx

- Putting temporary local UI state in the global store even when only one component needs it.
- Writing selectors directly inside components instead of reusing shared selectors.
- Performing state derivation repeatedly in effects instead of selectors.
- Treating every user interaction as a reason to introduce NgRx even in small applications.
- Creating huge action sets with weak naming that make the event flow harder to understand.

### When NgRx is the right tradeoff

NgRx adds overhead.

You write more files, more types, and more explicit wiring than with a custom RxJS store or local signals.

That cost is worthwhile when the structure pays you back through predictability, maintainability, and shared team conventions.

If the application is small and the state graph is simple, NgRx may be more machinery than you need. If the application is large, feature-rich, and heavily asynchronous, the added discipline can be a major advantage.

---

## 24. Advanced Templates

Angular provides tools for reusable template structure beyond ordinary component inputs.

Important mechanisms include:

- content projection with `ng-content`
- template fragments with `ng-template`
- dynamic rendering with `ngTemplateOutlet`

These are useful when a reusable component should provide structure while letting the parent define some UI details.

This is a different kind of reuse than simply passing data.

### Example: `ng-content`

Content projection lets a parent pass actual markup into a child component.

For example, a reusable panel component can own the frame while the parent provides the inner content:

```ts
@Component({
  selector: "app-panel",
  standalone: true,
  template: `
    <section class="panel">
      <header class="panel-header">
        <ng-content select="[panelTitle]"></ng-content>
      </header>

      <div class="panel-body">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class PanelComponent {}
```

The parent can then decide what to project into those slots:

```html
<app-panel>
  <h2 panelTitle>Quarterly Metrics</h2>
  <p>Revenue is up 12% compared with last quarter.</p>
</app-panel>
```

This is useful when the child should control layout, but the parent should control some of the displayed markup.

### Example: `ng-template`

`ng-template` defines a template fragment without rendering it immediately.

For example, you might define an empty-state fragment that only appears when there are no items:

```html
<ng-template #emptyState>
  <p>No tasks are assigned yet.</p>
</ng-template>

@if (tasks.length === 0) {
<ng-container [ngTemplateOutlet]="emptyState"></ng-container>
} @else {
<ul>
  @for (task of tasks; track task.id) {
  <li>{{ task.title }}</li>
  }
</ul>
}
```

The key idea is that the fragment exists as reusable template content until you choose to render it.

### Example: `ngTemplateOutlet`

`ngTemplateOutlet` renders a template fragment dynamically, often with context data.

For example, a list component can accept a row template from the parent so the parent controls how each item is displayed:

```html
<ng-template #userRow let-user>
  <strong>{{ user.name }}</strong>
  <span>{{ user.email }}</span>
</ng-template>

@for (user of users; track user.id) {
<ng-container
  [ngTemplateOutlet]="userRow"
  [ngTemplateOutletContext]="{ $implicit: user }"
></ng-container>
}
```

Here, `userRow` is the template, `ngTemplateOutlet` renders it, and `ngTemplateOutletContext` supplies the current `user`.

This pattern is useful when a reusable component should manage looping or structure while letting the caller define the row UI.

---

## 25. Directives and Pipes

### Directives

Directives add behavior to existing elements.

They do not usually create an entirely new visual component. Instead, they enhance or control an element that is already present in the template.

In practice, directives are useful when you want to reuse behavior without wrapping everything in another component.

They are good for:

- dynamic styling
- host event handling
- reusable UI behavior

For example, a status badge directive can add classes based on an input value:

```ts
import { Directive, HostBinding, input } from "@angular/core";

@Directive({
  selector: "[appStatusTone]",
  standalone: true,
})
export class StatusToneDirective {
  readonly appStatusTone = input<"success" | "warning" | "error">("success");

  @HostBinding("class")
  get hostClasses(): string {
    return `badge badge-${this.appStatusTone()}`;
  }
}
```

Used in a template:

```html
<span [appStatusTone]="ticket.status">{{ ticket.status }}</span>
```

This keeps the template simple while centralizing the styling rule in one reusable place.

Another common directive pattern is reacting to host events.

For example, a highlight directive can respond when the user hovers:

```ts
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appHoverHighlight]",
  standalone: true,
})
export class HoverHighlightDirective {
  @HostBinding("style.backgroundColor")
  backgroundColor = "transparent";

  @HostListener("mouseenter")
  handleMouseEnter(): void {
    this.backgroundColor = "#fff4cc";
  }

  @HostListener("mouseleave")
  handleMouseLeave(): void {
    this.backgroundColor = "transparent";
  }
}
```

Used like this:

```html
<li appHoverHighlight>{{ notification.message }}</li>
```

The main idea is that a directive attaches behavior to an existing element rather than defining a whole new UI boundary.

### Pipes

Pipes transform values for display in templates.

They are most useful when the component should keep raw domain data, but the template needs a presentation-friendly version of that data.

This helps keep formatting logic out of the component class and avoids repeating display transformations all over the template.

They are good for:

- formatting status labels
- relative time display
- domain-specific presentational transformations

Angular includes many built-in pipes.

For example, the `date` pipe formats a timestamp for display:

```html
<p>Updated: {{ release.updatedAt | date: "medium" }}</p>
```

If `release.updatedAt` is a `Date` or ISO string, the component can keep that raw value while the template decides how it should look to the user.

You can also create custom pipes for repeated domain formatting.

For example, a priority label pipe can turn internal codes into clearer text:

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "priorityLabel",
  standalone: true,
})
export class PriorityLabelPipe implements PipeTransform {
  transform(value: "low" | "medium" | "high"): string {
    switch (value) {
      case "low":
        return "Low Priority";
      case "medium":
        return "Medium Priority";
      case "high":
        return "High Priority";
    }
  }
}
```

Used in a template:

```html
<span>{{ incident.priority | priorityLabel }}</span>
```

Without the pipe, that mapping logic might end up repeated in several templates or pushed into the component even though it is only a display concern.

Pipes are usually the right tool when the value stays the same in meaning, but needs a different representation for the UI.

These features help keep templates cleaner and more reusable.

---

## 26. Performance and Change Detection

Angular change detection decides when components should be checked and rerendered.

One important performance tool is `ChangeDetectionStrategy.OnPush`.

This encourages clearer update patterns and can reduce unnecessary work.

Other important performance ideas include:

- immutable updates
- tracked list rendering
- limiting unnecessary recomputation
- keeping repeated row components focused

Performance is not only about making code work. It is about making updates efficient as the UI scales.

---

## 27. Interceptors and HTTP Infrastructure

Interceptors handle shared HTTP concerns in one place.

They are useful for:

- attaching headers
- rewriting URLs
- logging requests
- normalizing errors

Example:

```ts
import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const nextRequest = request.clone({
    setHeaders: {
      Authorization: "Bearer demo-token",
    },
  });

  return next(nextRequest);
};
```

Interceptors keep services and components cleaner by centralizing cross-cutting HTTP behavior.

---

## 28. Testing

Angular applications benefit from testing at several levels.

Two especially common levels are:

- service tests for business logic
- component tests for rendered behavior

Angular TestBed provides an Angular-aware environment for tests, while tools like Vitest or Jest run the test suite.

Testing is easier when responsibilities are clearly separated.

That is one reason good architecture matters.

---

## 29. Application Architecture

As applications grow, a flat file structure becomes harder to maintain.

A scalable Angular architecture often separates code into areas such as:

- `core` for app-wide services and models
- `shared` for reusable UI
- `layout` for shells and framing
- `features` for domain-specific functionality

The deeper idea is not only about folders. It is about ownership and boundaries.

Good structure makes change safer.

---

## 30. Advanced UI Integration

Angular applications often need more than forms and tables.

They may integrate with:

- drag-and-drop systems
- clipboard APIs
- browser storage
- media APIs
- complex dashboard interactions

The main challenge in these interfaces is not only feature count. It is coordinated state.

Rich interactions need clear state models and deliberate update logic.

---

## 31. Practical Design Principles in Angular

Several principles appear again and again in strong Angular codebases.

### Single source of truth

Avoid duplicated state when one source can safely drive the rest.

### Clear ownership

Every important piece of logic should have an obvious home.

### Separation of concerns

Components should not own every concern.

### Explicit data contracts

Use TypeScript types for domain clarity.

### Prefer meaningful abstractions

Do not add abstraction just because you can. Add it when it improves clarity, reuse, or maintainability.

### Keep async state visible

Loading and error states are normal application states and should be modeled explicitly.

---

## 32. Common Angular Mistakes

Some common mistakes include:

- putting too much logic in components
- duplicating derived state
- mutating shared state carelessly
- using services without clear responsibility boundaries
- treating routing as an afterthought
- ignoring error and loading states
- adding abstractions before the code actually needs them

Angular becomes much easier to use well when you focus on responsibility boundaries instead of only memorizing syntax.

---

## 33. A Suggested Learning Path

If you are learning Angular from scratch, this order works well:

1. Components and templates
2. State, events, and list rendering
3. Parent-child communication
4. Forms
5. Services and dependency injection
6. Routing
7. HTTP and async state
8. RxJS and streams
9. Signals and shared state
10. Reuse through templates, directives, and pipes
11. Performance patterns
12. Auth and infrastructure
13. Testing
14. Architecture and advanced UI integration

This progression mirrors how Angular knowledge tends to become useful in real applications.

---

## 34. Final Perspective

Angular is easiest to misunderstand if you treat it only as a set of APIs.

Its real value comes from the combination of:

- a component model
- explicit state
- declarative templates
- strong dependency injection
- built-in structure for navigation, forms, HTTP, and architecture

If you learn to think in terms of:

- state
- ownership
- boundaries
- derived data
- async flow
- reusable UI structure

then Angular stops feeling like a large framework full of separate features and starts feeling like one coherent way to design applications.

That is the real goal of learning Angular deeply.
