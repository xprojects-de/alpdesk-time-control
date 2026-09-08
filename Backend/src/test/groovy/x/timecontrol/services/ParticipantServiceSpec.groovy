package x.timecontrol.services

import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.Team
import x.timecontrol.repositories.ParticipantRepository

import java.sql.Connection
import java.time.LocalDate

class ParticipantServiceSpec extends Specification {

    ParticipantRepository repository = Mock()
    AgeGroupService ageGroupService = Mock()
    RaceService raceService = Mock()
    TeamService teamService = Mock()
    CategoryService categoryService = Mock()
    PersonService personService = Mock()
    TransactionOperations<Connection> transactionOperations = Mock()

    ParticipantService service = new ParticipantService(
            repository, ageGroupService, raceService, teamService, categoryService, personService, transactionOperations)

    def setup() {
        ageGroupService.findAll() >> []
        // executeWrite just runs the given callback immediately, as the real JDBC transaction manager would
        transactionOperations.executeWrite(_) >> { args -> args[0].call(null) }
    }

    private static Race race() {
        new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC)
    }

    private static Person person() {
        new Person(1L, "Max", "Mustermann", LocalDate.of(1990, 1, 1), Gender.MALE, null)
    }

    def "create rejects a participant without a raceId"() {
        given:
        def participant = new Participant(null, null, 1L, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a participant without a personId"() {
        given:
        def participant = new Participant(null, 1L, null, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a participant referencing a non-existent race"() {
        given:
        raceService.findById(1L) >> Optional.empty()
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a participant referencing a non-existent person"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        personService.findById(1L) >> Optional.empty()
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a race number that is already assigned in the same race"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        personService.findById(1L) >> Optional.of(person())
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.of(new Participant(99L, 1L, 2L, 5, null, null, null, null, null))
        def participant = new Participant(null, 1L, 1L, 5, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalStateException)
        0 * repository.save(_)
    }

    def "create succeeds and saves the participant when everything is valid"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        personService.findById(1L) >> Optional.of(person())
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.empty()
        def participant = new Participant(null, 1L, 1L, 5, null, null, null, null, null)
        def saved = new Participant(10L, 1L, 1L, 5, null, null, null, null, null)

        when:
        def result = service.create(participant)

        then:
        1 * repository.save(participant) >> saved
        result == saved
    }

    def "update allows keeping the same race number on the participant being edited"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        personService.findById(1L) >> Optional.of(person())
        def existing = new Participant(10L, 1L, 1L, 5, null, null, null, null, null)
        repository.findById(10L) >> Optional.of(existing)
        // the only participant with race number 5 is the one being updated itself
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.of(existing)
        def request = new Participant(null, 1L, 1L, 5, null, null, null, null, null)

        when:
        def result = service.update(10L, request)

        then:
        1 * repository.update(_) >> { Participant p -> p }
        result.isPresent()
    }

    def "CSV import reports a row-level error instead of aborting the whole import"() {
        given: "the second row's participant save fails (e.g. a transient DB error)"
        teamService.findOrCreateByName("Team A") >> new Team(1L, "TEAM A")
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }

        def csv = "Lastname,Firstname,Birthdate,Team,Gender\n" +
                "Doe,John,1990-01-01,Team A,MALE\n" +
                "Fail,Jane,1990-01-01,Team A,FEMALE\n" +
                "Smith,Anna,1990-01-01,Team A,FEMALE\n"
        def reader = new BufferedReader(new StringReader(csv))

        when:
        def result = service.importFromCsv(5L, reader)

        then: "two rows succeed and the failing row is reported, not thrown"
        1 * repository.save(_) >> new Participant(1L, 5L, 1L, null, 1L, null, null, null, null)
        1 * repository.save(_) >> { throw new RuntimeException("db unavailable") }
        1 * repository.save(_) >> new Participant(3L, 5L, 1L, null, 1L, null, null, null, null)
        result.imported().size() == 2
        result.errors().size() == 1
        result.errors()[0].lineNumber() == 3
        result.errors()[0].reason().contains("db unavailable")
    }
}
