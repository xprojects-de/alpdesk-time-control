package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.PointsScale;

import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface PointsScaleRepository extends CrudRepository<PointsScale, Long> {
    Optional<PointsScale> findByName(String name);
    Optional<PointsScale> findByNameIgnoreCase(String name);
}
