package x.timecontrol.services

import io.micronaut.data.exceptions.DataAccessException
import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.dto.ParticipantImportFormat
import x.timecontrol.dto.ResultTimeFormat
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Category
import x.timecontrol.entities.DisqualificationStatus
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
import java.time.LocalDateTime

class ParticipantServiceSpec extends Specification {

    ParticipantRepository repository = Mock()
    AgeGroupService ageGroupService = Mock()
    RaceService raceService = Mock()
    TeamService teamService = Mock()
    CategoryService categoryService = Mock()
    PersonService personService = Mock()
    AutoAssignService autoAssignService = Mock()
    TransactionOperations<Connection> transactionOperations = Mock()

    ParticipantService service = new ParticipantService(
            repository, ageGroupService, raceService, teamService, categoryService, personService, autoAssignService, transactionOperations)

    // Mutated by individual tests instead of re-stubbing autoAssignService.isActiveFor(_) with a
    // more specific argument matcher - a single closure-based interaction per mock method avoids
    // the ambiguity of two equally-plausible interactions on the same method (see the identical
    // pattern/reasoning in the gaudi calculator specs' knownPersons/knownTeams maps).
    boolean autoAssignActiveForRace = false

    def setup() {
        ageGroupService.findAll() >> []
        autoAssignService.isActiveFor(_) >> { autoAssignActiveForRace }
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
        def participant = new Participant(null, null, 1L, null, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a participant without a personId"() {
        given:
        def participant = new Participant(null, 1L, null, null, null, null, null, null, null, null)

        when:
        service.create(participant)

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
    }

    def "create rejects a participant referencing a non-existent race"() {
        given:
        raceService.findById(1L) >> Optional.empty()
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null, null)

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
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null, null)

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
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.of(new Participant(99L, 1L, 2L, 5, null, null, null, null, null, null))
        def participant = new Participant(null, 1L, 1L, 5, null, null, null, null, null, null)

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
        repository.findByRaceIdAndPersonId(1L, 1L) >> Optional.of(new Participant(99L, 1L, 1L, null, null, null, null, null, null, null))
        def participant = new Participant(null, 1L, 1L, null, null, null, null, null, null, null)

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
        def participant = new Participant(null, 1L, 1L, 5, null, null, null, null, null, null)
        def saved = new Participant(10L, 1L, 1L, 5, null, null, null, null, null, null)

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
        def existing = new Participant(10L, 1L, 1L, 5, null, null, null, null, null, null)
        repository.findById(10L) >> Optional.of(existing)
        // the only participant with race number 5, and the only one for person 1, is the one being updated itself
        repository.findByRaceIdAndRaceNumber(1L, 5) >> Optional.of(existing)
        repository.findByRaceIdAndPersonId(1L, 1L) >> Optional.of(existing)
        def request = new Participant(null, 1L, 1L, 5, null, null, null, null, null, null)

        when:
        def result = service.update(10L, request)

