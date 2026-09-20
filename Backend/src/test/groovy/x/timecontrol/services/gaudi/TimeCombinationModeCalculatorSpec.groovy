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
import x.timecontrol.services.AgeGroupService
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService
import x.timecontrol.services.StartGroupTemplateService
import x.timecontrol.services.TeamService

import java.time.LocalDate
import java.time.LocalDateTime
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.services.SeasonService
import x.timecontrol.services.SettingsService

class TimeCombinationModeCalculatorSpec extends Specification {

    PersonService personService = Mock()
    TeamService teamService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    AgeGroupService ageGroupService = Mock() {
        findBySeason(2026) >> []
    }
    // A real SeasonService over a stubbed settings row rather than a mock, so the specs exercise
    // the actual date -> season mapping. With the default 1 January boundary, every race date used
    // in these specs (2026-..-..) resolves to season 2026.
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1)
    }
    SeasonService seasonService = new SeasonService(settingsService)

    TimeCombinationModeCalculator calculator = new TimeCombinationModeCalculator(new RankingService(startGroupTemplateService), personService, teamService, ageGroupService, seasonService)

    private static Race race(Long id) {
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    }

    private static Participant participant(Long id, Long personId, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, personId, null, null, null, durationMs, penalty, null, null)
    }

    private static Participant participantWithStatus(Long id, Long personId, Integer durationMs, DisqualificationStatus status) {
        new Participant(id, 1L, personId, null, null, null, durationMs, null, null, null, status)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode timeCombinationMode() {
        new GaudiMode(1L, GaudiModeType.TIME_COMBINATION, "Zeit-Kombination", null, null, false, false, false, LocalDateTime.now())
    }

    // Backing maps for the findByIds() stubs below - populated per-test via given:. A single
    // closure-based interaction per mock method (reading the map at call time) avoids the
    // ambiguity of multiple equally-generic `_` interactions on the same method.
    def knownPersons = [:]
    def knownTeams = [:]

    def setup() {
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
        personService.findByIds(_) >> { knownPersons }
        teamService.findByIds(_) >> { knownTeams }
    }

    def "a person's adjusted time (including penalty) is summed across both legs"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
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

    def "each leg's adjusted time is multiplied by that race's weight before summing"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 0.5d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 2.0d, [participant(2L, 1L, 10000)]),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then: "0.5*60000 + 2.0*10000 = 50000"
        ranking.size() == 1
        ranking[0].valueMs() == 50000
    }

    def "a person missing a result in any leg is excluded from the combined ranking"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then:
        ranking.isEmpty()
    }

    def "computeDnsEntries reports the explicit DSQ status of the leg that carries it"() {
        given: "Anna is DSQ in leg 1 (despite having a measured time there) and has a normal result in leg 2"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participantWithStatus(1L, 1L, 60000, DisqualificationStatus.DSQ)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, [participant(2L, 1L, 70000)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(timeCombinationMode(), races)

        then:
        dns.size() == 1
        dns[0].status() == "DSQ"
    }

    def "computeDnsEntries falls back to the generic DNS label when nobody has an explicit status"() {
        given: "Anna simply has no result at all in leg 2"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def dns = calculator.computeDnsEntries(timeCombinationMode(), races)

        then:
        dns.size() == 1
        dns[0].status() == "DNS"
    }

    def "a combined total tied with the leader shows no gap instead of +0"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Ben")])
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

    def "diffMs equals the difference of the two printed (rounded) totals, not the raw unrounded gap"() {
        given: "4083ms and 33525ms print as 0:04.08 and 0:33.53 (a difference of 29450ms); the raw gap 33525-4083=29442ms would round to 29440ms on its own"
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Berta")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d,
                        [participant(1L, 1L, 4083), participant(2L, 2L, 33525)]),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then:
        ranking[0].diffMs() == null
        ranking[1].diffMs() == 29450
    }

    def "a person missing a result only in a zero-weighted leg is still ranked"() {
        given: "person 1 has no result in leg 2, which is weighted 0 and must not disqualify them"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 0.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then:
        ranking.size() == 1
        ranking[0].valueMs() == 60000
    }

    def "the combined total is the sum of the printed leg values, so it can't tie someone who printed slower in every leg"() {
        given: "Anna runs 10.004s in all 4 legs (prints 0:10.00 each), Berta 10.005s (prints 0:10.01 each) - raw sums 40016 vs 40020ms would both print as 0:40.02 and share a place"
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Berta")])
        def races = (1L..4L).collect { Long raceId ->
            new GaudiModeCalculator.RaceParticipants(raceId, race(raceId), 1.0d,
                    [participant(raceId * 10 + 1, 1L, 10004), participant(raceId * 10 + 2, 2L, 10005)])
        }

        when:
        def ranking = calculator.computeRanking(timeCombinationMode(), races)

        then: "totals are 4 x 0:10.00 = 0:40.00 and 4 x 0:10.01 = 0:40.04, ranked 1 and 2"
        ranking[0].label().contains("Anna")
        ranking[0].valueMs() == 40000
        ranking[0].place() == 1
        ranking[1].valueMs() == 40040
        ranking[1].place() == 2
        ranking[1].diffMs() == 40
    }
}
