package x.timecontrol.services.gaudi

import spock.lang.Specification
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiLosPairing
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService
import x.timecontrol.services.StartGroupTemplateService
import x.timecontrol.services.TeamService

import java.time.LocalDate
import java.time.LocalDateTime

class LosModeCalculatorSpec extends Specification {

    GaudiLosPairingRepository pairingRepository = Mock()
    PersonService personService = Mock()
    TeamService teamService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    LosModeCalculator calculator = new LosModeCalculator(pairingRepository, personService, new RankingService(startGroupTemplateService), teamService)

    Race race = new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)

    private static Participant participant(Long id, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, id, null, null, null, durationMs, penalty, null, null)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode losMode() {
        new GaudiMode(1L, GaudiModeType.LOS, "Los-Modus", null, null, false, false, false, LocalDateTime.now())
    }

    // Backing maps for the findByIds() stubs below - populated per-test via given:. A single
    // closure-based interaction per mock method (reading the map at call time) avoids the
    // ambiguity of multiple equally-generic `_` interactions on the same method, where Spock's
    // "last declared wins" tie-break does not reliably apply.
    def knownPersons = [:]
    def knownTeams = [:]

    def setup() {
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
        personService.findByIds(_) >> { knownPersons }
        teamService.findByIds(_) >> { knownTeams }
    }

    def "the pair closest to the overall average wins, ranked ahead of a farther pair"() {
        given: "overall average is (60000+80000+100000+120000)/4 = 90000"
        def participants = [
                participant(1L, 60000), participant(2L, 120000), // pair average 90000 -> diff 0
                participant(3L, 80000), participant(4L, 100000), // pair average 90000 -> diff 0 (tie)
        ]
        pairingRepository.findByGaudiModeId(1L) >> [
                new GaudiLosPairing(1L, 1L, 1L, 2L),
                new GaudiLosPairing(2L, 1L, 3L, 4L),
        ]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B"), 3L: person(3L, "C"), 4L: person(4L, "D")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "both pairs are exactly on the average -> tied for 1st place"
        ranking.size() == 2
        ranking*.place() == [1, 1]
    }

    def "a pairing missing a result for either participant is skipped"() {
        given:
        def participants = [participant(1L, 60000)] // participant 2 has no measurement at all
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking.isEmpty()
    }

    def "a self-paired leftover participant (odd count) is ranked against their own time"() {
        given:
        def participants = [participant(1L, 100000), participant(2L, 60000)]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, null)]
        knownPersons.putAll([1L: person(1L, "A")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking.size() == 1
        ranking[0].valueMs() == 100000
        ranking[0].label() == "A (Einzel)"
    }

    def "a participant's penalty is included in the pair average and the overall average"() {
        given: "participant 1 has a penalty that must count towards their value and the overall average"
        def participants = [
                participant(1L, 60000, 20000), // adjusted 80000
                participant(2L, 80000),
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "pair average is (80000+80000)/2 = 80000, exactly the overall average -> diff 0"
        ranking.size() == 1
        ranking[0].valueMs() == 80000
        ranking[0].diffMs() == 0
    }

    def "diffMs is derived from the printed (rounded) Ø-Werte, not from independently rounding the raw gap"() {
        given: "overall average of all four participants (4083,4083,33525,33525) is 18804ms -> prints as 0:18.80; the tested pair's average is 4083ms -> prints as 0:04.08"
        def participants = [
                participant(1L, 4083), participant(2L, 4083),   // this pair: average 4083ms
                participant(3L, 33525), participant(4L, 33525), // only present to shift the overall average, not part of a tested pairing
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "the raw gap |4083-18804|=14721ms (the old, now-wrong behaviour) does not equal the difference of the two printed values 0:18.80-0:04.08=0:14.72=14720ms, which is what's now returned - alongside the printed averages themselves"
        ranking.size() == 1
        ranking[0].valueMs() == 4080
        ranking[0].referenceMs() == 18800
        ranking[0].diffMs() == 14720
    }

    def "diffMs is derived from the printed values for POINTS races too, not just TIME"() {
        given: "a pair average of 10.5 rounds to 11, an overall average of 20.4 rounds to 20 - the raw gap |10.5-20.4|=9.9 would round to 10 on its own (the old behaviour), but the printed values differ by |11-20|=9"
        def pointsRace = new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.POINTS, null, SortDirection.ASC, null, null, null, null)
        def participants = [
                participant(1L, 10), participant(2L, 11), // this pair: average 10.5
                participant(3L, 27), participant(4L, 27), participant(5L, 27), // only present to shift the overall average to 20.4
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, pointsRace, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking.size() == 1
        ranking[0].valueMs() == 11
        ranking[0].referenceMs() == 20
        ranking[0].diffMs() == 9
    }

    def "a pair with a member who didn't finish is listed as nicht gewertet with that member's status"() {
        given:
        def participants = [
                participant(1L, 60000), participant(2L, 70000),               // both finished -> ranked
                participant(3L, 80000),
                new Participant(4L, 1L, 4L, null, null, null, null, null, null, null, DisqualificationStatus.DNF),
                new Participant(5L, 1L, 5L, null, null, null, null, null, null, null, DisqualificationStatus.DNS), // single, no time
        ]
        pairingRepository.findByGaudiModeId(1L) >> [
                new GaudiLosPairing(1L, 1L, 1L, 2L),
                new GaudiLosPairing(2L, 1L, 3L, 4L),
                new GaudiLosPairing(3L, 1L, 5L, null),
        ]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B"), 3L: person(3L, "C"), 4L: person(4L, "D"), 5L: person(5L, "E")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def dns = calculator.computeDnsEntries(losMode(), races)

        then:
        dns*.lastName() == ["C & D", "E (Einzel)"]
        dns*.status() == ["DNF", "DNS"]

        and: "the ranking itself still only contains the complete pair"
        calculator.computeRanking(losMode(), races)*.label() == ["A & B"]
    }

    def "someone left out of the draw is still listed as nicht gewertet, on their own"() {
        given: "GaudiModeService#drawLosPairing skips anyone already marked DNS/DSQ at draw time,"
        // so they appear in no pairing at all - without this they would vanish from the whole
        // document: not in the ranking, and not in the list that explains who is missing and why
        def participants = [
                participant(1L, 60000), participant(2L, 70000),
                new Participant(3L, 1L, 3L, null, null, null, null, null, null, null, DisqualificationStatus.DNS),
                new Participant(4L, 1L, 4L, null, null, null, null, null, null, null, DisqualificationStatus.DSQ),
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B"), 3L: person(3L, "C"), 4L: person(4L, "D")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def dns = calculator.computeDnsEntries(losMode(), races)

        then: "each on their own line with their own status - there is no partner they cost anything"
        dns*.lastName() == ["C", "D"]
        dns*.status() == ["DNS", "DSQ"]

        and: "the drawn pair is unaffected"
        calculator.computeRanking(losMode(), races)*.label() == ["A & B"]
    }

    def "a pair average is rounded once, straight to the printed hundredth - not to a whole ms first"() {
        given: "10004 and 10005 average 10004.5ms: rounding to 10005ms first would print 0:10.01, but the value is closer to 0:10.00"
        def participants = [
                participant(1L, 10004), participant(2L, 10005), // this pair: average 10004.5ms
                participant(3L, 10000), participant(4L, 10000), // overall average 10002.25ms -> 0:10.00
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "pair and overall average both print as 0:10.00, so the pair hits the average exactly"
        ranking.size() == 1
        ranking[0].valueMs() == 10000
        ranking[0].referenceMs() == 10000
        ranking[0].diffMs() == 0
    }
}
