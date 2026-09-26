package x.timecontrol.services.gaudi

import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.PointsScale
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.services.AgeGroupService
import x.timecontrol.services.PersonService
import x.timecontrol.services.PointsScaleService
import x.timecontrol.services.RankingService
import x.timecontrol.services.StartGroupTemplateService
import x.timecontrol.services.TeamService

import java.time.LocalDate
import java.time.LocalDateTime

class PointsCombinationModeCalculatorSpec extends Specification {

    PersonService personService = Mock()
    PointsScaleService pointsScaleService = Mock()
    TeamService teamService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    AgeGroupService ageGroupService = Mock() {
        findForScoring(_) >> []
    }
    PointsCombinationModeCalculator calculator =
            new PointsCombinationModeCalculator(new RankingService(startGroupTemplateService), personService, pointsScaleService, teamService, ageGroupService)

    def scale = new PointsScale(1L, "Test-Schema", "100,80,60")

    private static Race race(Long id) {
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    }

    private static Race raceOn(Long id, LocalDate date) {
        new Race(id, "Rennen " + id, date, null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    }

    private static Participant participant(Long id, Long personId, Integer durationMs) {
        new Participant(id, 1L, personId, null, null, null, durationMs, null, null, null)
    }

    private static Participant participantWithStatus(Long id, Long personId, Integer durationMs, DisqualificationStatus status) {
        new Participant(id, 1L, personId, null, null, null, durationMs, null, null, null, status)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Testperson", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode pointsMode(boolean keepDnsInRanking = false, boolean keepDnfInRanking = false, boolean keepDsqInRanking = false) {
        new GaudiMode(1L, GaudiModeType.POINTS_COMBINATION, "Punkte-Mischwertung", null, 1L,
                keepDnsInRanking, keepDnfInRanking, keepDsqInRanking, LocalDateTime.now())
    }

    /** Only the one flag matching {@code status} turned on - the other two stay off. */
    private static GaudiMode pointsModeTolerating(DisqualificationStatus status) {
        pointsMode(status == DisqualificationStatus.DNS, status == DisqualificationStatus.DNF, status == DisqualificationStatus.DSQ)
    }

    def setup() {
        pointsScaleService.findById(1L) >> Optional.of(scale)
        // Production code now parses the scale once per computeRanking() call and looks up points
        // via the pre-parsed List<Integer> overload instead of re-parsing per person/leg.
        pointsScaleService.parsePoints(scale) >> [100, 80, 60]
        pointsScaleService.pointsForPlace(_ as List, 1) >> 100
        pointsScaleService.pointsForPlace(_ as List, 2) >> 80
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
        // Backing maps for the findByIds() stubs - populated per-test via given:. A single
        // closure-based interaction per mock method (reading the map at call time) avoids the
        // ambiguity of multiple equally-generic `_` interactions on the same method.
        personService.findByIds(_) >> { knownPersons }
        teamService.findByIds(_) >> { knownTeams }
    }

    def knownPersons = [:]
    def knownTeams = [:]

    def "a person missing a result only in a zero-weighted race is still ranked"() {
        given: "person 1 has no result in race 2, which is weighted 0 and must not disqualify them"
        knownPersons.putAll([1L: person(1L, "Anna")])
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
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)

        then:
        ranking.isEmpty()
    }

