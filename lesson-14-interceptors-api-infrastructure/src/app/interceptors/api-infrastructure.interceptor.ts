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

  // Interceptors are a good place for shared request infrastructure.
  // Here we rewrite the API base path and attach mock tracing/auth headers.
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
