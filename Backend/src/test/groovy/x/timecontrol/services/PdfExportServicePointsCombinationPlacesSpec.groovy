package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.GaudiRankingEntryResponse
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Person

import java.time.LocalDate

/**
 * filterAndRePlacePointsCombinationEntries() is the private method behind the Punkte-Mischwertung
 * "Alle Damen"/"Alle Herren"/"Nach Altersklassen" PDF exports. Invoked via reflection since it needs
 * no PDFBox document - only a RankingService (real, stateless), an AgeGroupService stub for the
 * year-range check, and fabricated entries/persons.
 */
class PdfExportServicePointsCombinationPlacesSpec extends Specification {

    /**
     * Only isYearInAgeGroup() is exercised by calculateAgeGroup(); a hand-written fake avoids
     * building a real AgeGroupRepository just to construct AgeGroupService.
     */
    private static class FakeAgeGroupService extends AgeGroupService {
        FakeAgeGroupService() { super(null) }

        @Override
        boolean isYearInAgeGroup(AgeGroup ageGroup, int birthYear) {
            return birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo()
        }
    }

    private final PdfExportService service =
            new PdfExportService(new FakeAgeGroupService(), null, null, null, new RankingService())

    private List<GaudiRankingEntryResponse> filterAndRePlace(
            List<GaudiRankingEntryResponse> entries, Gender gender, String ageGroup,
            List<AgeGroup> ageGroups, Map<Long, Person> personsById) {
        def method = PdfExportService.class.getDeclaredMethod(
                "filterAndRePlacePointsCombinationEntries", List, Gender, String, List, Map)
        method.setAccessible(true)
        return method.invoke(service, entries, gender, ageGroup, ageGroups, personsById) as List<GaudiRankingEntryResponse>
    }

    private static GaudiRankingEntryResponse entry(int globalPlace, String label, int totalPoints, Long personId) {
        new GaudiRankingEntryResponse(globalPlace, label, null, null, null, null, null, totalPoints, null, null, null, personId)
    }

    private static Person person(Long id, Gender gender) {
        new Person(id, "Vorname", "Nachname", LocalDate.of(1990, 1, 1), gender, null)
    }

    def "gender filter restarts places at 1 within the filtered subset instead of keeping the global place"() {
        given: "a global ranking mixing genders: M(100)=1, F(90)=2, M(80)=3, F(70)=4"
        def entries = [
                entry(1, "Mann1", 100, 1L),
                entry(2, "Frau1", 90, 2L),
                entry(3, "Mann2", 80, 3L),
                entry(4, "Frau2", 70, 4L),
        ]
        def persons = [
                1L: person(1L, Gender.MALE),
                2L: person(2L, Gender.FEMALE),
                3L: person(3L, Gender.MALE),
                4L: person(4L, Gender.FEMALE),
        ]

        when: "filtering to only women"
        def women = filterAndRePlace(entries, Gender.FEMALE, null, [], persons)

        then: "places restart at 1 within the women-only subset, not the global 2/4"
        women.size() == 2
        women*.label() == ["Frau1", "Frau2"]
        women*.place() == [1, 2]

        when: "filtering to only men"
        def men = filterAndRePlace(entries, Gender.MALE, null, [], persons)

        then:
        men.size() == 2
        men*.label() == ["Mann1", "Mann2"]
        men*.place() == [1, 2]
    }

    def "age group filter restarts places at 1 within each age group"() {
        given: "two age groups (defined by birth year), unisex, mixed together globally"
        def ageGroups = [
                new AgeGroup(1L, "U16", 2008, 2010, null),
                new AgeGroup(2L, "U18", 2005, 2007, null),
        ]
        def entries = [
                entry(1, "A", 100, 1L), // U16
                entry(2, "B", 90, 2L),  // U18
                entry(3, "C", 80, 3L),  // U16
                entry(4, "D", 70, 4L),  // U18
        ]
        def persons = [
                1L: new Person(1L, "V", "N", LocalDate.of(2009, 1, 1), Gender.MALE, null),
                2L: new Person(2L, "V", "N", LocalDate.of(2006, 1, 1), Gender.MALE, null),
                3L: new Person(3L, "V", "N", LocalDate.of(2008, 6, 1), Gender.MALE, null),
                4L: new Person(4L, "V", "N", LocalDate.of(2005, 6, 1), Gender.MALE, null),
        ]

        when:
        def u16 = filterAndRePlace(entries, null, "U16", ageGroups, persons)
        def u18 = filterAndRePlace(entries, null, "U18", ageGroups, persons)

        then: "each age group's own ranking restarts at place 1"
        u16*.label() == ["A", "C"]
        u16*.place() == [1, 2]
        u18*.label() == ["B", "D"]
        u18*.place() == [1, 2]
    }

    def "tied totalPoints share a place, standard competition style, within the filtered subset"() {
        given:
        def entries = [
                entry(1, "Frau1", 100, 1L),
                entry(1, "Frau2", 100, 2L),
                entry(3, "Frau3", 80, 3L),
        ]
        def persons = [
                1L: person(1L, Gender.FEMALE),
                2L: person(2L, Gender.FEMALE),
                3L: person(3L, Gender.FEMALE),
        ]

        when:
        def women = filterAndRePlace(entries, Gender.FEMALE, null, [], persons)

        then:
        women*.place() == [1, 1, 3]
    }
}
