package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.AppSettings;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface AppSettingsRepository extends CrudRepository<AppSettings, Long> {
}
