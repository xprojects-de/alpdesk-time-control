package x.timecontrol.Controller;

import io.micronaut.data.exceptions.DataAccessException;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Error;
import io.micronaut.http.annotation.Produces;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.authentication.AuthenticationException;
import io.micronaut.security.authentication.AuthorizationException;
import io.micronaut.security.rules.SecurityRule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.dto.ErrorResponse;

/**
 * Safety net for persistence-layer failures that a service didn't already pre-check for, e.g. a
 * uniqueness/foreign-key violation lost to a race between two concurrent requests. Without this,
 * such a failure bubbles up as a bare, unhandled 500 with no JSON body instead of a clean error
 * response the frontend can display.
 */
@Secured(SecurityRule.IS_ANONYMOUS)
@Controller
public class GlobalExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @Produces(MediaType.APPLICATION_JSON)
    @Error(global = true, exception = DataAccessException.class)
    public HttpResponse<ErrorResponse> handleDataAccessException(HttpRequest<?> request, DataAccessException exception) {
        String rootMessage = rootCauseMessage(exception);
        String lower = rootMessage == null ? "" : rootMessage.toLowerCase();

        // A uniqueness violation genuinely means "this conflicts with something that already
        // exists" (e.g. two concurrent requests racing past an app-level pre-check) - 409 fits.
        if (lower.contains("unique constraint")) {
            LOG.warn("Uniqueness violation on {} {}: {}", request.getMethod(), request.getPath(), rootMessage);
            return HttpResponse.status(HttpStatus.CONFLICT)
                    .body(new ErrorResponse("The action conflicts with an existing entry and could not be completed."));
        }
        // NOT NULL / CHECK / FOREIGN KEY violations mean the request itself was missing or
        // referencing invalid data, not that it conflicts with an existing entry - 400 fits
        // better than 409 here (e.g. a required field a controller didn't validate itself).
        if (lower.contains("not null constraint") || lower.contains("check constraint") || lower.contains("foreign key constraint")) {
            LOG.warn("Invalid data on {} {}: {}", request.getMethod(), request.getPath(), rootMessage);
            return HttpResponse.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("The request contains invalid or incomplete data."));
        }
        LOG.error("Unhandled persistence error on {} {}", request.getMethod(), request.getPath(), exception);
        return HttpResponse.<ErrorResponse>serverError()
                .body(new ErrorResponse("An unexpected error occurred."));
    }

    /**
     * Without this, an {@link AuthorizationException} - thrown by Micronaut's own security filter
     * for both "no/invalid credentials" and "unknown route" (micronaut.security.reject-not-found
     * deliberately makes the two indistinguishable to an unauthenticated caller) - falls through to
     * the Throwable catch-all below instead of Micronaut's built-in security exception handling,
     * turning what should be a clean 401/403 into a generic 500. The frontend's auth interceptor
     * (Frontend/src/app/interceptors/auth.interceptor.ts) already keys off exactly these two status
     * codes to force a logout, so restoring them here also fixes session-expiry handling, not just
     * the status code.
     */
    @Produces(MediaType.APPLICATION_JSON)
    @Error(global = true, exception = AuthorizationException.class)
    public HttpResponse<ErrorResponse> handleAuthorizationException(HttpRequest<?> request, AuthorizationException exception) {
        HttpStatus status = exception.isForbidden() ? HttpStatus.FORBIDDEN : HttpStatus.UNAUTHORIZED;
        LOG.debug("{} on {} {}", status, request.getMethod(), request.getPath());
        return HttpResponse.status(status)
                .body(new ErrorResponse(status == HttpStatus.FORBIDDEN
                        ? "You are not allowed to perform this action."
                        : "Authentication is required."));
    }

    /**
     * Wrong username/password: Micronaut's login controller signals this by throwing an
     * {@link AuthenticationException}, which the Throwable catch-all below would otherwise turn
     * into a 500 ("An unexpected error occurred.") - both misleading for the operator and wrong
     * for any client keying off the status code. Deliberately does not say which of the two was
     * wrong, and does not distinguish a wrong password from the lockout in
     * AuthenticationProviderUserPassword.
     */
    @Produces(MediaType.APPLICATION_JSON)
    @Error(global = true, exception = AuthenticationException.class)
    public HttpResponse<ErrorResponse> handleAuthenticationException(HttpRequest<?> request, AuthenticationException exception) {
        LOG.debug("Failed login attempt on {} {}", request.getMethod(), request.getPath());
        return HttpResponse.status(HttpStatus.UNAUTHORIZED)
                .body(new ErrorResponse("Invalid username or password."));
    }

    /**
     * Catch-all for anything that isn't a {@link DataAccessException}, {@link AuthenticationException}
     * or {@link AuthorizationException}
     * (e.g. an NPE from an unguarded optional-FK dereference, or a bug in request handling) - without
     * this, such a failure bypasses the sanitizing above entirely and falls through to Micronaut's own
     * default error handler, whose verbosity depends on the active environment.
     */
    @Produces(MediaType.APPLICATION_JSON)
    @Error(global = true, exception = Throwable.class)
    public HttpResponse<ErrorResponse> handleUnexpectedException(HttpRequest<?> request, Throwable exception) {
        LOG.error("Unhandled exception on {} {}", request.getMethod(), request.getPath(), exception);
        return HttpResponse.<ErrorResponse>serverError()
                .body(new ErrorResponse("An unexpected error occurred."));
    }

    private static String rootCauseMessage(Throwable throwable) {
        Throwable cause = throwable;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        return cause.getMessage();
    }
}
