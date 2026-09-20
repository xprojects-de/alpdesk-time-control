package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeRace
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.PointsScale
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import io.micronaut.transaction.TransactionOperations
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.repositories.GaudiModeRaceRepository
import x.timecontrol.repositories.GaudiModeRepository
import x.timecontrol.services.gaudi.PointsCombinationModeCalculator

import java.time.LocalDate
import java.time.LocalDateTime
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.TimingProviderType

/**
 * Punkte-Mischwertung's "Alle Damen"/"Alle Herren"/"Nach Altersklassen" PDF exports must recompute
 * each leg's place - and therefore its points, and therefore the total - using only the participants
 * within that category, not the whole field (see GaudiModeController + PdfExportService). This spec
 * exercises GaudiModeService.computeRankingForCategory() end to end (real RankingService and
 * PointsCombinationModeCalculator, mocked repositories/participant data) to prove that a person's
 * points actually change when the comparison field shrinks to their category - the "Gesamt" score
 * shown in a category PDF is not just the global score re-sorted.
 */
class GaudiModeServiceCategoryRankingSpec extends Specification {

    GaudiModeRepository repository = Mock()
    GaudiModeRaceRepository gaudiModeRaceRepository = Mock()
    GaudiLosPairingRepository pairingRepository = Mock()
    ParticipantService participantService = Mock()
    RaceService raceService = Mock()
    PersonService personService = Mock()
    AgeGroupService ageGroupService = Spy(new AgeGroupService(null))
    PointsScaleService pointsScaleService = Mock()
    TeamService teamService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    TransactionOperations transactionOperations = Mock()

