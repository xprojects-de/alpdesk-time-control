package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.Measurement
import x.timecontrol.entities.Participant
import x.timecontrol.repositories.MeasurementRepository
import x.timecontrol.repositories.ParticipantRepository

import java.time.LocalDateTime

class AutoAssignServiceSpec extends Specification {

    MeasurementRepository measurementRepository = Mock()
    ParticipantRepository participantRepository = Mock()
    MeasurementTableLock measurementTableLock = new MeasurementTableLock()

    AutoAssignService service = new AutoAssignService(
            measurementRepository, participantRepository, measurementTableLock)

    private static Participant participant(Long id, Integer raceNumber) {
        new Participant(id, 1L, id, raceNumber, null, null, null, null, null, null)
    }

    private static Measurement measurement(Long id, Long participantId, int durationMs) {
        new Measurement(id, participantId, durationMs, LocalDateTime.of(2026, 1, 1, 10, 0))
    }

    def setup() {
        participantRepository.findByRaceIdAndRaceNumber(_, _) >> { Long raceId, Integer n ->
            switch (n) {
                case 1: return Optional.of(participant(10L, 1))
                case 2: return Optional.of(participant(11L, 2))
                case 5: return Optional.of(participant(12L, 5))
                default: return Optional.empty()
            }
        }
    }

    def "enable defaults the next race number to the lowest one in the race"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(1L, 5), participant(2L, 2), participant(3L, 8)]
        measurementRepository.findAll() >> []

        when:
        def status = service.enable(1L, null)

        then:
        status.raceId() == 1L
        status.active()
        status.nextRaceNumber() == 2
    }

    def "enable honors an explicit start race number even if it is already assigned"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2)]
        measurementRepository.findAll() >> [measurement(101L, 10L, 5000)]

        when:
        def status = service.enable(1L, 1)

        then:
        status.raceId() == 1L
        status.nextRaceNumber() == 1
    }

    def "enable rejects an explicit start race number that no participant in the race has"() {
        given: "race number 99 doesn't exist in this race's roster"
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2)]

        when:
        service.enable(1L, 99)

        then: "rejected up front instead of silently stalling every future processNewMeasurements() cycle"
        thrown(IllegalArgumentException)
    }

    def "enable skips a default race number that already has a measurement"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2)]
        measurementRepository.findAll() >> [measurement(101L, 10L, 5000)]

        when:
        def status = service.enable(1L, null)

        then:
        status.nextRaceNumber() == 2
    }

    def "disable clears the active race and cursor"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 3)]
        measurementRepository.findAll() >> []
        service.enable(1L, 3)

        when:
        def status = service.disable()

        then:
        !status.active()
        status.raceId() == null
        status.nextRaceNumber() == null
    }

    def "skip throws when auto-assign mode is not active"() {
        when:
        service.skip()

        then:
        thrown(IllegalStateException)
    }

    def "setNextRaceNumber rejects a race number no participant in the active race has"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1)]
        measurementRepository.findAll() >> []
        service.enable(1L, 1)

        when:
        service.setNextRaceNumber(42)

        then:
        thrown(IllegalArgumentException)
        service.getStatus().nextRaceNumber() == 1
    }

    def "setNextRaceNumber honors a valid race number exactly as given"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 5)]
        measurementRepository.findAll() >> []
        service.enable(1L, 1)

        when:
        def status = service.setNextRaceNumber(5)

        then:
        status.nextRaceNumber() == 5
    }

    def "skip advances the cursor to the next existing, unassigned race number"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2), participant(12L, 5)]
        measurementRepository.findAll() >> []
        service.enable(1L, 1)

        when:
        def status = service.skip()

        then:
        status.nextRaceNumber() == 2

        when:
        def status2 = service.skip()

        then:
        status2.nextRaceNumber() == 5

        when: "the queue is exhausted"
        def status3 = service.skip()

        then:
        status3.nextRaceNumber() == null
    }

    def "processNewMeasurements does nothing when auto-assign mode is inactive"() {
        when:
        service.processNewMeasurements()

        then:
        0 * measurementRepository.findAll()
        0 * measurementRepository.update(_)
    }

    def "processNewMeasurements matches unassigned measurements by race number and advances the cursor"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2)]
        measurementRepository.findAll() >> [measurement(101L, null, 5000), measurement(102L, null, 6000)]
        service.enable(1L, 1)

        when:
        service.processNewMeasurements()

        then:
        1 * measurementRepository.update({ Measurement m -> m.id() == 101L && m.participantId() == 10L })
        1 * measurementRepository.update({ Measurement m -> m.id() == 102L && m.participantId() == 11L })
        service.getStatus().nextRaceNumber() == null
    }

    def "processNewMeasurements leaves already-assigned measurements untouched"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1)]
        measurementRepository.findAll() >> [measurement(101L, 10L, 5000)]
        service.enable(1L, 1)

        when:
        service.processNewMeasurements()

        then:
        0 * measurementRepository.update(_)
    }

    def "processNewMeasurements leaves everything unassigned when the queue is empty"() {
        given: "no participant in the race has a race number at all"
        participantRepository.findByRaceId(1L) >> []
        measurementRepository.findAll() >> [measurement(101L, null, 5000)]
        service.enable(1L, null)

        when:
        service.processNewMeasurements()

        then:
        0 * measurementRepository.update(_)
        service.getStatus().nextRaceNumber() == null
    }

    def "processNewMeasurements re-checks the cursor against a race number assigned manually since the last cycle"() {
        given: "race number 1 already got a measurement through a manual edit, but the cursor still points at it"
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 2)]
        service.enable(1L, 1)
        measurementRepository.findAll() >> [measurement(100L, 10L, 4000), measurement(101L, null, 5000)]

        when:
        service.processNewMeasurements()

        then: "the pending measurement is matched to race number 2, not re-matched to 1"
        1 * measurementRepository.update({ Measurement m -> m.id() == 101L && m.participantId() == 11L })
        service.getStatus().nextRaceNumber() == null
    }
}
