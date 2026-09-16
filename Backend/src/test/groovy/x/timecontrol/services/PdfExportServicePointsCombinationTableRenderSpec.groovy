package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.GaudiRankingEntryResponse
import x.timecontrol.dto.GaudiRankingLegResponse
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.time.LocalDate

/**
 * Smoke test for the Punkte-Mischwertung per-race breakdown sub-table: renders a small sample PDF
 * end to end and checks it produces non-empty output. Not asserting pixel content - PDFBox output
 * isn't practical to assert on - the actual layout was eyeballed manually during development.
 */
class PdfExportServicePointsCombinationTableRenderSpec extends Specification {

    def service = new PdfExportService(null, null)

    private static Race race(Long id, String name, ResultUnit unit, String unitLabel) {
        new Race(id, name, LocalDate.of(2026, 9, 12), null, null, null, null, null, null,
                null, null, null, unit, unitLabel, SortDirection.ASC, null, null, null, null)
    }

    private static GaudiMode gaudiMode(String name) {
        new GaudiMode(null, null, name, null, null, null, null)
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
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 47650, null, 47650, 1, 100),
                        new GaudiRankingLegResponse(2L, "Kraftausdauer", 1500, 200, 1300, 8, 32),
                ]),
                entry(2, "Huber Elias", "TSV GLETSCHER", 71, [
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 49980, null, 49980, 3, 60),
                        new GaudiRankingLegResponse(2L, "Kraftausdauer", 1000, 100, 900, 20, 11),
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
                        new GaudiRankingLegResponse(1L, "Schnelligkeit", 47650, null, 47650, 1, 100),
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
                    new GaudiRankingLegResponse(1L, "Schnelligkeit", 40000 + i * 100, null, 40000 + i * 100, i, 100 - i),
                    new GaudiRankingLegResponse(2L, "Kraftausdauer", 1000 + i * 10, i % 3 == 0 ? 100 : 0, 900, i, 100 - i),
            ])
        }

        when:
        byte[] pdf = service.generatePointsCombinationRanking(gaudiMode("Kondiwettkamp"), entries, legRaces, legRaces.first(), [])

        then:
        pdf.length > 0
    }
}
