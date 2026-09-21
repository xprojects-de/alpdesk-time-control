package x.timecontrol.services;

import x.timecontrol.entities.Measurement;

import java.util.List;

/**
 * A {@link TimingDataImporter} this backend has to ask for data: {@link DataImportScheduler} calls
 * {@link #importDataFromDevice()} every 5s, and the manual "import from device" endpoint plus the
 * safety pull before a device reset/archive call it directly.
 */
public interface PollingTimingImporter extends TimingDataImporter {

    /**
     * Pulls new measurements from the device and persists them through {@link TimingEventSink},
     * returning whatever was created/updated by this call (including rows that already matched and
     * were left untouched - the manual import endpoint hands this list to the UI, which has to
     * keep listing everything the device holds).
     * <p>
     * Implementations parse the device's answer into {@link TimingEvent}s and hand them to
     * {@link TimingEventSink#acceptBatch}; they do not write to {@link MeasurementService}
     * themselves, so the rules about device measurement ids (see {@link TimingEvent}) hold for
     * every provider without being re-implemented per provider.
     */
    List<Measurement> importDataFromDevice();
}
