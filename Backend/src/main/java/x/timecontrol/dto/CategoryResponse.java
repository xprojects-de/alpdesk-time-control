package x.timecontrol.dto;

import io.micronaut.serde.annotation.Serdeable;
import io.swagger.v3.oas.annotations.media.Schema;
import x.timecontrol.entities.Category;

@Serdeable
@Schema(description = "Response object containing category information")
public record CategoryResponse(
        @Schema(description = "Unique identifier of the category", example = "1")
        Long id,

        @Schema(description = "Name of the category", example = "E-Bike")
        String name
) {
    public static CategoryResponse from(Category category) {
        return new CategoryResponse(category.id(), category.name());
    }
}
