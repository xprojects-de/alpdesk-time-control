package x.timecontrol.repositories;

import io.micronaut.data.annotation.Query;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.AgeGroup;

import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface AgeGroupRepository extends CrudRepository<AgeGroup, Long> {

    /**
     * Every age group configured for one season - the lookup practically all resolution goes
     * through, since which classes apply depends on the season of the race being looked at (see
     * {@link x.timecontrol.services.SeasonService}). {@link #findAll()} remains only for the
     * configuration UI, which lists seasons side by side.
     */
    List<AgeGroup> findBySeasonYear(Integer seasonYear);

    Optional<AgeGroup> findByNameIgnoreCaseAndSeasonYear(String name, Integer seasonYear);

    /**
     * The distinct seasons that have any age group configured, newest first - what the
     * configuration UI offers as its season selector, and what
     * {@link x.timecontrol.services.AgeGroupService#copySeason} offers as source seasons.
     */
    @Query("SELECT DISTINCT season_year FROM age_group ORDER BY season_year DESC")
    List<Integer> findDistinctSeasonYears();
}
