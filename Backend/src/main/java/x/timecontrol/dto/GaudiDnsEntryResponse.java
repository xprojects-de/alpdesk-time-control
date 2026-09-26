package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

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
        String externalId,

        @Schema(description = "Reason label: the explicit DSQ/DNF/DNS status of the first combined-race leg that " +
                "carries one, or the generic \"DNS\" fallback when none of their legs has an explicit status",
                example = "DNS")
        String status,

        @Nullable
        @Schema(description = "Race number - from the first combined race in which the person has one; null for a Los-Modus pair", example = "17", nullable = true)
        Integer raceNumber,

        @Nullable
        @Schema(description = "Birth year; null for a Los-Modus pair", example = "2012", nullable = true)
        Integer birthYear,

        @Nullable
        @Schema(description = "Los-Modus only: the printed value that still counts in the field average " +
                "(\"Ø-Wert Gesamt\") - of a participant who was not drawn, or of the pair member who finished " +
                "when the partner did not; null when nobody on the row has a result", example = "45120", nullable = true)
        Integer valueMs,

        @Schema(description = "Los-Modus only: the participant is in no drawn pair", example = "false")
        boolean notDrawn,

        @Nullable
        @Schema(description = "Los-Modus only: the persons of this entry one by one (both members of an excluded pair, or the " +
                "one participant who was not drawn); null for the multi-race modes", nullable = true)
        List<GaudiDnsMemberResponse> members
) {

    /** An entry of the multi-race modes, which have no field average and no draw. */
    public static GaudiDnsEntryResponse ofPerson(String lastName, String firstName, String team, String ageGroup,
                                                 String externalId, String status, Integer raceNumber, Integer birthYear) {
        return new GaudiDnsEntryResponse(lastName, firstName, team, ageGroup, externalId, status, raceNumber, birthYear,
                null, false, null);
    }
}
