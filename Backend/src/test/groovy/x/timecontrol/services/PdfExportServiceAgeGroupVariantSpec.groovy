package x.timecontrol.services

import org.apache.pdfbox.Loader
import org.apache.pdfbox.text.PDFTextStripper
import spock.lang.Specification
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.repositories.AgeGroupRepository

import java.time.LocalDate

/**
 * Two races of one season, one categorised with the season's standard age groups and one with a
 * variant that groups the same birth years differently: each race's age-group PDF prints its own
 * classes. Rendered end to end through the real RankingViewService and AgeGroupService, only the
 * repositories and person lookups are stubbed.
 */
class PdfExportServiceAgeGroupVariantSpec extends Specification {

    static final String KIDS = "Kinderrennen jahrgangsweise"

    AgeGroupRepository ageGroupRepository = Stub() {
        findBySeasonYearAndVariant(2026, "") >> [new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH)]
        findBySeasonYearAndVariant(2026, KIDS) >> [
                new AgeGroup(2L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH),
                new AgeGroup(3L, "Jahrgang 2017", 2026, KIDS, 2017, 2017, Gender.BOTH),
        ]
    }
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true, true)
    }
    RaceService raceService = Stub()
    SeasonService seasonService = new SeasonService(settingsService, raceService)
    AgeGroupService ageGroupService = new AgeGroupService(ageGroupRepository, seasonService, raceService)

    PersonService personService = Stub(PersonService) {
        findByIds(_) >> [
                1L: new Person(1L, "Anton", "Alt", LocalDate.of(2016, 3, 1), Gender.MALE, null),
                2L: new Person(2L, "Bert", "Jung", LocalDate.of(2017, 3, 1), Gender.MALE, null),
        ]
        displayName(_ as Person) >> { Person p -> "${p.lastName()} ${p.firstName()}" }
    }
    TeamService teamService = Stub(TeamService) {
        findByIds(_) >> [:]
    }
    StartGroupTemplateService startGroupTemplateService = Stub()

    RankingViewService rankingViewService = new RankingViewService(ageGroupService, seasonService, Stub(CategoryService),
            teamService, personService, new RankingService(startGroupTemplateService), startGroupTemplateService)
    PdfExportService pdfExportService = new PdfExportService(Stub(CategoryService), rankingViewService, settingsService)

    List<Participant> participants = [
            new Participant(10L, 1L, 1L, 1, null, null, 50000, null, null, null, DisqualificationStatus.NONE),
            new Participant(11L, 1L, 2L, 2, null, null, 60000, null, null, null, DisqualificationStatus.NONE),
    ]

    private static Race race(String name, String variant) {
        new Race(1L, name, LocalDate.of(2026, 2, 1), null, null, null, null, null, null, null, null, null,
                ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "token", variant)
    }

    private String renderAllAgeGroups(Race race) {
        byte[] pdf = pdfExportService.generateAllAgeGroupsRanking(participants, race)
        Loader.loadPDF(pdf).withCloseable { new PDFTextStripper().getText(it) }
    }

    def "a race on the standard variant prints both boys in one U10 section"() {
        when:
        String text = renderAllAgeGroups(race("Vereinsmeisterschaft", ""))

        then:
        text.contains("Wertung U10 männlich")
        !text.contains("Jahrgang 2016")
        !text.contains("Jahrgang 2017")
    }

    def "a race of the same season on the kids' variant prints one section per birth year"() {
        when:
        String text = renderAllAgeGroups(race("Kinderrennen", KIDS))

        then:
        text.contains("Wertung Jahrgang 2017 männlich")
        text.contains("Wertung Jahrgang 2016 männlich")
        !text.contains("U10")

        and: "the youngest class comes first, as in every by-age-group view"
        text.indexOf("Jahrgang 2017") < text.indexOf("Jahrgang 2016")
    }
}
