package x.timecontrol.repositories;

import x.timecontrol.entities.RaceMeasurement;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import io.micronaut.data.annotation.Query;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface RaceMeasurementRepository extends CrudRepository<RaceMeasurement, Long> {

    List<RaceMeasurement> findByRaceId(Long raceId);

    // OR IGNORE relies on the unique (race_id, device_measurement_id) index in the schema so that
    // archiving the same race twice (e.g. a double click on "Archivieren ohne Löschen") skips rows
    // already archived instead of duplicating them.
    @Query(value = "INSERT OR IGNORE INTO race_measurement (race_id, device_measurement_id, participant_id, duration_ms, measured_at) " +
            "SELECT :raceId, id, participant_id, duration_ms, measured_at FROM measurement", nativeQuery = true)
    void copyFromMeasurements(Long raceId);
}
