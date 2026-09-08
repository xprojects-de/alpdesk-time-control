package x.timecontrol.services.gaudi

import spock.lang.Specification
import x.timecontrol.entities.Gender
import x.timecontrol.entities.GaudiLosPairing
import x.timecontrol.entities.GaudiMode
import x.timecontrol.entities.GaudiModeType
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.repositories.GaudiLosPairingRepository
import x.timecontrol.services.PersonService
import x.timecontrol.services.RankingService

import java.time.LocalDate
import java.time.LocalDateTime

class LosModeCalculatorSpec extends Specification {

    GaudiLosPairingRepository pairingRepository = Mock()
    PersonService personService = Mock()
    LosModeCalculator calculator = new LosModeCalculator(pairingRepository, personService, new RankingService())

    Race race = new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
            null, null, null, ResultUnit.TIME, null, SortDirection.ASC)

    private static Participant participant(Long id, Integer durationMs, Integer penalty = null) {
        new Participant(id, 1L, id, null, null, null, durationMs, penalty, null)
    }

    private static Person person(Long id, String firstName) {
        new Person(id, firstName, "Test", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    private static GaudiMode losMode() {
        new GaudiMode(1L, GaudiModeType.LOS, "Los-Modus", null, null, LocalDateTime.now())
    }

    def setup() {
        personService.displayName(_ as Person) >> { Person p -> p.firstName() }
    }

    def "the pair closest to the overall average wins, ranked ahead of a farther pair"() {
        given: "overall average is (60000+80000+100000+120000)/4 = 90000"
        def participants = [
                participant(1L, 60000), participant(2L, 120000), // pair average 90000 -> diff 0
                participant(3L, 80000), participant(4L, 100000), // pair average 90000 -> diff 0 (tie)
        ]
        pairingRepository.findByGaudiModeId(1L) >> [
                new GaudiLosPairing(1L, 1L, 1L, 2L),
                new GaudiLosPairing(2L, 1L, 3L, 4L),
        ]
        personService.findById(1L) >> Optional.of(person(1L, "A"))
        personService.findById(2L) >> Optional.of(person(2L, "B"))
        personService.findById(3L) >> Optional.of(person(3L, "C"))
        personService.findById(4L) >> Optional.of(person(4L, "D"))
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "both pairs are exactly on the average -> tied for 1st place"
        ranking.size() == 2
        ranking*.place() == [1, 1]
    }

    def "a pairing missing a result for either participant is skipped"() {
        given:
        def participants = [participant(1L, 60000)] // participant 2 has no measurement at all
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking.isEmpty()
    }

    def "a self-paired leftover participant (odd count) is ranked against their own time"() {
        given:
        def participants = [participant(1L, 100000), participant(2L, 60000)]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, null)]
        personService.findById(1L) >> Optional.of(person(1L, "A"))
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then:
        ranking.size() == 1
        ranking[0].valueMs() == 100000
        ranking[0].label() == "A (Einzel)"
    }

    def "a participant's penalty is included in the pair average and the overall average"() {
        given: "participant 1 has a penalty that must count towards their value and the overall average"
        def participants = [
                participant(1L, 60000, 20000), // adjusted 80000
                participant(2L, 80000),
        ]
        pairingRepository.findByGaudiModeId(1L) >> [new GaudiLosPairing(1L, 1L, 1L, 2L)]
        personService.findById(1L) >> Optional.of(person(1L, "A"))
        personService.findById(2L) >> Optional.of(person(2L, "B"))
        def races = [new GaudiModeCalculator.RaceParticipants(1L, race, 1.0d, participants)]

        when:
        def ranking = calculator.computeRanking(losMode(), races)

        then: "pair average is (80000+80000)/2 = 80000, exactly the overall average -> diff 0"
        ranking.size() == 1
        ranking[0].valueMs() == 80000
        ranking[0].diffMs() == 0
    }
}
