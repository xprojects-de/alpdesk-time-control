package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDateTime;

@MappedEntity
public record GaudiMode(

        @Id
        @GeneratedValue
        Long id,

        GaudiModeType type,
        String name,

        @Nullable
        Integer teamSize,

        @Nullable
        Long pointsScaleId,

        // POINTS_COMBINATION only: each independently keeps a person with at least one valid
        // combined-race result in the ranking despite a DNS/DNF/DSQ leg of that specific status (0
        // points and the status marked in the PDF sub-table for that leg) instead of dropping them
        // into "nicht gewertet". A person with no valid result in any combined race is still
        // excluded either way, and a leg whose status flag is off still disqualifies the whole
        // person as before - see PointsCombinationModeCalculator#isEligibleForRanking.
        boolean keepDnsInRanking,
        boolean keepDnfInRanking,
        boolean keepDsqInRanking,

        LocalDateTime createdAt,

        // Optional cover page prepended to every PDF generated for this Gaudi-Modus instance -
        // separate from any of its leg races' own cover page (see PdfExportService.renderDocument).
        @Nullable byte[] coverPagePdf
) {
}
