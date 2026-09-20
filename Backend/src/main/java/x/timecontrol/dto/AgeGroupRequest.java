package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Gender;

@Serdeable
@Schema(description = "Request object for creating or updating an age group")
public record AgeGroupRequest(
        @Schema(description = "Name of the age group", example = "Herren allgemein", requiredMode = Schema.RequiredMode.REQUIRED)
        String name,

        @Schema(description = "Season this configuration is valid for - age classes roll over every year, so the same name exists once per season with different birth years", example = "2026", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer seasonYear,

        @Schema(description = "Starting birth year for range (e.g., 1985 or 1800 for very old)", example = "1985", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer birthYearFrom,

        @Schema(description = "Ending birth year for range (e.g., 2000)", example = "2000", requiredMode = Schema.RequiredMode.REQUIRED)
        Integer birthYearTo,

        @Schema(description = "Gender category for the age group", example = "MALE", requiredMode = Schema.RequiredMode.REQUIRED)
        Gender gender
) {
}

