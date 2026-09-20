package x.timecontrol.services

import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.entities.Participant
import x.timecontrol.entities.StartGroupTemplate
import x.timecontrol.repositories.ParticipantRepository
import x.timecontrol.repositories.StartGroupTemplateRepository

import java.sql.Connection

class StartGroupTemplateServiceSpec extends Specification {

    StartGroupTemplateRepository repository = Mock()
    ParticipantRepository participantRepository = Mock()
    TransactionOperations<Connection> transactionOperations = Mock()
    StartGroupTemplateService service = new StartGroupTemplateService(repository, participantRepository, transactionOperations)

    def setup() {
        // executeWrite just runs the given callback immediately, as the real JDBC transaction manager would
        transactionOperations.executeWrite(_) >> { args -> args[0].call(null) }
    }

    def "create saves a new template"() {
        given:
        def template = new StartGroupTemplate(null, "Grün", "#92D050", 0, null)

        when:
        service.create(template)

        then:
        1 * repository.save(template) >> new StartGroupTemplate(1L, "Grün", "#92D050", 0, null)
    }

    def "update overwrites label/color/position/offsetSeconds of an existing template"() {
        given:
        def existing = new StartGroupTemplate(1L, "Grün", "#92D050", 0, null)
        repository.findById(1L) >> Optional.of(existing)

        when:
        def result = service.update(1L, new StartGroupTemplate(null, "Orange", "#FFC000", 1, 300))

        then:
        1 * repository.update({ StartGroupTemplate t -> t.id() == 1L && t.label() == "Orange" && t.color() == "#FFC000" && t.position() == 1 && t.offsetSeconds() == 300 }) >>
                { StartGroupTemplate t -> t }
        result.isPresent()
        result.get().label() == "Orange"
    }

    def "update returns empty when the template does not exist"() {
        given:
        repository.findById(1L) >> Optional.empty()

        when:
        def result = service.update(1L, new StartGroupTemplate(null, "Orange", "#FFC000", 1, null))

        then:
        0 * repository.update(_)
        result.isEmpty()
    }

    def "delete without force refuses when participants are still assigned to this template"() {
        given:
        participantRepository.countByStartGroupId(1L) >> 3L

        when:
        service.delete(1L, false)

        then:
        thrown(IllegalStateException)
        0 * repository.deleteById(_)
        0 * participantRepository.updateAll(_)
    }

    def "delete with force=true also clears startSequence (not just startGroupId) for every affected participant, across races"() {
        given: "two participants of different races were assigned to this template, each still carrying a start position"
        def p1 = new Participant(1L, 5L, 10L, 3, null, null, null, null, null, null, null, 3, 1L)
        def p2 = new Participant(2L, 6L, 11L, 7, null, null, null, null, null, null, null, 1, 1L)
        participantRepository.countByStartGroupId(1L) >> 3L
        participantRepository.findByStartGroupId(1L) >> [p1, p2]

        when:
        service.delete(1L, true)

        then: "startGroupId AND startSequence are both cleared - the FK's own ON DELETE SET NULL only reaches startGroupId"
        1 * participantRepository.updateAll({ List<Participant> cleared ->
            cleared*.id() == [1L, 2L] && cleared.every { it.startGroupId() == null && it.startSequence() == null }
        })
        1 * repository.deleteById(1L)
    }

    def "delete succeeds directly when no participant is assigned to this template"() {
        given:
        participantRepository.countByStartGroupId(1L) >> 0L
        participantRepository.findByStartGroupId(1L) >> []

        when:
        service.delete(1L, false)

        then:
        0 * participantRepository.updateAll(_)
        1 * repository.deleteById(1L)
    }

    def "findByIds batch-loads templates and returns an empty map for an empty id set"() {
        expect:
        service.findByIds([] as Set) == [:]
    }
}
