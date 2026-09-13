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
        DisqualificationStatus status
) {
    /**
     * Legacy 10-arg constructor, kept so the many call sites that build a brand-new participant
     * (import, copy, race-number assignment) don't all need touching: defaults status to NONE -
     * the same default the DB column has - rather than leaving it null. Call sites that must
     * preserve or explicitly set an existing status (see e.g. ParticipantService#update) use the
     * canonical 11-arg constructor instead.
     */
    public Participant(Long id, Long raceId, Long personId, @Nullable Integer raceNumber, @Nullable Long teamId,
                        @Nullable Long categoryId, @Nullable Integer durationMs, @Nullable Integer penalty,
                        @Nullable LocalDateTime measuredAt, @Nullable String comment) {
        this(id, raceId, personId, raceNumber, teamId, categoryId, durationMs, penalty, measuredAt, comment, DisqualificationStatus.NONE);
    }
}
