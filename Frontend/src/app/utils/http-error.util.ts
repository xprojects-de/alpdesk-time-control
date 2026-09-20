import {HttpErrorResponse} from "@angular/common/http";

/**
 * Extracts a user-facing message from a failed HTTP call.
 *
 * `HttpErrorResponse.message` is Angular's own generic string (e.g. "Http failure
 * response for .../teams: 409 Conflict") - it never contains the server's actual
 * error text. The real message from the backend's JSON error body lives at
 * `error.error.message`. Falls back to the generic Angular message, then to the
 * given default, in case the server didn't return a JSON body (e.g. network error).
 */
export function extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
        const backendMessage = (error.error as {message?: unknown} | null)?.message;
        if (typeof backendMessage === "string" && backendMessage.trim().length > 0) {
            return backendMessage;
        }
        return error.message || fallback;
    }
    if (error instanceof Error && error.message) {
        return error.message;
    }
    return fallback;
}
