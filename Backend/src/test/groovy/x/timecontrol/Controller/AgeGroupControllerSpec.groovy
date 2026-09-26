package x.timecontrol.Controller

import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.AgeGroupRequest
import x.timecontrol.dto.CopySeasonRequest
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.repositories.AgeGroupRepository
import x.timecontrol.services.AgeGroupService
import x.timecontrol.services.RaceService
import x.timecontrol.services.SeasonService
import x.timecontrol.services.SettingsService

import java.time.LocalDate

/**
 * The HTTP status each age-group variant rule comes back as. The rules themselves are specified in
 * AgeGroupServiceSpec; this runs them through the controller over a real AgeGroupService and
 * SeasonService, with only the repositories stubbed.
 */
class AgeGroupControllerSpec extends Specification {

    static final String KIDS = "Kinder"

    AgeGroupRepository repository = Mock()
    RaceService raceService = Mock()
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true, true)
    }
    SeasonService seasonService = new SeasonService(settingsService, raceService)
    AgeGroupService ageGroupService = new AgeGroupService(repository, seasonService, raceService)

    AgeGroupController controller = new AgeGroupController(service: ageGroupService, seasonService: seasonService)

    // Every age group of a season, as repository.findBySeasonYear returns it - see AgeGroupServiceSpec.
    Map<Integer, List<AgeGroup>> groupsBySeason = [:]

    def setup() {
        repository.findBySeasonYear(_) >> { Integer seasonYear -> groupsBySeason[seasonYear] ?: [] }
    }

    private static Race race(String name, String variant) {
        new Race(1L, name, LocalDate.of(2026, 3, 1), null, null, null, null, null, null, null, null, null,
                ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "token", variant)
    }

    def "variants by season lists the variants with their group counts and races"() {
        given:
        groupsBySeason[2026] = [new AgeGroup(1L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]
        raceService.findBetweenWithoutCoverPage(_, _) >> [race("Kinderrennen", KIDS)]

        when:
        def response = controller.variants(2026, null)

        then:
        response.status() == HttpStatus.OK
        response.body().seasonYear() == 2026
        response.body().variants()*.variant() == ["", KIDS]
        response.body().variants()*.ageGroupCount() == [0, 1]
        response.body().variants()*.raceNames() == [[], ["Kinderrennen"]]
    }

    def "variants by date resolves the season through the season boundary"() {
        given:
        raceService.findBetweenWithoutCoverPage(_, _) >> []

        when:
        def response = controller.variants(null, LocalDate.of(2026, 2, 1))

        then:
        response.status() == HttpStatus.OK
        response.body().seasonYear() == 2026
    }

    def "variants without a plausible season or date is a 400 (season #season)"() {
        expect:
        controller.variants(season, null).status() == HttpStatus.BAD_REQUEST

        where:
        season << [null, 1899, 2101]
    }

    def "deleteVariant answers #expected when #situation"() {
        given:
        raceService.findBetweenWithoutCoverPage(_, _) >> races

        expect:
        controller.deleteVariant(season, variant).status() == expected

        where:
        situation                   | season | variant | races                          || expected
        "the variant is unused"     | 2026   | KIDS    | []                             || HttpStatus.NO_CONTENT
        "races still use it"        | 2026   | KIDS    | [race("Kinderrennen", KIDS)]   || HttpStatus.CONFLICT
        "it is the standard one"    | 2026   | ""      | []                             || HttpStatus.BAD_REQUEST
        "the season is implausible" | 1899   | KIDS    | []                             || HttpStatus.BAD_REQUEST
    }

    def "delete of the last age group of a used variant is a 409, and the group stays"() {
        given:
        def lastOne = new AgeGroup(5L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(lastOne)
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [lastOne]
        raceService.findBetweenWithoutCoverPage(_, _) >> [race("Kinderrennen", KIDS)]

        when:
        def response = controller.delete(5L)

        then:
        response.status() == HttpStatus.CONFLICT
        response.body().message().contains("Kinderrennen")
        0 * repository.deleteById(_)
    }

    def "delete of an unknown age group is a 404"() {
        given:
        repository.findById(99L) >> Optional.empty()

        expect:
        controller.delete(99L).status() == HttpStatus.NOT_FOUND
    }

    def "copy-season answers #expected when #situation"() {
        given:
        repository.findBySeasonYearAndVariant(2026, "") >> [new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, KIDS) >> targetGroups
        repository.saveAll(_) >> { args -> args[0] }

        expect:
        controller.copySeason(new CopySeasonRequest(fromSeason, 2026, "", toVariant)).status() == expected

        where:
        situation                        | fromSeason | toVariant  | targetGroups                                                                || expected
        "a new variant is started"       | 2026       | KIDS       | []                                                                          || HttpStatus.CREATED
        "source and target are the same" | 2026       | ""         | []                                                                          || HttpStatus.BAD_REQUEST
        "the target is named Standard"   | 2026       | "Standard" | []                                                                          || HttpStatus.BAD_REQUEST
        "the target already has groups"  | 2026       | KIDS       | [new AgeGroup(2L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]  || HttpStatus.CONFLICT
        "the season is implausible"      | 1899       | KIDS       | []                                                                          || HttpStatus.BAD_REQUEST
    }

    def "creating an age group in a variant named '#variant' is a 400"() {
        given:
        groupsBySeason[2026] = [new AgeGroup(1L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]

        expect:
        controller.add(new AgeGroupRequest("U10", 2026, variant, 2016, 2016, Gender.BOTH)).status() == HttpStatus.BAD_REQUEST

        where:
        variant << ["Standard", "kinder"]
    }
}
