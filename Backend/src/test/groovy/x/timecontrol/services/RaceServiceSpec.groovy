package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.StartOrderMode
import x.timecontrol.repositories.ParticipantRepository
import x.timecontrol.repositories.RaceRepository

import java.time.LocalDate

class RaceServiceSpec extends Specification {

    RaceRepository repository = Mock()
    ParticipantRepository participantRepository = Mock()
    MeasurementTableLock measurementTableLock = new MeasurementTableLock()

    RaceService service = new RaceService(repository, participantRepository, measurementTableLock)

    private static Race race(Long id, Long previousRaceId = null) {
        new Race(id, "Rennen $id", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, previousRaceId,
                previousRaceId != null ? StartOrderMode.REVERSE_TOP_N : null, previousRaceId != null ? 15 : null)
    }

    def "update rejects a race linking to itself"() {
        given:
        repository.findById(1L) >> Optional.of(race(1L))
        repository.findByNameIgnoreCase(_) >> Optional.empty()

        when:
        service.update(1L, race(1L, 1L), false)

        then:
        thrown(IllegalArgumentException)
    }

    def "update rejects a link to a non-existent race"() {
        given:
        repository.findById(1L) >> Optional.of(race(1L))
        repository.findById(99L) >> Optional.empty()
        repository.findByNameIgnoreCase(_) >> Optional.empty()

        when:
        service.update(1L, race(1L, 99L), false)

        then:
        thrown(IllegalArgumentException)
    }

    def "update rejects a mutual (2-cycle) previousRaceId link"() {
        given: "race 2 already links back to race 1"
        repository.findById(1L) >> Optional.of(race(1L))
        repository.findById(2L) >> Optional.of(race(2L, 1L))
        repository.findByNameIgnoreCase(_) >> Optional.empty()

        when: "race 1 is now also linked to race 2"
        service.update(1L, race(1L, 2L), false)

        then:
        thrown(IllegalArgumentException)
    }

    def "update accepts a normal, non-cyclic previousRaceId link"() {
        given:
        repository.findById(1L) >> Optional.of(race(1L))
        repository.findById(2L) >> Optional.of(race(2L))
        repository.findByNameIgnoreCase(_) >> Optional.empty()
        repository.update(_ as Race) >> { Race r -> r }

        when:
        def result = service.update(1L, race(1L, 2L), false)

        then:
        noExceptionThrown()
        result.get().previousRaceId() == 2L
    }

    def "update rejects a negative startOrderReverseTopCount"() {
        given:
        repository.findById(1L) >> Optional.of(race(1L))
        repository.findById(2L) >> Optional.of(race(2L))
        repository.findByNameIgnoreCase(_) >> Optional.empty()
        def invalid = new Race(1L, "Rennen 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 2L, StartOrderMode.REVERSE_TOP_N, -5)

        when:
        service.update(1L, invalid, false)

        then:
        thrown(IllegalArgumentException)
    }

    def "createFromRequest drops startOrderMode/startOrderReverseTopCount when previousRaceId is not set"() {
        given:
        def request = new x.timecontrol.dto.RaceRequest("Rennen", LocalDate.of(2026, 1, 1), null, null, null,
                null, null, null, null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null,
                null, StartOrderMode.REVERSE_TOP_N, 15)

        when:
        def race = service.createFromRequest(request)

        then: "startOrderMode/Count are meaningless without a link, so they're dropped rather than stored orphaned"
        race.previousRaceId() == null
        race.startOrderMode() == null
        race.startOrderReverseTopCount() == null
    }
}
