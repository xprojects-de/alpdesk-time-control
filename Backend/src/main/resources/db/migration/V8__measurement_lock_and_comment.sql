-- Lets the operator take a raw measurement out of every automatic update and note why.
--
-- locked: once set, a device poll or push reporting the same device_measurement_id no longer
-- overwrites the row, and auto-assign no longer hands it to a participant - see
-- TimingEventSink#acceptOne and AutoAssignService#processNewMeasurements. Meant for a time the
-- timing device got wrong and the operator corrected by hand: without the lock, the next poll would
-- put the device's wrong value straight back. Manual edits are still allowed; the lock is only
-- against automation.
--
-- comment: free text the operator writes next to the row (e.g. "Lichtschranke doppelt ausgelöst"),
-- shown in the Messungen screen. Null when there is none.
ALTER TABLE measurement
    ADD COLUMN locked INTEGER NOT NULL DEFAULT 0;

ALTER TABLE measurement
    ADD COLUMN comment TEXT;
