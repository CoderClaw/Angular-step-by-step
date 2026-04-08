import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { catchError, throwError } from "rxjs";

function buildRequestId(): string {
  return `hub-${Date.now()}`;
}

export const customerSuccessApiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const rewrittenUrl = request.url.startsWith("/api/")
    ? request.url.replace("/api/", "/mock-api/")
    : request.url;

  // El capstone centraliza el comportamiento compartido de API en un solo lugar.
  // Los componentes y stores pueden llamar endpoints sencillos sin repetir cabeceras ni rutas base.
  const nextRequest = request.clone({
    url: rewrittenUrl,
    setHeaders: {
      Authorization: "Bearer capstone-demo-token",
      "X-Request-Id": buildRequestId(),
    },
  });

  return next(nextRequest).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        const statusText =
          error.status === 0 ? "network error" : `status ${error.status}`;
        return throwError(
          () =>
            new Error(
              `Customer Success Hub request failed with ${statusText}.`,
            ),
        );
      }

      return throwError(() => error);
    }),
  );
};
