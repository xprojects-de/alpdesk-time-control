package x.timecontrol.services;

import jakarta.inject.Singleton;

import java.util.concurrent.locks.ReentrantLock;
import java.util.function.Supplier;

/**
 * Serializes access to the measurement/race_measurement tables between the device-import path
 * (scheduled or manual) and archive/reset operations. Without this, a scheduled import landing
 * between an archive's copy-into-race_measurement and its subsequent measurement-table clear
 * could silently lose that measurement instead of ending up in either table.
 */
@Singleton
public class MeasurementTableLock {

    private final ReentrantLock lock = new ReentrantLock();

    public void run(Runnable action) {
        lock.lock();
        try {
            action.run();
        } finally {
            lock.unlock();
        }
    }

    public <T> T get(Supplier<T> action) {
        lock.lock();
        try {
            return action.get();
        } finally {
            lock.unlock();
        }
    }
}
