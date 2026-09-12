package x.timecontrol.repositories;

import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.GaudiModeRace;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface GaudiModeRaceRepository extends CrudRepository<GaudiModeRace, Long> {

    List<GaudiModeRace> findByGaudiModeIdOrderBySortOrder(Long gaudiModeId);

    List<GaudiModeRace> findByRaceId(Long raceId);

    void deleteByGaudiModeId(Long gaudiModeId);
}
