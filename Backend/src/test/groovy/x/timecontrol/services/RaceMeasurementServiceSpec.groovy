package x.timecontrol.services

import jakarta.transaction.Transactional
import spock.lang.Specification
import x.timecontrol.repositories.MeasurementRepository
import x.timecontrol.repositories.RaceMeasurementRepository

class RaceMeasurementServiceSpec extends Specification {

    RaceMeasurementRepository repository = Mock()
    MeasurementRepository measurementRepository = Mock()
    TimingDataImporter device = Mock()

    RaceMeasurementService service = new RaceMeasurementService(repository, measurementRepository, new MeasurementTableLock())

    def "a clearing archive copies into the race, then clears the table"() {
        when:
        service.archiveMeasurements(7L)

        then:
        1 * repository.copyFromMeasurements(7L)

        then:
        1 * measurementRepository.deleteAll()

        then:
        1 * measurementRepository.resetSequence()
    }

    def "the device is reset only after the measurements were copied into the race and the table was cleared"() {
        when:
        service.archiveMeasurementsAndResetDevice(7L, device)

        then:
        1 * repository.copyFromMeasurements(7L)

        then:
        1 * measurementRepository.deleteAll()
        1 * measurementRepository.resetSequence()

        then:
        1 * device.resetDevice() >> true
    }

    def "a failing copy never reaches the device"() {
        given:
        repository.copyFromMeasurements(7L) >> { throw new RuntimeException("database is locked") }

        when:
        service.archiveMeasurementsAndResetDevice(7L, device)

        then:
        thrown(RuntimeException)
        0 * measurementRepository.deleteAll()
        0 * device.resetDevice()
    }

    def "a device that does not confirm the reset fails the archive, so its transaction rolls back"() {
        given:
        device.resetDevice() >> false

        when:
        service.archiveMeasurementsAndResetDevice(7L, device)

        then:
        DeviceResetFailedException e = thrown()
        e.message == "Failed to reset device. Measurements were not archived."
    }

    def "archiveMeasurementsAndResetDevice is transactional, which is what turns a failed reset into a rollback"() {
        expect:
        RaceMeasurementService.getMethod("archiveMeasurementsAndResetDevice", Long, TimingDataImporter)
                .isAnnotationPresent(Transactional)
    }

    def "deleting all archived measurements of a race reports how many were deleted"() {
        when:
        int deleted = service.deleteByRaceId(7L)

        then:
        1 * repository.deleteByRaceId(7L) >> 12
        deleted == 12
    }
}
