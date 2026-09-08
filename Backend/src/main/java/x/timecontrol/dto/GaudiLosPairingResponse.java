package x.timecontrol.dto;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

@Serdeable
@Schema(description = "One drawn pair of a Los-Modus")
public record GaudiLosPairingResponse(
        @Schema(description = "Unique identifier of the pairing", example = "1")
        Long id,

        @Schema(description = "ID of the first participant", example = "12")
        Long participant1Id,

        @Schema(description = "Name of the first participant", example = "Doe John")
        String participant1Name,

        @Nullable
        @Schema(description = "ID of the second participant, null if this participant has no partner (odd number of participants)", nullable = true)
        Long participant2Id,

        @Nullable
        @Schema(description = "Name of the second participant, null if this participant has no partner", nullable = true)
        String participant2Name
) {
}
