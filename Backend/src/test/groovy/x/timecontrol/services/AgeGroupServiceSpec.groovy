package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Gender
import x.timecontrol.repositories.AgeGroupRepository

class AgeGroupServiceSpec extends Specification {

    AgeGroupRepository repository = Mock()
    AgeGroupService service = new AgeGroupService(repository)

    def "findOrCreateForImport creates a new single-year age group when nothing existing covers this year/gender"() {
        given:
        repository.findBySeasonYear(2026) >> []

        when:
        def result = service.findOrCreateForImport("U14m", 2012, Gender.MALE, 2026)

        then:
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2012 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(1L, ag.name(), 2026, ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "findOrCreateForImport reuses an already-covering same-named group unchanged"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2026, 2012, 2013, Gender.MALE)
        repository.findBySeasonYear(2026) >> [existing]

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026)

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        result == existing
    }

    def "findOrCreateForImport widens a same-named group's range when nothing else covers the year"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2026, 2012, 2012, Gender.MALE)
        repository.findBySeasonYear(2026) >> [existing]

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026)

        then:
        1 * repository.update({ AgeGroup ag -> ag.id() == 5L && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2013 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> ag }
        result.birthYearTo() == 2013
    }

    def "findOrCreateForImport reuses a differently-named existing group that already covers this year for this gender, instead of creating a duplicate by name"() {
        given: "a manually-configured 'U14' age group (2013-2014, MALE) that already covers this row's 2013 birth year"
        def existingU14 = new AgeGroup(1L, "U14", 2026, 2013, 2014, Gender.MALE)
        repository.findBySeasonYear(2026) >> [existingU14]

        when: "importing a row whose Klasse column says 'U14m' - a different name, but the same year/gender is already covered"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026)

        then: "the existing 'U14' group is reused as-is - no new 'U14M' group is created"
        0 * repository.save(_)
        0 * repository.update(_)
        result == existingU14
    }

    def "findOrCreateForImport treats a BOTH-gender existing group as covering either gender"() {
        given: "a 'U16' age group covering both genders"
        def existingU16 = new AgeGroup(2L, "U16", 2026, 2011, 2012, Gender.BOTH)
        repository.findBySeasonYear(2026) >> [existingU16]

        when:
        def maleResult = service.findOrCreateForImport("U16m", 2011, Gender.MALE, 2026)
        def femaleResult = service.findOrCreateForImport("U16w", 2012, Gender.FEMALE, 2026)

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        maleResult == existingU16
        femaleResult == existingU16
    }

    def "findOrCreateForImport does not match a differently-gendered group for the same year, and falls back to name-based creation"() {
        given: "an existing 'U14' group, but only for FEMALE"
        def existingFemaleOnly = new AgeGroup(3L, "U14W", 2026, 2013, 2013, Gender.FEMALE)
        repository.findBySeasonYear(2026) >> [existingFemaleOnly]

        when: "importing a MALE row for the same year"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE, 2026)

        then: "the FEMALE-only group doesn't cover it, and no group named 'U14M' exists yet, so a new one is created"
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(4L, ag.name(), 2026, ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "calculateAgeGroupName picks the group matching both the birth year AND the gender, not just the year"() {
        given: "two gender-specific groups with the identical year range, as real DSV exports commonly have"
        def ageGroups = [
                new AgeGroup(1L, "U14m", 2026, 2012, 2013, Gender.MALE),
                new AgeGroup(2L, "U14w", 2026, 2012, 2013, Gender.FEMALE),
        ]

        expect: "each gender resolves to its own group, not the first one in the list"
        service.calculateAgeGroupName(java.time.LocalDate.of(2012, 1, 1), Gender.MALE, ageGroups) == "U14m"
        service.calculateAgeGroupName(java.time.LocalDate.of(2012, 1, 1), Gender.FEMALE, ageGroups) == "U14w"
    }

    def "calculateAgeGroupName matches a BOTH-gender group for either gender"() {
        given:
        def ageGroups = [new AgeGroup(1L, "Offene Klasse", 2026, 1980, 2020, Gender.BOTH)]

        expect:
        service.calculateAgeGroupName(java.time.LocalDate.of(1990, 1, 1), Gender.MALE, ageGroups) == "Offene Klasse"
        service.calculateAgeGroupName(java.time.LocalDate.of(1990, 1, 1), Gender.FEMALE, ageGroups) == "Offene Klasse"
    }

    def "findOrCreateForImport never reaches into another season's configuration"() {
        given: "season 2025's U14 covers 2012-2013 - and this import goes into a 2026 race"
        def lastSeasonU14 = new AgeGroup(5L, "U14M", 2025, 2012, 2013, Gender.MALE)
        repository.findBySeasonYear(2025) >> [lastSeasonU14]
        repository.findBySeasonYear(2026) >> []

        when: "a row whose birth year 2012 the *previous* season's U14 would happily cover"
        service.findOrCreateForImport("U14m", 2012, Gender.MALE, 2026)

        then: "a fresh 2026 group is created instead of reusing or widening last season's"
        0 * repository.update(_)
        1 * repository.save({ AgeGroup ag -> ag.seasonYear() == 2026 && ag.name() == "U14M" }) >>
                { AgeGroup ag -> new AgeGroup(9L, ag.name(), ag.seasonYear(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
    }

    def "findOrCreateForImport does not widen a past season's group and thereby re-categorise its finished races"() {
        given: "the dangerous case: same class name, a birth year outside last season's range"
        def lastSeasonU14 = new AgeGroup(5L, "U14M", 2025, 2012, 2013, Gender.MALE)
        repository.findBySeasonYear(2025) >> [lastSeasonU14]
        repository.findBySeasonYear(2026) >> []

        when: "2015 lies outside 2012-2013, so the name-based branch would widen it if it saw it"
        service.findOrCreateForImport("U14m", 2015, Gender.MALE, 2026)

        then: "season 2025 is left exactly as it was - its races keep the classes they were run under"
        0 * repository.update(_)
        1 * repository.save({ AgeGroup ag -> ag.seasonYear() == 2026 && ag.birthYearFrom() == 2015 && ag.birthYearTo() == 2015 }) >>
                { AgeGroup ag -> new AgeGroup(9L, ag.name(), ag.seasonYear(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
    }

    def "copySeason shifts every group's birth years by the difference between the seasons"() {
        given: "a fully configured 2025 season"
        repository.findBySeasonYear(2025) >> [
                new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH),
                new AgeGroup(2L, "U16", 2025, 2010, 2011, Gender.BOTH),
        ]
        repository.findBySeasonYear(2026) >> []

        when:
        service.copySeason(2025, 2026)

        then: "U14 rolls on by a year, and the copies belong to the new season"
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies.size() == 2 &&
                    copies.every { it.id() == null && it.seasonYear() == 2026 } &&
                    copies[0].name() == "U14" && copies[0].birthYearFrom() == 2013 && copies[0].birthYearTo() == 2014 &&
                    copies[1].name() == "U16" && copies[1].birthYearFrom() == 2011 && copies[1].birthYearTo() == 2012
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copySeason skipping a year shifts by that many years"() {
        given:
        repository.findBySeasonYear(2024) >> [new AgeGroup(1L, "U14", 2024, 2011, 2012, Gender.BOTH)]
        repository.findBySeasonYear(2026) >> []

        when:
        service.copySeason(2024, 2026)

        then:
        1 * repository.saveAll({ List<AgeGroup> copies ->
            copies[0].birthYearFrom() == 2013 && copies[0].birthYearTo() == 2014
        }) >> { List<AgeGroup> copies -> copies }
    }

    def "copySeason refuses to write into a season that already has age groups"() {
        given: "merging would have to guess which of two conflicting ranges wins"
        repository.findBySeasonYear(2025) >> [new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH)]
        repository.findBySeasonYear(2026) >> [new AgeGroup(2L, "U14", 2026, 2013, 2014, Gender.BOTH)]

        when:
        service.copySeason(2025, 2026)

        then:
        0 * repository.saveAll(_)
        thrown(IllegalStateException)
    }

    def "copySeason refuses an empty source season"() {
        given:
        repository.findBySeasonYear(2025) >> []

        when:
        service.copySeason(2025, 2026)

        then:
        0 * repository.saveAll(_)
        thrown(IllegalStateException)
    }

    def "create rejects a name already used in the same season, but allows it in another"() {
        given:
        repository.findByNameIgnoreCaseAndSeasonYear("U14", 2026) >> Optional.of(new AgeGroup(1L, "U14", 2026, 2013, 2014, Gender.BOTH))
        repository.findByNameIgnoreCaseAndSeasonYear("U14", 2027) >> Optional.empty()
        repository.findBySeasonYear(2027) >> []

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
        repository.findBySeasonYear(2025) >> [new AgeGroup(1L, "U14", 2025, 2012, 2013, Gender.BOTH)]
        repository.findBySeasonYear(2026) >> []
        repository.findByNameIgnoreCaseAndSeasonYear(_, _) >> Optional.empty()

        when:
        service.create(new AgeGroup(null, "U14", 2026, 2013, 2014, Gender.BOTH))

        then:
        notThrown(IllegalStateException)
        1 * repository.save(_) >> { AgeGroup ag -> ag }
    }
}
