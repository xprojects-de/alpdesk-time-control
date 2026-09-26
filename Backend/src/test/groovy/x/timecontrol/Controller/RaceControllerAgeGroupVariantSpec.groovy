package x.timecontrol.Controller

import io.micronaut.http.HttpStatus
import spock.lang.Specification
import x.timecontrol.dto.RaceRequest
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.repositories.AgeGroupRepository
import x.timecontrol.repositories.ParticipantRepository
import x.timecontrol.repositories.RaceRepository
import x.timecontrol.services.AgeGroupService
import x.timecontrol.services.MeasurementTableLock
import x.timecontrol.services.RaceService
import x.timecontrol.services.SeasonService
import x.timecontrol.services.SettingsService

import java.time.LocalDate

/**
 * Which age-group variant a race may be saved with, as the race endpoints answer it: over a real
 * RaceService, AgeGroupService and SeasonService, with only the repositories stubbed.
 */
class RaceControllerAgeGroupVariantSpec extends Specification {

    static final String KIDS = "Kinder"

    RaceRepository raceRepository = Mock()
    AgeGroupRepository ageGroupRepository = Mock()
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true, true)
    }
    RaceService raceService = new RaceService(raceRepository, Mock(ParticipantRepository), new MeasurementTableLock())
    SeasonService seasonService = new SeasonService(settingsService, raceService)
    AgeGroupService ageGroupService = new AgeGroupService(ageGroupRepository, seasonService, raceService)

    RaceController controller = new RaceController(service: raceService, seasonService: seasonService,
            ageGroupService: ageGroupService)

    def setup() {
        raceRepository.findByNameIgnoreCase(_) >> Optional.empty()
        raceRepository.save(_ as Race) >> { Race r -> r }
        raceRepository.update(_ as Race) >> { Race r -> r }
        ageGroupRepository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(1L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]
        ageGroupRepository.findBySeasonYearAndVariant(_, _) >> []
    }

    private static RaceRequest request(String date, String ageGroupVariant) {
        new RaceRequest("Kinderrennen", LocalDate.parse(date), null, null, null, null, null, null, null, null, "sonnig",
                ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, null, ageGroupVariant)
    }

    private static Race stored(String variant) {
        new Race(1L, "Kinderrennen", LocalDate.of(2026, 3, 1), null, null, null, null, null, null, null, null, null,
                ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "live-1", variant)
    }

    def "creating a race answers #expected for variant '#variant'"() {
        expect:
        controller.add(request("2026-03-01", variant)).status() == expected

        where:
        variant    || expected
        null       || HttpStatus.CREATED
        ""         || HttpStatus.CREATED
        KIDS       || HttpStatus.CREATED
        "Unbekannt" || HttpStatus.BAD_REQUEST
    }

    def "a race whose variant has lost its age groups stays editable"() {
        given: "the stored race uses 'Alt', which has no age groups any more"
        raceRepository.findById(1L) >> Optional.of(stored("Alt"))

        when: "a weather correction, sending the variant back unchanged"
        def response = controller.update(1L, request("2026-03-01", "Alt"))

        then:
        response.status() == HttpStatus.OK
    }

    def "updating a race answers #expected when #situation"() {
        given:
        raceRepository.findById(1L) >> Optional.of(stored(KIDS))

        when:
        def response = controller.update(1L, request(date, variant))

        then:
        response.status() == expected
        expected != HttpStatus.OK || response.body().ageGroupVariant() == storedVariant

        where:
        situation                                     | date         | variant || expected                | storedVariant
        "the request omits the variant"               | "2026-03-01" | null    || HttpStatus.OK          | KIDS
        "the standard variant is picked explicitly"   | "2026-03-01" | ""      || HttpStatus.OK          | ""
        "the date moves it to a season without it"    | "2027-03-01" | null    || HttpStatus.BAD_REQUEST | null
        "an unknown variant is picked"                | "2026-03-01" | "Alt"   || HttpStatus.BAD_REQUEST | null
    }

    def "updating an unknown race is a 404, not a variant error"() {
        given:
        raceRepository.findById(99L) >> Optional.empty()

        expect:
        controller.update(99L, request("2026-03-01", "Unbekannt")).status() == HttpStatus.NOT_FOUND
    }
}
