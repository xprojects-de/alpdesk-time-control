package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.time.LocalDate

/**
 * formatSignedDiff() is a private static helper backing the Zeit-Kombination "Rückstand" PDF
 * column. Invoked via reflection since it needs no PDFBox document/service dependencies - see
 * PdfExportServiceWrapBlocksSpec for the same pattern.
 */
class PdfExportServiceFormatSignedDiffSpec extends Specification {

    private static Race race(ResultUnit unit) {
        new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, unit, null, SortDirection.ASC, null, null, null, null)
    }

    private static String formatSignedDiff(Race race, Integer diffMs) {
        def method = PdfExportService.class.getDeclaredMethod("formatSignedDiff", Race, Integer)
        method.setAccessible(true)
        return method.invoke(null, race, diffMs) as String
    }

    def "a positive diff is prefixed with a plus sign"() {
        expect:
        formatSignedDiff(race(ResultUnit.TIME), 5000) == "+0:05.00"
    }

    def "a negative diff (DESC-sorted Zeit-Kombination) is prefixed with a minus sign, not garbled text"() {
        expect:
        formatSignedDiff(race(ResultUnit.TIME), -5000) == "-0:05.00"
    }

    def "a null diff (the leader's own row) renders as a dash"() {
        expect:
        formatSignedDiff(race(ResultUnit.TIME), null) == "-"
    }

    def "zero renders with a plus sign, not as a dash"() {
        expect:
        formatSignedDiff(race(ResultUnit.TIME), 0) == "+0:00.00"
    }

    def "works for POINTS races too, where the value isn't a duration"() {
        given: "the decimal separator is locale-dependent (RankingViewService#formatValue), so compare against it directly rather than a hardcoded '.' or ','"
        def pointsRace = race(ResultUnit.POINTS)

        expect:
        formatSignedDiff(pointsRace, -150) == "-" + RankingViewService.formatValue(pointsRace, 150)
    }
}
