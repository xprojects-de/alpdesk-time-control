package x.timecontrol.services

import spock.lang.Specification

/**
 * One 5s tick of the scheduler: whether it asks the device at all, and that a failing device never
 * takes auto-assign or the next tick down with it.
 */
class DataImportSchedulerSpec extends Specification {

    PollingTimingImporter device = Mock()
    TimingProviderRegistry timingProviderRegistry = Stub() {
        getActiveScheduledPollImporter() >> Optional.of(device)
    }
    AutoAssignService autoAssignService = Mock()
    DeviceImportGate importGate = new DeviceImportGate()

    DataImportScheduler scheduler = new DataImportScheduler(
            timingProviderRegistry: timingProviderRegistry,
            autoAssignService: autoAssignService,
            importGate: importGate,
            enabled: true)

    def setup() {
        importGate.setScheduledImportActive(true)
    }

    def "a tick asks the device, then runs auto-assign"() {
        when:
        scheduler.importDataPeriodically()

        then:
        1 * device.importDataFromDevice() >> []

        then:
        1 * autoAssignService.processNewMeasurements()
    }

    def "nothing runs while the operator has automatic import switched off"() {
        given:
        importGate.setScheduledImportActive(false)

        when:
        scheduler.importDataPeriodically()

        then: "the times stay on the device until import is switched on again"
        0 * device.importDataFromDevice()
        0 * autoAssignService.processNewMeasurements()
    }

    def "nothing runs when data import is disabled in the configuration"() {
        given:
        scheduler.enabled = false

        when:
        scheduler.importDataPeriodically()

        then:
        0 * device.importDataFromDevice()
        0 * autoAssignService.processNewMeasurements()
    }

    def "no tick asks the device while a reset or archive is running"() {
        when: "the tick fires in the middle of the reset"
        importGate.pauseDuring({ -> scheduler.importDataPeriodically() })

        then: "its answer would bring back the list the reset is about to clear"
        0 * device.importDataFromDevice()

        when: "the reset is over"
        scheduler.importDataPeriodically()

        then: "the next tick polls again"
        1 * device.importDataFromDevice() >> []
    }

    def "a device that cannot be reached still lets auto-assign run, and the next tick tries again"() {
        when:
        scheduler.importDataPeriodically()

        then:
        1 * device.importDataFromDevice() >> { throw new IllegalStateException("Could not connect to device") }
        1 * autoAssignService.processNewMeasurements()
        noExceptionThrown()

        when:
        scheduler.importDataPeriodically()

        then:
        1 * device.importDataFromDevice() >> []
    }

    def "a failing auto-assign does not stop the next tick from polling"() {
        when:
        scheduler.importDataPeriodically()

        then:
        1 * device.importDataFromDevice() >> []
        1 * autoAssignService.processNewMeasurements() >> { throw new IllegalStateException("database is locked") }
        noExceptionThrown()

        when:
        scheduler.importDataPeriodically()

        then:
        1 * device.importDataFromDevice() >> []
        1 * autoAssignService.processNewMeasurements()
    }

    def "without a polling device, a tick still runs auto-assign for manually entered times"() {
        given: "timing provider NONE, or one that pushes its data on its own connection"
        scheduler.timingProviderRegistry = Stub(TimingProviderRegistry) {
            getActiveScheduledPollImporter() >> Optional.empty()
        }

        when:
        scheduler.importDataPeriodically()

        then:
        0 * device.importDataFromDevice()
        1 * autoAssignService.processNewMeasurements()
    }
}