    @Unroll
    def "a person #status in a required race is excluded when no keep*InRanking flag is set"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d,
                        [participantWithStatus(2L, 1L, null, status)]),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)

        then:
        ranking.isEmpty()

        where:
        status << [DisqualificationStatus.DNS, DisqualificationStatus.DNF, DisqualificationStatus.DSQ]
    }

    @Unroll
    def "a person #status in a required race stays ranked with 0 points for that leg when its own keep*InRanking flag is set"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d,
                        [participantWithStatus(2L, 1L, null, status)]),
        ]

        when:
        def ranking = calculator.computeRanking(pointsModeTolerating(status), races)

        then:
        ranking.size() == 1
        ranking[0].totalPoints() == 100
        ranking[0].legs()[1].points() == 0
        ranking[0].legs()[1].place() == null
        ranking[0].legs()[1].status() == status.name()
        ranking[0].legs()[0].status() == null

        where:
        status << [DisqualificationStatus.DNS, DisqualificationStatus.DNF, DisqualificationStatus.DSQ]
    }

    @Unroll
    def "the three flags are independent - a #status leg is still excluded when only the other two flags are set"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d,
                        [participantWithStatus(2L, 1L, null, status)]),
        ]
        def otherTwoOnly = pointsMode(status != DisqualificationStatus.DNS, status != DisqualificationStatus.DNF, status != DisqualificationStatus.DSQ)

        when:
        def ranking = calculator.computeRanking(otherTwoOnly, races)

        then:
        ranking.isEmpty()

        where:
        status << [DisqualificationStatus.DNS, DisqualificationStatus.DNF, DisqualificationStatus.DSQ]
    }

    def "a person kept in ranking despite a bad leg is not also reported in computeDnsEntries"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d,
                        [participantWithStatus(2L, 1L, null, DisqualificationStatus.DNF)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsMode(false, true, false), races)

        then:
        dns.isEmpty()
    }

    def "a missing (never entered) leg is tolerated too when keepDnsInRanking is true, marked as the generic DNS label"() {
        given: "person 1 has no Participant record at all in race 2, unlike an explicit status - " +
                "this counts as the generic DNS case, gated by keepDnsInRanking specifically"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(true, false, false), races)

        then:
        ranking.size() == 1
        ranking[0].totalPoints() == 100
        ranking[0].legs()[1].points() == 0
        ranking[0].legs()[1].status() == "DNS"
    }

    def "a person with no valid result in ANY required race is still excluded even when all three flags are set"() {
        given: "Anna never has a placed result in either required race - she never actually raced"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d,
                        [participantWithStatus(1L, 1L, null, DisqualificationStatus.DNS)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]
        def allFlags = pointsMode(true, true, true)

        when:
        def ranking = calculator.computeRanking(allFlags, races)
        def dns = calculator.computeDnsEntries(allFlags, races)

        then:
        ranking.isEmpty()
        dns.size() == 1
        dns[0].status() == "DNS"
    }

    def "computeDnsEntries reports the explicit DSQ status of the leg that carries it"() {
        given: "Anna is DSQ in race 1 (despite having a measured time there) and has a normal result in race 2"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participantWithStatus(1L, 1L, 60000, DisqualificationStatus.DSQ)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, [participant(2L, 1L, 65000)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsMode(), races)

        then:
        dns.size() == 1
        dns[0].status() == "DSQ"
    }

    def "computeDnsEntries falls back to the generic DNS label when nobody has an explicit status"() {
        given: "Anna simply has no result at all in race 2, which actually counts (weight 1.0)"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, []),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsMode(), races)

        then:
        dns.size() == 1
        dns[0].status() == "DNS"
    }

    def "points from each race are weighted before summing"() {
        given:
        knownPersons.putAll([1L: person(1L, "Anna"), 2L: person(2L, "Ben")])
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

    def "the total is rounded once, not per leg - avoiding compounded rounding error"() {
        given: "two legs weighted 0.5 each, both award Anna 33 points (3rd place); rounding each leg " +
                "separately (round(16.5)=17 twice = 34) would overstate the correct total of round(16.5+16.5)=33"
        knownPersons.putAll([1L: person(1L, "Anna")])
        pointsScaleService.pointsForPlace(_ as List, 3) >> 33
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 0.5d,
                        [participant(10L, 2L, 10000), participant(11L, 3L, 20000), participant(1L, 1L, 30000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 0.5d,
                        [participant(20L, 4L, 10000), participant(21L, 5L, 20000), participant(2L, 1L, 30000)]),
        ]

        when:
        def ranking = calculator.computeRanking(pointsMode(), races)

        then:
        ranking.size() == 1
        ranking[0].label() == "Anna"
        ranking[0].totalPoints() == 33
    }

    @Unroll
    def "#points points at weight #weight count as #expected - a half is rounded up as by hand, not lost to floating point"() {
        given: "Anna is 3rd in the only counted leg; leg 2 is weighted 0 and contributes nothing"
        knownPersons.putAll([1L: person(1L, "Anna")])
        pointsScaleService.pointsForPlace(_ as List, 3) >> points
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), weight,
                        [participant(10L, 2L, 10000), participant(11L, 3L, 20000), participant(1L, 1L, 30000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 0.0d, []),
        ]

        when:
        def anna = calculator.computeRanking(pointsMode(), races).find { it.label() == "Anna" }

        then: "the printed leg points and the total agree with points x weight rounded half up"
        anna.legs()[0].points() == expected
        anna.totalPoints() == expected

        where:
        points | weight || expected
        45     | 0.7d   || 32
        90     | 0.35d  || 32
        25     | 0.58d  || 15
        50     | 0.29d  || 15
        45     | 0.5d   || 23
        60     | 0.25d  || 15
    }

    def "computeDnsEntries names the leg that excluded the person, not a leg the operator tolerated"() {
        given: "Anna is DSQ in leg 1, which keepDsqInRanking tolerates, and was never entered in leg 2"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d,
                        [participantWithStatus(1L, 1L, 60000, DisqualificationStatus.DSQ), participant(3L, 2L, 61000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, [participant(4L, 2L, 62000)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsModeTolerating(DisqualificationStatus.DSQ), races)

        then: "the missing leg 2 is the reason"
        dns.size() == 1
        dns[0].status() == "DNS"
    }

    def "computeDnsEntries reports the first bad leg in the configured race order, not in race id order"() {
        given: "race 12 is configured first (DNF there), race 5 second (DSQ there)"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(12L, race(12L), 1.0d,
                        [participantWithStatus(1L, 1L, null, DisqualificationStatus.DNF)]),
                new GaudiModeCalculator.RaceParticipants(5L, race(5L), 1.0d,
                        [participantWithStatus(2L, 1L, 60000, DisqualificationStatus.DSQ)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsMode(), races)

        then:
        dns.size() == 1
        dns[0].status() == "DNF"
    }

    def "computeDnsEntries scores a combination spanning two seasons against the first race's classes instead of failing"() {
        given: "a December and a January race with the default 1 January boundary - one club championship, two seasons"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, raceOn(1L, LocalDate.of(2025, 12, 14)), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, raceOn(2L, LocalDate.of(2026, 1, 11)), 1.0d, []),
        ]

        when: "Anna has no result in the second leg, so she is not in the combined ranking"
        def dns = calculator.computeDnsEntries(pointsMode(), races)

        then: "the races are handed over in their configured order, so the first one (2025) decides - and the export is produced rather than refused"
        1 * ageGroupService.findForScoring({ List<Race> scored -> scored*.id() == [1L, 2L] }) >> []
        dns.size() == 1
        dns[0].lastName() == "Testperson"
    }

    def "computeDnsEntries resolves no season and reads no age groups when everyone is in the ranking"() {
        given: "the common case - a complete field, so the list below it is empty"
        knownPersons.putAll([1L: person(1L, "Anna")])
        def races = [
                new GaudiModeCalculator.RaceParticipants(1L, race(1L), 1.0d, [participant(1L, 1L, 60000)]),
                new GaudiModeCalculator.RaceParticipants(2L, race(2L), 1.0d, [participant(2L, 1L, 70000)]),
        ]

        when:
        def dns = calculator.computeDnsEntries(pointsMode(), races)

        then: "nothing to categorise means nothing to look up"
        0 * ageGroupService.findForScoring(_)
        dns.isEmpty()
    }
}
