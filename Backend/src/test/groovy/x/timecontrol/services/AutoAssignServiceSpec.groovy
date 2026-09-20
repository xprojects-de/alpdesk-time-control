package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.DisqualificationStatus
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

    private static Participant participant(Long id, Integer raceNumber, Integer startSequence) {
        new Participant(id, 1L, id, raceNumber, null, null, null, null, null, null, DisqualificationStatus.NONE, startSequence)
    }

    private static Participant participantWithStatus(Long id, Integer raceNumber, DisqualificationStatus status) {
        new Participant(id, 1L, id, raceNumber, null, null, null, null, null, null, status, null)
    }

    private static Measurement measurement(Long id, Long participantId, int durationMs) {
        new Measurement(id, null, participantId, durationMs, LocalDateTime.of(2026, 1, 1, 10, 0))
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
        service.setNextRaceNumber(42, false)

        then:
        thrown(IllegalArgumentException)
        service.getStatus().nextRaceNumber() == 1
    }

    def "setNextRaceNumber honors a valid race number exactly as given"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 5)]
        measurementRepository.findAll() >> []
        measurementRepository.findByParticipantId(11L) >> []
        service.enable(1L, 1)

        when:
        def status = service.setNextRaceNumber(5, false)

        then:
        status.nextRaceNumber() == 5
    }

    // Without the refusal the cursor is accepted here and then silently walked forward again by the
    // next processNewMeasurements cycle, so the following starter is credited with this race
    // number's finish - see setNextRaceNumber's javadoc.
    def "setNextRaceNumber refuses a race number that already has a measurement"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 5)]
        measurementRepository.findAll() >> []
        measurementRepository.findByParticipantId(11L) >> [new Measurement(7L, null, 11L, 42000, LocalDateTime.now())]
        service.enable(1L, 1)

        when:
        service.setNextRaceNumber(5, false)

        then:
        thrown(AutoAssignService.AlreadyTimedException)
        service.getStatus().nextRaceNumber() == 1
        0 * measurementRepository.deleteById(_)
    }

    def "setNextRaceNumber with force discards the existing measurement so the race number can run again"() {
        given:
        participantRepository.findByRaceId(1L) >> [participant(10L, 1), participant(11L, 5)]
        measurementRepository.findAll() >> []
        measurementRepository.findByParticipantId(11L) >> [new Measurement(7L, null, 11L, 42000, LocalDateTime.now())]
        service.enable(1L, 1)

        when:
        def status = service.setNextRaceNumber(5, true)

        then:
        1 * measurementRepository.deleteById(7L)
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

    def "enable defaults to the participant with the lowest startSequence, not the lowest raceNumber, when a start order was derived"() {
        given: "bib 30 has startSequence=1 (starts first), bib 5 has startSequence=2 - e.g. a slalom run 2 built from run 1's results"
        participantRepository.findByRaceId(1L) >> [participant(10L, 30, 1), participant(11L, 5, 2)]
        measurementRepository.findAll() >> []

        when:
        def status = service.enable(1L, null)

        then: "bib 30 is expected first, even though its number is numerically higher than bib 5"
        status.nextRaceNumber() == 30
    }

    def "processNewMeasurements follows startSequence order, not ascending raceNumber, when participants have one"() {
        given: "bib 30 starts first (startSequence=1), then bib 5 (startSequence=2)"
        participantRepository.findByRaceId(1L) >> [participant(10L, 30, 1), participant(11L, 5, 2)]
        measurementRepository.findAll() >> [measurement(101L, null, 5000), measurement(102L, null, 6000)]
        service.enable(1L, null)

        when:
        service.processNewMeasurements()

        then: "the first arriving measurement goes to bib 30 (startSequence 1), the second to bib 5 (startSequence 2)"
        1 * measurementRepository.update({ Measurement m -> m.id() == 101L && m.participantId() == 10L })
        1 * measurementRepository.update({ Measurement m -> m.id() == 102L && m.participantId() == 11L })
    }

    def "a participant already marked DSQ/DNF/DNS with no startSequence is excluded from the auto-assign queue entirely"() {
        given: "bib 2 is marked DNS (never got a start position) - no measurement should ever be expected for them"
        participantRepository.findByRaceId(1L) >> [
                participant(10L, 1),
                participantWithStatus(11L, 2, DisqualificationStatus.DNS),
                participant(12L, 3)
        ]
        measurementRepository.findAll() >> []

        when:
        def status = service.enable(1L, null)

        then: "the queue starts at bib 1 and, after that, skip()s straight to bib 3 - never stopping at the excluded bib 2"
        status.nextRaceNumber() == 1

        when:
        def status2 = service.skip()

        then:
        status2.nextRaceNumber() == 3
    }

    def "marking a participant DSQ/DNF/DNS pulls them out of the queue even if they already have a startSequence from an earlier derivation"() {
        given: "bib 30 has startSequence=1 (was due to start first), but is then marked DNF (e.g. injured before the start) - no measurement should be expected for them anymore"
        participantRepository.findByRaceId(1L) >> [
                new Participant(10L, 1L, 10L, 30, null, null, null, null, null, null, DisqualificationStatus.DNF, 1),
                participant(11L, 5, 2)
        ]
        measurementRepository.findAll() >> []

        when:
        def status = service.enable(1L, null)

        then: "the queue skips straight to bib 5 (startSequence 2), never expecting bib 30"
        status.nextRaceNumber() == 5
    }

    def "processNewMeasurements never credits a measurement to a participant marked DSQ/DNF/DNS after the cursor already landed on them"() {
        given: "bib 5 is the only one left in the queue; the cursor is already sitting on it"
        // Mutated by this test instead of re-stubbing with a second `>>` interaction - two
        // separate interactions on the same mock method are ambiguous about which one future
        // calls match (see the identical pattern/reasoning in ParticipantServiceSpec).
        def bib5 = participant(11L, 5, 1)
        participantRepository.findByRaceId(1L) >> { [bib5] }
        def pendingMeasurements = []
        measurementRepository.findAll() >> { pendingMeasurements }
        service.enable(1L, null)
        assert service.getStatus().nextRaceNumber() == 5

        and: "bib 5 is then marked DNF (e.g. a late scratch) - the repository now reflects that"
        bib5 = new Participant(11L, 1L, 11L, 5, null, null, null, null, null, null, DisqualificationStatus.DNF, null)
        pendingMeasurements = [measurement(101L, null, 5000)]

        when:
        service.processNewMeasurements()

        then: "the pending measurement is NOT credited to the now-excluded bib 5 - nobody is left in the queue"
        0 * measurementRepository.update(_)
        service.getStatus().nextRaceNumber() == null
    }

    def "processNewMeasurements advances past a cursor marked DSQ/DNF/DNS to the next real participant instead of freezing"() {
        given: "cursor is manually pointed at bib 5 (e.g. an explicit re-match), which is then marked DNF; bib 7 is still active after it"
        // Both stubs use a single interaction with a mutable captured variable, re-assigned below,
        // rather than a second `>>` - see the identical pattern/reasoning a few tests up.
        def participants = [participant(11L, 5), participant(12L, 7)]
        participantRepository.findByRaceId(1L) >> { participants }
        def pendingMeasurements = []
        measurementRepository.findAll() >> { pendingMeasurements }
        service.enable(1L, 5)
        assert service.getStatus().nextRaceNumber() == 5

        and: "bib 5 is then marked DNF - loadRoster's raceNumbersInStartOrder no longer contains it at all"
        participants = [
                new Participant(11L, 1L, 11L, 5, null, null, null, null, null, null, DisqualificationStatus.DNF, null),
                participant(12L, 7)
        ]
        pendingMeasurements = [measurement(101L, null, 5000)]

        when:
        service.processNewMeasurements()

        then: "the pending measurement is matched to bib 7 - the cursor must not get stuck returning null forever just because 5 (its own last value) is no longer in the start-order list"
        1 * measurementRepository.update({ Measurement m -> m.id() == 101L && m.participantId() == 12L })
        service.getStatus().nextRaceNumber() == null
    }

    def "a participant re-included via includeUnranked=true keeps their normal (NONE) status and IS included in the queue"() {
        given: "bib 2 didn't have a result in the linked previous race but was still given startSequence=1 (includeUnranked=true) - its own status in THIS race is untouched by that, i.e. still NONE"
        participantRepository.findByRaceId(1L) >> [
                new Participant(11L, 1L, 11L, 2, null, null, null, null, null, null, DisqualificationStatus.NONE, 1)
        ]
        measurementRepository.findAll() >> []

        when:
        def status = service.enable(1L, null)

        then:
        status.nextRaceNumber() == 2
    }

    /**
     * A late entry has no startSequence and falls back to its bib for ordering - which can collide
     * with an existing participant's startSequence, since the two are separate 1..n number spaces
     * and only unique within themselves. Without a tie-break, the cursor can never reach the second
     * of the two, and every measurement from there on is credited to the wrong starter.
     */
    def "reaches a late entry whose bib collides with another participant's start sequence"() {
        given: "start order derived from run 1 (bibs 50/51/52 get sequences 1/2/3), then bib 2 entered late"
        participantRepository.findByRaceId(1L) >> [
                participant(1L, 50, 1),
                participant(2L, 51, 2),
                participant(3L, 2, null),   // order key 2 - collides with bib 51's start sequence
                participant(4L, 52, 3),
        ]
        measurementRepository.findAll() >> [
                measurement(100L, null, 10000),
                measurement(101L, null, 11000),
                measurement(102L, null, 12000),
                measurement(103L, null, 13000),
        ]
        service.enable(1L, null)

        when:
        service.processNewMeasurements()

        then: "every starter gets exactly one time, nobody is skipped"
        1 * measurementRepository.update({ Measurement m -> m.participantId() == 1L })
        1 * measurementRepository.update({ Measurement m -> m.participantId() == 2L })
        1 * measurementRepository.update({ Measurement m -> m.participantId() == 3L })
        1 * measurementRepository.update({ Measurement m -> m.participantId() == 4L })
    }
}
