import { ApplicationConfig } from "@angular/core";
import { provideHttpClient, withInterceptors } from "@angular/common/http";

import { apiInfrastructureInterceptor } from "./interceptors/api-infrastructure.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([apiInfrastructureInterceptor])),
  ],
};
