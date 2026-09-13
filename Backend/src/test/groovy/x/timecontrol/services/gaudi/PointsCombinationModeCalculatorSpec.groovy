package x.timecontrol.services.gaudi

import spock.lang.Specification
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.PointsScale
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.services.PersonService
import x.timecontrol.services.PointsScaleService
import x.timecontrol.services.RankingService
import x.timecontrol.services.TeamService

import java.time.LocalDate
import java.time.LocalDateTime

class PointsCombinationModeCalculatorSpec extends Specification {

    PersonService personService = Mock()
    PointsScaleService pointsScaleService = Mock()
    TeamService teamService = Mock()
    PointsCombinationModeCalculator calculator =
            new PointsCombinationModeCalculator(new RankingService(), personService, pointsScaleService, teamService)

    def scale = new PointsScale(1L, "Test-Schema", "100,80,60")

    private static Race race(Long id) {
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC)
    }

    private static Participant participant(Long id, Long personId, Integer durationMs) {
        new Participant(id, 1L, personId, null, null, null, durationMs, null, null, null)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Testperson", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode pointsMode() {
        new GaudiMode(1L, GaudiModeType.POINTS_COMBINATION, "Punkte-Mischwertung", null, 1L, LocalDateTime.now())
    }

    def setup() {
        pointsScaleService.findById(1L) >> Optional.of(scale)
        // Production code now parses the scale once per computeRanking() call and looks up points
        // via the pre-parsed List<Integer> overload instead of re-parsing per person/leg.
        pointsScaleService.parsePoints(scale) >> [100, 80, 60]
        pointsScaleService.pointsForPlace(_ as List, 1) >> 100
        pointsScaleService.pointsForPlace(_ as List, 2) >> 80
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
    }

    def "a person missing a result only in a zero-weighted race is still ranked"() {
        given: "person 1 has no result in race 2, which is weighted 0 and must not disqualify them"
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 0.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)

        then:
        ranking.size() == 1
        ranking[0].totalPoints() == 100
    }

    def "a person missing a result in a race that actually counts is excluded"() {
        given:
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)

        then:
        ranking.isEmpty()
    }

    def "points from each race are weighted before summing"() {
        given:
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        personService.findById(2L) >> Optional.of(person(2L, "Ben"))
        def participants1 = [participant(1L, 1L, 60000), participant(2L, 2L, 65000)]
        def participants2 = [participant(3L, 1L, 65000), participant(4L, 2L, 60000)]
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, participants1),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 0.5d, participants2),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)
        def byPersonPoints = ranking.collectEntries { [(it.label()): it.totalPoints()] }

        then: "Anna: 100 (1st in race1) + 40 (0.5 * 80 for 2nd in race2) = 140"
        byPersonPoints["Anna"] == 140
        and: "Ben: 80 (2nd in race1) + 50 (0.5 * 100 for 1st in race2) = 130"
        byPersonPoints["Ben"] == 130
    }
}
