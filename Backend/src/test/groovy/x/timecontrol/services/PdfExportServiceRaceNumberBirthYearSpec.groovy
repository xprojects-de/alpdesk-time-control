package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

/**
 * The "StNr."/"Jg." columns of a single race's result PDFs: printed by default, both for the
 * ranking and the "nicht gewertet" list, and gone from both once the operator switches them off.
 */
class PdfExportServiceRaceNumberBirthYearSpec extends Specification {

    RankingViewService rankingViewService = Mock()
    SettingsService settingsService = Mock()
    def service = new PdfExportService(null, rankingViewService, settingsService)

    def race = new Race(1L, "Bergsprint", LocalDate.of(2026, 9, 26), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)

    def setup() {
        rankingViewService.loadPersonTeamLookup(_) >> new RankingViewService.PersonTeamLookup([:], [:])
        rankingViewService.createRankingEntriesFromParticipants(*_) >> [
                new RankingViewService.RankingEntry(1, "Meier Paul", null, "U14", "SV SCHNEEKRISTALL",
                        "0:47.65", "-", "0:47.65", "-", false, "417", "2013"),
        ]
        rankingViewService.createDnsRows(*_) >> [
                new RankingViewService.DnsRow(1, "Huber Elias", null, "U12", "TSV GLETSCHER", "DNF", "388", "2015"),
        ]
    }

    private String render() {
        byte[] pdf = service.generateOverallRanking([] as List<Participant>, race)
        Loader.loadPDF(pdf).withCloseable { new PDFTextStripper().getText(it) }
    }

    private static AppSettings settings(boolean show) {
        new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, show)
    }

    def "prints race number and birth year in ranking and DNS list when switched on"() {
        given:
        settingsService.getSettings() >> settings(true)

        when:
        String text = render()

        then:
        text.contains("StNr.")
        text.contains("Jg.")
        text.contains("417")
        text.contains("2013")
        text.contains("388")
        text.contains("2015")
    }

    def "leaves both columns out when switched off"() {
        given:
        settingsService.getSettings() >> settings(false)

        when:
        String text = render()

        then:
        !text.contains("StNr.")
        !text.contains("Jg.")
        !text.contains("417")
        !text.contains("2013")
        !text.contains("388")
        !text.contains("2015")
        text.contains("Meier Paul")
        text.contains("Huber Elias")
    }
}
