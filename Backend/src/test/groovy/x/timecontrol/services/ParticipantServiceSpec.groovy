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

    def "create rejects a person who is already a participant of the same race"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        personService.findById(1L) >> Optional.of(person())
        repository.findByRaceIdAndPersonId(1L, 1L) >> Optional.of(new Participant(99L, 1L, 1L, null, null, null, null, null, null))
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null)

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
        repository.findByRaceIdAndPersonId(1L, 1L) >> Optional.empty()
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
        // the only participant with race number 5, and the only one for person 1, is the one being updated itself
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.of(existing)
        repository.findByRaceIdAndPersonId(1L, 1L) >> Optional.of(existing)
        def request = new Participant(null, 1L, 1L, 5, null, null, null, null, null)

        when:
        def result = service.update(10L, request)

        then:
        1 * repository.update(_) >> { Participant p -> p }
        result.isPresent()
    }

    def "assignRaceNumbers re-shuffling an already-numbered race does not collide with the unique constraint"() {
        given: "3 participants already hold numbers 2,3,1; the new assignment (by birthdate, youngest first) is 1,2,3 - a naive single-pass update would collide immediately"
        def p1 = new Participant(1L, 5L, 1L, 2, null, null, null, null, null)
        def p2 = new Participant(2L, 5L, 2L, 3, null, null, null, null, null)
        def p3 = new Participant(3L, 5L, 3L, 1, null, null, null, null, null)
        repository.findByRaceId(5L) >> [p1, p2, p3]
        personService.findByIds(_) >> [
                1L: new Person(1L, "A", "A", LocalDate.of(2000, 1, 1), Gender.MALE, null),
                2L: new Person(2L, "B", "B", LocalDate.of(1995, 1, 1), Gender.MALE, null),
                3L: new Person(3L, "C", "C", LocalDate.of(1990, 1, 1), Gender.MALE, null),
        ]

        // Simulates the real DB's UNIQUE(race_id, race_number) index: a non-null race_number
        // must not already be held by a DIFFERENT participant.
        def heldNumberByParticipantId = [1L: 2, 2L: 3, 3L: 1]
        repository.update(_ as Participant) >> { Participant p ->
            if (p.raceNumber() != null) {
                def conflict = heldNumberByParticipantId.find { id, num -> num == p.raceNumber() && id != p.id() }
                if (conflict) {
                    throw new RuntimeException("UNIQUE constraint failed: participant.race_id, participant.race_number")
                }
            }
            heldNumberByParticipantId[p.id()] = p.raceNumber()
            return p
        }

        when:
        def result = service.assignRaceNumbers(5L)

        then:
        noExceptionThrown()
        result*.id() == [1L, 2L, 3L]
        result*.raceNumber() == [1, 2, 3]
    }

    def "CSV import reports a row-level error instead of aborting the whole import"() {
        given: "the second row's participant save fails (e.g. a transient DB error)"
        repository.findByRaceId(5L) >> []
        teamService.findOrCreateByName("Team A") >> new Team(1L, "TEAM A")
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()

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

    def "CSV import does not duplicate a person who is matched via ExternalId and already a participant of this race"() {
        given:
        repository.findByRaceId(5L) >> []
        def existingPerson = new Person(1L, "John", "Doe", LocalDate.of(1990, 1, 1), Gender.MALE, "EXT-1")
        personService.findByExternalId("EXT-1") >> Optional.of(existingPerson)
        teamService.findOrCreateByName("Team A") >> new Team(1L, "TEAM A")
        repository.findByRaceIdAndPersonId(5L, 1L) >> Optional.of(new Participant(99L, 5L, 1L, null, null, null, null, null, null))

        def csv = "Lastname,Firstname,Birthdate,Team,Gender,ExternalId\n" +
                "Doe,John,1990-01-01,Team A,MALE,EXT-1\n"
        def reader = new BufferedReader(new StringReader(csv))

        when:
        def result = service.importFromCsv(5L, reader)

        then:
        0 * repository.save(_)
        result.imported().isEmpty()
        result.errors().size() == 1
        result.errors()[0].reason().contains("already a participant")
    }

    def "CSV import rejects a duplicate name+birthdate row when no ExternalId is given"() {
        given: "Jane Doe is already a participant of this race, previously imported without an ExternalId"
        def existingPerson = new Person(2L, "Jane", "Doe", LocalDate.of(1990, 1, 1), Gender.FEMALE, null)
        repository.findByRaceId(5L) >> [new Participant(50L, 5L, 2L, null, null, null, null, null, null)]
        personService.findById(2L) >> Optional.of(existingPerson)

        def csv = "Lastname,Firstname,Birthdate,Team,Gender\n" +
                "Doe,Jane,1990-01-01,Team A,FEMALE\n"
        def reader = new BufferedReader(new StringReader(csv))

        when:
        def result = service.importFromCsv(5L, reader)

        then: "the row is reported as a duplicate instead of creating a second Person/Participant"
        0 * personService.create(_)
        0 * repository.save(_)
        result.imported().isEmpty()
        result.errors().size() == 1
        result.errors()[0].reason().contains("already in this race")
    }
}
