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
        repository.findAll() >> []

        when:
        def result = service.findOrCreateForImport("U14m", 2012, Gender.MALE)

        then:
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2012 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(1L, ag.name(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "findOrCreateForImport reuses an already-covering same-named group unchanged"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2012, 2013, Gender.MALE)
        repository.findAll() >> [existing]

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        result == existing
    }

    def "findOrCreateForImport widens a same-named group's range when nothing else covers the year"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2012, 2012, Gender.MALE)
        repository.findAll() >> [existing]

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then:
        1 * repository.update({ AgeGroup ag -> ag.id() == 5L && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2013 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> ag }
        result.birthYearTo() == 2013
    }

    def "findOrCreateForImport reuses a differently-named existing group that already covers this year for this gender, instead of creating a duplicate by name"() {
        given: "a manually-configured 'U14' age group (2013-2014, MALE) that already covers this row's 2013 birth year"
        def existingU14 = new AgeGroup(1L, "U14", 2013, 2014, Gender.MALE)
        repository.findAll() >> [existingU14]

        when: "importing a row whose Klasse column says 'U14m' - a different name, but the same year/gender is already covered"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then: "the existing 'U14' group is reused as-is - no new 'U14M' group is created"
        0 * repository.save(_)
        0 * repository.update(_)
        result == existingU14
    }

    def "findOrCreateForImport treats a BOTH-gender existing group as covering either gender"() {
        given: "a 'U16' age group covering both genders"
        def existingU16 = new AgeGroup(2L, "U16", 2011, 2012, Gender.BOTH)
        repository.findAll() >> [existingU16]

        when:
        def maleResult = service.findOrCreateForImport("U16m", 2011, Gender.MALE)
        def femaleResult = service.findOrCreateForImport("U16w", 2012, Gender.FEMALE)

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        maleResult == existingU16
        femaleResult == existingU16
    }

    def "findOrCreateForImport does not match a differently-gendered group for the same year, and falls back to name-based creation"() {
        given: "an existing 'U14' group, but only for FEMALE"
        def existingFemaleOnly = new AgeGroup(3L, "U14W", 2013, 2013, Gender.FEMALE)
        repository.findAll() >> [existingFemaleOnly]

        when: "importing a MALE row for the same year"
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then: "the FEMALE-only group doesn't cover it, and no group named 'U14M' exists yet, so a new one is created"
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(4L, ag.name(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "calculateAgeGroupName picks the group matching both the birth year AND the gender, not just the year"() {
        given: "two gender-specific groups with the identical year range, as real DSV exports commonly have"
        def ageGroups = [
                new AgeGroup(1L, "U14m", 2012, 2013, Gender.MALE),
                new AgeGroup(2L, "U14w", 2012, 2013, Gender.FEMALE),
        ]

        expect: "each gender resolves to its own group, not the first one in the list"
        service.calculateAgeGroupName(java.time.LocalDate.of(2012, 1, 1), Gender.MALE, ageGroups) == "U14m"
        service.calculateAgeGroupName(java.time.LocalDate.of(2012, 1, 1), Gender.FEMALE, ageGroups) == "U14w"
    }

    def "calculateAgeGroupName matches a BOTH-gender group for either gender"() {
        given:
        def ageGroups = [new AgeGroup(1L, "Offene Klasse", 1980, 2020, Gender.BOTH)]

        expect:
        service.calculateAgeGroupName(java.time.LocalDate.of(1990, 1, 1), Gender.MALE, ageGroups) == "Offene Klasse"
        service.calculateAgeGroupName(java.time.LocalDate.of(1990, 1, 1), Gender.FEMALE, ageGroups) == "Offene Klasse"
    }
}
