package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.AgeGroup;

import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface AgeGroupRepository extends CrudRepository<AgeGroup, Long> {
    Optional<AgeGroup> findByName(String name);
}

