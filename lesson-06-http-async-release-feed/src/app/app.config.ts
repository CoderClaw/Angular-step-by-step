import { ApplicationConfig } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";

// HttpClient is registered globally so any service can request API data.
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
