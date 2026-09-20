package x.timecontrol.Controller

import io.micronaut.core.convert.exceptions.ConversionErrorException
import io.micronaut.core.type.Argument
import io.micronaut.http.HttpRequest
import io.micronaut.http.HttpStatus
import io.micronaut.web.router.exceptions.UnsatisfiedPartRouteException
import io.micronaut.web.router.exceptions.UnsatisfiedQueryValueRouteException
import spock.lang.Specification

/**
 * A request this API cannot bind is the caller's mistake, so it has to come back as a 400 naming
 * what is wrong - not as the generic 500 the Throwable catch-all produced for it before, which told
 * an operator mid-race nothing and buried a real fault's stack trace under every typo's.
 */
class GlobalExceptionHandlerSpec extends Specification {

    def handler = new GlobalExceptionHandler()

    def "a missing required multipart part is a 400 that names it"() {
        given: "the real shape of a result import posted without timeFormat"
        def exception = new UnsatisfiedPartRouteException("timeFormat", Argument.of(String, "timeFormat"))

        when:
        def response = handler.handleUnsatisfiedRoute(HttpRequest.POST("/participants/import-results-mapped/1", ""), exception)

        then:
        response.status() == HttpStatus.BAD_REQUEST
        response.body().message() == "Required parameter 'timeFormat' is missing."
    }

    def "the same holds for every other unbindable parameter kind, not just parts"() {
        given: "one handler covers the whole UnsatisfiedRouteException family"
        def exception = new UnsatisfiedQueryValueRouteException("raceId", Argument.of(Long, "raceId"))

        when:
        def response = handler.handleUnsatisfiedRoute(HttpRequest.GET("/participants"), exception)

        then:
        response.status() == HttpStatus.BAD_REQUEST
        response.body().message() == "Required parameter 'raceId' is missing."
    }

    def "a parameter that does not parse into its declared type is a 400 that names it"() {
        given:
        def exception = new ConversionErrorException(Argument.of(Long, "id"), new IllegalArgumentException("abc"))

        when:
        def response = handler.handleConversionError(HttpRequest.GET("/races/abc"), exception)

        then:
        response.status() == HttpStatus.BAD_REQUEST
        response.body().message() == "Parameter 'id' has an invalid value."
    }

    def "a malformed request body is a 400 that does not echo the body back"() {
        when: "the parser's own message quotes the rejected input, so it is never read here"
        def response = handler.handleJsonSyntax(HttpRequest.POST("/races", ""))

        then:
        response.status() == HttpStatus.BAD_REQUEST
        response.body().message() == "The request body is not valid JSON."

        and: "nothing of the rejected input leaks into the response"
        !response.body().message().contains("name")
    }
}
