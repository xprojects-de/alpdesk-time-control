package x.timecontrol.repositories;

import io.micronaut.data.annotation.Query;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.Race;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface RaceRepository extends CrudRepository<Race, Long> {
    Optional<Race> findByName(String name);
    Optional<Race> findByNameIgnoreCase(String name);
    List<Race> findByIdIn(Iterable<Long> ids);
    // Serves the unauthenticated public live-results pages, which auto-refresh every 10s per screen
    // and never render the cover page - so the (up to several MB) cover_page_pdf BLOB is deliberately
    // not selected; the returned Race always has coverPagePdf == null. Never use it for a PDF export
    // or as the "existing" row of an update, which would drop the cover page.
    @Query(value = "SELECT id, name, date, organisation, referee, race_director, time_control, route_name, " +
            "elevation_difference, route_length, course_setter, weather, result_unit, result_unit_label, " +
            "sort_direction, NULL AS cover_page_pdf, previous_race_id, start_order_mode, " +
            "start_order_reverse_top_count, live_token, age_group_variant FROM race WHERE live_token = :liveToken",
            nativeQuery = true)
    Optional<Race> findByLiveTokenWithoutCoverPage(String liveToken);

    /**
     * Just the dates, for {@link x.timecontrol.services.SeasonService#seasonsWithRaces} - which only
     * needs to know which seasons have a race at all. Deliberately not {@link #findAll()}: that
     * loads every race's cover_page_pdf BLOB (up to several MB each, see above), and the season
     * selector asks for this on every load of the age-group page.
     */
    @Query(value = "SELECT DISTINCT date FROM race", nativeQuery = true)
    List<LocalDate> findDistinctRaceDates();

    /**
     * Every race, without the cover-page BLOBs - for the race list, which the frontend loads on
     * practically every screen (the race selector) and which only needs to know *whether* a race
     * has a cover page, never its bytes. {@link #findAll()} materialises each one instead, several
     * MB per race for a club that uses them.
     * <p>
     * Carries the same hazard as {@link #findByLiveTokenWithoutCoverPage}: the returned Race always
     * has {@code coverPagePdf == null}, so never use one as the "existing" row of an update or for
     * a PDF export - that would silently drop the cover page. Pair it with
     * {@link #findIdsWithCoverPage()} when the has/hasn't answer is needed.
     */
    @Query(value = "SELECT id, name, date, organisation, referee, race_director, time_control, route_name, " +
            "elevation_difference, route_length, course_setter, weather, result_unit, result_unit_label, " +
            "sort_direction, NULL AS cover_page_pdf, previous_race_id, start_order_mode, " +
            "start_order_reverse_top_count, live_token, age_group_variant FROM race",
            nativeQuery = true)
    List<Race> findAllWithoutCoverPage();

    /**
     * The races dated within [from, to], without the cover-page BLOBs - one season's races, for
     * AgeGroupService's variant usage. Same hazard as {@link #findAllWithoutCoverPage()}: never
     * use one as the "existing" row of an update or for a PDF export.
     */
    @Query(value = "SELECT id, name, date, organisation, referee, race_director, time_control, route_name, " +
            "elevation_difference, route_length, course_setter, weather, result_unit, result_unit_label, " +
            "sort_direction, NULL AS cover_page_pdf, previous_race_id, start_order_mode, " +
            "start_order_reverse_top_count, live_token, age_group_variant FROM race WHERE date BETWEEN :from AND :to",
            nativeQuery = true)
    List<Race> findBetweenWithoutCoverPage(LocalDate from, LocalDate to);

    /** The ids of races that do have a cover page - the bit {@link #findAllWithoutCoverPage()} drops. */
    @Query(value = "SELECT id FROM race WHERE cover_page_pdf IS NOT NULL", nativeQuery = true)
    List<Long> findIdsWithCoverPage();
}

