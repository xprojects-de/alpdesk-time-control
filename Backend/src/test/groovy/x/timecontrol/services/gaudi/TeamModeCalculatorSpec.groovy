package x.timecontrol.services.gaudi

import spock.lang.Specification
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.Team
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService
import x.timecontrol.services.StartGroupTemplateService
import x.timecontrol.services.TeamService

import java.time.LocalDate
import java.time.LocalDateTime

class TeamModeCalculatorSpec extends Specification {

    TeamService teamService = Mock()
    PersonService personService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    TeamModeCalculator calculator = new TeamModeCalculator(teamService, new RankingService(startGroupTemplateService), personService)

    private static Race race(SortDirection direction) {
        new Race(1L, "Test-Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, direction, null, null, null, null)
    }

    private static Participant participant(Long id, Long teamId, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, id, null, teamId, null, durationMs, penalty, null, null)
    }

    private static GaudiMode teamMode(Integer teamSize) {
        new GaudiMode(1L, GaudiModeType.TEAM, "Team-Wertung", teamSize, null, false, false, false, LocalDateTime.now())
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    // Backing maps for the findByIds() stubs below - populated per-test via given:. A single
    // closure-based interaction per mock method (reading the map at call time) avoids the
    // ambiguity of multiple equally-generic `_` interactions on the same method, where Spock's
    // "last declared wins" tie-break does not reliably apply.
    def knownPersons = [:]
    def knownTeams = [:]

    def setup() {
        personService.findByIds(_) >> { knownPersons }
        teamService.findByIds(_) >> { knownTeams }
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
    }

    def "team totals include each member's penalty, not just the raw time"() {
        given: "team 1 has a faster raw time but a penalty that should push it behind team 2"
        knownTeams.putAll([1L: new Team(1L, "Team A"), 2L: new Team(2L, "Team B")])
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
        knownTeams.putAll([1L: new Team(1L, "Team A"), 2L: new Team(2L, "Team B")])
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
        knownTeams.putAll([1L: new Team(1L, "Team A")])
        def participants = [participant(1L, 1L, 60000)]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then:
        ranking.isEmpty()
    }

    def "only the fastest teamSize members of a larger team count towards the total"() {
        given:
        knownTeams.putAll([1L: new Team(1L, "Team A")])
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

    def "only the counted teamSize members are listed - an extra, uncounted member is omitted entirely"() {
        given:
        knownTeams.putAll([1L: new Team(1L, "Team A")])
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Ben"), 3L: person(3L, "Chris")])
        def participants = [
                participant(1L, 1L, 60000),
                participant(2L, 1L, 65000),
                participant(3L, 1L, 999999), // slowest, doesn't count towards the top-2 total - must not appear at all
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then: "only the fastest two members are listed - the third, uncounted member is not"
        ranking[0].members().size() == 2
        ranking[0].members()*.label() == ["Anna", "Ben"]
        ranking[0].members()*.valueMs() == [60000, 65000]
    }

    def "a not-yet-finished or DSQ/DNF/DNS teammate is excluded from the member list entirely"() {
        given: "team A has 2 finishers (teamSize) plus a third member still out on course and a fourth who was disqualified"
        knownTeams.putAll([1L: new Team(1L, "Team A")])
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Ben"), 3L: person(3L, "Chris"), 4L: person(4L, "Dora")])
        def stillRacing = new Participant(3L, 1L, 3L, null, 1L, null, null, null, null, null)
        // Disqualified despite having crossed the finish line with a time - that time must not
        // count, and DSQ/DNF/DNS participants are reported elsewhere, not in this team's roster.
        def dsqMember = new Participant(4L, 1L, 4L, null, 1L, null, 70000, null, null, null, DisqualificationStatus.DSQ)
        def participants = [
                participant(1L, 1L, 60000),
                participant(2L, 1L, 65000),
                stillRacing,
                dsqMember,
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then: "only the 2 finishers are listed - neither the still-racing nor the DSQ member appear"
        ranking.size() == 1
        ranking[0].members().size() == 2
        ranking[0].members()*.label() == ["Anna", "Ben"]
    }

    def "a team with fewer finishers than teamSize does not qualify even if it has enough total members"() {
        given: "3 registered members, but only 1 has finished - teamSize 2 requires 2 finishers"
        knownTeams.putAll([1L: new Team(1L, "Team A")])
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Ben"), 3L: person(3L, "Chris")])
        def participants = [
                participant(1L, 1L, 60000),
                new Participant(2L, 1L, 2L, null, 1L, null, null, null, null, null),
                new Participant(3L, 1L, 3L, null, 1L, null, null, null, null, null),
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then:
        ranking.isEmpty()
    }

    def "tied team totals share the same place"() {
        given:
        knownTeams.putAll([1L: new Team(1L, "Team A"), 2L: new Team(2L, "Team B")])
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

    /**
     * Every member time is printed rounded to the hundredth, so the team total has to be the sum of
     * those printed values - otherwise the column the organizer can add up by hand does not match
     * the total next to it, and two teams whose members print identically get different places.
     * Same rule TimeCombinationModeCalculator already applies to its legs.
     */
    def "team total is the sum of the printed member times, not of the raw milliseconds"() {
        given: "both teams' members print as 0:10.00 each - 10004ms and 10000ms round alike"
        knownTeams.putAll([1L: new Team(1L, "Team A"), 2L: new Team(2L, "Team B")])
        def participants = [
                participant(1L, 1L, 10004), participant(2L, 1L, 10004),
                participant(3L, 2L, 10000), participant(4L, 2L, 10000),
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then: "identical printed members give an identical total - and therefore a shared place"
        ranking*.valueMs() == [20000, 20000]
        ranking*.place() == [1, 1]
    }

    def "each counted member carries race number and birth year for the PDF's member sub-table"() {
        given:
        knownTeams.putAll([1L: new Team(1L, "Team A")])
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def participants = [
                new Participant(1L, 1L, 1L, 17, 1L, null, 60000, null, null, null),
                new Participant(2L, 1L, 2L, null, 1L, null, 50000, null, null, null),
        ]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race(SortDirection.ASC), 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(teamMode(2), races)

        then: "best first, as counted"
        ranking[0].members()*.label() == ["B", "A"]
        ranking[0].members()*.raceNumber() == [null, 17]
        ranking[0].members()*.birthYear() == [1990, 1990]
    }
}
