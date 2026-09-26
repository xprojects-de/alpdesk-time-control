package x.timecontrol.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.services.AgeGroupService;

import java.util.List;

@Serdeable
@Schema(description = "One age-group variant of a season and the races categorised with it")
public record AgeGroupVariantResponse(
        // ALWAYS on both: the standard variant is "" and an unused one has no races, and Serde would
        // otherwise leave either out as empty.
        @JsonInclude(JsonInclude.Include.ALWAYS)
        @Schema(description = "Name of the variant; empty for the season's standard variant", example = "Kinderrennen jahrgangsweise")
        String variant,

        @JsonInclude(JsonInclude.Include.ALWAYS)
        @Schema(description = "Names of the races of this season that use the variant", example = "[\"Kinderrennen\"]")
        List<String> raceNames
) {
    public static AgeGroupVariantResponse from(AgeGroupService.VariantUsage usage) {
        return new AgeGroupVariantResponse(usage.variant(), usage.raceNames());
    }
}
