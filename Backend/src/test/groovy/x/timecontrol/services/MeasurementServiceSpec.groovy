package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.Measurement
import x.timecontrol.repositories.MeasurementRepository

import java.time.LocalDateTime

class MeasurementServiceSpec extends Specification {

    MeasurementRepository repository = Mock()
    MeasurementTableLock measurementTableLock = new MeasurementTableLock()

    MeasurementService service = new MeasurementService(repository, measurementTableLock)

    private static final LocalDateTime NOW = LocalDateTime.of(2026, 1, 1, 10, 0)

    private static Measurement measurement(Long id, Long deviceMeasurementId) {
        new Measurement(id, deviceMeasurementId, null, 5000, NOW)
    }

    def "create leaves an explicit deviceMeasurementId untouched"() {
        given:
        Measurement input = measurement(null, 17L)

        when:
        service.create(input)

        then:
        0 * repository.findMinDeviceMeasurementId()
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == 17L }) >> measurement(1L, 17L)
    }

    def "create synthesizes -1 when no deviceMeasurementId is given and the table is empty"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> null
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -1L }) >> measurement(1L, -1L)
    }

    def "create synthesizes one below the lowest existing negative id"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> -3L
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -4L }) >> measurement(1L, -4L)
    }

    def "create synthesizes -1 when only positive (real device) ids exist yet"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> 5L
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -1L }) >> measurement(1L, -1L)
    }
}
