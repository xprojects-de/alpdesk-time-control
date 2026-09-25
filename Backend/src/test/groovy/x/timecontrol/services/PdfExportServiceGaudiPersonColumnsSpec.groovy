package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.dto.GaudiDnsEntryResponse
import x.timecontrol.dto.GaudiRankingEntryResponse
import x.timecontrol.dto.GaudiRankingLegResponse
import x.timecontrol.dto.GaudiTeamMemberResponse
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

/**
 * The "StNr."/"Jg." columns in the Gaudi-Modus PDFs: the same two switches as for a single race's
 * results, each in the layout its mode has - a column in Zeit-Kombination/Punkte-Mischwertung (and
 * their "nicht gewertet" lists), one line per person in Los-Modus, a member sub-table in the
 * Mannschaftswertung.
 */
class PdfExportServiceGaudiPersonColumnsSpec extends Specification {

    SettingsService settingsService = Mock()
    def service = new PdfExportService(null, null, settingsService)

    def race = new Race(1L, "Kondi", LocalDate.of(2026, 9, 26), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    def gaudiMode = new GaudiMode(null, null, "Gaudi", null, null, false, false, false, null, null)

    private static GaudiRankingEntryResponse entry(Map args) {
        new GaudiRankingEntryResponse(args.place ?: 1, args.label, args.time1Ms, args.time2Ms, args.valueMs, args.referenceMs,
                args.diffMs, args.totalPoints, args.legs, args.team, args.members, null, null, args.raceNumber, args.birthYear)
    }

    private static String text(byte[] pdf) {
        Loader.loadPDF(pdf).withCloseable { new PDFTextStripper().getText(it) }
    }

    private void switches(boolean raceNumber, boolean birthYear) {
        settingsService.getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, raceNumber, birthYear)
    }

    private static final List<GaudiDnsEntryResponse> DNS = [
            new GaudiDnsEntryResponse("Huber", "Elias", "TSV GLETSCHER", "U12", null, "DNF", 388, 2015),
    ]

    private static List<GaudiRankingLegResponse> legs() {
        [new GaudiRankingLegResponse(1L, "Kondi", 47650, null, 47650, 1, 100, null, null)]
    }

    @Unroll
    def "Punkte-Mischwertung: StNr. #raceNumber / Jg. #birthYear, in the ranking and the DNS list"() {
        given:
        switches(raceNumber, birthYear)
        def entries = [entry(label: "Meier Paul", team: "SV", totalPoints: 100, legs: legs(), raceNumber: 417, birthYear: 2013)]

        when:
        String t = text(service.generatePointsCombinationRanking(gaudiMode, entries, [race], race, DNS))

        then:
        t.contains("StNr.") == raceNumber
        t.contains("417") == raceNumber
        t.contains("388") == raceNumber
        t.contains("Jg.") == birthYear
        t.contains("2013") == birthYear
        t.contains("2015") == birthYear

        where:
        raceNumber | birthYear
        true       | true
        true       | false
        false      | true
        false      | false
    }

    @Unroll
    def "Zeit-Kombination: StNr. #raceNumber / Jg. #birthYear, in the ranking and the DNS list"() {
        given:
        switches(raceNumber, birthYear)
        def entries = [entry(label: "Meier Paul", team: "SV", valueMs: 47650, legs: legs(), raceNumber: 417, birthYear: 2013)]

        when:
        String t = text(service.generateTimeCombinationRanking(gaudiMode, entries, [race], race, DNS))

        then:
        t.contains("StNr.") == raceNumber
        t.contains("417") == raceNumber
        t.contains("388") == raceNumber
        t.contains("Jg.") == birthYear
        t.contains("2013") == birthYear
        t.contains("2015") == birthYear

        where:
        raceNumber | birthYear
        true       | true
        false      | false
    }

    @Unroll
    def "Mannschaftswertung: member sub-table with StNr. #raceNumber / Jg. #birthYear"() {
        given:
        switches(raceNumber, birthYear)
        def members = [
                new GaudiTeamMemberResponse("Meier Paul", 47650, null, 417, 2013),
                new GaudiTeamMemberResponse("Huber Elias", 49980, null, 388, 2015),
        ]
        def entries = [entry(label: "SV SCHNEEKRISTALL", valueMs: 97630, members: members)]

        when:
        String t = text(service.generateTeamModeRanking(gaudiMode, entries, race))

        then: "each member on a line of their own"
        t.readLines().any { it.contains("Meier Paul") && !it.contains("Huber Elias") }
        t.readLines().any { it.contains("Huber Elias") && !it.contains("Meier Paul") }

        and:
        t.contains("StNr.") == raceNumber
        t.contains("417") == raceNumber
        t.contains("Jg.") == birthYear
        t.contains("2013") == birthYear

        where:
        raceNumber | birthYear
        true       | true
        false      | false
    }

    @Unroll
    def "Los-Modus: one line per person with StNr. #raceNumber / Jg. #birthYear"() {
        given:
        switches(raceNumber, birthYear)
        def members = [
                new GaudiTeamMemberResponse("Meier Paul", 47650, "SV", 417, 2013),
                new GaudiTeamMemberResponse("Huber Elias", 49980, "TSV", 388, 2015),
        ]
        def entries = [entry(label: "Meier Paul & Huber Elias", team: "SV / TSV", time1Ms: 47650, time2Ms: 49980,
                valueMs: 48820, referenceMs: 48000, diffMs: 820, members: members)]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then: "no combined pair label any more, each partner on a line of their own"
        !t.contains("&")
        t.readLines().any { it.contains("Meier Paul") && !it.contains("Huber Elias") }
        t.readLines().any { it.contains("Huber Elias") && !it.contains("Meier Paul") }

        and: "each partner with their own value"
        t.contains("0:47.65")
        t.contains("0:49.98")

        and:
        t.contains("StNr.") == raceNumber
        t.contains("417") == raceNumber
        t.contains("388") == raceNumber
        t.contains("Jg.") == birthYear
        t.contains("2013") == birthYear
        t.contains("2015") == birthYear

        where:
        raceNumber | birthYear
        true       | true
        true       | false
        false      | false
    }
}
