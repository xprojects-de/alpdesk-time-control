package x.timecontrol.dto

import io.micronaut.serde.ObjectMapper
import spock.lang.Shared
import spock.lang.Specification
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection

import java.time.LocalDate

/**
 * The standard variant is the empty string, and Micronaut Serde leaves empty values out of the JSON
 * by default. Without an explicit inclusion the client would get no variant at all instead of "",
 * and could not tell the standard variant from a missing field.
 */
class AgeGroupVariantSerializationSpec extends Specification {

    @Shared
    ObjectMapper objectMapper = ObjectMapper.getDefault()

    def "an age group of the standard variant carries an empty variant"() {
        when:
        String json = objectMapper.writeValueAsString(
                AgeGroupResponse.from(new AgeGroup(1L, "U14", 2026, 2013, 2014, Gender.BOTH)))

        then:
        json.contains('"variant":""')
    }

    def "a race of the standard variant carries an empty ageGroupVariant"() {
        given:
        def race = new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null, "token", "")

        when:
        String json = objectMapper.writeValueAsString(RaceResponse.from(race, 2026))

        then:
        json.contains('"ageGroupVariant":""')
    }

    def "an unused standard variant carries its empty name and an empty race list"() {
        when:
        String json = objectMapper.writeValueAsString(new AgeGroupVariantResponse("", []))

        then:
        json.contains('"variant":""')
        json.contains('"raceNames":[]')
    }
}
