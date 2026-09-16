package x.timecontrol.entities;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.time.LocalDateTime;

@MappedEntity
public record Participant(

        @Id
        @GeneratedValue
        Long id,

        Long raceId,

        Long personId,

        @Nullable
        Integer raceNumber,
        @Nullable
        Long teamId,
        @Nullable
        Long categoryId,
        @Nullable
        Integer durationMs,
        @Nullable
        Integer penalty,
        @Nullable
        LocalDateTime measuredAt,
        @Nullable
        String comment,
        @Nullable
        DisqualificationStatus status,

        /**
         * Position in this race's actual start order, when it differs from raceNumber (e.g. a
         * slalom run 2 whose start order was derived from run 1's results, so bib 30 might start
         * before bib 5). raceNumber is the athlete's fixed bib and is never changed by that
         * derivation - see {@code ParticipantService#applyStartOrderFromPreviousRace} and
         * {@code AutoAssignService}. Null means "this participant starts in raceNumber order",
         * which is every participant of every race that never had a start order derived for it.
         */
        @Nullable
        Integer startSequence
) {
    /**
     * Legacy 11-arg constructor predating startSequence, kept so the many call sites that build a
     * participant without caring about a derived start order don't all need touching: defaults
     * startSequence to null (falls back to raceNumber - see the field's own doc above).
     */
    public Participant(Long id, Long raceId, Long personId, @Nullable Integer raceNumber, @Nullable Long teamId,
                        @Nullable Long categoryId, @Nullable Integer durationMs, @Nullable Integer penalty,
                        @Nullable LocalDateTime measuredAt, @Nullable String comment, @Nullable DisqualificationStatus status) {
        this(id, raceId, personId, raceNumber, teamId, categoryId, durationMs, penalty, measuredAt, comment, status, null);
    }

    /**
     * Legacy 10-arg constructor, kept so the many call sites that build a brand-new participant
     * (import, copy, race-number assignment) don't all need touching: defaults status to NONE -
     * the same default the DB column has - rather than leaving it null. Call sites that must
     * preserve or explicitly set an existing status (see e.g. ParticipantService#update) use the
     * canonical constructor instead.
     */
    public Participant(Long id, Long raceId, Long personId, @Nullable Integer raceNumber, @Nullable Long teamId,
                        @Nullable Long categoryId, @Nullable Integer durationMs, @Nullable Integer penalty,
                        @Nullable LocalDateTime measuredAt, @Nullable String comment) {
        this(id, raceId, personId, raceNumber, teamId, categoryId, durationMs, penalty, measuredAt, comment, DisqualificationStatus.NONE, null);
    }

    /**
     * Position in this race's actual start order: null (not starting at all) if marked
     * DSQ/DNF/DNS - checked first and unconditionally, so simply setting that status is always
     * enough to pull a participant out of the start order and the auto-assign queue, even one
     * that already has a startSequence from an earlier derivation. Otherwise {@code startSequence}
     * when set, else {@code raceNumber}. Shared by {@code AutoAssignService} (which order to
     * auto-assign measurements in) and {@code PdfExportService} (how the printed start list is
     * ordered), so the two can't silently diverge.
     */
    @Nullable
    public Integer effectiveStartOrder() {
        if (status != null && status != DisqualificationStatus.NONE) {
            return null;
        }
        if (startSequence != null) {
            return startSequence;
        }
        return raceNumber;
    }
}
