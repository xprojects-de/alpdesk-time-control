package x.timecontrol.repositories;

import x.timecontrol.entities.Participant;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface ParticipantRepository
        extends CrudRepository<Participant, Long> {
    Iterable<Participant> findByRaceId(Long raceId);
    void deleteByRaceId(Long raceId);
}