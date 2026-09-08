package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.GaudiMode;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface GaudiModeRepository extends CrudRepository<GaudiMode, Long> {
    List<GaudiMode> findByIdIn(Iterable<Long> ids);
}
