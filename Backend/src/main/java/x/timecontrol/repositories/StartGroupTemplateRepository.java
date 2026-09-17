package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.StartGroupTemplate;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface StartGroupTemplateRepository extends CrudRepository<StartGroupTemplate, Long> {
    List<StartGroupTemplate> findAllOrderByPositionAsc();
    List<StartGroupTemplate> findByIdIn(Iterable<Long> ids);
}
