package x.timecontrol.services

import spock.lang.Specification
import x.timecontrol.entities.Measurement

import java.time.LocalDateTime

/**
 * The single write path from any timing device into the measurement table. What used to be decided
 * per provider is decided here once, so these rules hold for a device that is polled and for one
 * that pushes: dedup against what is stored, keep the stored row's participant/timestamp, reject a
 * negative duration, and don't write into a table a reset is currently clearing.
 */
class TimingEventSinkSpec extends Specification {

    MeasurementService measurementService = Mock()
    DeviceImportGate importGate = new DeviceImportGate()

    TimingEventSink sink = new TimingEventSink(measurementService, new MeasurementTableLock(), importGate)

    static final LocalDateTime MEASURED_AT = LocalDateTime.of(2026, 1, 2, 10, 0, 0)

    def setup() {
        // The state during a race: the operator has automatic import switched on. It gates pushed
        // measurements only (see the two features at the end), never a poll response.
        importGate.setScheduledImportActive(true)
    }

    def "an event matching the stored row is reported back but not written again"() {
        given:
        measurementService.findAll() >> [new Measurement(7L, 1L, 42L, 50000, MEASURED_AT)]

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)])

        then:
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        accepted.size() == 1
        accepted[0].id() == 7L
    }

    def "a changed duration keeps the stored row's participant and timestamp"() {
        given:
        measurementService.findAll() >> [new Measurement(7L, 1L, 42L, 50000, MEASURED_AT)]

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 51500)])

        then:
        1 * measurementService.upsertByDeviceMeasurementId(1L, 42L, 51500, MEASURED_AT) >>
                new Measurement(7L, 1L, 42L, 51500, MEASURED_AT)
        accepted[0].durationMs() == 51500
    }

    def "a participant the event carries is only used for a device id that is not stored yet"() {
        given: "the stored row was corrected by hand to participant 42, the pushing device still says 99"
        measurementService.findAll() >> [new Measurement(7L, 1L, 42L, 50000, MEASURED_AT)]

        when:
        sink.acceptBatch([new TimingEvent(1L, 51500, MEASURED_AT, 99L)])

        then: "the manual correction survives - a re-delivered measurement must not undo it"
        1 * measurementService.upsertByDeviceMeasurementId(1L, 42L, 51500, MEASURED_AT) >>
                new Measurement(7L, 1L, 42L, 51500, MEASURED_AT)
    }

    def "an event without a device id is inserted instead of upserted"() {
        when:
        def accepted = sink.accept(TimingEvent.withoutDeviceId(33000, MEASURED_AT, 42L))

        then: "no device id to upsert against - MeasurementService generates a synthetic one"
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        1 * measurementService.create({ Measurement m ->
            m.deviceMeasurementId() == null && m.participantId() == 42L && m.durationMs() == 33000
        }) >> new Measurement(3L, -1L, 42L, 33000, MEASURED_AT)
        accepted.present
    }

    def "a single pushed measurement is matched by an indexed lookup, not by reading the table"() {
        given: "a streaming provider calls this once per finish - a full read here would be one scan per racer"
        measurementService.findByDeviceMeasurementId(1L) >> Optional.of(new Measurement(7L, 1L, 42L, 50000, MEASURED_AT))

        when:
        def accepted = sink.accept(TimingEvent.fromDevice(1L, 51500))

        then:
        0 * measurementService.findAll()
        1 * measurementService.upsertByDeviceMeasurementId(1L, 42L, 51500, MEASURED_AT) >>
                new Measurement(7L, 1L, 42L, 51500, MEASURED_AT)
        accepted.get().durationMs() == 51500
    }

    def "a pushed measurement without a device id needs no lookup at all"() {
        when:
        sink.accept(TimingEvent.withoutDeviceId(33000, MEASURED_AT, null))

        then:
        0 * measurementService.findAll()
        0 * measurementService.findByDeviceMeasurementId(_)
        1 * measurementService.create(_) >> new Measurement(3L, -1L, null, 33000, MEASURED_AT)
    }

    def "a zero duration is rejected instead of stored"() {
        given: "a false trigger at the finish, or a garbled line - never an actual finish time"
        measurementService.findAll() >> []

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 0)])

        then: "storing it would put that device id ahead of the entire field"
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        accepted.empty
    }

    def "a negative duration is rejected instead of stored"() {
        when: "a duration that would floor to 0 in RankingService and rank that participant first"
        def accepted = sink.accept(TimingEvent.fromDevice(1L, -5))

        then:
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        0 * measurementService.create(_)
        accepted.empty
    }

    def "a measurement pushed while a reset is in flight is kept, not thrown away"() {
        given: "the pause stops a POLL from re-inserting the device's pre-reset list; a push is a"
        // single event delivered once, so discarding it would lose a finish time for good - and if
        // the reset then fails, nothing was cleared and it was thrown away for nothing.
        measurementService.findByDeviceMeasurementId(1L) >> Optional.empty()

        when: "a streaming device pushes mid-reset - nobody can stop it from delivering"
        def accepted = importGate.pauseDuring({ -> sink.accept(TimingEvent.fromDevice(1L, 50000)) })

        then: "the table lock decides where it lands: before the copy or after the wipe, never mid-way"
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        accepted.present
    }

    def "a pushed measurement is discarded while automatic import is switched off"() {
        given: "the operator's switch means 'do not take device data' - a stream cannot be told to stop"
        importGate.setScheduledImportActive(false)

        when:
        def accepted = sink.accept(TimingEvent.fromDevice(1L, 50000))

        then:
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        accepted.empty
    }

    def "a poll response is written even with automatic import switched off"() {
        given: "the operator pressed 'fetch from device' by hand, which is a request, not a push"
        importGate.setScheduledImportActive(false)
        measurementService.findAll() >> []

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)])

        then:
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        accepted.size() == 1
    }

    def "the safety pull before a device reset is NOT discarded, even though import is paused"() {
        given: "MeasurementController#resetAll pulls the device dry inside pauseDuring(), then wipes"
        measurementService.findAll() >> []

        when:
        def rescued = importGate.pauseDuring({ -> sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)]) })

        then: "these are the times the pull exists to rescue - dropping them loses a racer's finish"
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        rescued.size() == 1
    }

    def "a poll answer that a reset/archive overtook is discarded"() {
        given: "the poll was sent, then the operator archived while its answer was still in flight"
        measurementService.findAll() >> []
        def requestedAtEpoch = importGate.currentImportEpoch()
        importGate.pauseDuring({ -> null })

        when: "the stale answer finally arrives - a polling device reports its WHOLE list"
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)], requestedAtEpoch)

        then: "writing it would reinstate the archived race in the table that was just cleared,"
        // where auto-assign would hand it to the next race's starters
        0 * measurementService.upsertByDeviceMeasurementId(_, _, _, _)
        accepted.empty
    }

    def "a poll answer is written when no reset happened while it was in flight"() {
        given: "the normal case: poll, answer, nothing archived in between"
        measurementService.findAll() >> []
        def requestedAtEpoch = importGate.currentImportEpoch()

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)], requestedAtEpoch)

        then: "the epoch check must not cost a finish time in ordinary operation"
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        accepted.size() == 1
    }

    def "the safety pull keeps its times even though it runs inside the pause"() {
        given: "resetAll/archiveMeasurements pull the device dry inside pauseDuring(), then wipe"
        measurementService.findAll() >> []

        when: "the pull reads the epoch at its own call time, which is already the new one"
        def rescued = importGate.pauseDuring({ ->
            sink.acceptBatch([TimingEvent.fromDevice(1L, 50000)], importGate.currentImportEpoch())
        })

        then: "these are the times the pull exists to rescue - the epoch must not discard them"
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        rescued.size() == 1
    }

    def "one failing event does not cost the rest of the batch"() {
        given:
        measurementService.findAll() >> []

        when:
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000), TimingEvent.fromDevice(2L, 51000)])

        then:
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >> { throw new IllegalStateException("boom") }
        1 * measurementService.upsertByDeviceMeasurementId(2L, null, 51000, _) >>
                new Measurement(8L, 2L, null, 51000, MEASURED_AT)
        accepted.size() == 1
        accepted[0].id() == 8L
    }

    def "a second event for the same device id in one batch compares against what was just written"() {
        given:
        measurementService.findAll() >> []

        when: "the same id twice with the same value - a resync repeating what it already sent"
        def accepted = sink.acceptBatch([TimingEvent.fromDevice(1L, 50000), TimingEvent.fromDevice(1L, 50000)])

        then:
        1 * measurementService.upsertByDeviceMeasurementId(1L, null, 50000, _) >>
                new Measurement(7L, 1L, null, 50000, MEASURED_AT)
        accepted.size() == 2
    }

    def "no events means no database read at all"() {
        when:
        def accepted = sink.acceptBatch([])

        then:
        0 * measurementService.findAll()
        accepted.empty
    }
}
