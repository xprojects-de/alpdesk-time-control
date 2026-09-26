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

    int deleteByRaceId(Long raceId);

    // Upserts on the unique (race_id, device_measurement_id) index so that copying/archiving the
    // same race again is safe: it neither duplicates already-copied rows nor discards a re-measured
    // value, it overwrites the existing row with the current measurement data instead. Copying
    // measurement.device_measurement_id (real or app-generated - see MeasurementService#create and
    // its NOT NULL constraint in V1__create_participant.sql) rather than measurement.id means the
    // value archived here is both a stable idempotency key AND the actual value shown to race
    // officials as "Geräte-ID" - unlike the raw row's own internal id, which is meaningless to them.
    // The LEFT JOIN (rather than copying measurement.participant_id directly) guards against a raw
    // measurement whose participantId belongs to a *different* race than :raceId - e.g. live
    // auto-assign was switched to another race mid-stream, or a measurement was manually assigned to
    // the wrong participant before archiving. p.id only matches when that participant actually
    // belongs to :raceId, so a cross-race participantId is copied over as NULL instead of silently
    // attaching the wrong race's finisher to this race's result.
    // participant_id is only ever filled in from the raw measurement while it is still unset
    // (COALESCE keeps the existing value on conflict): once a row has a participant_id - whether set
    // here on first copy or corrected manually via PUT /race-measurements/{id} - re-archiving the same
    // race (e.g. a non-clearing preview archive followed by a later real one) must not silently revert
    // that assignment back to whatever the raw measurement still points to.
    // The "WHERE true" is required: SQLite's grammar otherwise parses the ON in "ON CONFLICT" as a
    // join condition on the FROM clause rather than the start of the upsert clause (a documented
    // SQLite ambiguity - see the "Parsing Ambiguity" note in the UPSERT documentation). Verified this
    // still holds with the added LEFT JOIN's own ON clause present.
    @Query(value = "INSERT INTO race_measurement (race_id, device_measurement_id, participant_id, duration_ms, measured_at) " +
            "SELECT :raceId, m.device_measurement_id, p.id, m.duration_ms, m.measured_at " +
            "FROM measurement m " +
            "LEFT JOIN participant p ON p.id = m.participant_id AND p.race_id = :raceId " +
            "WHERE true " +
            "ON CONFLICT (race_id, device_measurement_id) DO UPDATE SET " +
            "participant_id = COALESCE(participant_id, excluded.participant_id), " +
            "duration_ms = excluded.duration_ms, " +
            "measured_at = excluded.measured_at", nativeQuery = true)
    void copyFromMeasurements(Long raceId);
}
