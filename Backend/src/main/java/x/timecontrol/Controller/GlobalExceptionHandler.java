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
        if (isConstraintViolation(rootMessage)) {
            LOG.warn("Constraint violation on {} {}: {}", request.getMethod(), request.getPath(), rootMessage);
            return HttpResponse.status(HttpStatus.CONFLICT)
                    .body(new ErrorResponse("Die Aktion steht im Konflikt mit einem bestehenden Eintrag und konnte nicht ausgeführt werden."));
        }
        LOG.error("Unhandled persistence error on {} {}", request.getMethod(), request.getPath(), exception);
        return HttpResponse.<ErrorResponse>serverError()
                .body(new ErrorResponse("Ein unerwarteter Fehler ist aufgetreten."));
    }

    private static boolean isConstraintViolation(String message) {
        if (message == null) {
            return false;
        }
        String lower = message.toLowerCase();
        return lower.contains("unique constraint")
                || lower.contains("foreign key constraint")
                || lower.contains("not null constraint")
                || lower.contains("check constraint");
    }

    private static String rootCauseMessage(Throwable throwable) {
        Throwable cause = throwable;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        return cause.getMessage();
    }
}