        then:
        1 * repository.update(_) >> { Participant p -> p }
        result.isPresent()
    }

    def "assignRaceNumbers re-shuffling an already-numbered race does not collide with the unique constraint"() {
        given: "3 participants already hold numbers 2,3,1; the new assignment (by birthdate, youngest first) is 1,2,3 - a naive single-pass update would collide immediately"
        def p1 = new Participant(1L, 5L, 1L, 2, null, null, null, null, null, null)
        def p2 = new Participant(2L, 5L, 2L, 3, null, null, null, null, null, null)
        def p3 = new Participant(3L, 5L, 3L, 1, null, null, null, null, null, null)
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

    def "assignRaceNumbers refuses to run while live auto-assign is active for this race"() {
        given: "reshuffling numbers underneath an in-flight auto-assign cursor could mismatch a finish to the wrong participant"
        autoAssignActiveForRace = true

        when:
        service.assignRaceNumbers(5L)

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
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
        1 * repository.save(_) >> new Participant(1L, 5L, 1L, null, 1L, null, null, null, null, null)
        1 * repository.save(_) >> { throw new RuntimeException("db unavailable") }
        1 * repository.save(_) >> new Participant(3L, 5L, 1L, null, 1L, null, null, null, null, null)
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
        repository.findByRaceIdAndPersonId(5L, 1L) >> Optional.of(new Participant(99L, 5L, 1L, null, null, null, null, null, null, null))

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

    def "copyParticipants carries over the race number when requested and not already taken"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        raceService.findById(2L) >> Optional.of(race())
        def source = new Participant(1L, 1L, 10L, 7, null, null, null, null, null, null)
        repository.findByRaceId(1L) >> [source]
        repository.findByRaceId(2L) >> []

        when:
        def result = service.copyParticipants(1L, [2L], true)

        then:
        1 * repository.save({ Participant p -> p.raceNumber() == 7 })
        result.copiedCount() == 1
        result.skippedCount() == 0
    }

    def "copyParticipants leaves the race number empty when carryStartNumber is false"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        raceService.findById(2L) >> Optional.of(race())
        def source = new Participant(1L, 1L, 10L, 7, null, null, null, null, null, null)
        repository.findByRaceId(1L) >> [source]
        repository.findByRaceId(2L) >> []

        when:
        service.copyParticipants(1L, [2L], false)

        then:
        1 * repository.save({ Participant p -> p.raceNumber() == null })
    }

    def "copyParticipants skips the race number when it's already taken in the target race"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        raceService.findById(2L) >> Optional.of(race())
        def source = new Participant(1L, 1L, 10L, 7, null, null, null, null, null, null)
        def alreadyInTarget = new Participant(2L, 2L, 20L, 7, null, null, null, null, null, null)
        repository.findByRaceId(1L) >> [source]
        repository.findByRaceId(2L) >> [alreadyInTarget]

        when:
        service.copyParticipants(1L, [2L], true)

        then:
        1 * repository.save({ Participant p -> p.raceNumber() == null })
    }

    def "copyParticipants falls back to no race number when a concurrent write already claimed it"() {
        given: "the in-memory pre-check saw the number as free, but the DB save loses a race to a concurrent write"
        raceService.findById(1L) >> Optional.of(race())
        raceService.findById(2L) >> Optional.of(race())
        def source = new Participant(1L, 1L, 10L, 7, null, null, null, null, null, null)
        repository.findByRaceId(1L) >> [source]
        repository.findByRaceId(2L) >> []

        when:
        def result = service.copyParticipants(1L, [2L], true)

        then: "the first save (with raceNumber 7) fails with a uniqueness violation, the retry without it succeeds"
        1 * repository.save({ Participant p -> p.raceNumber() == 7 }) >> {
            throw new DataAccessException("UNIQUE constraint failed: participant.race_id, participant.race_number")
        }
        1 * repository.save({ Participant p -> p.raceNumber() == null })
        noExceptionThrown()
        result.copiedCount() == 1
        result.skippedCount() == 0
    }

    def "copyParticipants does not swallow a non-uniqueness persistence failure"() {
        given:
        raceService.findById(1L) >> Optional.of(race())
        raceService.findById(2L) >> Optional.of(race())
        def source = new Participant(1L, 1L, 10L, 7, null, null, null, null, null, null)
        repository.findByRaceId(1L) >> [source]
        repository.findByRaceId(2L) >> []
        repository.save(_) >> { throw new DataAccessException("NOT NULL constraint failed: participant.race_id") }

        when:
        service.copyParticipants(1L, [2L], true)

        then:
        thrown(DataAccessException)
    }

    def "CSV import rejects a duplicate name+birthdate row when no ExternalId is given"() {
        given: "Jane Doe is already a participant of this race, previously imported without an ExternalId"
        def existingPerson = new Person(2L, "Jane", "Doe", LocalDate.of(1990, 1, 1), Gender.FEMALE, null)
        repository.findByRaceId(5L) >> [new Participant(50L, 5L, 2L, null, null, null, null, null, null, null)]
        personService.findByIds([2L] as Set) >> [2L: existingPerson]

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

    def "mapped import resolves the ageGroup column via AgeGroupService instead of Category, independently of an actual category column"() {
        given: "a semicolon CSV whose Klasse column is mapped to ageGroup and whose separate Kategorie column is mapped to category"
        repository.findByRaceId(5L) >> []
        teamService.findOrCreateByName("SC Oberstdorf") >> new Team(1L, "SC OBERSTDORF")
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        repository.save(_) >> { Participant p -> new Participant(1L, 5L, 1L, p.raceNumber(), p.teamId(), p.categoryId(), null, null, null, null) }

        def csv = "Nachname;Vorname;Jahrgang;Geschlecht;Verein;Klasse;Kategorie\n" +
                "Müller;Maximilian;2012;M;SC Oberstdorf;U14m;Ski Alpin\n"

        when:
        def result = service.importMapped(5L, csv.getBytes("UTF-8"), ParticipantImportFormat.CSV, null,
                [lastName: "Nachname", firstName: "Vorname", birthDate: "Jahrgang", gender: "Geschlecht",
                 team: "Verein", ageGroup: "Klasse", category: "Kategorie"])

        then: "the AgeGroup is resolved (not treated as the free-text category) and the real category column still goes through categoryService"
        1 * ageGroupService.findOrCreateForImport("U14m", 2012, Gender.MALE) >> new AgeGroup(1L, "U14M", 2012, 2012, Gender.MALE)
        1 * categoryService.findOrCreateByName("Ski Alpin") >> new Category(1L, "SKI ALPIN")
        result.imported().size() == 1
        result.errors().isEmpty()
    }

    def "mapped import parses a status column into the participant's DisqualificationStatus"() {
        given: "a CSV with a Status column marking the row as disqualified"
        repository.findByRaceId(5L) >> []
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        Participant saved = null
        repository.save(_) >> { Participant p -> saved = p; p }

        def csv = "Nachname;Vorname;Jahrgang;Geschlecht;Status\n" +
                "Mustermann;Max;1990;M;DSQ\n"

        when:
        def result = service.importMapped(5L, csv.getBytes("UTF-8"), ParticipantImportFormat.CSV, null,
                [lastName: "Nachname", firstName: "Vorname", birthDate: "Jahrgang", gender: "Geschlecht", status: "Status"])

        then:
        result.imported().size() == 1
        result.errors().isEmpty()
        saved.status() == DisqualificationStatus.DSQ
    }

    def "mapped import defaults a blank/unrecognized status column to NONE instead of failing the row"() {
        given:
        repository.findByRaceId(5L) >> []
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        Participant saved = null
        repository.save(_) >> { Participant p -> saved = p; p }

        def csv = "Nachname;Vorname;Jahrgang;Geschlecht;Status\n" +
                "Mustermann;Max;1990;M;\n"

        when:
        def result = service.importMapped(5L, csv.getBytes("UTF-8"), ParticipantImportFormat.CSV, null,
                [lastName: "Nachname", firstName: "Vorname", birthDate: "Jahrgang", gender: "Geschlecht", status: "Status"])

        then:
        result.imported().size() == 1
        saved.status() == DisqualificationStatus.NONE
    }

    def "exportCsv writes our own field names as the header and includes person data plus results"() {
        given: "one participant with a full result"
        def person = new Person(1L, "Max", "Mustermann", LocalDate.of(1990, 1, 1), Gender.MALE, "EXT-1")
        def participant = new Participant(10L, 5L, 1L, 42, 2L, 3L, 125000, 2000, LocalDateTime.of(2026, 8, 18, 10, 30, 0), "Ski gebrochen")
        repository.findByRaceId(5L) >> [participant]
        personService.findByIds([1L] as Set) >> [1L: person]
        teamService.findByIds([2L] as Set) >> [2L: new Team(2L, "TEAM A")]
        categoryService.findByIds([3L] as Set) >> [3L: new Category(3L, "SKI ALPIN")]
        raceService.findByIds(_ as Set) >> [:]

        when:
        def lines = service.exportCsv(5L).readLines()

        then: "the header uses our canonical field names (so re-importing needs no manual mapping) and the row carries person + team + category + result data"
        lines[0] == "lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;durationMs;penalty;measuredAt;comment;status"
        lines[1] == "Mustermann;Max;1990-01-01;MALE;;TEAM A;SKI ALPIN;EXT-1;42;125000;2000;2026-08-18T10:30;Ski gebrochen;NONE"
    }

    def "mapped import carries over durationMs/penalty/measuredAt when the file provides them (full race export round-trip)"() {
        given: "a CSV using exactly the header exportCsv would produce"
        repository.findByRaceId(5L) >> []
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()

        def csv = "lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;durationMs;penalty;measuredAt;comment\n" +
                "Mustermann;Max;1990-01-01;MALE;;;;;42;125000;2000;2026-08-18T10:30:00;Ski gebrochen\n"

        when:
        def result = service.importMapped(5L, csv.getBytes("UTF-8"), ParticipantImportFormat.CSV, null, null)

        then: "the header self-suggests via each field's own-name alias, so an omitted mapping still resolves every column"
        1 * repository.save({ Participant p ->
            p.raceNumber() == 42 && p.durationMs() == 125000 && p.penalty() == 2000 &&
                    p.measuredAt() == LocalDateTime.of(2026, 8, 18, 10, 30, 0) &&
                    p.comment() == "Ski gebrochen"
        }) >> { Participant p -> p }
        result.imported().size() == 1
        result.errors().isEmpty()
    }

    def "mapped import rejects a negative durationMs or penalty instead of silently ranking the row first"() {
        given: "importRow bypasses ParticipantService.validate() entirely, so this must be re-checked inline"
        repository.findByRaceId(5L) >> []
        personService.create(_ as Person) >> { Person p -> new Person(1L, p.firstName(), p.lastName(), p.birthDate(), p.gender(), p.externalId()) }
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()

        def csv = "lastName;firstName;birthDate;gender;ageGroup;team;category;externalId;raceNumber;durationMs;penalty;measuredAt;comment\n" +
                "Mustermann;Max;1990-01-01;MALE;;;;;42;-1;0;2026-08-18T10:30:00;\n" +
                "Musterfrau;Erika;1991-01-01;FEMALE;;;;;43;120000;-500;2026-08-18T10:31:00;\n"

        when:
        def result = service.importMapped(5L, csv.getBytes("UTF-8"), ParticipantImportFormat.CSV, null, null)

        then: "neither row is saved, and each is reported as a row error rather than silently accepted"
        0 * repository.save(_)
        result.imported().isEmpty()
        result.errors().size() == 2
        result.errors()*.reason().every { it.contains("must not be negative") }
    }

    def "importResultsByRaceNumber matches rows onto existing participants by race number, never creates one, and leaves identity data untouched"() {
        given: "a file shaped like a real export (Alpenhunde): the race-number column is mislabeled 'Name', times use CLOCK format with a comma decimal, and DNF appears instead of a time"
        def existing61 = new Participant(100L, 5L, 1L, 61, null, null, null, null, null, null, DisqualificationStatus.NONE)
        def existing63 = new Participant(101L, 5L, 2L, 63, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceIdAndRaceNumber(5L, 61) >> Optional.of(existing61)
        repository.findByRaceIdAndRaceNumber(5L, 63) >> Optional.of(existing63)
        repository.findByRaceIdAndRaceNumber(5L, 999) >> Optional.empty()
        repository.findById(100L) >> Optional.of(existing61)
        repository.findById(101L) >> Optional.of(existing63)
        raceService.findById(5L) >> Optional.of(race())
        personService.findById(_) >> Optional.of(person())
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        repository.update(_) >> { Participant p -> p }

        def csv = "IDX;Name;Team;End Time\n" +
                "1;61;;01:23,68\n" +
                "2;63;;DNF\n" +
                "3;999;;00:10,00\n"

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null,
                [raceNumber: "Name", time: "End Time"], ResultTimeFormat.CLOCK)

        then: "the two known race numbers are updated with a parsed duration / DNF status, the unknown one is reported instead of creating a participant"
        0 * repository.save(_)
        result.updated().size() == 2
        result.errors().size() == 1
        result.errors()[0].reason().contains("999")

        def updated61 = result.updated().find { it.raceNumber() == 61 }
        updated61.durationMs() == 83680
        updated61.status() == DisqualificationStatus.NONE

        def updated63 = result.updated().find { it.raceNumber() == 63 }
        updated63.durationMs() == null
        updated63.status() == DisqualificationStatus.DNF
    }

    def "importResultsByRaceNumber parses SECONDS and MILLISECONDS time formats"() {
        given:
        def existing = new Participant(100L, 5L, 1L, 61, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceIdAndRaceNumber(5L, 61) >> Optional.of(existing)
        repository.findById(100L) >> Optional.of(existing)
        raceService.findById(5L) >> Optional.of(race())
        personService.findById(_) >> Optional.of(person())
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        repository.update(_) >> { Participant p -> p }

        expect:
        def resultSeconds = service.importResultsByRaceNumber(5L, "StNr;Zeit\n61;83.68\n".getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.SECONDS)
        resultSeconds.updated().first().durationMs() == 83680
        resultSeconds.errors().isEmpty()

        def resultMillis = service.importResultsByRaceNumber(5L, "StNr;Zeit\n61;83680\n".getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.MILLISECONDS)
        resultMillis.updated().first().durationMs() == 83680
        resultMillis.errors().isEmpty()
    }

    def "importResultsByRaceNumber reports a missing race number or time instead of guessing"() {
        given: "row 2's race number does exist, so the row reaches (and fails) the time check rather than the race-number lookup"
        def existing62 = new Participant(100L, 5L, 1L, 62, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceIdAndRaceNumber(5L, 62) >> Optional.of(existing62)
        def csv = "StNr;Zeit\n;01:00,00\n62;\n"

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.CLOCK)

        then:
        0 * repository.update(_)
        result.updated().isEmpty()
        result.errors().size() == 2
        result.errors()[0].reason().contains("Startnummer")
        result.errors()[1].reason().contains("Zeit")
    }

    def "exportResultsCsv writes only the result fields (no identity data) using our own field names as the header"() {
        given: "one participant with a full result, plus one with no result at all"
        def withResult = new Participant(10L, 5L, 1L, 42, 2L, 3L, 125000, null, LocalDateTime.of(2026, 8, 18, 10, 30, 0), "Ski gebrochen", DisqualificationStatus.NONE)
        def withoutResult = new Participant(11L, 5L, 2L, null, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [withResult, withoutResult]

        when:
        def lines = service.exportResultsCsv(5L).readLines()

        then: "the header carries only raceNumber/time/measuredAt/comment/status - never name/team/category/etc."
        lines[0] == "raceNumber;time;measuredAt;comment;status"
        lines[1] == "42;125000;2026-08-18T10:30;Ski gebrochen;NONE"
        lines[2] == ";;;;NONE"
    }

    def "importResultsByRaceNumber reimports exportResultsCsv's own output with no manual mapping (self-round-trip)"() {
        given: "the header exportResultsCsv would produce, reimported with the auto-suggested mapping"
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceIdAndRaceNumber(5L, 42) >> Optional.of(existing)
        repository.findById(10L) >> Optional.of(existing)
        raceService.findById(5L) >> Optional.of(race())
        personService.findById(_) >> Optional.of(person())
        repository.findByRaceIdAndPersonId(_, _) >> Optional.empty()
        repository.update(_) >> { Participant p -> p }

        def csv = "raceNumber;time;measuredAt;comment;status\n" +
                "42;125000;2026-08-18T10:30:00;Ski gebrochen;NONE\n"

        when: "no mapping is passed - it must be derivable from the header alone"
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, null, ResultTimeFormat.MILLISECONDS)

        then:
        result.errors().isEmpty()
        result.updated().size() == 1
        result.updated().first().durationMs() == 125000
        result.updated().first().measuredAt() == LocalDateTime.of(2026, 8, 18, 10, 30, 0)
        result.updated().first().comment() == "Ski gebrochen"
    }
}
