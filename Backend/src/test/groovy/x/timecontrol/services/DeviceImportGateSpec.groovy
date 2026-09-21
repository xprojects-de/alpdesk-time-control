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
        def duringPause = gate.pauseDuring({ -> gate.isScheduledImportActive() })

        then:
        !duringPause
        gate.isScheduledImportActive()
    }

    def "an inner pause finishing does not resume import while the outer one is still running"() {
        given: "two nearly-simultaneous resets"
        gate.setScheduledImportActive(true)

        when: "the inner pause ends while the outer one is still running"
        def resumedTooEarly = gate.pauseDuring({ ->
            gate.pauseDuring({ -> null })
            gate.isScheduledImportActive()
        })

        then: "import stays off until the LAST pause finishes"
        !resumedTooEarly
        gate.isScheduledImportActive()
    }

    def "the operator's own setting stays visible through a pause"() {
        given: "pauseDuring forces the effective flag to false - TimingEventSink must see past that,"
        // otherwise a pushed measurement is discarded mid-reset through a side effect rather than
        // through anything the operator asked for
        gate.setScheduledImportActive(true)

        when:
        def seen = gate.pauseDuring({ -> [gate.isScheduledImportActive(), gate.isImportEnabledByOperator()] })

        then:
        seen == [false, true]
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
        given:
        gate.setScheduledImportActive(true)

        when: "a reset fails halfway through"
        gate.pauseDuring({ -> throw new IllegalStateException("reset failed") })

        then: "import is not left switched off for the rest of the race"
        thrown(IllegalStateException)
        gate.isScheduledImportActive()
    }
}
