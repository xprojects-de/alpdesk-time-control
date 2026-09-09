package x.timecontrol.repositories;

import x.timecontrol.entities.RaceMeasurement;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import io.micronaut.data.annotation.Query;

import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface RaceMeasurementRepository extends CrudRepository<RaceMeasurement, Long> {

    List<RaceMeasurement> findByRaceId(Long raceId);

    Optional<RaceMeasurement> findByRaceIdAndParticipantId(Long raceId, Long participantId);

    // Upserts on the unique (race_id, device_measurement_id) index so that copying/archiving the
    // same race again is safe: it neither duplicates already-copied rows nor discards a re-measured
    // value, it overwrites the existing row with the current measurement data instead.
    // The "WHERE true" is required: SQLite's grammar otherwise parses the ON in "ON CONFLICT" as a
    // join condition on the FROM clause rather than the start of the upsert clause (a documented
    // SQLite ambiguity - see the "Parsing Ambiguity" note in the UPSERT documentation).
    @Query(value = "INSERT INTO race_measurement (race_id, device_measurement_id, participant_id, duration_ms, measured_at) " +
            "SELECT :raceId, id, participant_id, duration_ms, measured_at FROM measurement WHERE true " +
            "ON CONFLICT (race_id, device_measurement_id) DO UPDATE SET " +
            "participant_id = excluded.participant_id, " +
            "duration_ms = excluded.duration_ms, " +
            "measured_at = excluded.measured_at", nativeQuery = true)
    void copyFromMeasurements(Long raceId);
}
