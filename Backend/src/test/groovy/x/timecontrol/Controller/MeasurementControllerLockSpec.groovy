package x.timecontrol.Controller

import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.ErrorResponse
import x.timecontrol.dto.MeasurementRequest
import x.timecontrol.dto.MeasurementResponse
import x.timecontrol.entities.Measurement
import x.timecontrol.repositories.MeasurementRepository
import x.timecontrol.services.MeasurementService
import x.timecontrol.services.MeasurementTableLock

import java.time.LocalDateTime

/**
 * Locking a measurement and noting why, from the "Messungen" screen: what the operator sends is
 * stored and answered back, and a comment that is too long is refused with 400 instead of being cut.
 */
class MeasurementControllerLockSpec extends Specification {

    static final LocalDateTime MEASURED_AT = LocalDateTime.of(2026, 9, 27, 11, 0)

    MeasurementRepository repository = Mock() {
        findById(7L) >> Optional.of(new Measurement(7L, 3L, null, 50000, MEASURED_AT, false, null))
        update(_) >> { Measurement m -> m }
        save(_) >> { Measurement m -> m }
    }

    MeasurementController controller = new MeasurementController(
            service: new MeasurementService(repository, new MeasurementTableLock()))

    def "a locked measurement with a comment is answered back as stored"() {
        when:
        def response = controller.update(7L, new MeasurementRequest(null, 48200, MEASURED_AT, true, "Zeitnahme falsch"))

        then:
        response.status == HttpStatus.OK
        with(response.body() as MeasurementResponse) {
            locked()
            comment() == "Zeitnahme falsch"
            durationMs() == 48200
            deviceMeasurementId() == 3L
        }
    }

    def "a request without the lock flag stores the measurement unlocked"() {
        when: "an older client or a script that knows nothing about locking"
        def response = controller.update(7L, new MeasurementRequest(null, 48200, MEASURED_AT, null, null))

        then:
        !(response.body() as MeasurementResponse).locked()
    }

    def "#endpoint answers 400 for a comment longer than the maximum"() {
        given:
        def request = new MeasurementRequest(null, 48200, MEASURED_AT, true, "x" * 501)

        when:
        def response = call(controller, request)

        then:
        response.status == HttpStatus.BAD_REQUEST
        (response.body() as ErrorResponse).message().contains("500")

        where:
        endpoint | call
        "PUT"    | { MeasurementController c, MeasurementRequest r -> c.update(7L, r) }
        "POST"   | { MeasurementController c, MeasurementRequest r -> c.add(r) }
    }
}
