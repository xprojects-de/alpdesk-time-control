package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

class SeasonServiceSpec extends Specification {

    private SeasonService serviceWithBoundary(int month, int day, List<Race> races = []) {
        def settings = Stub(SettingsService)
        settings.getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, month, day)
        def raceService = Stub(RaceService)
        raceService.findAll() >> races
        new SeasonService(settings, raceService)
    }

    private static Race raceOn(LocalDate date) {
        new Race(1L, "Rennen", date, null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    }

    def "with the default 1 January boundary a season is exactly the calendar year"() {
        given:
        def service = serviceWithBoundary(1, 1)

        expect:
        service.seasonOf(LocalDate.of(2025, 1, 1)) == 2025
        service.seasonOf(LocalDate.of(2025, 12, 31)) == 2025
        service.seasonOf(LocalDate.of(2026, 1, 1)) == 2026
    }

    def "a 1 July boundary keeps a ski winter in one season: December and the following January match"() {
        given: "the reason the boundary is configurable at all - two races of the same winter"
        def service = serviceWithBoundary(7, 1)

        expect:
        service.seasonOf(LocalDate.of(2025, 12, 14)) == 2025
        service.seasonOf(LocalDate.of(2026, 1, 11)) == 2025

        and: "the boundary day itself starts the new season"
        service.seasonOf(LocalDate.of(2026, 6, 30)) == 2025
        service.seasonOf(LocalDate.of(2026, 7, 1)) == 2026
    }

    def "an invalid stored boundary falls back to 1 January instead of failing every lookup"() {
        given: "31 June - only reachable by hand-editing the database, the endpoint rejects it"
        def service = serviceWithBoundary(6, 31)

        expect:
        service.seasonOf(LocalDate.of(2026, 3, 1)) == 2026
    }

    def "seasonOf(race) reads the season off the race's own date, not off today"() {
        given:
        def service = serviceWithBoundary(1, 1)

        expect: "which is what keeps a re-export of a finished race on the classes it was run under"
        service.seasonOf(raceOn(LocalDate.of(2023, 2, 4))) == 2023
    }

    def "scopeOf returns the single season a set of races shares"() {
        given:
        def service = serviceWithBoundary(1, 1)

        when:
        def scope = service.scopeOf([raceOn(LocalDate.of(2026, 1, 11)), raceOn(LocalDate.of(2026, 3, 8))])

        then:
        scope.season() == 2026
        !scope.spansSeveralSeasons()
        scope.allSeasons() == [2026]
    }

    def "scopeOf scores races spanning two seasons against the first race's season, and reports the span"() {
        given: "a ski winter's club championship with the default boundary - December and January"
        def service = serviceWithBoundary(1, 1)

        when: "the December race is the first (configured) one, so it heads the export"
        def scope = service.scopeOf([raceOn(LocalDate.of(2025, 12, 14)), raceOn(LocalDate.of(2026, 1, 11))])

        then: "a combined ranking is still produced rather than the whole export failing mid-event"
        scope.season() == 2025
        scope.spansSeveralSeasons()
        scope.allSeasons() == [2025, 2026]
    }

    def "scopeOf takes the season from the first race, not the earliest one"() {
        given: "order is the operator's configured leg order, which is what heads the document"
        def service = serviceWithBoundary(1, 1)

        expect:
        service.scopeOf([raceOn(LocalDate.of(2026, 1, 11)), raceOn(LocalDate.of(2025, 12, 14))]).season() == 2026
    }

    def "scopeOf on no races resolves to the current season and spans nothing"() {
        given: "every race of a Gaudi-Modus deleted since - nothing left to categorise"
        def service = serviceWithBoundary(1, 1)

        when:
        def scope = service.scopeOf([])

        then: "no exception: the caller has an empty field anyway and must not fail over it"
        scope.season() == service.currentSeason()
        !scope.spansSeveralSeasons()
        scope.allSeasons().isEmpty()
    }

    def "seasonsWithRaces reports each season that has a race, newest first, through the configured boundary"() {
        given: "a 1 July boundary, so the January race belongs to the previous season year"
        def service = serviceWithBoundary(7, 1, [
                raceOn(LocalDate.of(2026, 1, 11)),
                raceOn(LocalDate.of(2025, 12, 14)),
                raceOn(LocalDate.of(2026, 9, 20))
        ])

        expect: "both winter races collapse into 2025, the September one opens 2026"
        service.seasonsWithRaces() == [2026, 2025]
    }

    def "seasonStartDate/seasonEndDate describe what a season actually spans"() {
        given:
        def service = serviceWithBoundary(7, 1)

        expect: "season 2025 with a 1 July boundary runs into the middle of 2026"
        service.seasonStartDate(2025) == LocalDate.of(2025, 7, 1)
        service.seasonEndDate(2025) == LocalDate.of(2026, 6, 30)
    }
}
