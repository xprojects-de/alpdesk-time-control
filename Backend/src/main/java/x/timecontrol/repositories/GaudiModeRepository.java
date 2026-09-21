package x.timecontrol.repositories;

import io.micronaut.data.annotation.Query;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import x.timecontrol.entities.GaudiMode;

import java.util.List;

@JdbcRepository(dialect = Dialect.SQLITE)
public interface GaudiModeRepository extends CrudRepository<GaudiMode, Long> {
    List<GaudiMode> findByIdIn(Iterable<Long> ids);

    long countByPointsScaleId(Long pointsScaleId);

    /**
     * Every Gaudi-Modus instance, without the cover-page BLOBs - for the list endpoint, which only
     * needs to know <em>whether</em> an instance has a cover page, never its bytes. The column list
     * follows the GaudiMode record's component order, not the table's physical one: V2 appended the
     * keep_* flags after cover_page_pdf.
     * <p>
     * Carries the same hazard as its Race counterpart
     * ({@link RaceRepository#findAllWithoutCoverPage()}): the returned GaudiMode always has
     * {@code coverPagePdf == null}, so never use one as the "existing" row of an update or for a PDF
     * export - that would silently drop the cover page. Pair it with {@link #findIdsWithCoverPage()}
     * when the has/hasn't answer is needed.
     */
    @Query(value = "SELECT id, type, name, team_size, points_scale_id, keep_dns_in_ranking, " +
            "keep_dnf_in_ranking, keep_dsq_in_ranking, created_at, NULL AS cover_page_pdf " +
            "FROM gaudi_mode", nativeQuery = true)
    List<GaudiMode> findAllWithoutCoverPage();

    /** The ids that do have a cover page - the bit the two projections above drop. */
    @Query(value = "SELECT id FROM gaudi_mode WHERE cover_page_pdf IS NOT NULL", nativeQuery = true)
    List<Long> findIdsWithCoverPage();
}
