package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.GaudiLosPairing;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface GaudiLosPairingRepository extends CrudRepository<GaudiLosPairing, Long> {
    Iterable<GaudiLosPairing> findByGaudiModeId(Long gaudiModeId);
    void deleteByGaudiModeId(Long gaudiModeId);
}
