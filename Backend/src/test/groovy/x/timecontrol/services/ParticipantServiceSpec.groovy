package x.timecontrol.services

import io.micronaut.data.exceptions.DataAccessException
import io.micronaut.transaction.TransactionOperations
import spock.lang.Specification
import x.timecontrol.dto.ParticipantImportFormat
import x.timecontrol.dto.ResultTimeFormat
import x.timecontrol.dto.StartGroupAssignmentRequest
import x.timecontrol.entities.AgeGroup
import x.timecontrol.entities.Category
import x.timecontrol.entities.DisqualificationStatus
import x.timecontrol.entities.Gender
import x.timecontrol.entities.Participant
import x.timecontrol.entities.Person
import x.timecontrol.entities.Race
import x.timecontrol.entities.ResultUnit
import x.timecontrol.entities.SortDirection
import x.timecontrol.entities.StartGroupTemplate
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
    StartGroupTemplateService startGroupTemplateService = Mock()
    RankingService rankingService = new RankingService(startGroupTemplateService)
    TransactionOperations<Connection> transactionOperations = Mock()

    ParticipantService service = new ParticipantService(
            repository, ageGroupService, raceService, teamService, categoryService, personService, autoAssignService, rankingService, startGroupTemplateService, transactionOperations)

    // Mutated by individual tests instead of re-stubbing autoAssignService.isActiveFor(_)/
    // ageGroupService.findAll() with a more specific interaction - a single closure-based
    // interaction per mock method avoids the ambiguity of two equally-plausible interactions on
    // the same method (see the identical pattern/reasoning in the gaudi calculator specs'
    // knownPersons/knownTeams maps).
    boolean autoAssignActiveForRace = false
    List<AgeGroup> ageGroups = []

    def setup() {
        ageGroupService.findAll() >> { ageGroups }
        // Mirrors AgeGroupService's real isYearInAgeGroup() exactly - safe to stub globally
        // (deterministic, no per-test variation needed) unlike the mutable fields above.
        ageGroupService.isYearInAgeGroup(_, _) >> { AgeGroup ageGroup, int birthYear ->
            birthYear >= ageGroup.birthYearFrom() && birthYear <= ageGroup.birthYearTo()
        }
        autoAssignService.isActiveFor(_) >> { autoAssignActiveForRace }
        // executeWrite just runs the given callback immediately, as the real JDBC transaction manager would
        transactionOperations.executeWrite(_) >> { args -> args[0].call(null) }
    }

    private static Race race() {
        new Race(1L, "Rennen", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
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

    def "clearResult resets durationMs/penalty/measuredAt but keeps identity, comment and status"() {
        given:
        def existing = new Participant(10L, 1L, 1L, 5, 2L, 3L, 125000, 2000,
                LocalDateTime.of(2026, 1, 1, 10, 30), "Ski gebrochen", DisqualificationStatus.DNF, 7)
        repository.findById(10L) >> Optional.of(existing)

        when:
        def result = service.clearResult(10L)

        then:
        1 * repository.update(_) >> { Participant p -> p }
        result.isPresent()
        def cleared = result.get()
        cleared.raceId() == 1L
        cleared.personId() == 1L
        cleared.raceNumber() == 5
        cleared.teamId() == 2L
        cleared.categoryId() == 3L
        cleared.startSequence() == 7
        cleared.durationMs() == null
        cleared.penalty() == null
        cleared.measuredAt() == null
        cleared.comment() == "Ski gebrochen"
        cleared.status() == DisqualificationStatus.DNF
    }

    def "clearResult returns empty for an unknown participant id"() {
        given:
        repository.findById(99L) >> Optional.empty()

        when:
        def result = service.clearResult(99L)

        then:
        !result.isPresent()
        0 * repository.update(_)
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

    def "applyStartOrderFromPreviousRace reverses the top N finishers of the linked race and keeps the rest in placement order - without ever touching raceNumber"() {
        given: "run 1 (race 4) finished 1=A,2=B,3=C,4=D by time; run 2 (race 5) links to it with reverseTopCount=2"
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 2)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)
        // ageGroupService.findAll() >> [] is already stubbed once in setup() - re-stubbing it here
        // too would be a redundant, ambiguous second interaction on the same mock method.
        personService.findByIds(_) >> [:]

        def prevA = new Participant(101L, 4L, 1L, 1, null, null, 100, null, null, null)
        def prevB = new Participant(102L, 4L, 2L, 2, null, null, 200, null, null, null)
        def prevC = new Participant(103L, 4L, 3L, 3, null, null, 300, null, null, null)
        def prevD = new Participant(104L, 4L, 4L, 4, null, null, 400, null, null, null)
        repository.findByRaceId(4L) >> [prevA, prevB, prevC, prevD]

        // Bibs deliberately don't match run 1's numbers, to prove raceNumber is never derived from them.
        def targetA = new Participant(201L, 5L, 1L, 11, null, null, null, null, null, null)
        def targetB = new Participant(202L, 5L, 2L, 22, null, null, null, null, null, null)
        def targetC = new Participant(203L, 5L, 3L, 33, null, null, null, null, null, null)
        def targetD = new Participant(204L, 5L, 4L, 44, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [targetA, targetB, targetC, targetD]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, true)

        then: "top 2 (A,B) reversed to B,A; C,D keep their normal order behind them - as startSequence, not raceNumber"
        result*.personId() == [2L, 1L, 3L, 4L]
        result*.startSequence() == [1, 2, 3, 4]
        result*.raceNumber() == [22, 11, 33, 44]
    }

    def "applyStartOrderFromPreviousRace reverses per AGE GROUP, completely independent of Category - two different categories within the same age group are reversed together, and each age group is reversed on its own"() {
        given: "U21 (2000-2010) and Senior (1980-1999); within U21, A(cat 1)=rank1 and B(cat 2)=rank2; within Senior, C(cat 1)=rank1 and D(cat 2)=rank2"
        ageGroups = [
                new AgeGroup(1L, "U21", 2000, 2010, Gender.BOTH),
                new AgeGroup(2L, "Senior", 1980, 1999, Gender.BOTH),
        ]
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 15)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)

        def personA = new Person(1L, "A", "A", LocalDate.of(2005, 1, 1), Gender.MALE, null) // U21
        def personB = new Person(2L, "B", "B", LocalDate.of(2006, 1, 1), Gender.MALE, null) // U21
        def personC = new Person(3L, "C", "C", LocalDate.of(1990, 1, 1), Gender.MALE, null) // Senior
        def personD = new Person(4L, "D", "D", LocalDate.of(1985, 1, 1), Gender.MALE, null) // Senior
        personService.findByIds(_) >> [1L: personA, 2L: personB, 3L: personC, 4L: personD]

        // categoryId differs WITHIN each age group (10 vs 20) - must have zero effect on grouping.
        def prevA = new Participant(101L, 4L, 1L, 1, null, 10L, 100, null, null, null)
        def prevB = new Participant(102L, 4L, 2L, 2, null, 20L, 200, null, null, null)
        def prevC = new Participant(103L, 4L, 3L, 3, null, 10L, 150, null, null, null)
        def prevD = new Participant(104L, 4L, 4L, 4, null, 20L, 250, null, null, null)
        repository.findByRaceId(4L) >> [prevA, prevB, prevC, prevD]

        def targetA = new Participant(201L, 5L, 1L, 1, null, 10L, null, null, null, null)
        def targetB = new Participant(202L, 5L, 2L, 2, null, 20L, null, null, null, null)
        def targetC = new Participant(203L, 5L, 3L, 3, null, 10L, null, null, null, null)
        def targetD = new Participant(204L, 5L, 4L, 4, null, 20L, null, null, null, null)
        repository.findByRaceId(5L) >> [targetA, targetB, targetC, targetD]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, true)

        then: "U21 (younger/higher birthYearTo) goes first: B,A reversed; then Senior: D,C reversed - category never influenced the grouping"
        result*.personId() == [2L, 1L, 4L, 3L]
        result*.startSequence() == [1, 2, 3, 4]
    }

    def "applyStartOrderFromPreviousRace reverses per GENDER within a single mixed-gender (BOTH) age group, instead of reversing boys and girls together as one field"() {
        given: "one BOTH-gender U21 age group; by raw time A(100)=fastest overall, C(150), B(200), D(250)=slowest overall"
        ageGroups = [new AgeGroup(1L, "U21", 2000, 2010, Gender.BOTH)]
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 2)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)

        def personA = new Person(1L, "A", "A", LocalDate.of(2005, 1, 1), Gender.MALE, null)
        def personB = new Person(2L, "B", "B", LocalDate.of(2006, 1, 1), Gender.MALE, null)
        def personC = new Person(3L, "C", "C", LocalDate.of(2005, 1, 1), Gender.FEMALE, null)
        def personD = new Person(4L, "D", "D", LocalDate.of(2006, 1, 1), Gender.FEMALE, null)
        personService.findByIds(_) >> [1L: personA, 2L: personB, 3L: personC, 4L: personD]

        def prevA = new Participant(101L, 4L, 1L, 1, null, null, 100, null, null, null)
        def prevB = new Participant(102L, 4L, 2L, 2, null, null, 200, null, null, null)
        def prevC = new Participant(103L, 4L, 3L, 3, null, null, 150, null, null, null)
        def prevD = new Participant(104L, 4L, 4L, 4, null, null, 250, null, null, null)
        repository.findByRaceId(4L) >> [prevA, prevB, prevC, prevD]

        def targetA = new Participant(201L, 5L, 1L, 1, null, null, null, null, null, null)
        def targetB = new Participant(202L, 5L, 2L, 2, null, null, null, null, null, null)
        def targetC = new Participant(203L, 5L, 3L, 3, null, null, null, null, null, null)
        def targetD = new Participant(204L, 5L, 4L, 4, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [targetA, targetB, targetC, targetD]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, true)

        then: "females (C rank1, D rank2) reversed to D,C entirely before males (A rank1, B rank2) reversed to B,A - never interleaved by raw time across genders (which would have been C,A,B,D)"
        result*.personId() == [4L, 3L, 2L, 1L]
        result*.startSequence() == [1, 2, 3, 4]
    }

    def "applyStartOrderFromPreviousRace with includeUnranked=false marks the DNF participant's target counterpart DNS instead of giving it a start position, and never touches its bib"() {
        given:
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 0)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)
        // ageGroupService.findAll() >> [] is already stubbed once in setup() - re-stubbing it here
        // too would be a redundant, ambiguous second interaction on the same mock method.
        personService.findByIds(_) >> [:]

        def prevA = new Participant(101L, 4L, 1L, 1, null, null, 100, null, null, null)
        def prevDnf = new Participant(102L, 4L, 2L, 2, null, null, null, null, null, null, DisqualificationStatus.DNF)
        repository.findByRaceId(4L) >> [prevA, prevDnf]

        def targetA = new Participant(201L, 5L, 1L, 7, null, null, null, null, null, null)
        def targetDnf = new Participant(202L, 5L, 2L, 8, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [targetA, targetDnf]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, false)

        then: "the ranked participant gets a start position; the DNF one is marked DNS with no start position - bibs 7/8 stay exactly as they were"
        def a = result.find { it.personId() == 1L }
        a.startSequence() == 1
        a.raceNumber() == 7
        a.status() == DisqualificationStatus.NONE
        def dnf = result.find { it.personId() == 2L }
        dnf.startSequence() == null
        dnf.raceNumber() == 8
        dnf.status() == DisqualificationStatus.DNS
    }

    def "applyStartOrderFromPreviousRace with includeUnranked=false never collides a stale startSequence with a freshly assigned one, and always leaves raceNumber untouched"() {
        given: "B is DNF and excluded, but still holds a stale start_sequence=1 in the target race - the same slot A's re-ranking (place 1) would want to claim"
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 0)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)
        // ageGroupService.findAll() >> [] is already stubbed once in setup() - re-stubbing it here
        // too would be a redundant, ambiguous second interaction on the same mock method.
        personService.findByIds(_) >> [:]

        def prevA = new Participant(101L, 4L, 1L, 3, null, null, 100, null, null, null)
        def prevB = new Participant(102L, 4L, 2L, 1, null, null, null, null, null, null, DisqualificationStatus.DNF)
        def prevC = new Participant(103L, 4L, 3L, 2, null, null, 200, null, null, null)
        repository.findByRaceId(4L) >> [prevA, prevB, prevC]

        def targetA = new Participant(201L, 5L, 1L, 10, null, null, null, null, null, null, DisqualificationStatus.NONE, 2)
        def targetB = new Participant(202L, 5L, 2L, 20, null, null, null, null, null, null, DisqualificationStatus.NONE, 1)
        def targetC = new Participant(203L, 5L, 3L, 30, null, null, null, null, null, null, DisqualificationStatus.NONE, null)
        repository.findByRaceId(5L) >> [targetA, targetB, targetC]

        // Simulates the real DB's UNIQUE(race_id, start_sequence) index, like the assignRaceNumbers
        // re-shuffling test above - this is what would have caught the original collision bug.
        def heldSequenceByParticipantId = [201L: 2, 202L: 1, 203L: null]
        repository.update(_ as Participant) >> { Participant p ->
            if (p.startSequence() != null) {
                def conflict = heldSequenceByParticipantId.find { id, seq -> seq == p.startSequence() && id != p.id() }
                if (conflict) {
                    throw new RuntimeException("UNIQUE constraint failed: participant.race_id, participant.start_sequence")
                }
            }
            heldSequenceByParticipantId[p.id()] = p.startSequence()
            return p
        }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, false)

        then:
        noExceptionThrown()
        def a = result.find { it.personId() == 1L }
        a.startSequence() == 1
        a.raceNumber() == 10
        def c = result.find { it.personId() == 3L }
        c.startSequence() == 2
        c.raceNumber() == 30
        def b = result.find { it.personId() == 2L }
        b.startSequence() == null
        b.raceNumber() == 20
        b.status() == DisqualificationStatus.DNS
    }

    def "applyStartOrderFromPreviousRace puts participants with no matching age group in their own block, after every real age group"() {
        given: "only A (born 2005) matches the one defined age group; B (born 1970) matches none"
        ageGroups = [new AgeGroup(1L, "U21", 2000, 2010, Gender.BOTH)]
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 15)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)

        def personA = new Person(1L, "A", "A", LocalDate.of(2005, 1, 1), Gender.MALE, null)
        def personB = new Person(2L, "B", "B", LocalDate.of(1970, 1, 1), Gender.MALE, null)
        personService.findByIds(_) >> [1L: personA, 2L: personB]

        def prevA = new Participant(101L, 4L, 1L, 1, null, null, 100, null, null, null)
        def prevB = new Participant(102L, 4L, 2L, 2, null, null, 200, null, null, null)
        repository.findByRaceId(4L) >> [prevA, prevB]

        def targetA = new Participant(201L, 5L, 1L, 1, null, null, null, null, null, null)
        def targetB = new Participant(202L, 5L, 2L, 2, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [targetA, targetB]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, true)

        then: "A (in the U21 block) starts before B (in the no-age-group block), even though B was ranked ahead of nobody to reverse against - each block is reversed independently"
        result*.personId() == [1L, 2L]
        result*.startSequence() == [1, 2]
    }

    def "applyStartOrderFromPreviousRace keeps participants tied for the same place together across the reversal boundary"() {
        given: "X=place1, Y and Z tied for place2 (identical time) - reverseTopCount=2 must not split Y from Z"
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 2)
        def race4 = new Race(4L, "Lauf 1", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, null, null, null)
        raceService.findById(5L) >> Optional.of(race5)
        raceService.findById(4L) >> Optional.of(race4)
        // ageGroupService.findAll() >> [] is already stubbed once in setup() - re-stubbing it here
        // too would be a redundant, ambiguous second interaction on the same mock method.
        personService.findByIds(_) >> [:]

        def prevX = new Participant(101L, 4L, 1L, 1, null, null, 100, null, null, null)
        def prevY = new Participant(102L, 4L, 2L, 2, null, null, 200, null, null, null)
        def prevZ = new Participant(103L, 4L, 3L, 3, null, null, 200, null, null, null)
        repository.findByRaceId(4L) >> [prevX, prevY, prevZ]

        def targetX = new Participant(201L, 5L, 1L, 1, null, null, null, null, null, null)
        def targetY = new Participant(202L, 5L, 2L, 2, null, null, null, null, null, null)
        def targetZ = new Participant(203L, 5L, 3L, 3, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [targetX, targetY, targetZ]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartOrderFromPreviousRace(5L, true)

        then: "all three (X, and the tied Y/Z) are reversed together: Z, Y, X"
        result*.personId() == [3L, 2L, 1L]
        result*.startSequence() == [1, 2, 3]
        result*.raceNumber() == [3, 2, 1]
    }

    def "applyStartOrderFromPreviousRace rejects a race with no linked previous race"() {
        given:
        raceService.findById(5L) >> Optional.of(race())

        when:
        service.applyStartOrderFromPreviousRace(5L, true)

        then:
        thrown(IllegalArgumentException)
    }

    def "applyStartOrderFromPreviousRace refuses to run while live auto-assign is active for this race"() {
        given:
        def race5 = new Race(5L, "Lauf 2", LocalDate.of(2026, 1, 1), null, null, null, null, null, null,
                null, null, null, ResultUnit.TIME, null, SortDirection.ASC, null, 4L, null, 15)
        raceService.findById(5L) >> Optional.of(race5)
        autoAssignActiveForRace = true

        when:
        service.applyStartOrderFromPreviousRace(5L, true)

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
    }

    def "applyStartGroupAssignment sets startGroupId and startSequence for the listed participants"() {
        given:
        def p1 = new Participant(1L, 5L, 1L, 10, null, null, null, null, null, null)
        def p2 = new Participant(2L, 5L, 2L, 20, null, null, null, null, null, null)
        repository.findByIdIn(_) >> [p1, p2]
        startGroupTemplateService.findByIds(_) >> [7L: new StartGroupTemplate(7L, "Grün", "#92D050", 0, null)]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.applyStartGroupAssignment(5L, [
                new StartGroupAssignmentRequest.Entry(1L, 7L, 1),
                new StartGroupAssignmentRequest.Entry(2L, 7L, 2),
        ])

        then:
        result*.id() == [1L, 2L]
        result*.startGroupId() == [7L, 7L]
        result*.startSequence() == [1, 2]
    }

    def "applyStartGroupAssignment rejects a participant that does not belong to this race"() {
        given:
        def other = new Participant(9L, 6L, 1L, 10, null, null, null, null, null, null)
        repository.findByIdIn(_) >> [other]

        when:
        service.applyStartGroupAssignment(5L, [new StartGroupAssignmentRequest.Entry(9L, null, 1)])

        then:
        thrown(IllegalArgumentException)
        0 * repository.update(_)
    }

    def "applyStartGroupAssignment rejects an unknown start-group template id"() {
        given:
        def p1 = new Participant(1L, 5L, 1L, 10, null, null, null, null, null, null)
        repository.findByIdIn(_) >> [p1]
        startGroupTemplateService.findByIds(_) >> [:]

        when:
        service.applyStartGroupAssignment(5L, [new StartGroupAssignmentRequest.Entry(1L, 99L, 1)])

        then:
        thrown(IllegalArgumentException)
        0 * repository.update(_)
    }

    def "generateRaceNumbersFromStartGroups orders purely by startSequence, never consulting the group template's own position"() {
        given: "group A's template position (0) is lower than group B's (1), but A was reordered to start LATER on the board, so its members carry the higher startSequence values - the board itself, not the template, is the source of truth for a race's group order (see applyStartGroupAssignment)"
        def pA1 = new Participant(1L, 5L, 1L, null, null, null, null, null, null, null, null, 4, 10L)
        def pA2 = new Participant(2L, 5L, 2L, null, null, null, null, null, null, null, null, 5, 10L)
        def pB1 = new Participant(3L, 5L, 3L, null, null, null, null, null, null, null, null, 1, 20L)
        def pB2 = new Participant(4L, 5L, 4L, null, null, null, null, null, null, null, null, 2, 20L)
        def pUnassigned = new Participant(5L, 5L, 5L, 99, null, null, null, null, null, null, null, null, null)
        repository.findByRaceId(5L) >> [pA1, pA2, pB1, pB2, pUnassigned]
        repository.update(_ as Participant) >> { Participant p -> p }

        when:
        def result = service.generateRaceNumbersFromStartGroups(5L)

        then: "group B's participants (startSequence 1,2) get the lowest race numbers, then group A's (4,5); the unassigned participant (no startSequence) lands last"
        result*.id() == [3L, 4L, 1L, 2L, 5L]
        result*.raceNumber() == [1, 2, 3, 4, 5]
        0 * startGroupTemplateService.findByIds(_)
    }

    def "generateRaceNumbersFromStartGroups refuses when the race already has results"() {
        given:
        def p1 = new Participant(1L, 5L, 1L, null, null, null, 12345, null, null, null)
        repository.findByRaceId(5L) >> [p1]

        when:
        service.generateRaceNumbersFromStartGroups(5L)

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
    }

    def "copyStartGroupAssignment copies group and sequence matched by person, leaving an unmatched target participant untouched"() {
        given:
        raceService.findById(5L) >> Optional.of(race())
        raceService.findById(6L) >> Optional.of(race())
        def source1 = new Participant(1L, 5L, 100L, null, null, null, null, null, null, null, null, 1, 7L)
        repository.findByRaceId(5L) >> [source1]
        def target1 = new Participant(2L, 6L, 100L, null, null, null, null, null, null, null, null, null, null)
        def targetUnmatched = new Participant(3L, 6L, 200L, null, null, null, null, null, null, null, null, 5, 9L)
        repository.findByRaceId(6L) >> [target1, targetUnmatched]

        when:
        def result = service.copyStartGroupAssignment(5L, [6L])

        then: "target1 (matching person) gets source1's group/sequence; targetUnmatched (no matching person) is never written"
        1 * repository.updateAll({ List<Participant> list -> list.size() == 1 && list[0].id() == 2L && list[0].startGroupId() == 7L && list[0].startSequence() == 1 }) >> { args -> args[0] }
        0 * repository.updateAll({ List<Participant> list -> list.any { it.id() == 3L } })

        and: "every target-race participant is returned, matched or not, so the frontend can refresh its full participant list"
        result*.id() as Set == [2L, 3L] as Set
    }

    def "copyStartGroupAssignment clears an unmatched target participant's own startSequence when it collides with a value being copied in, instead of failing on the unique index"() {
        given: "the target race already has an unrelated participant (person 200, not in the source race) sitting on startSequence 1 - the exact value about to be copied in for the matched person 100"
        raceService.findById(5L) >> Optional.of(race())
        raceService.findById(6L) >> Optional.of(race())
        def source1 = new Participant(1L, 5L, 100L, null, null, null, null, null, null, null, null, 1, 7L)
        repository.findByRaceId(5L) >> [source1]
        def target1 = new Participant(2L, 6L, 100L, null, null, null, null, null, null, null, null, null, null)
        def targetColliding = new Participant(3L, 6L, 200L, null, null, null, null, null, null, null, null, 1, null)
        repository.findByRaceId(6L) >> [target1, targetColliding]

        when:
        def result = service.copyStartGroupAssignment(5L, [6L])

        then: "the colliding participant's stale startSequence is cleared (not left at 1) before target1 is written with the copied startSequence 1"
        1 * repository.updateAll({ List<Participant> list -> list.size() == 1 && list[0].id() == 3L && list[0].startSequence() == null }) >> { args -> args[0] }
        1 * repository.updateAll({ List<Participant> list -> list.size() == 1 && list[0].id() == 2L && list[0].startGroupId() == 7L && list[0].startSequence() == 1 }) >> { args -> args[0] }

        and: "the returned list reflects the cleared value too, not the stale pre-clear startSequence of 1"
        result.find { it.id() == 3L }.startSequence() == null
        result*.id() as Set == [2L, 3L] as Set
    }

    def "copyStartGroupAssignment also drops a colliding unmatched participant's start group, not just its startSequence"() {
        given: "the colliding participant (person 200) sits in group 9 on startSequence 1"
        raceService.findById(5L) >> Optional.of(race())
        raceService.findById(6L) >> Optional.of(race())
        def source1 = new Participant(1L, 5L, 100L, null, null, null, null, null, null, null, null, 1, 7L)
        repository.findByRaceId(5L) >> [source1]
        def target1 = new Participant(2L, 6L, 100L, null, null, null, null, null, null, null, null, null, null)
        def targetColliding = new Participant(3L, 6L, 200L, null, null, null, null, null, null, null, null, 1, 9L)
        repository.findByRaceId(6L) >> [target1, targetColliding]
        repository.updateAll(_) >> { args -> args[0] }

        when:
        def result = service.copyStartGroupAssignment(5L, [6L])

        then:
        def colliding = result.find { it.id() == 3L }
        colliding.startSequence() == null
        colliding.startGroupId() == null
    }

    def "applyStartGroupAssignment refuses while auto-assign is active for the race"() {
        given:
        autoAssignActiveForRace = true

        when:
        service.applyStartGroupAssignment(5L, [new StartGroupAssignmentRequest.Entry(1L, null, 1)])

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
    }

    def "copyStartGroupAssignment refuses while auto-assign is active for a target race"() {
        given:
        autoAssignActiveForRace = true
        raceService.findById(5L) >> Optional.of(race())
        raceService.findById(6L) >> Optional.of(race())

        when:
        service.copyStartGroupAssignment(5L, [6L])

        then:
        thrown(IllegalStateException)
        0 * repository.updateAll(_)
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
        repository.findByRaceId(5L) >> [existing61, existing63]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "IDX;Name;Team;End Time\n" +
                "1;61;;01:23,68\n" +
                "2;63;;DNF\n" +
                "3;999;;00:10,00\n"

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null,
                [raceNumber: "Name", time: "End Time"], ResultTimeFormat.CLOCK, ResultUnit.TIME)

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
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        expect:
        def resultSeconds = service.importResultsByRaceNumber(5L, "StNr;Zeit\n61;83.68\n".getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.SECONDS, ResultUnit.TIME)
        resultSeconds.updated().first().durationMs() == 83680
        resultSeconds.errors().isEmpty()

        def resultMillis = service.importResultsByRaceNumber(5L, "StNr;Zeit\n61;83680\n".getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)
        resultMillis.updated().first().durationMs() == 83680
        resultMillis.errors().isEmpty()
    }

    def "importResultsByRaceNumber's SECONDS format keeps millisecond precision on long durations (no float rounding)"() {
        given: "a duration past the point where 32-bit float precision would already start dropping digits (~10h)"
        def existing = new Participant(100L, 5L, 1L, 61, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        when:
        def result = service.importResultsByRaceNumber(5L, "StNr;Zeit\n61;35999.99\n".getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.SECONDS, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().first().durationMs() == 35999990
    }

    def "importResultsByRaceNumber reports a missing race number or time instead of guessing"() {
        given: "row 2's race number does exist, so the row reaches (and fails) the time check rather than the race-number lookup"
        def existing62 = new Participant(100L, 5L, 1L, 62, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing62]
        def csv = "StNr;Zeit\n;01:00,00\n62;\n"

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null,
                [raceNumber: "StNr", time: "Zeit"], ResultTimeFormat.CLOCK, ResultUnit.TIME)

        then:
        0 * repository.updateAll(_)
        result.updated().isEmpty()
        result.errors().size() == 2
        result.errors()[0].reason().contains("raceNumber")
        result.errors()[1].reason().contains("time")
    }

    def "importResultsByRaceNumber treats an explicitly empty mapping as 'map nothing', not as 'use the auto-suggested mapping'"() {
        given: "a header that would auto-suggest raceNumber/time on its own - but the caller passes an empty (not null) mapping"
        def existing = new Participant(100L, 5L, 1L, 61, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]

        when:
        def result = service.importResultsByRaceNumber(5L, "raceNumber;time\n61;83680\n".getBytes("UTF-8"), null,
                [:], ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then: "every row fails for lack of a raceNumber mapping instead of silently using the auto-suggested one"
        0 * repository.updateAll(_)
        result.updated().isEmpty()
        result.errors().size() == 1
        result.errors()[0].reason().contains("raceNumber")
    }

    def "exportResultsCsv writes result fields plus informational identity fields (including the computed ageGroup), sorted ascending by raceNumber"() {
        given: "one participant with a full result and a matching AgeGroup, plus one with no result, no raceNumber and no matching AgeGroup"
        def withResult = new Participant(10L, 5L, 1L, 42, 2L, 3L, 125000, 5000, LocalDateTime.of(2026, 8, 18, 10, 30, 0), "Ski gebrochen", DisqualificationStatus.NONE)
        def withoutResult = new Participant(11L, 5L, 2L, null, null, null, null, null, null, null, DisqualificationStatus.NONE)
        def person1 = new Person(1L, "Max", "Mustermann", LocalDate.of(1990, 1, 1), Gender.MALE, "EXT-1")
        def person2 = new Person(2L, "Erika", "Musterfrau", LocalDate.of(1991, 1, 1), Gender.FEMALE, null)
        repository.findByRaceId(5L) >> [withResult, withoutResult]
        personService.findByIds([1L, 2L] as Set) >> [1L: person1, 2L: person2]
        teamService.findByIds([2L] as Set) >> [2L: new Team(2L, "TEAM A")]
        categoryService.findByIds(_ as Set) >> [:]
        raceService.findByIds(_ as Set) >> [:]
        ageGroups = [new AgeGroup(1L, "Herren Elite", 1985, 2000, Gender.MALE)]

        when:
        def lines = service.exportResultsCsv(5L, ResultUnit.TIME).readLines()

        then: "the header carries raceNumber + informational identity fields (incl. ageGroup) + the result fields, and time/value/penalty are human-readable clock strings; a NONE status is blank, not the literal word"
        lines[0] == "raceNumber;lastName;firstName;team;ageGroup;externalId;time/value;penalty;comment;status"
        lines[1] == "42;Mustermann;Max;TEAM A;Herren Elite;EXT-1;2:05.000;0:05.000;Ski gebrochen;"
        lines[2] == ";Musterfrau;Erika;;;;;;;"
    }

    def "exportResultsCsv writes plain decimals for a POINTS race and does not NPE on a participant with a null status"() {
        given: "status is @Nullable on the entity - a legacy row predating the status column could have one"
        def noStatus = new Participant(10L, 5L, 1L, 42, null, null, 8550, null, null, null, null)
        def person = new Person(1L, "Max", "Mustermann", LocalDate.of(1990, 1, 1), Gender.MALE, null)
        repository.findByRaceId(5L) >> [noStatus]
        personService.findByIds(_ as Set) >> [1L: person]
        teamService.findByIds(_ as Set) >> [:]
        categoryService.findByIds(_ as Set) >> [:]
        raceService.findByIds(_ as Set) >> [:]

        expect:
        service.exportResultsCsv(5L, ResultUnit.POINTS).readLines()[1] == "42;Mustermann;Max;;;;85.50;;;"
    }

    def "exportResultsCsv writes DNF/DNS/DSQ as the literal word, not blank"() {
        given:
        def dsq = new Participant(10L, 5L, 1L, 42, null, null, null, null, null, null, DisqualificationStatus.DSQ)
        def person = new Person(1L, "Max", "Mustermann", LocalDate.of(1990, 1, 1), Gender.MALE, null)
        repository.findByRaceId(5L) >> [dsq]
        personService.findByIds(_ as Set) >> [1L: person]
        teamService.findByIds(_ as Set) >> [:]
        categoryService.findByIds(_ as Set) >> [:]
        raceService.findByIds(_ as Set) >> [:]

        expect:
        service.exportResultsCsv(5L, ResultUnit.TIME).readLines()[1] == "42;Mustermann;Max;;;;;;;DSQ"
    }

    def "importResultsByRaceNumber reimports exportResultsCsv's own output with no manual mapping (self-round-trip)"() {
        given: "the header exportResultsCsv would produce, reimported with the auto-suggested mapping"
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "raceNumber;lastName;firstName;team;ageGroup;externalId;time/value;penalty;comment;status\n" +
                "42;Mustermann;Max;;Herren Elite;;2:05.000;0:05.000;Ski gebrochen;\n"

        when: "no mapping is passed - it must be derivable from the header alone, and the informational identity columns (including ageGroup) are ignored"
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, null, ResultTimeFormat.CLOCK, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().size() == 1
        result.updated().first().durationMs() == 125000
        result.updated().first().penalty() == 5000
        result.updated().first().comment() == "Ski gebrochen"
        result.updated().first().status() == DisqualificationStatus.NONE
    }

    def "importResultsByRaceNumber treats a mapped-but-blank status cell as an explicit NONE, undoing a previous DSQ/DNF/DNS"() {
        given: "the status column IS mapped, so a blank cell is an explicit 'gewertet' rather than 'leave untouched'"
        def existing = new Participant(10L, 5L, 1L, 42, null, null, null, null, null, null, DisqualificationStatus.DSQ)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "raceNumber;time;status\n42;120000;\n"
        def mapping = [raceNumber: "raceNumber", time: "time", status: "status"]

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().first().status() == DisqualificationStatus.NONE
    }

    def "importResultsByRaceNumber leaves status untouched when the status column isn't mapped at all"() {
        given: "no 'status' key in mapping at all - as opposed to mapped-but-blank, this must not touch the existing DSQ"
        def existing = new Participant(10L, 5L, 1L, 42, null, null, null, null, null, null, DisqualificationStatus.DSQ)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "raceNumber;time\n42;120000\n"
        def mapping = [raceNumber: "raceNumber", time: "time"]

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().first().status() == DisqualificationStatus.DSQ
    }

    def "importResultsByRaceNumber reports an unrecognized status value as a row error instead of silently dropping it"() {
        given:
        def existing = new Participant(10L, 5L, 1L, 42, null, null, null, null, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]

        def csv = "raceNumber;time;status\n42;120000;VERLETZT\n"
        def mapping = [raceNumber: "raceNumber", time: "time", status: "status"]

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then:
        0 * repository.updateAll(_)
        result.updated().isEmpty()
        result.errors().size() == 1
        result.errors()[0].reason().contains("status")
    }

    def "importResultsByRaceNumber stamps measuredAt with the import's own timestamp on every updated row"() {
        given: "there is no measuredAt column to map any more - every touched row is stamped with 'now' instead"
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, null, LocalDateTime.of(2020, 1, 1, 0, 0), null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        when:
        def result = service.importResultsByRaceNumber(5L, "raceNumber;time\n42;120000\n".getBytes("UTF-8"), null,
                [raceNumber: "raceNumber", time: "time"], ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().first().measuredAt().isAfter(LocalDateTime.of(2020, 1, 1, 0, 0))
    }

    def "importResultsByRaceNumber reads time/value and penalty as plain decimals for a POINTS race, ignoring timeFormat"() {
        given:
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, 1000, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "raceNumber;time;penalty\n42;85,50;2,00\n"
        def mapping = [raceNumber: "raceNumber", time: "time", penalty: "penalty"]

        when: "timeFormat is MILLISECONDS, but the race is POINTS - the decimal reading must win"
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.POINTS)

        then:
        result.errors().isEmpty()
        result.updated().first().durationMs() == 8550
        result.updated().first().penalty() == 200
    }

    def "importResultsByRaceNumber rejects a negative penalty instead of letting it floor to 0 in ranking"() {
        given:
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, 1000, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]

        def csv = "raceNumber;time;penalty\n42;120000;-500\n"
        def mapping = [raceNumber: "raceNumber", time: "time", penalty: "penalty"]

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then: "the row is rejected and the participant's existing penalty is left untouched"
        result.updated().isEmpty()
        result.errors().size() == 1
        result.errors()[0].reason().contains("penalty")
        0 * repository.updateAll(_)
    }

    def "importResultsByRaceNumber leaves penalty unchanged when the column isn't mapped"() {
        given:
        def existing = new Participant(10L, 5L, 1L, 42, null, null, 999, 1500, null, null, DisqualificationStatus.NONE)
        repository.findByRaceId(5L) >> [existing]
        repository.updateAll(_) >> { List<Participant> list -> list }

        def csv = "raceNumber;time\n42;120000\n"
        def mapping = [raceNumber: "raceNumber", time: "time"]

        when:
        def result = service.importResultsByRaceNumber(5L, csv.getBytes("UTF-8"), null, mapping, ResultTimeFormat.MILLISECONDS, ResultUnit.TIME)

        then:
        result.errors().isEmpty()
        result.updated().first().penalty() == 1500
    }
}
