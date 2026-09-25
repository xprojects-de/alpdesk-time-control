package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

/**
 * The "StNr."/"Jg." columns of a single race's result PDFs: each printed or left out on its own
 * switch, in the ranking and the "nicht gewertet" list alike.
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

    @Unroll
    def "race number #raceNumber / birth year #birthYear"() {
        given:
        settingsService.getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, raceNumber, birthYear)

        when:
        String text = render()

        then: "ranking and DNS list both follow the race number switch"
        text.contains("StNr.") == raceNumber
        text.contains("417") == raceNumber
        text.contains("388") == raceNumber

        and: "and, independently, the birth year switch"
        text.contains("Jg.") == birthYear
        text.contains("2013") == birthYear
        text.contains("2015") == birthYear

        and:
        text.contains("Meier Paul")
        text.contains("Huber Elias")

        where:
        raceNumber | birthYear
        true       | true
        true       | false
        false      | true
        false      | false
    }
}
