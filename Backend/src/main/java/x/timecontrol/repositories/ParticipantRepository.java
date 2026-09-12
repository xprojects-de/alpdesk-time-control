package x.timecontrol.repositories;

import x.timecontrol.entities.Participant;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface ParticipantRepository
        extends CrudRepository<Participant, Long> {
    Iterable<Participant> findByRaceId(Long raceId);
    void deleteByRaceId(Long raceId);
    Optional<Participant> findByRaceIdAndRaceNumber(Long raceId, Integer raceNumber);
    Optional<Participant> findByRaceIdAndPersonId(Long raceId, Long personId);
    boolean existsByPersonId(Long personId);
    long countByTeamId(Long teamId);
    long countByCategoryId(Long categoryId);
    long countByRaceId(Long raceId);
    List<Participant> findByIdIn(Iterable<Long> ids);
}