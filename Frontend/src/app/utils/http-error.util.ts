import {HttpErrorResponse} from "@angular/common/http";

/**
 * Extracts a user-facing message from a failed HTTP call.
 *
 * The real message from the backend's JSON error body lives at `error.error.message`; that one
 * wins. Everything else falls back to the caller's German default.
 *
 * Deliberately NOT falling back to `HttpErrorResponse.message`: that is Angular's own generic
 * English string (e.g. "Http failure response for .../teams: 409 Conflict"), and since it is
 * always set it used to shadow every German fallback in this app - including for blob downloads,
 * where `error.error` is a Blob and never carries a message.
 */
export function extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
        const backendMessage = (error.error as {message?: unknown} | null)?.message;
        if (typeof backendMessage === "string" && backendMessage.trim().length > 0) {
            return backendMessage;
        }
        return fallback;
    }
    if (error instanceof Error && error.message) {
        return error.message;
    }
    return fallback;
}
