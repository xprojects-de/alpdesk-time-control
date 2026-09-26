package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One person of a Los-Modus \"nicht gewertet\" entry - a member of an excluded pair, or a participant " +
        "who was not drawn - so the PDF can print the list one line per person, like the ranking above it")
public record GaudiDnsMemberResponse(
        @Schema(description = "Person's display name", example = "Doe John")
        String label,

        @Nullable
        @Schema(description = "Printed value that counts in the field average; null without a valid result", example = "45120", nullable = true)
        Integer valueMs,

        @Nullable
        @Schema(description = "Person's team", example = "SC Musterhausen", nullable = true)
        String team,

        @Nullable
        @Schema(description = "Race number in this race", example = "17", nullable = true)
        Integer raceNumber,

        @Nullable
        @Schema(description = "Birth year", example = "2012", nullable = true)
        Integer birthYear,

        @Nullable
        @Schema(description = "Category in this race", example = "Snowboard", nullable = true)
        String category,

        @Nullable
        @Schema(description = "Why this person is not ranked: DSQ/DNF/DNS, or \"nicht ausgelost\" for a participant with a result " +
                "in no pair; null for the member of an excluded pair who did finish", example = "DNF", nullable = true)
        String status
) {
}
