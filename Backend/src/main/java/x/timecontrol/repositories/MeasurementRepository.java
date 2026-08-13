package x.timecontrol.repositories;

import x.timecontrol.entities.Measurement;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface MeasurementRepository extends CrudRepository<Measurement, Long> {
    
    List<Measurement> findByParticipantId(Long participantId);
}

