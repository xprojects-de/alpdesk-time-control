package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

class SeasonServiceSpec extends Specification {

    private SeasonService serviceWithBoundary(int month, int day) {
        def settings = Stub(SettingsService)
        settings.getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, month, day)
        new SeasonService(settings)
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

    def "seasonOfAll returns the single season a set of races shares"() {
        given:
        def service = serviceWithBoundary(1, 1)

        expect:
        service.seasonOfAll([raceOn(LocalDate.of(2026, 1, 11)), raceOn(LocalDate.of(2026, 3, 8))]) == 2026
    }

    def "seasonOfAll refuses races spanning two seasons instead of silently picking one"() {
        given: "a Gaudi-Modus is scored across several races, but a participant changes class between seasons"
        def service = serviceWithBoundary(1, 1)

        when:
        service.seasonOfAll([raceOn(LocalDate.of(2025, 12, 14)), raceOn(LocalDate.of(2026, 1, 11))])

        then:
        def e = thrown(IllegalStateException)
        e.message.contains("2025")
        e.message.contains("2026")
    }

    def "seasonOfAll refuses an empty set of races rather than inventing a season"() {
        when:
        serviceWithBoundary(1, 1).seasonOfAll([])

        then:
        thrown(IllegalStateException)
    }

    def "seasonStartDate/seasonEndDate describe what a season actually spans"() {
        given:
        def service = serviceWithBoundary(7, 1)

        expect: "season 2025 with a 1 July boundary runs into the middle of 2026"
        service.seasonStartDate(2025) == LocalDate.of(2025, 7, 1)
        service.seasonEndDate(2025) == LocalDate.of(2026, 6, 30)
    }
}
