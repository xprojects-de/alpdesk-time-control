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
     * {@link TimingEventSink#acceptBatch(List, long)}; they do not write to
     * {@link MeasurementService} themselves, so the rules about device measurement ids (see
     * {@link TimingEvent}) hold for every provider without being re-implemented per provider.
     * <p>
     * They read {@link DeviceImportGate#currentImportEpoch()} <b>before</b> asking the device and
     * pass it to that sink call. Without it, the answer to a poll that was still in flight when a
     * device reset/archive happened would be written into the table that was just cleared - and
     * since a polling device reports its whole list on every poll, that means reinstating the
     * entire archived race as "new" measurements.
     */
    List<Measurement> importDataFromDevice();
}
