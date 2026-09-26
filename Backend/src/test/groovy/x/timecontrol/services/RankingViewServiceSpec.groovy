package x.timecontrol.services

import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.StartGroupTemplate
import x.timecontrol.entities.TimingProviderType

import java.time.LocalDate

/**
 * The rows every single-race PDF and the live view print, exactly as printed: the columns Wert,
 * Strafe, Gesamt and Diff, the places within a filtered section, the "nicht gewertet" list scoped
 * like the ranking above it, and the section order. Built on the real RankingService and the real
 * age-group matching, so a change to either shows up here and not only in an e2e run.
 */
class RankingViewServiceSpec extends Specification {

    AgeGroupService ageGroupService = Mock()
    PersonService personService = Mock()
    StartGroupTemplateService startGroupTemplateService = Mock()
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true, true)
    }
    // The matching rule itself needs no repository; only the season's list of groups is stubbed.
    AgeGroupService ageGroupMatching = new AgeGroupService(null, null, null)

    RankingViewService service = new RankingViewService(ageGroupService, new SeasonService(settingsService, Stub(RaceService)),
            Mock(CategoryService), Mock(TeamService), personService, new RankingService(startGroupTemplateService),
            startGroupTemplateService)

    /** The age groups of the race's season, set per feature. */
    List<AgeGroup> seasonAgeGroups = []

    static final Race TIME_ASC = race(ResultUnit.TIME, SortDirection.ASC)
    static final Race POINTS_DESC = race(ResultUnit.POINTS, SortDirection.DESC)

    Map<Long, Person> persons = [:]

    private static Race race(ResultUnit unit, SortDirection direction) {
        new Race(1L, "Rennen", LocalDate.of(2026, 1, 10), null, null, null, null, null, null,
                null, null, null, unit, null, direction, null, null, null, null)
    }

    private Participant finisher(Long id, Integer durationMs, Map extras = [:]) {
        persons[id] = new Person(id, "Vorname" + id, "Name" + id, extras.birthDate ?: LocalDate.of(2012, 5, 1),
                extras.gender ?: Gender.MALE, null)
        new Participant(id, 1L, id, null, null, extras.categoryId as Long, durationMs, extras.penalty as Integer,
                null, null, extras.status ?: DisqualificationStatus.NONE, null, extras.startGroupId as Long)
    }

    private RankingViewService.PersonTeamLookup lookup() {
        new RankingViewService.PersonTeamLookup(persons, [:])
    }

    private List<RankingViewService.RankingEntry> ranking(Race race, List<Participant> participants,
                                                          Gender gender = null, String ageGroup = null, Long categoryId = null) {
        service.createRankingEntriesFromParticipants(participants, race, gender, ageGroup, categoryId, lookup())
    }

    def setup() {
        ageGroupService.findBySeasonAndVariant(2026, _) >> { seasonAgeGroups }
        ageGroupService.calculateAgeGroupName(*_) >> { args -> ageGroupMatching.calculateAgeGroupName(*args) }
        personService.displayName(_ as Person) >> { Person p -> p.lastName() + " " + p.firstName() }
    }

    def "Diff is the difference of the two printed totals, not of the raw values"() {
        given: "0:04.083 prints as 0:04.08, 0:33.525 as 0:33.53 - the raw gap 29.442 would print as 0:29.44"
        def participants = [finisher(1L, 4083), finisher(2L, 33525)]

        when:
        def rows = ranking(TIME_ASC, participants)

        then:
        rows*.totalFormatted() == ["0:04.08", "0:33.53"]
        rows*.diffFormatted() == ["-", "+0:29.45"]
    }

    def "a DESC points race prints the gap to the leader with a minus sign"() {
        given: "12.50 and 11.25 points, higher is better"
        def participants = [finisher(1L, 1125), finisher(2L, 1250)]

        when:
        def rows = ranking(POINTS_DESC, participants)

        then: "the gap is 1.25 points below the leader"
        rows*.place() == [1, 2]
        rows*.totalFormatted() == [RankingViewService.formatValue(POINTS_DESC, 1250), RankingViewService.formatValue(POINTS_DESC, 1125)]
        rows*.diffFormatted() == ["-", "-" + RankingViewService.formatValue(POINTS_DESC, 125)]
    }

    def "Wert is the time net of the start-group offset, Gesamt adds the penalty on top"() {
        given: "raw 1:45.12, start group 1:00 later, 2 s penalty"
        startGroupTemplateService.findById(9L) >> Optional.of(new StartGroupTemplate(9L, "Gruppe", "#92D050", 0, 60))
        def participants = [finisher(1L, 105120, [startGroupId: 9L, penalty: 2000])]

        when:
        def row = ranking(TIME_ASC, participants)[0]

        then:
        row.valueFormatted() == "0:45.12"
        row.hasPenalty()
        row.totalFormatted() == "0:47.12"
    }

    def "places restart at 1 in a filtered section and a tie on the printed value skips the next place"() {
        given: "two women tie on 0:50.12 (raw 50.121 / 50.124); the fastest overall is a man"
        def participants = [
                finisher(1L, 40000, [gender: Gender.MALE]),
                finisher(2L, 50121, [gender: Gender.FEMALE]),
                finisher(3L, 50124, [gender: Gender.FEMALE]),
                finisher(4L, 60000, [gender: Gender.FEMALE]),
        ]

        when:
        def women = ranking(TIME_ASC, participants, Gender.FEMALE)

        then:
        women*.name() == ["Name2 Vorname2", "Name3 Vorname3", "Name4 Vorname4"]
        women*.place() == [1, 1, 3]
        women*.diffFormatted() == ["-", "+0:00.00", "+0:09.88"]
    }

    @Unroll
    def "the 'nicht gewertet' list of a #scope sheet only holds who belongs to that sheet"() {
        given:
        def participants = [
                finisher(1L, 50000, [gender: Gender.MALE, categoryId: 7L]),
                finisher(2L, null, [gender: Gender.FEMALE, categoryId: 7L]),
                finisher(3L, 60000, [gender: Gender.MALE, categoryId: null, status: DisqualificationStatus.DSQ]),
                finisher(4L, null, [gender: Gender.MALE, categoryId: 7L, status: DisqualificationStatus.DNF]),
        ]

        when:
        def rows = service.createDnsRows(participants, TIME_ASC, gender, null, categoryId, lookup())

        then:
        rows*.name() == expectedNames
        rows*.status() == expectedStatus
        rows*.position() == (1..expectedNames.size()).toList()

        where:
        scope            | gender        | categoryId                         || expectedNames                        | expectedStatus
        "whole-field"    | null          | null                               || ["Name2 Vorname2", "Name3 Vorname3", "Name4 Vorname4"] | ["DNS", "DSQ", "DNF"]
        "men's"          | Gender.MALE   | null                               || ["Name3 Vorname3", "Name4 Vorname4"] | ["DSQ", "DNF"]
        "women's"        | Gender.FEMALE | null                               || ["Name2 Vorname2"]                   | ["DNS"]
        "category 7"     | null          | 7L                                 || ["Name2 Vorname2", "Name4 Vorname4"] | ["DNS", "DNF"]
        "Ohne Kategorie" | null          | RankingViewService.NO_CATEGORY_ID  || ["Name3 Vorname3"]                   | ["DSQ"]
    }

    def "the 'Ohne Kategorie' section ranks exactly the participants without a category"() {
        given:
        def participants = [
                finisher(1L, 50000, [categoryId: 7L]),
                finisher(2L, 52000, [categoryId: null]),
                finisher(3L, 51000, [categoryId: null]),
        ]

        when:
        def rows = ranking(TIME_ASC, participants, null, null, RankingViewService.NO_CATEGORY_ID)

        then:
        rows*.name() == ["Name3 Vorname3", "Name2 Vorname2"]
        rows*.place() == [1, 2]
    }

    def "a participant whose birth year matches no age group lands in 'Unbekannt', printed as 'ohne Altersklasse'"() {
        given:
        seasonAgeGroups = [ageGroup("U14", 2012, 2013, Gender.BOTH)]
        def participants = [finisher(1L, 50000, [birthDate: LocalDate.of(2012, 3, 1)]),
                            finisher(2L, 51000, [birthDate: LocalDate.of(1990, 3, 1)])]

        when:
        def rows = ranking(TIME_ASC, participants)
        def unknown = ranking(TIME_ASC, participants, null, AgeGroupService.UNKNOWN_AGE_GROUP)

        then:
        rows*.ageGroup() == ["U14", AgeGroupService.UNKNOWN_AGE_GROUP]
        unknown*.name() == ["Name2 Vorname2"]
        service.ageGroupSectionLabel(AgeGroupService.UNKNOWN_AGE_GROUP) == "ohne Altersklasse"
    }

    def "sections run youngest first, women before men on the same birth year, and 'Unbekannt' last"() {
        given:
        seasonAgeGroups = [
                ageGroup("U16m", 2010, 2011, Gender.MALE),
                ageGroup("U14m", 2012, 2013, Gender.MALE),
                ageGroup("U16w", 2010, 2011, Gender.FEMALE),
                ageGroup("U14w", 2012, 2013, Gender.FEMALE),
        ]

        expect:
        service.uniqueAgeGroupNamesYoungestFirst(TIME_ASC) == ["U14w", "U14m", "U16w", "U16m", AgeGroupService.UNKNOWN_AGE_GROUP]
    }

    private static AgeGroup ageGroup(String name, int from, int to, Gender gender) {
        new AgeGroup(null, name, 2026, "", from, to, gender)
    }
}
