import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { AuthService } from "./services/auth.service";

export const authGuard: CanActivateFn = (_route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Los guards pueden redirigir en lugar de limitarse a devolver false.
  // Ese es un patron comun en aplicaciones protegidas.
  return router.createUrlTree(["/login"], {
    queryParams: {
      returnUrl: state.url,
    },
  });
};
