package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.AgeGroupRequest
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.repositories.AgeGroupRepository

import java.time.LocalDate

class AgeGroupServiceSpec extends Specification {

    AgeGroupRepository repository = Mock()
    RaceService raceService = Mock()

    // A real SeasonService over a stubbed settings row: with the default 1 January boundary, every
    // race date in these specs resolves to its calendar year.
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true, true)
    }
    SeasonService seasonService = new SeasonService(settingsService, raceService)

    AgeGroupService service = new AgeGroupService(repository, seasonService, raceService)

    // Every age group of a season, across its variants, as repository.findBySeasonYear returns it.
    // Filled by individual tests instead of re-stubbing findBySeasonYear there: create/update check
    // the season's variant spellings through it, so it needs a default for every test, and a
    // second, more specific interaction on the same method would be ambiguous (see the same
    // pattern in ParticipantServiceSpec).
    Map<Integer, List<AgeGroup>> groupsBySeason = [:]

    def setup() {
        repository.findBySeasonYear(_) >> { Integer seasonYear -> groupsBySeason[seasonYear] ?: [] }
    }

    def "findOrCreateForImport creates a new single-year age group when nothing existing covers this year/gender"() {
        given:
        repository.findBySeasonYearAndVariant(2026, "") >> []

        when:
        def result = service.findOrCreateForImport("U14m", 2012, Gender.MALE, 2026, "")

        then:
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2012 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(1L, ag.name(), 2026, ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "findOrCreateForImport reuses an already-covering same-named group unchanged"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2026, 2012, 2013, Gender.MALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [existing]

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026, "")

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        result == existing
    }

    def "findOrCreateForImport refuses a same-named group that does not cover this birth year"() {
        given: "'U14m' is configured for 2012 only - the season's classes are the operator's setup"
        def existing = new AgeGroup(5L, "U14M", 2026, 2012, 2012, Gender.MALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [existing]

        when: "a 2013-born row claims the same class"
        service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026, "")

        then: "an import must not reshape a configured class - that re-categorises everyone else"
        0 * repository.update(_)
        0 * repository.save(_)
        def e = thrown(IllegalStateException)
        e.message.contains("U14M")
        e.message.contains("2012-2012")
    }

    def "findOrCreateForImport reuses a differently-named existing group that already covers this year for this gender, instead of creating a duplicate by name"() {
        given: "a manually-configured 'U14' age group (2013-2014, MALE) that already covers this row's 2013 birth year"
        def existingU14 = new AgeGroup(1L, "U14", 2026, 2013, 2014, Gender.MALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [existingU14]

        when: "importing a row whose Klasse column says 'U14m' - a different name, but the same year/gender is already covered"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026, "")

        then: "the existing 'U14' group is reused as-is - no new 'U14M' group is created"
        0 * repository.save(_)
        0 * repository.update(_)
        result == existingU14
    }

    def "findOrCreateForImport treats a BOTH-gender existing group as covering either gender"() {
        given: "a 'U16' age group covering both genders"
        def existingU16 = new AgeGroup(2L, "U16", 2026, 2011, 2012, Gender.BOTH)
        repository.findBySeasonYearAndVariant(2026, "") >> [existingU16]

        when:
        def maleResult = service.findOrCreateForImport("U16m", 2011, Gender.MALE, 2026, "")
        def femaleResult = service.findOrCreateForImport("U16w", 2012, Gender.FEMALE, 2026, "")

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        maleResult == existingU16
        femaleResult == existingU16
    }

    def "findOrCreateForImport does not match a differently-gendered group for the same year, and falls back to name-based creation"() {
        given: "an existing 'U14' group, but only for FEMALE"
        def existingFemaleOnly = new AgeGroup(3L, "U14W", 2026, 2013, 2013, Gender.FEMALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [existingFemaleOnly]

        when: "importing a MALE row for the same year"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026, "")

        then: "the FEMALE-only group doesn't cover it, and no group named 'U14M' exists yet, so a new one is created"
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(4L, ag.name(), 2026, ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "findOrCreateForImport refuses to widen a same-named group that belongs to the other gender"() {
        given: "season 2026 has 'U14' configured for FEMALE only, 2012-2013"
        def femaleU14 = new AgeGroup(3L, "U14", 2026, 2012, 2013, Gender.FEMALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [femaleU14]

        when: "a MALE row born 2014, also labelled 'U14', is imported"
        service.findOrCreateForImport("U14", 2014, Gender.MALE, 2026, "")

        then: "widening it would push every 2014-born GIRL into U14 while leaving him classless"
        0 * repository.update(_)
        0 * repository.save(_)
        def e = thrown(IllegalStateException)
        e.message.contains("U14")
        e.message.contains("FEMALE")
    }

    def "findOrCreateForImport refuses a same-named group of the other gender even when no widening is needed"() {
        given: "'U14' is MALE 2012-2013 - the imported year is already inside that range"
        def maleU14 = new AgeGroup(3L, "U14", 2026, 2012, 2013, Gender.MALE)
        repository.findBySeasonYearAndVariant(2026, "") >> [maleU14]

        when: "a FEMALE row born 2012, labelled 'U14', is imported"
        service.findOrCreateForImport("U14", 2012, Gender.FEMALE, 2026, "")

        then: "returning it unchanged would look harmless but leaves her matching no class at all"
        0 * repository.update(_)
        0 * repository.save(_)
        thrown(IllegalStateException)
    }

    def "findOrCreateForImport refuses a same-named BOTH-gender group that does not cover this birth year"() {
        given: "a BOTH class is the worst one to widen - it would pull in BOTH genders of that year"
        def openClass = new AgeGroup(3L, "OFFENE KLASSE", 2026, 2012, 2013, Gender.BOTH)
        repository.findBySeasonYearAndVariant(2026, "") >> [openClass]

        when:
        service.findOrCreateForImport("Offene Klasse", 2014, Gender.MALE, 2026, "")

        then:
        0 * repository.update(_)
        0 * repository.save(_)
        thrown(IllegalStateException)
    }

    def "calculateAgeGroupName picks the group matching both the birth year AND the gender, not just the year"() {
        given: "two gender-specific groups with the identical year range, as real DSV exports commonly have"
        def ageGroups = [
                new AgeGroup(1L, "U14m", 2026, 2012, 2013, Gender.MALE),
                new AgeGroup(2L, "U14w", 2026, 2012, 2013, Gender.FEMALE),
        ]

        expect: "each gender resolves to its own group, not the first one in the list"
        service.calculateAgeGroupName(LocalDate.of(2012, 1, 1), Gender.MALE, ageGroups) == "U14m"
        service.calculateAgeGroupName(LocalDate.of(2012, 1, 1), Gender.FEMALE, ageGroups) == "U14w"
    }

    def "calculateAgeGroupName matches a BOTH-gender group for either gender"() {
        given:
        def ageGroups = [new AgeGroup(1L, "Offene Klasse", 2026, 1980, 2020, Gender.BOTH)]

        expect:
        service.calculateAgeGroupName(LocalDate.of(1990, 1, 1), Gender.MALE, ageGroups) == "Offene Klasse"
        service.calculateAgeGroupName(LocalDate.of(1990, 1, 1), Gender.FEMALE, ageGroups) == "Offene Klasse"
    }

    def "findOrCreateForImport never reaches into another season's configuration"() {
        given: "season 2025's U14 covers 2012-2013 - and this import goes into a 2026 race"
        def lastSeasonU14 = new AgeGroup(5L, "U14M", 2025, 2012, 2013, Gender.MALE)
        repository.findBySeasonYearAndVariant(2025, "") >> [lastSeasonU14]
        repository.findBySeasonYearAndVariant(2026, "") >> []

        when: "a row whose birth year 2012 the *previous* season's U14 would happily cover"
        service.findOrCreateForImport("U14m", 2012, Gender.MALE, 2026, "")

        then: "a fresh 2026 group is created instead of reusing or widening last season's"
        0 * repository.update(_)
        1 * repository.save({ AgeGroup ag -> ag.seasonYear() == 2026 && ag.name() == "U14M" }) >>
                { AgeGroup ag -> new AgeGroup(9L, ag.name(), ag.seasonYear(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
    }

    def "findOrCreateForImport does not widen a past season's group and thereby re-categorise its finished races"() {
        given: "the dangerous case: same class name, a birth year outside last season's range"
        def lastSeasonU14 = new AgeGroup(5L, "U14M", 2025, 2012, 2013, Gender.MALE)
        repository.findBySeasonYearAndVariant(2025, "") >> [lastSeasonU14]
        repository.findBySeasonYearAndVariant(2026, "") >> []

        when: "2015 lies outside 2012-2013, so the name-based branch would widen it if it saw it"
        service.findOrCreateForImport("U14m", 2015, Gender.MALE, 2026, "")

        then: "season 2025 is left exactly as it was - its races keep the classes they were run under"
        0 * repository.update(_)
        1 * repository.save({ AgeGroup ag -> ag.seasonYear() == 2026 && ag.birthYearFrom() == 2015 && ag.birthYearTo() == 2015 }) >>
                { AgeGroup ag -> new AgeGroup(9L, ag.name(), ag.seasonYear(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
    }

    def "copyVariant shifts every group's birth years by the difference between the seasons"() {
        given: "a fully configured 2025 season"
        repository.findBySeasonYearAndVariant(2025, "") >> [
                new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH),
                new AgeGroup(2L, "U16", 2025, 2010, 2011, Gender.BOTH),
        ]
        repository.findBySeasonYearAndVariant(2026, "") >> []

        when:
        service.copyVariant(2025, "", 2026, "")

        then: "U14 rolls on by a year, and the copies belong to the new season"
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies.size() == 2 &&
                    copies.every { it.id() == null && it.seasonYear() == 2026 } &&
                    copies[0].name() == "U14" && copies[0].birthYearFrom() == 2013 && copies[0].birthYearTo() == 2014 &&
                    copies[1].name() == "U16" && copies[1].birthYearFrom() == 2011 && copies[1].birthYearTo() == 2012
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copyVariant skipping a year shifts by that many years"() {
        given:
        repository.findBySeasonYearAndVariant(2024, "") >> [new AgeGroup(1L, "U14", 2024, 2011, 2012, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, "") >> []

        when:
        service.copyVariant(2024, "", 2026, "")

        then:
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies[0].birthYearFrom() == 2013 && copies[0].birthYearTo() == 2014
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copyVariant refuses to write into a season that already has age groups"() {
        given: "merging would have to guess which of two conflicting ranges wins"
        repository.findBySeasonYearAndVariant(2025, "") >> [new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, "") >> [new AgeGroup(2L, "U14", 2026, 2013, 2014, Gender.BOTH)]

        when:
        service.copyVariant(2025, "", 2026, "")

        then:
        0 * repository.saveAll(_)
        thrown(IllegalStateException)
    }

    def "copyVariant refuses an empty source season"() {
        given:
        repository.findBySeasonYearAndVariant(2025, "") >> []

        when:
        service.copyVariant(2025, "", 2026, "")

        then:
        0 * repository.saveAll(_)
        thrown(IllegalStateException)
    }

    def "create rejects a name already used in the same season, but allows it in another"() {
        given:
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant("U14", 2026, "") >> Optional.of(new AgeGroup(1L, "U14", 2026, 2013, 2014, Gender.BOTH))
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant("U14", 2027, "") >> Optional.empty()
        repository.findBySeasonYearAndVariant(2027, "") >> []

        when: "the same name in the season that already has it"
        service.create(new AgeGroup(null, "U14", 2026, 2013, 2014, Gender.BOTH))

        then:
        thrown(IllegalStateException)

        when: "the same name in the next season - the whole point of seasons"
        service.create(new AgeGroup(null, "U14", 2027, 2014, 2015, Gender.BOTH))

        then:
        notThrown(IllegalStateException)
        1 * repository.save(_) >> { AgeGroup ag -> ag }
    }

    def "create allows a birth-year range that overlaps another season's, which every rollover produces"() {
        given: "2026's U14 (2013-2014) necessarily overlaps 2025's U14 (2012-2013) on 2013"
        repository.findBySeasonYearAndVariant(2025, "") >> [new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, "") >> []
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()

        when:
        service.create(new AgeGroup(null, "U14", 2026, 2013, 2014, Gender.BOTH))

        then:
        notThrown(IllegalStateException)
        1 * repository.save(_) >> { AgeGroup ag -> ag }
    }

    // --- variants: two groupings of the same birth years within one season ---

    private static final String KIDS = "Kinderrennen jahrgangsweise"

    private static Race race(Long id, String name, LocalDate date, String variant) {
        new Race(id, name, date, null, null, null, null, null, null, null, null, null,
                ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "token-" + id, variant)
    }

    def "create allows the standard variant's name and birth years again in another variant of the same season"() {
        given: "the season's standard variant groups 2016-2017 as U10"
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant("U10", 2026, KIDS) >> Optional.empty()
        repository.findBySeasonYearAndVariant(2026, KIDS) >> []

        when: "the kids' race variant cuts 2016 on its own under the same name"
        service.create(new AgeGroup(null, "U10", 2026, KIDS, 2016, 2016, Gender.BOTH))

        then: "neither the name nor the overlap is checked against the standard variant"
        0 * repository.findBySeasonYearAndVariant(2026, "")
        0 * repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, "")
        1 * repository.save({ AgeGroup ag -> ag.variant() == KIDS }) >> { AgeGroup ag -> ag }
    }

    def "create still rejects an overlapping birth-year range within one variant"() {
        given:
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(1L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]

        when:
        service.create(new AgeGroup(null, "Jahrgang 2015/16", 2026, KIDS, 2015, 2016, Gender.BOTH))

        then:
        0 * repository.save(_)
        def e = thrown(IllegalStateException)
        e.message.contains(KIDS)
    }

    def "create rejects a same name within one variant"() {
        given:
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant("U10", 2026, KIDS) >>
                Optional.of(new AgeGroup(1L, "U10", 2026, KIDS, 2016, 2016, Gender.BOTH))

        when:
        service.create(new AgeGroup(null, "U10", 2026, KIDS, 2017, 2017, Gender.BOTH))

        then:
        0 * repository.save(_)
        thrown(IllegalStateException)
    }

    def "create and update reject '#variant' as a variant name, which is what the UI calls the standard variant"() {
        when:
        service.create(new AgeGroup(null, "U10", 2026, variant, 2016, 2016, Gender.BOTH))

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)

        when:
        service.update(1L, new AgeGroup(null, "U10", 2026, variant, 2016, 2016, Gender.BOTH))

        then:
        1 * repository.findById(1L) >> Optional.of(new AgeGroup(1L, "U10", 2026, 2016, 2016, Gender.BOTH))
        thrown(IllegalArgumentException)
        0 * repository.update(_)

        where:
        variant << ["Standard", "standard", "STANDARD"]
    }

    def "normalizeVariant turns a missing variant into the standard one and trims the rest"() {
        expect:
        AgeGroupService.normalizeVariant(input) == expected

        where:
        input          | expected
        null           | ""
        ""             | ""
        "  "           | ""
        " Kinder "     | "Kinder"
        KIDS           | KIDS
    }

    def "createFromRequest stores the standard variant when the request carries none"() {
        expect:
        service.createFromRequest(new AgeGroupRequest(" U10 ", 2026, requested, 2016, 2017, Gender.BOTH)).variant() == stored

        where:
        requested | stored
        null      | ""
        " Kids "  | "Kids"
    }

    def "copyVariant within one season starts a new variant with the birth years unchanged"() {
        given:
        repository.findBySeasonYearAndVariant(2026, "") >> [
                new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH),
                new AgeGroup(2L, "U12", 2026, 2014, 2015, Gender.BOTH),
        ]
        repository.findBySeasonYearAndVariant(2026, KIDS) >> []

        when:
        service.copyVariant(2026, "", 2026, KIDS)

        then: "the copies are then re-cut by hand, so they start out as an exact copy"
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies.size() == 2 &&
                    copies.every { it.id() == null && it.seasonYear() == 2026 && it.variant() == KIDS } &&
                    copies[0].birthYearFrom() == 2016 && copies[0].birthYearTo() == 2017 &&
                    copies[1].birthYearFrom() == 2014 && copies[1].birthYearTo() == 2015
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copyVariant rolls a variant over to the next season under its own name, shifting the birth years"() {
        given:
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(1L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2027, KIDS) >> []

        when:
        service.copyVariant(2026, KIDS, 2027, KIDS)

        then:
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies[0].seasonYear() == 2027 && copies[0].variant() == KIDS && copies[0].birthYearFrom() == 2017
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copyVariant rejects copying a variant onto itself"() {
        when:
        service.copyVariant(2026, KIDS, 2026, KIDS)

        then:
        thrown(IllegalArgumentException)
        0 * repository.saveAll(_)
    }

    def "copyVariant rejects 'Standard' as the target variant name"() {
        when:
        service.copyVariant(2026, "", 2026, "Standard")

        then:
        thrown(IllegalArgumentException)
        0 * repository.saveAll(_)
    }

    def "copyVariant refuses to write into a variant that already has age groups"() {
        given:
        repository.findBySeasonYearAndVariant(2026, "") >> [new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(2L, "U10", 2026, KIDS, 2016, 2016, Gender.BOTH)]

        when:
        service.copyVariant(2026, "", 2026, KIDS)

        then:
        0 * repository.saveAll(_)
        def e = thrown(IllegalStateException)
        e.message.contains(KIDS)
    }

    def "findOrCreateForImport creates a missing class in the race's variant, not in the standard one"() {
        given: "the variant is still empty; the standard variant has a U10 covering 2016"
        repository.findBySeasonYearAndVariant(2026, "") >> [new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, KIDS) >> []

        when:
        def result = service.findOrCreateForImport("U10", 2016, Gender.MALE, 2026, KIDS)

        then: "the standard variant's U10 is neither reused nor a name clash"
        1 * repository.save({ AgeGroup ag -> ag.variant() == KIDS && ag.seasonYear() == 2026 && ag.name() == "U10" }) >>
                { AgeGroup ag -> new AgeGroup(9L, ag.name(), ag.seasonYear(), ag.variant(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.variant() == KIDS
    }

    def "findOrCreateForImport reports a same-named class of the race's variant that does not fit, naming the variant"() {
        given:
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(1L, "U10", 2026, KIDS, 2016, 2016, Gender.BOTH)]

        when:
        service.findOrCreateForImport("U10", 2017, Gender.MALE, 2026, KIDS)

        then:
        0 * repository.save(_)
        def e = thrown(IllegalStateException)
        e.message.contains(KIDS)
    }

    private static final LocalDate SEASON_2026_START = LocalDate.of(2026, 1, 1)
    private static final LocalDate SEASON_2026_END = LocalDate.of(2026, 12, 31)

    def "findVariants lists the standard variant first, every configured variant and one only races still use, each with its group count and races"() {
        given:
        groupsBySeason[2026] = [
                new AgeGroup(1L, "U10", 2026, 2016, 2017, Gender.BOTH),
                new AgeGroup(2L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH),
                new AgeGroup(3L, "Jahrgang 2017", 2026, KIDS, 2017, 2017, Gender.BOTH),
        ]
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> [
                race(1L, "Vereinsmeisterschaft", LocalDate.of(2026, 2, 1), ""),
                race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS),
                race(3L, "Nachtslalom", LocalDate.of(2026, 3, 8), "Alt"),
        ]

        when:
        def variants = service.findVariants(2026)

        then: "'Alt' has races but no groups left - listed so it can be spotted and refilled"
        variants*.variant() == ["", "Alt", KIDS]
        variants*.ageGroupCount() == [1, 0, 2]
        variants*.raceNames() == [["Vereinsmeisterschaft"], ["Nachtslalom"], ["Kinderrennen"]]
    }

    def "findVariants reads only the races dated within the season, as the season boundary puts it"() {
        given: "a ski winter boundary: season 2025 runs from 1 July 2025 to 30 June 2026"
        def winterSettings = Stub(SettingsService) {
            getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 7, 1, true, true)
        }
        def winterService = new AgeGroupService(repository, new SeasonService(winterSettings, raceService), raceService)
        groupsBySeason[2025] = []

        when:
        winterService.findVariants(2025)

        then:
        1 * raceService.findBetweenWithoutCoverPage(LocalDate.of(2025, 7, 1), LocalDate.of(2026, 6, 30)) >> []
    }

    def "findVariants always offers the standard variant, even for a season with nothing configured"() {
        given:
        groupsBySeason[2030] = []
        raceService.findBetweenWithoutCoverPage(_, _) >> []

        expect:
        service.findVariants(2030)*.variant() == [""]
    }

    def "assertVariantSelectable for a new race accepts the standard variant and configured ones, and rejects a variant without age groups"() {
        given:
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [new AgeGroup(1L, "U10", 2026, KIDS, 2016, 2016, Gender.BOTH)]
        repository.findBySeasonYearAndVariant(2026, "Tippfehler") >> []
        repository.findBySeasonYearAndVariant(2027, KIDS) >> []

        when: "the standard variant needs no configuration"
        service.assertVariantSelectable(race(null, "Neu", LocalDate.of(2026, 2, 1), ""), null)

        then:
        notThrown(IllegalArgumentException)

        when:
        service.assertVariantSelectable(race(null, "Neu", LocalDate.of(2026, 2, 1), KIDS), null)

        then:
        notThrown(IllegalArgumentException)

        when: "a name nobody set up"
        service.assertVariantSelectable(race(null, "Neu", LocalDate.of(2026, 2, 1), "Tippfehler"), null)

        then:
        thrown(IllegalArgumentException)

        when: "the variant exists, but in another season than the race's"
        service.assertVariantSelectable(race(null, "Neu", LocalDate.of(2027, 2, 1), KIDS), null)

        then:
        thrown(IllegalArgumentException)
    }

    def "assertVariantSelectable lets a race keep a variant that has meanwhile lost its age groups"() {
        given: "the kids' race still points at 'Alt', which has no age groups any more"
        repository.findBySeasonYearAndVariant(2026, "Alt") >> []
        def stored = race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), "Alt")

        when: "a weather correction on race day - same date, same variant"
        service.assertVariantSelectable(race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), "Alt"), stored)

        then:
        notThrown(IllegalArgumentException)

        when: "the race is moved to another date of the same season"
        service.assertVariantSelectable(race(2L, "Kinderrennen", LocalDate.of(2026, 4, 1), "Alt"), stored)

        then: "still unchanged - the variant belongs to the season, not the day"
        notThrown(IllegalArgumentException)
    }

    def "assertVariantSelectable rejects moving a race into a season that lacks its variant, and picking an empty variant"() {
        given:
        repository.findBySeasonYearAndVariant(2027, KIDS) >> []
        repository.findBySeasonYearAndVariant(2026, "Alt") >> []
        def stored = race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)

        when: "the date moves the race into season 2027"
        service.assertVariantSelectable(race(2L, "Kinderrennen", LocalDate.of(2027, 3, 1), KIDS), stored)

        then:
        thrown(IllegalArgumentException)

        when: "the variant is switched to one without age groups"
        service.assertVariantSelectable(race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), "Alt"), stored)

        then:
        thrown(IllegalArgumentException)
    }

    def "deleteVariant removes a variant no race of its season uses"() {
        given: "the season's races come from the date range - a 2025 race of the same name is not among them"
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> []

        when:
        service.deleteVariant(2026, KIDS)

        then:
        1 * repository.deleteBySeasonYearAndVariant(2026, KIDS)
    }

    def "deleteVariant refuses a variant races of its season still use, naming them"() {
        given:
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]

        when:
        service.deleteVariant(2026, KIDS)

        then:
        0 * repository.deleteBySeasonYearAndVariant(_, _)
        def e = thrown(IllegalStateException)
        e.message.contains("Kinderrennen")
    }

    def "delete refuses the last age group of a variant races still use, naming them"() {
        given:
        def lastOne = new AgeGroup(5L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(lastOne)
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [lastOne]
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]

        when:
        service.delete(5L)

        then: "the kids' race would otherwise come out 'ohne Altersklasse' without a word"
        0 * repository.deleteById(_)
        def e = thrown(IllegalStateException)
        e.message.contains("Kinderrennen")
    }

    def "delete removes an age group when #situation"() {
        given:
        def group = new AgeGroup(5L, "Jahrgang 2016", 2026, variant, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(group)
        repository.findBySeasonYearAndVariant(2026, variant) >> [group] * groupsInVariant
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> races

        when:
        service.delete(5L)

        then:
        1 * repository.deleteById(5L)

        where:
        situation                                       | variant | groupsInVariant | races
        "others of its variant remain"                  | KIDS    | 2               | [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]
        "no race uses its variant"                      | KIDS    | 1               | []
        "it is the standard variant's last one, as ever" | ""      | 1               | [race(1L, "Vereinsmeisterschaft", LocalDate.of(2026, 2, 1), "")]
    }

    def "update refuses to move the last age group of a used variant #move"() {
        given:
        def lastOne = new AgeGroup(5L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(lastOne)
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [lastOne]
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]

        when:
        service.update(5L, new AgeGroup(null, "Jahrgang 2016", seasonYear, variant, 2016, 2016, Gender.BOTH))

        then: "for the kids' race that is the same as deleting it"
        0 * repository.update(_)
        def e = thrown(IllegalStateException)
        e.message.contains("Kinderrennen")

        where:
        move                         | seasonYear | variant
        "into the standard variant"  | 2026       | ""
        "into another variant"       | 2026       | "Andere"
        "into another season"        | 2027       | KIDS
    }

    def "update keeps the last age group of a used variant editable within its variant"() {
        given:
        def lastOne = new AgeGroup(5L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(lastOne)
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [lastOne]
        raceService.findBetweenWithoutCoverPage(_, _) >> [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()
        def corrected = new AgeGroup(null, "Jahrgänge 2016-2017", 2026, KIDS, 2016, 2017, Gender.BOTH)

        when:
        service.update(5L, corrected)

        then:
        1 * repository.update({ it.id() == 5L && it.variant() == KIDS && it.birthYearTo() == 2017 }) >> { AgeGroup a -> a }
    }

    def "update moves an age group to another variant when #situation"() {
        given:
        def group = new AgeGroup(5L, "Jahrgang 2016", 2026, KIDS, 2016, 2016, Gender.BOTH)
        repository.findById(5L) >> Optional.of(group)
        repository.findBySeasonYearAndVariant(2026, KIDS) >> [group] * groupsInVariant
        repository.findBySeasonYearAndVariant(2026, "Andere") >> []
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()
        raceService.findBetweenWithoutCoverPage(SEASON_2026_START, SEASON_2026_END) >> races

        when:
        service.update(5L, new AgeGroup(null, "Jahrgang 2016", 2026, "Andere", 2016, 2016, Gender.BOTH))

        then:
        1 * repository.update({ it.variant() == "Andere" }) >> { AgeGroup a -> a }

        where:
        situation                      | groupsInVariant | races
        "others of its variant remain" | 2               | [race(2L, "Kinderrennen", LocalDate.of(2026, 3, 1), KIDS)]
        "no race uses its variant"     | 1               | []
    }

    def "create and copyVariant refuse a variant that exists in the season under another spelling"() {
        given:
        groupsBySeason[2026] = [new AgeGroup(1L, "Jahrgang 2016", 2026, "Kinder", 2016, 2016, Gender.BOTH)]
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()

        when:
        service.create(new AgeGroup(null, "Jahrgang 2017", 2026, "kinder", 2017, 2017, Gender.BOTH))

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)

        when:
        service.copyVariant(2026, "", 2026, "KINDER")

        then:
        thrown(IllegalArgumentException)
        0 * repository.saveAll(_)
    }

    def "create accepts the exact spelling of an existing variant"() {
        given:
        groupsBySeason[2026] = [new AgeGroup(1L, "Jahrgang 2016", 2026, "Kinder", 2016, 2016, Gender.BOTH)]
        repository.findByNameIgnoreCaseAndSeasonYearAndVariant(_, _, _) >> Optional.empty()
        repository.findBySeasonYearAndVariant(2026, "Kinder") >> []

        when:
        service.create(new AgeGroup(null, "Jahrgang 2017", 2026, "Kinder", 2017, 2017, Gender.BOTH))

        then:
        1 * repository.save(_) >> { AgeGroup ag -> ag }
    }

    def "deleteVariant refuses the standard variant"() {
        when:
        service.deleteVariant(2026, "")

        then:
        0 * repository.deleteBySeasonYearAndVariant(_, _)
        thrown(IllegalArgumentException)
    }

    def "findForScoring scores a Gaudi-Modus against its first race's season and variant"() {
        given:
        def races = [
                race(1L, "Lauf 1", LocalDate.of(2025, 12, 14), KIDS),
                race(2L, "Lauf 2", LocalDate.of(2026, 1, 11), ""),
        ]

        when:
        service.findForScoring(races)

        then:
        1 * repository.findBySeasonYearAndVariant(2025, KIDS) >> []
    }

    def "findForScoring without races looks at the current season's standard variant"() {
        when:
        service.findForScoring([])

        then:
        1 * repository.findBySeasonYearAndVariant(seasonService.currentSeason(), "") >> []
    }
}
