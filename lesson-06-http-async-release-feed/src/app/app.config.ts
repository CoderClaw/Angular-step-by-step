import { ApplicationConfig } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";

// HttpClient se registra globalmente para que cualquier servicio pueda solicitar datos de API.
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
