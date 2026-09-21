package x.timecontrol.services

import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.entities.AppSettings
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.GaudiLosPairing
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeRace
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.TimingProviderType
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.repositories.GaudiModeRaceRepository
import x.timecontrol.repositories.GaudiModeRepository

import java.time.LocalDateTime

/**
 * Who the Los draw may pair up. A participant already marked DNS/DNF/DSQ when the draw happens can
 * never produce a value (RankingService#adjustedValue returns null for any such status, however
 * they finish), and LosModeCalculator drops a pair whose second member has none - so pairing a
 * known non-starter costs their partner their placing, however well they ride.
 * <p>
 * A status set AFTER the draw is deliberately not handled here: the pair average is the score, and
 * without a partner there is none.
 */
class GaudiModeServiceLosDrawSpec extends Specification {

    GaudiModeRepository repository = Mock()
    GaudiModeRaceRepository gaudiModeRaceRepository = Mock()
    GaudiLosPairingRepository pairingRepository = Mock()
    ParticipantService participantService = Mock()
    RaceService raceService = Mock()
    TransactionOperations transactionOperations = Mock()

    SettingsService settingsService = Stub(SettingsService) {
        getSettings() >> new AppSettings(1L, TimingProviderType.NONE, null, 1, 1)
    }
    SeasonService seasonService = new SeasonService(settingsService, raceService)

    def service = new GaudiModeService(repository, gaudiModeRaceRepository, pairingRepository, participantService,
            raceService, Mock(PersonService), Mock(AgeGroupService), seasonService, [], transactionOperations)

    static final GaudiMode LOS = new GaudiMode(1L, GaudiModeType.LOS, "Losrennen", null, null,
            false, false, false, LocalDateTime.now())

    private static Participant starter(Long id) {
        participant(id, DisqualificationStatus.NONE, id.intValue())
    }

    private static Participant participant(Long id, DisqualificationStatus status, Integer raceNumber) {
        new Participant(id, 7L, id, raceNumber, null, null, null, null, null, null, status, null, null)
    }

    def setup() {
        gaudiModeRaceRepository.findByGaudiModeIdOrderBySortOrder(1L) >> [new GaudiModeRace(1L, 1L, 7L, 0, 1.0d)]
        // The service runs its saves inside executeWrite; run the closure straight through.
        transactionOperations.executeWrite(_) >> { args -> args[0].apply(null) }
        pairingRepository.save(_) >> { GaudiLosPairing p -> p }
    }

    private static List<Long> pairedIds(List<GaudiLosPairing> drawn) {
        drawn.collectMany { [it.participant1Id(), it.participant2Id()] }.findAll { it != null }.sort()
    }

    def "a participant already marked as not starting is left out of the draw"() {
        given: "four entered, one of whom cancelled before the draw and was marked DNS"
        participantService.findByRaceId(7L) >> [
                starter(1L), starter(2L), starter(3L),
                participant(4L, DisqualificationStatus.DNS, 4)
        ]

        when:
        def drawn = service.drawLosPairing(LOS)

        then: "the DNS one is not in any pair - pairing them would cost their partner a placing"
        !pairedIds(drawn).contains(4L)

        and: "the three who do start are all placed: one pair plus one scored as (Einzel)"
        pairedIds(drawn) == [1L, 2L, 3L]
        drawn.size() == 2
        drawn.count { it.participant2Id() == null } == 1
    }

    def "DSQ and DNF from an earlier attempt are left out as well"() {
        given:
        participantService.findByRaceId(7L) >> [
                starter(1L), starter(2L),
                participant(3L, DisqualificationStatus.DSQ, 3),
                participant(4L, DisqualificationStatus.DNF, 4)
        ]

        when:
        def drawn = service.drawLosPairing(LOS)

        then: "adjustedValue is null for either status, so either would sink their partner too"
        pairedIds(drawn) == [1L, 2L]
        drawn.size() == 1
    }

    def "a participant without a race number is still drawn"() {
        given: "the draw commonly happens before numbers are handed out - effectiveStartOrder()"
        // would report null for these, which is why the filter tests the status alone
        participantService.findByRaceId(7L) >> [
                participant(1L, DisqualificationStatus.NONE, null),
                participant(2L, null, null)
        ]

        when:
        def drawn = service.drawLosPairing(LOS)

        then: "both are drawn - having no number yet is not the same as not starting"
        pairedIds(drawn) == [1L, 2L]
        drawn.size() == 1
    }

    def "an unfiltered field is paired up completely, as before"() {
        given:
        participantService.findByRaceId(7L) >> [starter(1L), starter(2L), starter(3L), starter(4L)]

        when:
        def drawn = service.drawLosPairing(LOS)

        then:
        pairedIds(drawn) == [1L, 2L, 3L, 4L]
        drawn.size() == 2
        drawn.every { it.participant2Id() != null }
    }
}
