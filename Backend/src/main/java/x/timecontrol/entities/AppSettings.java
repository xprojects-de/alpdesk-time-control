package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity(value = "app_settings")
public record AppSettings(

        @Id
        Long id,

        TimingProviderType timingProviderType,

        // JSON-encoded Map<String, String> of provider-specific overrides (e.g. device URLs, COM
        // port, baud rate). Kept as a flat string rather than per-provider columns so adding a new
        // provider's config never needs a schema migration.
        @Nullable String timingProviderConfig
) {
}
