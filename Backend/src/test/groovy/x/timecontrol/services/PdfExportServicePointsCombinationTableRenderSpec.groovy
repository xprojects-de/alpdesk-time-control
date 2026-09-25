package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import x.timecontrol.dto.GaudiRankingEntryResponse
import x.timecontrol.dto.GaudiRankingLegResponse
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.StartGroupTemplate

import java.time.LocalDate

/**
 * Smoke test for the Punkte-Mischwertung per-race breakdown sub-table: renders a small sample PDF
 * end to end and checks it produces non-empty output. Not asserting pixel content - PDFBox output
 * isn't practical to assert on - the actual layout was eyeballed manually during development. The
 * one exception is the "Gesamt" column below, whose whole purpose is to print a specific number:
 * that one reads the rendered text back out and checks the value itself.
 */
class PdfExportServicePointsCombinationTableRenderSpec extends Specification {

    def service = new PdfExportService(null, null, null)

    private static Race race(Long id, String name, ResultUnit unit, String unitLabel) {
        new Race(id, name, LocalDate.of(2026, 9, 12), null, null, null, null, null, null,
                null, null, null, unit, unitLabel, SortDirection.ASC, null, null, null, null)
    }

    private static GaudiMode gaudiMode(String name) {
        new GaudiMode(null, null, name, null, null, false, false, false, null, null)
    }

    private static GaudiRankingEntryResponse entry(int place, String label, String team, int totalPoints,
                                                     List<GaudiRankingLegResponse> legs) {
        new GaudiRankingEntryResponse(place, label, null, null, null, null, null, totalPoints, legs, team, null, null, null)
    }

    def "renders a Punkte-Mischwertung PDF with a per-race breakdown sub-table per participant"() {
        given:
        def legRaces = [
                race(1L, "Schnelligkeit", ResultUnit.TIME, null),
                race(2L, "Kraftausdauer", ResultUnit.POINTS, "Meter"),
        ]
        def entries = [
                entry(1, "Meier Paul", "SV SCHNEEKRISTALL", 132, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 47650, null, 47650, 1, 100, null, null),
                        new GaudiRankingLegResponse(2L, "Kraftausdauer", 1500, 200, 1300, 8, 32, null, null),
                ]),
                entry(2, "Huber Elias", "TSV GLETSCHER", 71, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 49980, null, 49980, 3, 60, null, null),
                        new GaudiRankingLegResponse(2L, "Kraftausdauer", 1000, 100, 900, 20, 11, null, null),
                ]),
        ]

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, legRaces, legRaces.first(), [])

        then:
        pdf.length > 0
    }

    def "renders fine when no leg has a penalty (Strafe column dropped)"() {
        given:
        def legRaces = [race(1L, "Schnelligkeit", ResultUnit.TIME, null)]
        def entries = [
                entry(1, "Meier Paul", "SV SCHNEEKRISTALL", 100, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 47650, null, 47650, 1, 100, null, null),
                ]),
        ]

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, legRaces, legRaces.first(), [])

        then:
        pdf.length > 0
    }

    def "renders fine for many participants across a page break"() {
        given:
        def legRaces = [
                race(1L, "Schnelligkeit", ResultUnit.TIME, null),
                race(2L, "Kraftausdauer", ResultUnit.POINTS, "Meter"),
        ]
        def entries = (1..40).collect { i ->
            entry(i, "Teilnehmer $i", "Team $i", 100 - i, [
                    new GaudiRankingLegResponse(1L, "Schnelligkeit", 40000 + i * 100, null, 40000 + i * 100, i, 100 - i, null, null),
                    new GaudiRankingLegResponse(2L, "Kraftausdauer", 1000 + i * 10, i % 3 == 0 ? 100 : 0, 900, i, 100 - i, null, null),
            ])
        }

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, legRaces, legRaces.first(), [])

        then:
        pdf.length > 0
    }

    /**
     * The point of the sub-table's "Gesamt" column: the number printed per leg must be the very
     * same one that leg race's own single-race evaluation prints as its total - start-group offset
     * netted out, penalty applied, rounded exactly once by formatValue(). Built the way
     * PointsCombinationModeCalculator builds its legs (raw durationMs + RankingService#adjustedValue)
     * and cross-checked against RankingService/RankingViewService rather than a hand-written string,
     * so a change to either rounding rule fails here instead of silently desynchronising the two PDFs.
     */
    def "prints each leg's Gesamt exactly as the single-race evaluation formats that leg's total"() {
        given:
        StartGroupTemplateService startGroupTemplateService = Mock()
        startGroupTemplateService.findById(7L) >> Optional.of(new StartGroupTemplate(7L, "Gruppe", "#92D050", 0, 60))
        def rankingService = new RankingService(startGroupTemplateService)

        def legRace = race(1L, "Schnelligkeit", ResultUnit.TIME, null)
        // 1:47.655 gross, minus the 60s block start = 0:47.655 net, plus a 2s penalty = 0:49.655.
        // Both halves sit on a rounding boundary (x.655 -> x.66), so a "Gesamt" re-derived by
        // rounding Wert and Strafe separately and adding them up would land a hundredth off.
        def participant = new Participant(1L, 1L, 1L, null, null, null, 107655, 2000, null, null,
                DisqualificationStatus.NONE, null, 7L)

        def adjusted = rankingService.adjustedValue(legRace, participant)
        def entries = [
                entry(1, "Meier Paul", "SV SCHNEEKRISTALL", 100, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", participant.durationMs(), participant.penalty(),
                                adjusted, 1, 100, null, rankingService.startGroupOffsetMs(legRace, participant)),
                ]),
        ]

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, [legRace], legRace, [])
        String text = extractText(pdf)

        then:
        adjusted == 49655
        RankingViewService.formatValue(legRace, rankingService.netDurationMs(legRace, participant)) == "0:47.66"
        RankingViewService.formatValue(legRace, adjusted) == "0:49.66"

        and: "the breakdown row shows Wert, Strafe and the single-race total, in that order"
        text =~ /Schnelligkeit\s+0:47\.66\s+0:02\.00\s+0:49\.66\s+1\s+100/
    }

    private static String extractText(byte[] pdf) {
        Loader.loadPDF(pdf).withCloseable { doc -> new PDFTextStripper().getText(doc) }
    }

    def "renders a DNF leg in the sub-table when the person is kept in the ranking"() {
        given:
        def legRaces = [
                race(1L, "Schnelligkeit", ResultUnit.TIME, null),
                race(2L, "Kraftausdauer", ResultUnit.POINTS, "Meter"),
        ]
        def entries = [
                entry(1, "Meier Paul", "SV SCHNEEKRISTALL", 100, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 47650, null, 47650, 1, 100, null, null),
                        new GaudiRankingLegResponse(2L, "Kraftausdauer", null, null, null, null, 0, "DNF", null),
                ]),
        ]

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, legRaces, legRaces.first(), [])

        then:
        pdf.length > 0
    }
}
