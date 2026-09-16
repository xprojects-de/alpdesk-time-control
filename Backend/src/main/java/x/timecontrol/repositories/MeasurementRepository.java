package x.timecontrol.repositories;

import io.micronaut.core.annotation.Nullable;
import x.timecontrol.entities.Measurement;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import io.micronaut.data.annotation.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface MeasurementRepository extends CrudRepository<Measurement, Long> {

    List<Measurement> findByParticipantId(Long participantId);

    Optional<Measurement> findByDeviceMeasurementId(Long deviceMeasurementId);

    // Upserts on the unique device_measurement_id index (see V1__create_participant.sql) instead
    // of writing `id` directly - re-polling the same device measurement (e.g. its duration is
    // corrected after a re-transmission) updates the existing row instead of colliding with
    // whatever unrelated row this device id's numeric value might otherwise coincide with in the
    // app's own autoincrement sequence.
    @Query(value = "INSERT INTO measurement (device_measurement_id, participant_id, duration_ms, measured_at) " +
            "VALUES (:deviceMeasurementId, :participantId, :durationMs, :measuredAt) " +
            "ON CONFLICT (device_measurement_id) DO UPDATE SET " +
            "participant_id = excluded.participant_id, duration_ms = excluded.duration_ms, measured_at = excluded.measured_at",
            nativeQuery = true)
    void upsertByDeviceMeasurementId(Long deviceMeasurementId, @Nullable Long participantId, Integer durationMs, LocalDateTime measuredAt);

    @Query(value = "DELETE FROM measurement", nativeQuery = true)
    void deleteAll();

    @Query(value = "DELETE FROM sqlite_sequence WHERE name='measurement'", nativeQuery = true)
    void resetSequence();
}

