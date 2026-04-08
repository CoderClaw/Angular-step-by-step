import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { catchError, throwError } from "rxjs";

function buildRequestId(): string {
  return `lesson-14-${Date.now()}`;
}

export const apiInfrastructureInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const rewrittenUrl = request.url.startsWith("/api/")
    ? request.url.replace("/api/", "/mock-api/")
    : request.url;

  // Los interceptors son un buen lugar para infraestructura compartida de peticiones.
  // Aqui reescribimos la ruta base de la API y anadimos cabeceras simuladas de trazado y autenticacion.
  const nextRequest = request.clone({
    url: rewrittenUrl,
    setHeaders: {
      Authorization: "Bearer mock-lesson-14-token",
      "X-Request-Id": buildRequestId(),
    },
  });

  return next(nextRequest).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        const statusLabel =
          error.status === 0 ? "network error" : `status ${error.status}`;
        return throwError(
          () =>
            new Error(
              `API request to ${request.url} failed with ${statusLabel}.`,
            ),
        );
      }

      return throwError(() => error);
    }),
  );
};
