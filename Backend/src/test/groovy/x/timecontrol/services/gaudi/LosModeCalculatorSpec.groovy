package x.timecontrol.services.gaudi

import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.Category
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
import x.timecontrol.entities.Team
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.services.CategoryService
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
    CategoryService categoryService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    LosModeCalculator calculator = new LosModeCalculator(pairingRepository, personService, new RankingService(startGroupTemplateService),
            teamService, categoryService)

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
    def knownCategories = [:]

    def setup() {
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
        personService.findByIds(_) >> { knownPersons }
        teamService.findByIds(_) >> { knownTeams }
        categoryService.findByIds(_) >> { knownCategories }
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
        given: "the pair averages 4085ms -> prints as 0:04.09; the whole field (4080,4090,33520,33520) averages 18802.5ms -> prints as 0:18.80"
        def participants = [
                participant(1L, 4080), participant(2L, 4090),   // this pair: average 4085ms
                participant(3L, 33520), participant(4L, 33520), // only present to shift the overall average, not part of a tested pairing
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "the gap |4085-18802.5|=14717.5ms rounded on its own would be 0:14.72, but the two printed values differ by 0:18.80-0:04.09=0:14.71, which is what's returned - alongside the printed averages themselves"
        ranking.size() == 1
        ranking[0].valueMs() == 4090
        ranking[0].referenceMs() == 18800
        ranking[0].diffMs() == 14710
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

    @Unroll
    def "a pair average is built from the printed hundredths, so it can be recomputed from the PDF by hand (#v1 + #v2)"() {
        given:
        def participants = [participant(1L, v1), participant(2L, v2)]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "the printed values' average, commercially rounded - the raw ms would round the other way"
        ranking[0].valueMs() == printedAverage

        and: "each member carries the value that counted, i.e. the printed one"
        ranking[0].time1Ms() == printed1
        ranking[0].time2Ms() == printed2
        ranking[0].members()*.valueMs() == [printed1, printed2]

        where: "raw average 27:31.7025 / 0:10.0045, printed values average 27:31.705 / 0:10.005"
        v1      | v2      | printed1 | printed2 | printedAverage
        1130266 | 2173139 | 1130270  | 2173140  | 1651710 // 18:50.27 + 36:13.14 -> 27:31.71
        10004   | 10005   | 10000    | 10010    | 10010   // 0:10.00 + 0:10.01 -> 0:10.01
    }

    def "the field average is built from the printed hundredths as well"() {
        given: "raw average 10004.5ms would print 0:10.00, the printed values 0:10.01/0:10.00 average 0:10.005"
        def participants = [
                participant(1L, 10005), participant(2L, 10004),
                participant(3L, 10005), participant(4L, 10004),
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking[0].referenceMs() == 10010
    }

    def "each pair carries its members one by one - own value, team, race number, birth year and category - for the PDF's one-line-per-person layout"() {
        given:
        def participants = [
                new Participant(1L, 1L, 1L, 17, 1L, 5L, 60000, null, null, null),
                new Participant(2L, 1L, 2L, 23, 2L, null, 120000, null, null, null),
                new Participant(3L, 1L, 3L, null, null, null, 90000, null, null, null),
        ]
        pairingRepository.findByGaudiModeId(1L) >> [
                new GaudiLosPairing(1L, 1L, 1L, 2L),
                new GaudiLosPairing(2L, 1L, 3L, null),
        ]
        knownPersons.putAll([1L: person(1L, "A"), 2L: person(2L, "B"), 3L: person(3L, "C")])
        knownTeams.putAll([1L: new Team(1L, "Team A"), 2L: new Team(2L, "Team B")])
        knownCategories.putAll([5L: new Category(5L, "Snowboard")])
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)
        def pair = ranking.find { it.members().size() == 2 }
        def single = ranking.find { it.members().size() == 1 }

        then:
        pair.members()*.label() == ["A", "B"]
        pair.members()*.valueMs() == [60000, 120000]
        pair.members()*.team() == ["Team A", "Team B"]
        pair.members()*.raceNumber() == [17, 23]
        pair.members()*.birthYear() == [1990, 1990]
        pair.members()*.category() == ["Snowboard", null]

        and: "a self-paired leftover has just the one member, without a race number if none was given"
        single.members()*.label() == ["C"]
        single.members()[0].raceNumber() == null
    }
}
