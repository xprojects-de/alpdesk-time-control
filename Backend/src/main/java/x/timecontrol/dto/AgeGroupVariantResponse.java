package x.timecontrol.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "One age-group variant of a season and the races categorised with it")
public record AgeGroupVariantResponse(
        // ALWAYS on both: the standard variant is "" and an unused one has no races, and Serde would
        // otherwise leave either out as empty.
        @JsonInclude(JsonInclude.Include.ALWAYS)
        @Schema(description = "Name of the variant; empty for the season's standard variant", example = "Kinderrennen jahrgangsweise")
        String variant,

        @Schema(description = "Number of age groups the variant has in this season. 0 means only races still refer to it - they come out \"ohne Altersklasse\" until it is refilled.", example = "4")
        int ageGroupCount,

        @JsonInclude(JsonInclude.Include.ALWAYS)
        @Schema(description = "Names of the races of this season that use the variant", example = "[\"Kinderrennen\"]")
        List<String> raceNames
) {
}
