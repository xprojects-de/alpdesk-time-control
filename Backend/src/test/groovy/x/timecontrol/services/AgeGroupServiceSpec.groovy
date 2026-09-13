package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Gender
import x.timecontrol.repositories.AgeGroupRepository

class AgeGroupServiceSpec extends Specification {

    AgeGroupRepository repository = Mock()
    AgeGroupService service = new AgeGroupService(repository)

    def "findOrCreateForImport creates a new single-year age group when no name matches"() {
        given:
        repository.findByNameIgnoreCase("U14M") >> Optional.empty()

        when:
        def result = service.findOrCreateForImport("U14m", 2012, Gender.MALE)

        then:
        1 * repository.save({ AgeGroup ag -> ag.name() == "U14M" && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2012 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> new AgeGroup(1L, ag.name(), ag.birthYearFrom(), ag.birthYearTo(), ag.gender()) }
        result.name() == "U14M"
    }

    def "findOrCreateForImport reuses an existing group unchanged when the birth year is already in range"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2012, 2013, Gender.MALE)
        repository.findByNameIgnoreCase("U14M") >> Optional.of(existing)

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then:
        0 * repository.save(_)
        0 * repository.update(_)
        result == existing
    }

    def "findOrCreateForImport widens the range when the birth year falls outside it, keeping the existing gender"() {
        given:
        def existing = new AgeGroup(5L, "U14M", 2012, 2012, Gender.MALE)
        repository.findByNameIgnoreCase("U14M") >> Optional.of(existing)

        when:
        def result = service.findOrCreateForImport("U14m", 2013, Gender.MALE)

        then:
        1 * repository.update({ AgeGroup ag -> ag.id() == 5L && ag.birthYearFrom() == 2012 && ag.birthYearTo() == 2013 && ag.gender() == Gender.MALE }) >>
                { AgeGroup ag -> ag }
        result.birthYearTo() == 2013
    }
}
