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

    private static Measurement measurement(Long id, Long deviceMeasurementId, Long participantId = null) {
        new Measurement(id, deviceMeasurementId, participantId, 5000, NOW)
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

    def "create rejects a participantId already assigned to another measurement"() {
        given:
        Measurement input = measurement(null, 5L, 42L)
        repository.findByParticipantId(42L) >> [measurement(9L, 3L, 42L)]

        when:
        service.create(input)

        then:
        thrown(IllegalStateException)
        0 * repository.save(_)
    }

    def "create allows a participantId with no existing assignment"() {
        given:
        Measurement input = measurement(null, 5L, 42L)
        repository.findByParticipantId(42L) >> []

        when:
        service.create(input)

        then:
        1 * repository.save(_) >> measurement(1L, 5L, 42L)
    }

    def "update rejects a participantId already assigned to a different measurement"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L))
        repository.findByParticipantId(42L) >> [measurement(2L, 6L, 42L)]

        when:
        service.update(1L, measurement(null, null, 42L))

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
    }

    def "update allows re-saving the measurement's own already-assigned participantId"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L, 42L))
        repository.findByParticipantId(42L) >> [measurement(1L, 5L, 42L)]

        when:
        service.update(1L, measurement(null, null, 42L))

        then:
        1 * repository.update(_) >> measurement(1L, 5L, 42L)
    }
}
