package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One person referenced by a multi-race Gaudi-Modus (Zeit-Kombination / Punkte-Mischwertung) " +
        "who is missing a valid result in at least one of the combined races and was therefore excluded " +
        "from the ranking, listed separately as \"nicht gewertet\" (DNS)")
public record GaudiDnsEntryResponse(
        @Schema(description = "Last name", example = "Meier")
        String lastName,

        @Schema(description = "First name", example = "Paul")
        String firstName,

        @Nullable
        @Schema(description = "Team name, if resolvable from any of the combined races", example = "SV Musterhausen", nullable = true)
        String team,

        @Schema(description = "Age group, calculated from the person's birth date", example = "U16")
        String ageGroup,

        @Nullable
        @Schema(description = "External ID of the person, if set", example = "12345", nullable = true)
        String externalId
) {
}
