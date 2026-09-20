package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.dto.GaudiRankingEntryResponse
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.nio.charset.StandardCharsets
import java.time.LocalDate
import java.util.zip.ZipInputStream

class GaudiCsvExportServiceSpec extends Specification {

    PersonService personService = Mock()
    AgeGroupService ageGroupService = Spy(new AgeGroupService(null))
    RankingViewService rankingViewService = Mock()

    def service = new GaudiCsvExportService(personService, ageGroupService, rankingViewService)

    def race = new Race(10L, "Riesenslalom", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)

    def setup() {
        ageGroupService.findAll() >> [new AgeGroup(1L, "U14", 2013, 2014, Gender.BOTH)]
        personService.findByIds(_ as Set) >> [
                1L: new Person(1L, "Max", "Muster", LocalDate.of(2013, 5, 1), Gender.MALE, "EXT-1"),
                2L: new Person(2L, "Anna", "Beispiel", LocalDate.of(1980, 5, 1), Gender.FEMALE, null)
        ]
    }

    private static GaudiRankingEntryResponse entry(int place, Long personId, String team, Integer valueMs, Integer points, String externalId) {
        new GaudiRankingEntryResponse(place, "label" + personId, null, null, valueMs, null, null, points, [], team, null, personId, externalId)
    }

    private static List<String> lines(byte[] bytes) {
        new String(bytes, StandardCharsets.UTF_8).split("\n") as List
    }

    def "points combination: one row per entry in ranking order with total points as Wert"() {
        when:
        def result = lines(service.generateRanking(GaudiModeType.POINTS_COMBINATION, [
                entry(1, 1L, "SC Test", null, 180, "EXT-1"),
                entry(2, 2L, null, null, 150, null)
        ], race))

        then: "a person with no matching age group gets an empty Altersklasse instead of 'Unbekannt'"
        result == [
                "Platz;Name;Vorname;Team;Altersklasse;Externe ID;Wert",
                "1;Muster;Max;SC Test;U14;EXT-1;180",
                "2;Beispiel;Anna;;;;150"
        ]
    }

    def "time combination: Wert is the formatted total time, and the delimiter is stripped from free text"() {
        when:
        def result = lines(service.generateRanking(GaudiModeType.TIME_COMBINATION, [
                entry(1, 1L, "SC;Test", 83450, null, "EXT-1")
        ], race))

        then:
        result[1] == "1;Muster;Max;SC Test;U14;EXT-1;" + RankingViewService.formatValue(race, 83450)
    }

    def "all age groups: one CSV per non-empty age group x gender inside the ZIP"() {
        given:
        rankingViewService.uniqueAgeGroupNamesYoungestFirst() >> ["U14", AgeGroupService.UNKNOWN_AGE_GROUP]
        rankingViewService.ageGroupSectionLabel(_ as String) >> { String n -> n == AgeGroupService.UNKNOWN_AGE_GROUP ? "ohne Altersklasse" : n }
        rankingViewService.genderLabel(_ as Gender) >> { Gender g -> g == Gender.MALE ? "männlich" : "weiblich" }
        def fetcher = { Gender g, String ag ->
            if (g == Gender.MALE && ag == "U14") return [entry(1, 1L, null, null, 100, null)]
            if (g == Gender.FEMALE && ag == AgeGroupService.UNKNOWN_AGE_GROUP) return [entry(1, 2L, null, null, 90, null)]
            return []
        }

        when:
        def zip = new ZipInputStream(new ByteArrayInputStream(
                service.generateAllAgeGroupsZip(GaudiModeType.POINTS_COMBINATION, race, fetcher)), StandardCharsets.UTF_8)
        def files = [:]
        def e
        while ((e = zip.nextEntry) != null) {
            files[e.name] = lines(zip.readAllBytes())
        }

        then:
        files.keySet() as List == ["U14_maennlich.csv", "ohne_Altersklasse_weiblich.csv"]
        files["U14_maennlich.csv"][1] == "1;Muster;Max;;U14;;100"
        files["ohne_Altersklasse_weiblich.csv"][1] == "1;Beispiel;Anna;;;;90"
    }
}
