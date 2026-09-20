package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.RaceLiveViewType
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.time.LocalDate

/**
 * RaceLiveService.buildResponse() is a straight port of PdfExportService's generate*Ranking
 * dispatch (minus PDF drawing), built on the same RankingViewService both use - these specs check
 * the dispatch/filter/validation behaviour, not the ranking math itself (already covered by
 * RankingServiceSpec). Resolving a race by its liveToken (404 handling) is the controller's job,
 * not this service's - see RaceLiveController - so buildResponse takes an already-resolved Race.
 */
class RaceLiveServiceSpec extends Specification {

    ParticipantService participantService = Mock()
    CategoryService categoryService = Mock()
    AgeGroupService ageGroupService = Mock()
    TeamService teamService = Mock()
    PersonService personService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()

    RankingViewService rankingViewService = new RankingViewService(
            ageGroupService, categoryService, teamService, personService, new RankingService(startGroupTemplateService), startGroupTemplateService)
    RaceLiveService raceLiveService = new RaceLiveService(participantService, categoryService, rankingViewService)

    private static Race race() {
        new Race(1L, "Test-Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "test-token")
    }

    private static Person person(Long id, String firstName, String lastName, Gender gender) {
        new Person(id, firstName, lastName, LocalDate.of(2000, 1, 1), gender, null)
    }

    private static Participant participant(Long id, Integer durationMs, DisqualificationStatus status = DisqualificationStatus.NONE) {
        new Participant(id, 1L, id, id.intValue(), null, null, durationMs, null, null, null, status)
    }

    def setup() {
        ageGroupService.findAll() >> []
        ageGroupService.calculateAgeGroupName(*_) >> "AK"
        teamService.findByIds(_) >> [:]
        categoryService.sortedByName() >> []
        personService.displayName(_ as Person) >> { Person p -> "${p.firstName()} ${p.lastName()}" }
    }

    def "OVERALL view ranks scored participants and lists a DSQ participant separately"() {
        given:
        def p1 = participant(1L, 50000)
        def p2 = participant(2L, 60000)
        def p3 = participant(3L, 40000, DisqualificationStatus.DSQ)
        participantService.findByRaceId(1L) >> [p1, p2, p3]
        personService.findByIds(_) >> [
                1L: person(1L, "Anna", "Fast", Gender.FEMALE),
                2L: person(2L, "Bert", "Slow", Gender.MALE),
                3L: person(3L, "Carl", "Disq", Gender.MALE),
        ]

        when:
        def response = raceLiveService.buildResponse(race(), RaceLiveViewType.OVERALL, null, null, null)

        then:
        response.raceName() == "Test-Rennen"
        response.sections().size() == 1
        response.sections().first().title() == "Gesamtwertung"
        response.sections().first().entries()*.name() == ["Anna Fast", "Bert Slow"]
        response.sections().first().entries()*.place() == [1, 2]
        response.notRanked().size() == 1
        response.notRanked().first().name() == "Carl Disq"
        response.notRanked().first().status() == "DSQ"
        response.startList().isEmpty()
    }

    def "GENDER view requires a gender parameter"() {
        given:
        participantService.findByRaceId(1L) >> []

        when:
        raceLiveService.buildResponse(race(), RaceLiveViewType.GENDER, null, null, null)

        then:
        thrown(IllegalArgumentException)
    }

    def "CATEGORY view requires a categoryId parameter"() {
        given:
        participantService.findByRaceId(1L) >> []

        when:
        raceLiveService.buildResponse(race(), RaceLiveViewType.CATEGORY, null, null, null)

        then:
        thrown(IllegalArgumentException)
    }

    def "GENDER view filters to the requested gender only"() {
        given:
        def p1 = participant(1L, 50000)
        def p2 = participant(2L, 60000)
        participantService.findByRaceId(1L) >> [p1, p2]
        personService.findByIds(_) >> [
                1L: person(1L, "Anna", "Fast", Gender.FEMALE),
                2L: person(2L, "Bert", "Slow", Gender.MALE),
        ]

        when:
        def response = raceLiveService.buildResponse(race(), RaceLiveViewType.GENDER, "MALE", null, null)

        then:
        response.sections().size() == 1
        response.sections().first().entries()*.name() == ["Bert Slow"]
    }

    def "ALL_AGEGROUPS view adds an 'ohne Altersklasse' section for participants matching no age group instead of dropping them"() {
        given: "Anna falls into U14, Bert (born outside every configured range) matches none"
        def ageGroups = Stub(AgeGroupService) {
            findAll() >> [new AgeGroup(1L, "U14", 2012, 2013, Gender.BOTH)]
            calculateAgeGroupName(_, Gender.FEMALE, _) >> "U14"
            calculateAgeGroupName(_, Gender.MALE, _) >> AgeGroupService.UNKNOWN_AGE_GROUP
        }
        def viewService = new RankingViewService(ageGroups, categoryService, teamService, personService,
                new RankingService(startGroupTemplateService), startGroupTemplateService)
        def liveService = new RaceLiveService(participantService, categoryService, viewService)
        participantService.findByRaceId(1L) >> [participant(1L, 50000), participant(2L, 60000)]
        personService.findByIds(_) >> [
                1L: person(1L, "Anna", "Fast", Gender.FEMALE),
                2L: person(2L, "Bert", "Nomatch", Gender.MALE),
        ]

        when:
        def response = liveService.buildResponse(race(), RaceLiveViewType.ALL_AGEGROUPS, null, null, null)

        then: "Bert is ranked in his own trailing section, and still not listed as nicht gewertet"
        response.sections()*.title() == ["Wertung U14 weiblich", "Wertung ohne Altersklasse männlich"]
        response.sections()[1].entries()*.name() == ["Bert Nomatch"]
        response.sections()[1].entries()*.place() == [1]
        response.notRanked().isEmpty()
    }
}
