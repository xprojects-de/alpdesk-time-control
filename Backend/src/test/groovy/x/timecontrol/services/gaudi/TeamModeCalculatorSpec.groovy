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
import x.timecontrol.entities.Team
import x.timecontrol.repositories.TeamRepository
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService

import java.time.LocalDate
import java.time.LocalDateTime

class TeamModeCalculatorSpec extends Specification {

    TeamRepository teamRepository = Mock()
    PersonService personService = Mock()
    TeamModeCalculator calculator = new TeamModeCalculator(teamRepository, new RankingService(), personService)

    private static Race race(SortDirection direction) {
        new Race(1L, "Test-Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, direction)
    }

    private static Participant participant(Long id, Long teamId, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, id, null, teamId, null, durationMs, penalty, null)
    }

    private static GaudiMode teamMode(Integer teamSize) {
        new GaudiMode(1L, GaudiModeType.TEAM, "Team-Wertung", teamSize, null, LocalDateTime.now())
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    def setup() {
        personService.findById(_ as Long) >> Optional.empty()
    }

    def "team totals include each member's penalty, not just the raw time"() {
        given: "team 1 has a faster raw time but a penalty that should push it behind team 2"
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        teamRepository.findById(2L) >> Optional.of(new Team(2L, "Team B"))
        def participants = [
                participant(1L, 1L, 60000, 10000), // adjusted 70000
                participant(2L, 2L, 65000),        // adjusted 65000
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(1), races)

        then: "Team B wins because Team A's penalty was not ignored"
        ranking[0].label() == "Team B"
        ranking[0].valueMs() == 65000
        ranking[1].label() == "Team A"
        ranking[1].valueMs() == 70000
    }

    def "team ranking is reversed for a DESC (points-style) race"() {
        given:
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        teamRepository.findById(2L) >> Optional.of(new Team(2L, "Team B"))
        def participants = [
                participant(1L, 1L, 100), // higher value should win in DESC
                participant(2L, 2L, 50),
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.DESC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(1), races)

        then: "the higher total (Team A) is ranked first, not the lower one"
        ranking[0].label() == "Team A"
        ranking[1].label() == "Team B"
    }

    def "teams with fewer members than the configured team size do not qualify"() {
        given:
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        def participants = [participant(1L, 1L, 60000)]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then:
        ranking.isEmpty()
    }

    def "only the fastest teamSize members of a larger team count towards the total"() {
        given:
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        def participants = [
                participant(1L, 1L, 60000),
                participant(2L, 1L, 65000),
                participant(3L, 1L, 999999), // slowest, must be excluded from the top-2 sum
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then:
        ranking[0].valueMs() == 125000
    }

    def "team members are listed individually, marking which ones counted towards the total"() {
        given:
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        personService.findById(1L) >> Optional.of(person(1L, "Anna"))
        personService.findById(2L) >> Optional.of(person(2L, "Ben"))
        personService.findById(3L) >> Optional.of(person(3L, "Chris"))
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
        def participants = [
                participant(1L, 1L, 60000),
                participant(2L, 1L, 65000),
                participant(3L, 1L, 999999), // slowest, doesn't count towards the top-2 total
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then: "all three members are listed, but only the fastest two are marked as counted"
        ranking[0].members().size() == 3
        ranking[0].members()*.valueMs() == [60000, 65000, 999999]
        ranking[0].members()*.counted() == [true, true, false]
    }

    def "tied team totals share the same place"() {
        given:
        teamRepository.findById(1L) >> Optional.of(new Team(1L, "Team A"))
        teamRepository.findById(2L) >> Optional.of(new Team(2L, "Team B"))
        def participants = [
                participant(1L, 1L, 60000),
                participant(2L, 2L, 60000),
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(1), races)

        then:
        ranking*.place() == [1, 1]
    }
}
