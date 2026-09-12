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
                    .body(new ErrorResponse("Die Aktion steht im Konflikt mit einem bestehenden Eintrag und konnte nicht ausgeführt werden."));
        }
        // NOT NULL / CHECK / FOREIGN KEY violations mean the request itself was missing or
        // referencing invalid data, not that it conflicts with an existing entry - 400 fits
        // better than 409 here (e.g. a required field a controller didn't validate itself).
        if (lower.contains("not null constraint") || lower.contains("check constraint") || lower.contains("foreign key constraint")) {
            LOG.warn("Invalid data on {} {}: {}", request.getMethod(), request.getPath(), rootMessage);
            return HttpResponse.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Die Anfrage enthält ungültige oder unvollständige Daten."));
        }
        LOG.error("Unhandled persistence error on {} {}", request.getMethod(), request.getPath(), exception);
        return HttpResponse.<ErrorResponse>serverError()
                .body(new ErrorResponse("Ein unerwarteter Fehler ist aufgetreten."));
    }

    private static String rootCauseMessage(Throwable throwable) {
        Throwable cause = throwable;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        return cause.getMessage();
    }
}
