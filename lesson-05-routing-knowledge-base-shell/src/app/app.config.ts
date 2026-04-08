import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

// Routing is registered globally because navigation is an app-wide concern.
// Providers tell Angular's dependency injection system how to create or supply shared values.
// When something asks for a dependency like the Router, Angular looks in its injector and uses
// the registered provider to decide what instance to return.
export const appConfig: ApplicationConfig = {
  // provideRouter(routes) adds all router-related services to the application's root injector.
  // That makes navigation available across the app, and it also tells Angular which route
  // definitions to use when matching URLs and rendering routed components.
  providers: [provideRouter(routes)],
};
