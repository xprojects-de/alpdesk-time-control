package x.timecontrol.repositories;

import io.micronaut.core.annotation.Nullable;
import x.timecontrol.entities.Measurement;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import io.micronaut.data.annotation.Query;

import java.time.LocalDateTime;
import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface MeasurementRepository extends CrudRepository<Measurement, Long> {

    List<Measurement> findByParticipantId(Long participantId);

    @Query(value = "INSERT OR REPLACE INTO measurement (id, participant_id, duration_ms, measured_at) VALUES (:id, :participantId, :durationMs, :measuredAt)", nativeQuery = true)
    void insertOrReplaceWithId(Long id, @Nullable Long participantId, Integer durationMs, LocalDateTime measuredAt);

    @Query(value = "DELETE FROM measurement", nativeQuery = true)
    void deleteAll();

    @Query(value = "DELETE FROM sqlite_sequence WHERE name='measurement'", nativeQuery = true)
    void resetSequence();
}