    // A real SeasonService over a stubbed settings row rather than a mock, so the specs exercise
    // the actual date -> season mapping. With the default 1 January boundary, every race date used
    // in these specs (2026-..-..) resolves to season 2026.
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1)
    }
    SeasonService seasonService = new SeasonService(settingsService, raceService)

    def calculator = new PointsCombinationModeCalculator(new RankingService(startGroupTemplateService), personService, pointsScaleService, teamService, ageGroupService, seasonService)

    def service = new GaudiModeService(repository, gaudiModeRaceRepository, pairingRepository, participantService,
            raceService, personService, ageGroupService, seasonService, [calculator], transactionOperations)

    def gaudiMode = new GaudiMode(1L, GaudiModeType.POINTS_COMBINATION, "Kondiwettkamp", null, 1L, false, false, false, LocalDateTime.now())
    def race = new Race(10L, "Schnelligkeit", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    def scale = new PointsScale(1L, "Test-Schema", "100,80,60,50")

    private static Participant participant(Long id, Long personId, int durationMs) {
        new Participant(id, 10L, personId, null, null, null, durationMs, null, null, null)
    }

    private static Person person(Long id, Gender gender, LocalDate birthDate) {
        new Person(id, "Vorname" + id, "Nachname" + id, birthDate, gender, null)
    }

    def setup() {
        gaudiModeRaceRepository.findByGaudiModeIdOrderBySortOrder(1L) >> [new GaudiModeRace(1L, 1L, 10L, 0, 1.0d)]
        raceService.findById(10L) >> Optional.of(race)
        pointsScaleService.findById(1L) >> Optional.of(scale)
        pointsScaleService.parsePoints(scale) >> [100, 80, 60, 50]
        pointsScaleService.pointsForPlace(_ as List, _ as Integer) >> { List pts, Integer place -> place <= pts.size() ? pts[place - 1] : 0 }
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
    }

    def "gender filter restricts each leg's placement (and therefore points) to that gender only"() {
        given: "two men and two women; globally p1=1st, p3=2nd, p2=3rd, p4=4th by time"
        def participants = [
                participant(101L, 1L, 100), // p1 MALE, fastest overall
                participant(102L, 2L, 200), // p2 FEMALE
                participant(103L, 3L, 150), // p3 MALE
                participant(104L, 4L, 250), // p4 FEMALE, slowest overall
        ]
        participantService.findByRaceId(10L) >> participants
        personService.findById(1L) >> Optional.of(person(1L, Gender.MALE, LocalDate.of(1990, 1, 1)))
        personService.findById(2L) >> Optional.of(person(2L, Gender.FEMALE, LocalDate.of(1990, 1, 1)))
        personService.findById(3L) >> Optional.of(person(3L, Gender.MALE, LocalDate.of(1990, 1, 1)))
        personService.findById(4L) >> Optional.of(person(4L, Gender.FEMALE, LocalDate.of(1990, 1, 1)))
        personService.findByIds(_ as Set) >> [
                1L: person(1L, Gender.MALE, LocalDate.of(1990, 1, 1)),
                2L: person(2L, Gender.FEMALE, LocalDate.of(1990, 1, 1)),
                3L: person(3L, Gender.MALE, LocalDate.of(1990, 1, 1)),
                4L: person(4L, Gender.FEMALE, LocalDate.of(1990, 1, 1)),
        ]

        when: "the unfiltered ranking is computed - global points, per FIS-style scale [100,80,60,50]"
        def overall = service.computeRanking(gaudiMode)
        def overallByLabel = overall.collectEntries { [(it.label()): it.totalPoints()] }

        then: "global places by time: p1=1st(100pts), p3=2nd(80pts), p2=3rd(60pts), p4=4th(50pts)"
        overallByLabel["Vorname1"] == 100
        overallByLabel["Vorname3"] == 80
        overallByLabel["Vorname2"] == 60
        overallByLabel["Vorname4"] == 50

        when: "the ranking is recomputed for women only"
        def women = service.computeRankingForCategory(gaudiMode, Gender.FEMALE, null)
        def womenByLabel = women.collectEntries { [(it.label()): it] }

        then: "only the two women are ranked, and among themselves p2 is 1st, not 3rd"
        women.size() == 2
        womenByLabel["Vorname2"].place() == 1
        womenByLabel["Vorname4"].place() == 2
        and: "the points themselves change too - p2's 100 points reflect being fastest among women, not 60 for 3rd overall"
        womenByLabel["Vorname2"].totalPoints() == 100
        womenByLabel["Vorname4"].totalPoints() == 80

        when: "the ranking is recomputed for men only"
        def men = service.computeRankingForCategory(gaudiMode, Gender.MALE, null)
        def menByLabel = men.collectEntries { [(it.label()): it] }

        then:
        men.size() == 2
        menByLabel["Vorname1"].place() == 1
        menByLabel["Vorname1"].totalPoints() == 100
        menByLabel["Vorname3"].place() == 2
        menByLabel["Vorname3"].totalPoints() == 80
    }

    def "age group filter restricts placement to that age group regardless of gender"() {
        given: "two age groups; the U16 pair times would otherwise dominate the U14 pair's global place"
        def participants = [
                participant(201L, 1L, 300), // U14, slower than both U16
                participant(202L, 2L, 320), // U14, slowest overall
                participant(203L, 3L, 100), // U16, fastest overall
                participant(204L, 4L, 150), // U16
        ]
        participantService.findByRaceId(10L) >> participants
        // gender: BOTH, not null - age_group.gender is NOT NULL in the schema (default 'BOTH'),
        // this test's point is the age filter, not gender, so it deliberately matches either.
        def ageGroups = [
                new AgeGroup(1L, "U14", 2026, 2012, 2013, Gender.BOTH),
                new AgeGroup(2L, "U16", 2026, 2010, 2011, Gender.BOTH),
        ]
        ageGroupService.findBySeason(2026) >> ageGroups
        def persons = [
                1L: person(1L, Gender.MALE, LocalDate.of(2012, 1, 1)),
                2L: person(2L, Gender.MALE, LocalDate.of(2013, 1, 1)),
                3L: person(3L, Gender.MALE, LocalDate.of(2010, 1, 1)),
                4L: person(4L, Gender.MALE, LocalDate.of(2011, 1, 1)),
        ]
        persons.each { id, p -> personService.findById(id) >> Optional.of(p) }
        personService.findByIds(_ as Set) >> persons

        when: "recomputed for U14 only, ignoring the much faster U16 field"
        def u14 = service.computeRankingForCategory(gaudiMode, null, "U14")
        def u14ByLabel = u14.collectEntries { [(it.label()): it] }

        then: "within U14, the faster of the two (300ms) is 1st despite being slower than every U16 racer"
        u14.size() == 2
        u14ByLabel["Vorname1"].place() == 1
        u14ByLabel["Vorname1"].totalPoints() == 100
        u14ByLabel["Vorname2"].place() == 2
        u14ByLabel["Vorname2"].totalPoints() == 80
    }
}
