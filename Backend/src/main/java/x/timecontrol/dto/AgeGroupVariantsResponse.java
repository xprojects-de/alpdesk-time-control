package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Serdeable
@Schema(description = "The age-group variants of one season, standard first")
public record AgeGroupVariantsResponse(
        @Schema(description = "The season the variants belong to - for a lookup by date, the season that date falls into", example = "2026")
        Integer seasonYear,

        @Schema(description = "The season's variants, the standard one (empty name) first")
        List<AgeGroupVariantResponse> variants
) {
}
