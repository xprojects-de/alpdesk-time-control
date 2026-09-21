package x.timecontrol.services

import spock.lang.Specification

/**
 * The pause around a device reset/archive, which now has two producers to hold off: the scheduled
 * poll and a streaming provider writing through {@link TimingEventSink}.
 */
class DeviceImportGateSpec extends Specification {

    DeviceImportGate gate = new DeviceImportGate()

    def "pausing hides the active flag and restores it afterwards"() {
        given:
        gate.setScheduledImportActive(true)

        when:
        def duringPause = gate.pauseDuring({ -> [gate.isScheduledImportActive(), gate.isPaused()] })

        then:
        duringPause == [false, true]
        gate.isScheduledImportActive()
        !gate.isPaused()
    }

    def "an inner pause finishing does not resume import while the outer one is still running"() {
        given: "two nearly-simultaneous resets"
        gate.setScheduledImportActive(true)

        when:
        def stillPaused = gate.pauseDuring({ ->
            gate.pauseDuring({ -> null })
            gate.isPaused()
        })

        then:
        stillPaused
        gate.isScheduledImportActive()
    }

    def "a toggle made during a pause is applied when the pause ends, not lost"() {
        given:
        gate.setScheduledImportActive(true)

        when: "the operator switches automatic import off while a reset is running"
        gate.pauseDuring({ -> gate.setScheduledImportActive(false) })

        then:
        !gate.isScheduledImportActive()
    }

    def "the pause is lifted even if the action throws"() {
        when:
        gate.pauseDuring({ -> throw new IllegalStateException("reset failed") })

        then:
        thrown(IllegalStateException)
        !gate.isPaused()
    }
}
