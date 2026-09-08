package x.timecontrol.services.gaudi

import spock.lang.Specification
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService

import java.time.LocalDate
import java.time.LocalDateTime

class TimeCombinationModeCalculatorSpec extends Specification {

    PersonService personService = Mock()
    TimeCombinationModeCalculator calculator = new TimeCombinationModeCalculator(new RankingService(), personService)

    private static Race race(Long id) {
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC)
    }

    private static Participant participant(Long id, Long personId, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, personId, null, null, null, durationMs, penalty, null)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode timeCombinationMode() {
        new GaudiMode(1L, GaudiModeType.TIME_COMBINATION, "Zeit-Kombination", null, null, LocalDateTime.now())
    }

    def setup() {
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
    }

    def "a person's adjusted time (including penalty) is summed across both legs"() {
        given:
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000, 2000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, [participant(2L, 1L, 70000)]),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then: "62000 (60000+penalty) + 70000 = 132000"
        ranking.size() == 1
        ranking[0].valueMs() == 132000
        ranking[0].diffMs() == null
    }

    def "a person missing a result in any leg is excluded from the combined ranking"() {
        given:
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then:
        ranking.isEmpty()
    }

    def "a combined total tied with the leader shows no gap instead of +0"() {
        given:
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        personService.findById(2L) >> Optional.of(person(2L, "Ben"))
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d,
                        [participant(1L, 1L, 60000), participant(2L, 2L, 60000)]),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then:
        ranking.every { it.diffMs() == null }
        ranking*.place() == [1, 1]
    }
}
