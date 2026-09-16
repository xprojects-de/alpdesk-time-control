package x.timecontrol.services

import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.time.LocalDate

class RankingServiceSpec extends Specification {

    RankingService rankingService = new RankingService()

    @Shared
    Race raceAsc = race(SortDirection.ASC)
    @Shared
    Race raceDesc = race(SortDirection.DESC)

    private static Race race(SortDirection direction) {
        new Race(1L, "Test-Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, direction, null, null, null, null)
    }

    private static Race race(SortDirection direction, ResultUnit resultUnit) {
        new Race(1L, "Test-Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, resultUnit, null, direction, null, null, null, null)
    }

    private static Participant participant(Long id, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, 1L, null, null, null, durationMs, penalty, null, null)
    }

    private static Participant participantWithStatus(Long id, Integer durationMs, DisqualificationStatus status) {
        new Participant(id, 1L, 1L, null, null, null, durationMs, null, null, null, status)
    }

    def "adjustedValue is null when no result was measured"() {
        expect:
        rankingService.adjustedValue(raceAsc, participant(1L, null)) == null
    }

    @Unroll
    def "adjustedValue is null for a #status participant even with a measured duration"() {
        expect:
        rankingService.adjustedValue(raceAsc, participantWithStatus(1L, 60000, status)) == null

        where:
        status << [DisqualificationStatus.DNS, DisqualificationStatus.DNF, DisqualificationStatus.DSQ]
    }

    def "adjustedValue counts a NONE-status participant's measured duration normally"() {
        expect:
        rankingService.adjustedValue(raceAsc, participantWithStatus(1L, 60000, DisqualificationStatus.NONE)) == 60000
    }

    def "computePlaces excludes a disqualified participant even though they have a measured duration"() {
        given:
        def participants = [
                participant(1L, 60000),
                participantWithStatus(2L, 50000, DisqualificationStatus.DSQ), // would otherwise be 1st
        ]

        when:
        def places = rankingService.computePlaces(raceAsc, participants)

        then:
        places == [1L: 1]
    }

    @Unroll
    def "dnsStatusLabel(Participant) reports the explicit status, or DNS when there is none"() {
        expect:
        rankingService.dnsStatusLabel(participantWithStatus(1L, null, status)) == expectedLabel

        where:
        status                              || expectedLabel
        DisqualificationStatus.DSQ          || "DSQ"
        DisqualificationStatus.DNF          || "DNF"
        DisqualificationStatus.DNS          || "DNS"
        DisqualificationStatus.NONE         || "DNS" // no explicit reason recorded - generic fallback
    }

    def "dnsStatusLabel(Collection) reports the first leg with an explicit status"() {
        given: "the person's first leg has no explicit status, but their second leg is DSQ"
        def legs = [
                participantWithStatus(1L, null, DisqualificationStatus.NONE),
                participantWithStatus(2L, 60000, DisqualificationStatus.DSQ),
        ]

        expect:
        rankingService.dnsStatusLabel(legs) == "DSQ"
    }

    def "dnsStatusLabel(Collection) falls back to DNS when no leg has an explicit status"() {
        given:
        def legs = [
                participantWithStatus(1L, null, DisqualificationStatus.NONE),
                participantWithStatus(2L, null, DisqualificationStatus.NONE),
        ]

        expect:
        rankingService.dnsStatusLabel(legs) == "DNS"
    }

    @Unroll
    def "adjustedValue adds the penalty for ASC races and subtracts it for DESC races"() {
        expect:
        rankingService.adjustedValue(race, participant(1L, rawValue, penalty)) == expected

        where:
        race     | rawValue | penalty || expected
        raceAsc  | 60000    | null    || 60000
        raceAsc  | 60000    | 2000    || 62000
        raceDesc | 60000    | null    || 60000
        raceDesc | 60000    | 2000    || 58000
        raceDesc | 100      | 150     || 0 // floored: a penalty larger than the result must not go negative
    }

    def "comparator sorts ascending for ASC races (fastest time first)"() {
        given:
        def participants = [participant(1L, 90000), participant(2L, 60000), participant(3L, 75000)]

        when: "java.util.List#sort(Comparator) sorts in place and returns void"
        participants.sort(rankingService.comparator(raceAsc))

        then:
        participants*.id() == [2L, 3L, 1L]
    }

    def "comparator sorts descending for DESC races (highest value first)"() {
        given:
        def participants = [participant(1L, 90000), participant(2L, 60000), participant(3L, 75000)]

        when: "java.util.List#sort(Comparator) sorts in place and returns void"
        participants.sort(rankingService.comparator(raceDesc))

        then:
        participants*.id() == [1L, 3L, 2L]
    }

    def "computePlaces excludes participants without a result and shares places for ties"() {
        given:
        def participants = [
                participant(1L, 60000),
                participant(2L, 60000), // tied with #1 for 1st
                participant(3L, 70000), // 3rd (place 3 skipped to 3, not 2, due to the tie above)
                participant(4L, null),  // no result -> excluded entirely
        ]

        when:
        def places = rankingService.computePlaces(raceAsc, participants)

        then:
        places == [1L: 1, 2L: 1, 3L: 3]
    }

    def "computePlaces shares a place when raw durations round to the same displayed time"() {
        given: "36430ms and 36432ms both round to 0:36.43, so they must be printed with the same place"
        def participants = [
                participant(1L, 36430),
                participant(2L, 36432),
                participant(3L, 36460), // rounds to 0:36.46 -> distinct, place 3
        ]

        when:
        def places = rankingService.computePlaces(raceAsc, participants)

        then:
        places == [1L: 1, 2L: 1, 3L: 3]
    }

    def "computePlaces does not round POINTS races, where the stored value is already the printed precision"() {
        given:
        def racePoints = race(SortDirection.ASC, ResultUnit.POINTS)
        def participants = [
                participant(1L, 1000),
                participant(2L, 1004), // would round to the same 10ms bucket as #1 for a TIME race, but must stay distinct here
        ]

        when:
        def places = rankingService.computePlaces(racePoints, participants)

        then:
        places == [1L: 1, 2L: 2]
    }

    def "assignStandardPlaces shares a place for ties and skips the next place accordingly"() {
        expect:
        rankingService.assignStandardPlaces([100.0d, 100.0d, 90.0d, 80.0d, 80.0d]) == [1, 1, 3, 4, 4]
    }

    def "assignStandardPlaces returns an empty list for no entries"() {
        expect:
        rankingService.assignStandardPlaces([]) == []
    }

    def "assignStandardPlaces(..., TIME) shares a place for values that round to the same displayed time"() {
        given: "36430ms and 36432ms both round to 0:36.43, mirroring the computePlaces rounding-tie fix for Gaudi-Modus totals (Zeit-Kombination/Mannschaftswertung/Los-Verfahren)"
        def values = [36430.0d, 36432.0d, 36460.0d]

        expect:
        rankingService.assignStandardPlaces(values, ResultUnit.TIME) == [1, 1, 3]
    }

    def "assignStandardPlaces(..., POINTS) does not round, unlike the TIME overload"() {
        expect:
        rankingService.assignStandardPlaces([1000.0d, 1004.0d], ResultUnit.POINTS) == [1, 2]
    }
}
