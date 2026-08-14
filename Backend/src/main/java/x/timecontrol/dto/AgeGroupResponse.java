package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.AgeGroup;

@Serdeable
@Schema(description = "Response object containing age group information")
public record AgeGroupResponse(
        @Schema(description = "Unique identifier of the age group", example = "1")
        Long id,

        @Schema(description = "Name of the age group", example = "Herren allgemein")
        String name,

        @Schema(description = "Starting birth year for range", example = "1985")
        Integer birthYearFrom,

        @Schema(description = "Ending birth year for range", example = "2000")
        Integer birthYearTo
) {
    public static AgeGroupResponse from(AgeGroup ageGroup) {
        return new AgeGroupResponse(
                ageGroup.id(),
                ageGroup.name(),
                ageGroup.birthYearFrom(),
                ageGroup.birthYearTo()
        );
    }
}

