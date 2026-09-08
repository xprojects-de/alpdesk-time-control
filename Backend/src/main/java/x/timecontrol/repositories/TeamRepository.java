package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.Team;

import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface TeamRepository extends CrudRepository<Team, Long> {
    Optional<Team> findByName(String name);

    Optional<Team> findByNameIgnoreCase(String name);
}
