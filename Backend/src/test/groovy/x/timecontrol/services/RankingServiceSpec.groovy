package x.timecontrol.services

import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Unroll
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
                null, null, null, ResultUnit.TIME, null, direction)
    }

    private static Participant participant(Long id, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, 1L, null, null, null, durationMs, penalty, null)
    }

    def "adjustedValue is null when no result was measured"() {
        expect:
        rankingService.adjustedValue(raceAsc, participant(1L, null)) == null
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

    def "assignStandardPlaces shares a place for ties and skips the next place accordingly"() {
        expect:
        rankingService.assignStandardPlaces([100.0d, 100.0d, 90.0d, 80.0d, 80.0d]) == [1, 1, 3, 4, 4]
    }

    def "assignStandardPlaces returns an empty list for no entries"() {
        expect:
        rankingService.assignStandardPlaces([]) == []
    }
}
