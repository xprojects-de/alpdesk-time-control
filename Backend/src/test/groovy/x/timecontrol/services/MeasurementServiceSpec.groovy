package x.timecontrol.services

import jakarta.transaction.Transactional
import spock.lang.Specification
import x.timecontrol.entities.Measurement
import x.timecontrol.repositories.MeasurementRepository

import java.time.LocalDateTime

class MeasurementServiceSpec extends Specification {

    MeasurementRepository repository = Mock()
    MeasurementTableLock measurementTableLock = new MeasurementTableLock()

    MeasurementService service = new MeasurementService(repository, measurementTableLock)

    private static final LocalDateTime NOW = LocalDateTime.of(2026, 1, 1, 10, 0)

    private static Measurement measurement(Long id, Long deviceMeasurementId, Long participantId = null) {
        new Measurement(id, deviceMeasurementId, participantId, 5000, NOW, false, null)
    }

    def "create leaves an explicit deviceMeasurementId untouched"() {
        given:
        Measurement input = measurement(null, 17L)
        repository.findByDeviceMeasurementId(17L) >> Optional.empty()

        when:
        service.create(input)

        then:
        0 * repository.findMinDeviceMeasurementId()
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == 17L }) >> measurement(1L, 17L)
    }

    def "create rejects an explicit deviceMeasurementId that is already taken"() {
        given:
        Measurement input = measurement(null, 17L)
        repository.findByDeviceMeasurementId(17L) >> Optional.of(measurement(9L, 17L))

        when:
        service.create(input)

        then:
        thrown(IllegalStateException)
        0 * repository.save(_)
    }

    def "create synthesizes -1 when no deviceMeasurementId is given and the table is empty"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> null
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -1L }) >> measurement(1L, -1L)
    }

    def "create synthesizes one below the lowest existing negative id"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> -3L
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -4L }) >> measurement(1L, -4L)
    }

    def "create synthesizes -1 when only positive (real device) ids exist yet"() {
        given:
        Measurement input = measurement(null, null)

        when:
        service.create(input)

        then:
        1 * repository.findMinDeviceMeasurementId() >> 5L
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -1L }) >> measurement(1L, -1L)
    }

    def "create rejects a participantId already assigned to another measurement"() {
        given:
        Measurement input = measurement(null, 5L, 42L)
        repository.findByDeviceMeasurementId(5L) >> Optional.empty()
        repository.findByParticipantId(42L) >> [measurement(9L, 3L, 42L)]

        when:
        service.create(input)

        then:
        thrown(IllegalStateException)
        0 * repository.save(_)
    }

    def "create allows a participantId with no existing assignment"() {
        given:
        Measurement input = measurement(null, 5L, 42L)
        repository.findByDeviceMeasurementId(5L) >> Optional.empty()
        repository.findByParticipantId(42L) >> []

        when:
        service.create(input)

        then:
        1 * repository.save(_) >> measurement(1L, 5L, 42L)
    }

    def "update rejects a participantId already assigned to a different measurement"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L))
        repository.findByParticipantId(42L) >> [measurement(2L, 6L, 42L)]

        when:
        service.update(1L, measurement(null, null, 42L))

        then:
        thrown(IllegalStateException)
        0 * repository.update(_)
    }

    def "update allows re-saving the measurement's own already-assigned participantId"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L, 42L))
        repository.findByParticipantId(42L) >> [measurement(1L, 5L, 42L)]

        when:
        service.update(1L, measurement(null, null, 42L))

        then:
        1 * repository.update(_) >> measurement(1L, 5L, 42L)
    }

    def "update stores lock and comment and keeps the device number"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L))

        when: "the operator corrects the time, locks the row and notes why"
        service.update(1L, new Measurement(null, null, null, 48200, NOW, true, "Zeitnahme falsch"))

        then:
        1 * repository.update({ Measurement m ->
            m.id() == 1L && m.deviceMeasurementId() == 5L && m.durationMs() == 48200 &&
                    m.locked() && m.comment() == "Zeitnahme falsch"
        }) >> { Measurement m -> m }
    }

    def "a locked measurement can still be edited and unlocked by hand"() {
        given: "the lock keeps automation out, not the operator"
        repository.findById(1L) >> Optional.of(new Measurement(1L, 5L, null, 48200, NOW, true, "Zeitnahme falsch"))

        when:
        service.update(1L, new Measurement(null, null, null, 48300, NOW, false, null))

        then:
        1 * repository.update({ Measurement m -> m.durationMs() == 48300 && !m.locked() && m.comment() == null }) >> { Measurement m -> m }
    }

    def "create stores lock and comment of a manually entered measurement"() {
        given:
        repository.findMinDeviceMeasurementId() >> null

        when:
        service.create(new Measurement(null, null, null, 5000, NOW, true, "von Hand gestoppt"))

        then:
        1 * repository.save({ Measurement m -> m.locked() && m.comment() == "von Hand gestoppt" && m.deviceMeasurementId() == -1L }) >> { Measurement m -> m }
    }

    def "the comment is stored as #stored when given as #description"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L))

        when:
        service.update(1L, new Measurement(null, null, null, 5000, NOW, false, given))

        then:
        1 * repository.update({ Measurement m -> m.comment() == stored }) >> { Measurement m -> m }

        where:
        description               | given                         || stored
        "null"                    | null                          || null
        "empty"                   | ""                            || null
        "blank"                   | "   "                         || null
        "padded"                  | "  Zeitnahme falsch \n"       || "Zeitnahme falsch"
        "exactly the max length"  | "x" * MeasurementService.COMMENT_MAX_LENGTH || "x" * MeasurementService.COMMENT_MAX_LENGTH
    }

    def "a comment longer than the maximum is rejected on #operation"() {
        given:
        repository.findById(1L) >> Optional.of(measurement(1L, 5L))
        String tooLong = "x" * (MeasurementService.COMMENT_MAX_LENGTH + 1)

        when:
        call(service, new Measurement(null, null, null, 5000, NOW, false, tooLong))

        then:
        thrown(IllegalArgumentException)
        0 * repository.save(_)
        0 * repository.update(_)

        where:
        operation | call
        "create"  | { MeasurementService s, Measurement m -> s.create(m) }
        "update"  | { MeasurementService s, Measurement m -> s.update(1L, m) }
    }

    private static byte[] csv(String content) {
        content.getBytes("UTF-8")
    }

    def "exportCsv writes the device number, and an empty cell for a synthetic one"() {
        given:
        repository.findAll() >> [measurement(1L, 17L, 42L), measurement(2L, -3L, null)]

        when:
        String csv = service.exportCsv()

        then:
        csv.readLines() == [
                "deviceMeasurementId;participantId;durationMs;measuredAt",
                "17;42;5000;2026-01-01T10:00",
                ";;5000;2026-01-01T10:00",
        ]
    }

    def "importMapped restores the device number from our own export"() {
        given:
        byte[] file = csv("""deviceMeasurementId;participantId;durationMs;measuredAt
17;42;5000;2026-01-01T10:00
""")
        repository.findByDeviceMeasurementId(17L) >> Optional.empty()
        repository.findByParticipantId(42L) >> []

        when:
        def result = service.importMapped(file, null as Character, null)

        then:
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == 17L }) >> measurement(1L, 17L, 42L)
        result.errors().isEmpty()
        result.imported().size() == 1
    }

    def "importMapped generates a synthetic id for #description"() {
        given:
        byte[] file = csv("deviceMeasurementId;durationMs\n${rawValue};5000\n")
        repository.findMinDeviceMeasurementId() >> null

        when:
        def result = service.importMapped(file, null as Character, null)

        then:
        1 * repository.save({ Measurement m -> m.deviceMeasurementId() == -1L }) >> measurement(1L, -1L)
        result.errors().isEmpty()

        where:
        rawValue | description
        ""       | "an empty device number"
        "-"      | "the '-' the UI prints for a device-less row"
        "-3"     | "an exported negative (synthetic) id"
        "0"      | "a zero, which no real device counter ever is"
    }

    def "importMapped reports a row whose device number is already taken"() {
        given:
        byte[] file = csv("deviceMeasurementId;durationMs\n17;5000\n")
        repository.findByDeviceMeasurementId(17L) >> Optional.of(measurement(9L, 17L))

        when:
        def result = service.importMapped(file, null as Character, null)

        then:
        0 * repository.save(_)
        result.imported().isEmpty()
        result.errors().size() == 1
        result.errors().first().reason().contains("17")
    }

    def "importMapped reports a non-numeric device number"() {
        given:
        byte[] file = csv("deviceMeasurementId;durationMs\nabc;5000\n")

        when:
        def result = service.importMapped(file, null as Character, null)

        then:
        0 * repository.save(_)
        result.errors().size() == 1
        result.errors().first().reason() == "deviceMeasurementId is not a valid number"
    }

    def "clearing the table with device reset resets the device only after the table was cleared"() {
        given:
        TimingDataImporter device = Mock()

        when:
        service.deleteAllAndResetDevice(device)

        then:
        1 * repository.deleteAll()
        1 * repository.resetSequence()

        then:
        1 * device.resetDevice() >> true
    }

    def "a failing delete never reaches the device"() {
        given:
        TimingDataImporter device = Mock()
        repository.deleteAll() >> { throw new RuntimeException("database is locked") }

        when:
        service.deleteAllAndResetDevice(device)

        then:
        thrown(RuntimeException)
        0 * device.resetDevice()
    }

    def "a device that does not confirm the reset fails the delete, so its transaction rolls back"() {
        given:
        TimingDataImporter device = Stub() {
            resetDevice() >> false
        }

        when:
        service.deleteAllAndResetDevice(device)

        then:
        DeviceResetFailedException e = thrown()
        e.message == "Failed to reset device. Database was not modified."
        MeasurementService.getMethod("deleteAllAndResetDevice", TimingDataImporter).isAnnotationPresent(Transactional)
    }
}
