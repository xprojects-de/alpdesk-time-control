package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.dto.GaudiDnsEntryResponse
import x.timecontrol.dto.GaudiDnsMemberResponse
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
            GaudiDnsEntryResponse.ofPerson("Huber", "Elias", "TSV GLETSCHER", "U12", null, "DNF", 388, 2015),
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
                new GaudiTeamMemberResponse("Meier Paul", 47650, null, 417, 2013, null),
                new GaudiTeamMemberResponse("Huber Elias", 49980, null, 388, 2015, null),
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
                new GaudiTeamMemberResponse("Meier Paul", 47650, "SV", 417, 2013, null),
                new GaudiTeamMemberResponse("Huber Elias", 49980, "TSV", 388, 2015, null),
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

    def "Los-Modus: a self-paired leftover is still marked as such"() {
        given:
        switches(true, true)
        def entries = [entry(label: "Meier Paul (Einzel)", team: "SV", time1Ms: 47650, valueMs: 47650, referenceMs: 48000,
                diffMs: 350, members: [new GaudiTeamMemberResponse("Meier Paul", 47650, "SV", 417, 2013, null)])]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then:
        t.contains("Meier Paul (Einzel)")
    }

    def "Los-Modus: a long name is shortened, never the '(Einzel)' marker"() {
        given:
        switches(true, true)
        String longName = "Oberhuber-Schwarzenegger Maximilian"
        def entries = [entry(label: longName + " (Einzel)", team: "SV", time1Ms: 47650, valueMs: 47650, referenceMs: 48000,
                diffMs: 350, members: [new GaudiTeamMemberResponse(longName, 47650, "SV", 417, 2013, null)])]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then:
        t.contains("(Einzel)")
    }

    @Unroll
    def "Los-Modus: 'Kategorie' is printed only once somebody has one (#categories)"() {
        given:
        switches(true, true)
        def members = [
                new GaudiTeamMemberResponse("Meier Paul", 47650, "SV", 417, 2013, categories[0]),
                new GaudiTeamMemberResponse("Huber Elias", 49980, "TSV", 388, 2015, categories[1]),
        ]
        def entries = [entry(label: "Meier Paul & Huber Elias", valueMs: 48820, referenceMs: 48000, diffMs: 820, members: members)]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then:
        t.contains("Kategorie") == printed
        t.readLines().any { it.contains("Meier Paul") && it.contains("Snowboard") } == (categories[0] != null)
        t.readLines().any { it.contains("Huber Elias") && it.contains("Ski") } == (categories[1] != null)

        where:
        categories           | printed
        ["Snowboard", "Ski"] | true
        ["Snowboard", null]  | true
        [null, null]         | false
    }

    @Unroll
    def "#mode: the Gaudi-Modus name is printed in the page header only, not again above the table"() {
        given:
        switches(true, true)
        def namedMode = new GaudiMode(null, null, "Herbstgaudi", null, null, false, false, false, null, null)
        def members = [new GaudiTeamMemberResponse("Meier Paul", 47650, "SV", 417, 2013, null)]
        def entries = [entry(label: "Meier Paul", team: "SV", valueMs: 47650, referenceMs: 48000, diffMs: 350,
                totalPoints: 100, legs: legs(), members: members)]

        when:
        String t = text(render.call(service, race, namedMode, entries))

        then:
        t.count("Herbstgaudi") == 1

        where:
        mode                  | render
        "Los-Modus"           | { PdfExportService s, Race r, m, e -> s.generateLosModeRanking(m, e, r, []) }
        "Mannschaftswertung"  | { PdfExportService s, Race r, m, e -> s.generateTeamModeRanking(m, e, r) }
        "Zeit-Kombination"    | { PdfExportService s, Race r, m, e -> s.generateTimeCombinationRanking(m, e, [r], r, []) }
        "Punkte-Mischwertung" | { PdfExportService s, Race r, m, e -> s.generatePointsCombinationRanking(m, e, [r], r, []) }
    }

    @Unroll
    def "Los-Modus: 'Abweichung' shows which side of the field average the pair landed on (#pairAverageMs vs. 48000)"() {
        given:
        switches(true, true)
        def entries = [entry(label: "Meier Paul (Einzel)", valueMs: pairAverageMs, referenceMs: 48000, diffMs: diffMs,
                members: [new GaudiTeamMemberResponse("Meier Paul", pairAverageMs, "SV", 417, 2013, null)])]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then:
        t.contains("Abweichung (±)")
        t.readLines().any { it.contains("Meier Paul") && it.endsWith(printed) }

        where: "exactly on the average: no sign"
        pairAverageMs | diffMs | printed
        48820         | 820    | "+0:00.82"
        47180         | 820    | "-0:00.82"
        48000         | 0      | " 0:00.00"
    }

    private static GaudiDnsEntryResponse losDns(String label, String status, Integer valueMs, boolean notDrawn,
                                                List<GaudiDnsMemberResponse> members) {
        new GaudiDnsEntryResponse(label, "", members[0].team(), "-", null, status, null, null, valueMs, notDrawn, members)
    }

    private static String line(String text, String name) {
        text.readLines().find { it.contains(name) }
    }

    private List<GaudiRankingEntryResponse> onePair() {
        [entry(label: "A & B", valueMs: 65000, referenceMs: 60000, diffMs: 5000, members: [
                new GaudiTeamMemberResponse("Anna A", 60000, null, null, null, null),
                new GaudiTeamMemberResponse("Bert B", 70000, null, null, null, null)])]
    }

    @Unroll
    def "Los-Modus: an excluded pair is listed one line per person under 'Nicht gewertet', each with value and #status"() {
        given: "only Schmeiser finished; the pair is not ranked, his time still counts in Ø-Wert Gesamt"
        switches(true, true)
        def dns = [losDns("Schmeiser Jonas & Hummel Marleen", status, 1858350, false, [
                new GaudiDnsMemberResponse("Schmeiser Jonas", 1858350, "SC THALKIRCHDORF", 17, 2013, null, null),
                new GaudiDnsMemberResponse("Hummel Marleen", null, "SC THALKIRCHDORF", 18, 2014, null, status)])]

        when:
        String notRanked = text(service.generateLosModeRanking(gaudiMode, onePair(), race, dns)).split("Nicht gewertet")[1]

        then: "the finisher's line carries position, race number, birth year, team and value"
        def first = line(notRanked, "Schmeiser Jonas")
        first.startsWith("1 ")
        ["17", "2013", "SC THALKIRCHDORF", "30:58.35"].every { first.contains(it) }

        and: "the partner's line carries the full status, not cut off"
        def second = line(notRanked, "Hummel Marleen")
        ["18", "2014", "SC THALKIRCHDORF"].every { second.contains(it) }
        second.trim().endsWith(status)
        !second.startsWith("1 ")

        where:
        status << ["DNS", "DNF", "DSQ"]
    }

    def "Los-Modus: someone with a result who was not drawn is listed with that value as 'nicht ausgelost'"() {
        given:
        switches(false, false)
        def dns = [losDns("Carl C", "nicht ausgelost", 50000, true, [
                new GaudiDnsMemberResponse("Carl C", 50000, null, null, null, null, "nicht ausgelost")])]

        when:
        String notRanked = text(service.generateLosModeRanking(gaudiMode, onePair(), race, dns)).split("Nicht gewertet")[1]

        then: "a single line, without the '(Einzel)' marker of a self-paired leftover"
        def row = line(notRanked, "Carl C")
        row.contains("0:50.00")
        row.contains("nicht ausgelost")
        !row.contains("(Einzel)")
    }

    def "Los-Modus: an excluded self-paired leftover keeps its '(Einzel)' marker"() {
        given:
        switches(false, false)
        def dns = [losDns("Dora D (Einzel)", "DNF", null, false, [
                new GaudiDnsMemberResponse("Dora D", null, null, null, null, null, "DNF")])]

        when:
        String notRanked = text(service.generateLosModeRanking(gaudiMode, onePair(), race, dns)).split("Nicht gewertet")[1]

        then:
        line(notRanked, "Dora D").contains("Dora D (Einzel)")
    }

    def "Los-Modus: the 'Nicht gewertet' list has no 'Wert' column while none of its values counts"() {
        given:
        switches(false, false)
        def dns = [losDns("Carl C", "DNS", null, true, [new GaudiDnsMemberResponse("Carl C", null, null, null, null, null, "DNS")])]

        when:
        String notRanked = text(service.generateLosModeRanking(gaudiMode, onePair(), race, dns)).split("Nicht gewertet")[1]

        then:
        notRanked.contains("Position")
        !notRanked.contains("Wert")
        line(notRanked, "Carl C").trim().endsWith("DNS")
    }

    def "Los-Modus: without anybody not ranked there is no 'Nicht gewertet' section"() {
        given:
        switches(false, false)

        expect:
        !text(service.generateLosModeRanking(gaudiMode, onePair(), race, [])).contains("Nicht gewertet")
    }

    @Unroll
    def "Los-Modus: 'Team' is printed only once somebody has one (#teams)"() {
        given:
        switches(true, true)
        def members = [
                new GaudiTeamMemberResponse("Meier Paul", 47650, teams[0], 417, 2013, null),
                new GaudiTeamMemberResponse("Huber Elias", 49980, teams[1], 388, 2015, null),
        ]
        def entries = [entry(label: "Meier Paul & Huber Elias", valueMs: 48820, referenceMs: 48000, diffMs: 820, members: members)]

        when:
        String t = text(service.generateLosModeRanking(gaudiMode, entries, race, []))

        then:
        t.contains("Team") == printed

        where:
        teams         | printed
        ["SV", "TSV"] | true
        ["SV", null]  | true
        [null, null]  | false
    }
}
