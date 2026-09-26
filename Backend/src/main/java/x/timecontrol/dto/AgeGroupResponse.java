package x.timecontrol.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.Gender;

@Serdeable
@Schema(description = "Response object containing age group information")
public record AgeGroupResponse(
        @Schema(description = "Unique identifier of the age group", example = "1")
        Long id,

        @Schema(description = "Name of the age group", example = "Herren allgemein")
        String name,

        @Schema(description = "Season this configuration is valid for", example = "2026")
        Integer seasonYear,

        // ALWAYS: the standard variant is "", which Serde would otherwise leave out as empty.
        @JsonInclude(JsonInclude.Include.ALWAYS)
        @Schema(description = "Variant of the season this age group belongs to; empty for the season's standard variant", example = "")
        String variant,

        @Schema(description = "Starting birth year for range", example = "1985")
        Integer birthYearFrom,

        @Schema(description = "Ending birth year for range", example = "2000")
        Integer birthYearTo,

        @Schema(description = "Gender category for the age group", example = "MALE")
        Gender gender
) {
    public static AgeGroupResponse from(AgeGroup ageGroup) {
        return new AgeGroupResponse(
                ageGroup.id(),
                ageGroup.name(),
                ageGroup.seasonYear(),
                ageGroup.variant(),
                ageGroup.birthYearFrom(),
                ageGroup.birthYearTo(),
                ageGroup.gender()
        );
    }
}

