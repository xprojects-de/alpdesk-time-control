import {HttpErrorResponse, HttpInterceptorFn} from "@angular/common/http";
import {throwError, TimeoutError} from "rxjs";
import {catchError, timeout} from "rxjs/operators";

// The backend is a local process on the same laptop, but it can still stall (SQLite busy-timeout, a
// device-reset pausing the import scheduler, a GC pause) - without this, a stalled request hangs the
// UI indefinitely with no dispatched error and no way to recover except restarting the app mid-race.
// 30s is generous enough for the slowest legitimate calls (PDF export for a large field) while still
// catching a genuinely stuck request. `timeout(ms)` resets on every emission, including HttpClient's
// upload progress events, so a large-but-progressing CSV import isn't cut off mid-upload.
const REQUEST_TIMEOUT_MS = 30000;

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        timeout(REQUEST_TIMEOUT_MS),
        catchError(error => {
            if (error instanceof TimeoutError) {
                // Re-thrown as an HttpErrorResponse (rather than the raw TimeoutError) so it flows
                // through extractErrorMessage's normal backendMessage path with a German message,
                // instead of falling back to error.message and leaking TimeoutError's English text.
                return throwError(
                    () =>
                        new HttpErrorResponse({
                            error: {message: "Zeitüberschreitung: Der Server hat nicht rechtzeitig geantwortet"},
                            status: 0,
                            statusText: "Timeout",
                            url: req.url,
                        }),
                );
            }
            return throwError(() => error);
        }),
    );
};
