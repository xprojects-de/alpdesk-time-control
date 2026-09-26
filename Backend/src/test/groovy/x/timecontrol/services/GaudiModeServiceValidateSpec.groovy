package x.timecontrol.services

import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import spock.lang.Unroll
import x.timecontrol.dto.GaudiModeRaceEntry
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.repositories.GaudiModeRaceRepository
import x.timecontrol.repositories.GaudiModeRepository

import java.time.LocalDate
import java.time.LocalDateTime

/**
 * The rules a Gaudi-Modus configuration must meet before it is saved. Each one stands between the
 * operator and a silently wrong result list: a leg counted twice, a mode that ranks the whole field
 * on place 1, or a Zeit-Kombination that adds milliseconds to points.
 */
class GaudiModeServiceValidateSpec extends Specification {

    GaudiModeRepository repository = Mock()
    RaceService raceService = Mock()
    TransactionOperations transactionOperations = Mock()

    def service = new GaudiModeService(repository, Mock(GaudiModeRaceRepository), Mock(GaudiLosPairingRepository),
            Mock(ParticipantService), raceService, Mock(PersonService), Mock(AgeGroupService), [], transactionOperations)

    /** Races 1-3 are TIME/ASC, 4 is POINTS/ASC, 5 is TIME/DESC; race 99 does not exist. */
    private static Race race(Long id) {
        ResultUnit unit = id == 4L ? ResultUnit.POINTS : ResultUnit.TIME
        SortDirection direction = id == 5L ? SortDirection.DESC : SortDirection.ASC
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, unit, null, direction, null, null, null, null)
    }

    private static GaudiMode mode(GaudiModeType type, Integer teamSize = null) {
        new GaudiMode(null, type, "Gaudi", teamSize, null, false, false, false, LocalDateTime.now())
    }

    private static List<GaudiModeRaceEntry> legs(List<Long> raceIds, List<Double> weights = null) {
        raceIds.withIndex().collect { Long id, int i -> new GaudiModeRaceEntry(id, weights?.get(i)) }
    }

    def setup() {
        raceService.existsById(_) >> { Long id -> id != 99L }
        raceService.findById(_) >> { Long id -> id == 99L ? Optional.empty() : Optional.of(race(id)) }
        repository.save(_) >> { GaudiMode m -> m }
        transactionOperations.executeWrite(_) >> { args -> args[0].call(null) }
    }

    @Unroll
    def "#type with races #raceIds, weights #weights and team size #teamSize is refused: #reason"() {
        when:
        service.create(mode(type, teamSize), legs(raceIds, weights))

        then:
        def e = thrown(IllegalArgumentException)
        e.message.contains(message)
        0 * repository.save(_)

        where:
        type                           | raceIds  | weights    | teamSize || message                                   | reason
        GaudiModeType.LOS              | []       | null       | null     || "At least one race"                       | "no race"
        GaudiModeType.LOS              | [1L, 2L] | null       | null     || "requires exactly one race"               | "LOS takes one race"
        GaudiModeType.TEAM             | [1L, 2L] | null       | 3        || "requires exactly one race"               | "TEAM takes one race"
        GaudiModeType.TIME_COMBINATION | [1L]     | null       | null     || "requires at least two races"             | "a combination needs two"
        GaudiModeType.POINTS_COMBINATION | [1L]   | null       | null     || "requires at least two races"             | "a combination needs two"
        GaudiModeType.TIME_COMBINATION | [1L, 1L] | null       | null     || "referenced more than once"               | "a leg would count twice"
        GaudiModeType.POINTS_COMBINATION | [1L, 2L] | [1.0d, -0.5d] | null || "must not be negative"                 | "negative weight"
        GaudiModeType.TIME_COMBINATION | [1L, 99L] | null      | null     || "does not exist"                          | "unknown race"
        GaudiModeType.TIME_COMBINATION | [1L, 4L] | null       | null     || "same result unit"                        | "TIME and POINTS mixed"
        GaudiModeType.TIME_COMBINATION | [1L, 5L] | null       | null     || "same sort direction"                     | "ASC and DESC mixed"
        GaudiModeType.POINTS_COMBINATION | [1L, 2L] | [0.0d, 0.0d] | null  || "weight above 0"                         | "no race counts"
        GaudiModeType.TEAM             | [1L]     | null       | null     || "teamSize must be at least 1"             | "no team size"
        GaudiModeType.TEAM             | [1L]     | null       | 0        || "teamSize must be at least 1"             | "team size 0"
    }

    @Unroll
    def "#type with races #raceIds and weights #weights is accepted"() {
        when:
        service.create(mode(type, teamSize), legs(raceIds, weights))

        then:
        noExceptionThrown()

        where:
        type                             | raceIds  | weights      | teamSize
        GaudiModeType.LOS                | [1L]     | null         | null
        GaudiModeType.TEAM               | [1L]     | null         | 3
        GaudiModeType.TIME_COMBINATION   | [1L, 2L] | null         | null
        GaudiModeType.POINTS_COMBINATION | [1L, 4L] | [0.7d, 0.0d] | null
        GaudiModeType.POINTS_COMBINATION | [1L, 2L] | [0.0d, null] | null
    }
}
