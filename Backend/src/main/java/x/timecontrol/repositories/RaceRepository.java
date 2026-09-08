package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.Race;

import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface RaceRepository extends CrudRepository<Race, Long> {
    Optional<Race> findByName(String name);
    Optional<Race> findByNameIgnoreCase(String name);
    List<Race> findByIdIn(Iterable<Long> ids);
}

