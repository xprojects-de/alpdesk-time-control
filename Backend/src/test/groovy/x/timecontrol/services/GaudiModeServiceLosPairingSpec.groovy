package x.timecontrol.services

import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.dto.GaudiModeRaceEntry
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeRace
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.repositories.GaudiModeRaceRepository
import x.timecontrol.repositories.GaudiModeRepository

import java.time.LocalDate
import java.time.LocalDateTime
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.TimingProviderType

/**
 * A drawn Los pairing only makes sense for the race it was drawn for - editing the instance to
 * point at another race (or to another type) must drop it instead of leaving pairs behind that
 * reference participants of the old race.
 */
class GaudiModeServiceLosPairingSpec extends Specification {

    GaudiModeRepository repository = Mock()
    GaudiModeRaceRepository gaudiModeRaceRepository = Mock()
    GaudiLosPairingRepository pairingRepository = Mock()
    RaceService raceService = Mock()
    TransactionOperations transactionOperations = Mock()

    // A real SeasonService over a stubbed settings row rather than a mock, so the specs exercise
    // the actual date -> season mapping. With the default 1 January boundary, every race date used
    // in these specs (2026-..-..) resolves to season 2026.
    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1, true)
    }
    SeasonService seasonService = new SeasonService(settingsService, raceService)

    def service = new GaudiModeService(repository, gaudiModeRaceRepository, pairingRepository, Mock(ParticipantService),
            raceService, Mock(PersonService), Mock(AgeGroupService), seasonService, [], transactionOperations)

    private static GaudiMode mode(GaudiModeType type) {
        new GaudiMode(1L, type, "Los", type == GaudiModeType.TEAM ? 3 : null, null, false, false, false, LocalDateTime.now())
    }

    private static Race race(Long id) {
        new Race(id, "Rennen " + id, LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
    }

    def setup() {
        repository.findById(1L) >> Optional.of(mode(GaudiModeType.LOS))
        repository.update(_) >> { GaudiMode m -> m }
        raceService.findById(_) >> { Long id -> Optional.of(race(id)) }
        raceService.existsById(_) >> true
        gaudiModeRaceRepository.findByGaudiModeIdOrderBySortOrder(1L) >> [new GaudiModeRace(1L, 1L, 10L, 0, 1.0d)]
        transactionOperations.executeWrite(_) >> { args -> args[0].call(null) }
    }

    def "update keeps the drawn pairing when the LOS instance still points at the same race"() {
        when:
        service.update(1L, mode(GaudiModeType.LOS), [new GaudiModeRaceEntry(10L, null)], false)

        then:
        0 * pairingRepository.deleteByGaudiModeId(_)
    }

    def "update drops the drawn pairing when the LOS instance is switched to another race"() {
        when:
        service.update(1L, mode(GaudiModeType.LOS), [new GaudiModeRaceEntry(20L, null)], false)

        then:
        1 * pairingRepository.deleteByGaudiModeId(1L)
    }

    def "update drops the drawn pairing when the instance is no longer of type LOS"() {
        when:
        service.update(1L, mode(GaudiModeType.TEAM), [new GaudiModeRaceEntry(10L, null)], false)

        then:
        1 * pairingRepository.deleteByGaudiModeId(1L)
    }
}
