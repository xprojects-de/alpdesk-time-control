package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.PointsScaleRequest;
import x.timecontrol.entities.PointsScale;
import x.timecontrol.repositories.PointsScaleRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Singleton
public class PointsScaleService {

    private final PointsScaleRepository repository;

    public PointsScaleService(PointsScaleRepository repository) {
        this.repository = repository;
    }

    public PointsScale create(PointsScale pointsScale) {
        assertNameAvailable(pointsScale.name(), null);
        return repository.save(pointsScale);
    }

    public Iterable<PointsScale> findAll() {
        return repository.findAll();
    }

    public Optional<PointsScale> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<PointsScale> findByName(String name) {
        return repository.findByName(name);
    }

    public Optional<PointsScale> update(Long id, PointsScale pointsScale) {
        Optional<PointsScale> existing = repository.findById(id);
        if (existing.isPresent()) {
            assertNameAvailable(pointsScale.name(), id);
            PointsScale updated = new PointsScale(id, pointsScale.name(), pointsScale.pointsCsv());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    /**
     * @throws IllegalStateException if another points scale already has this name (case-insensitive)
     */
    private void assertNameAvailable(String name, Long excludeId) {
        Optional<PointsScale> conflict = repository.findByNameIgnoreCase(name);
        if (conflict.isPresent() && !conflict.get().id().equals(excludeId)) {
            throw new IllegalStateException("A points scale named \"" + name + "\" already exists");
        }
    }

    public PointsScale createFromRequest(PointsScaleRequest request) {
        return new PointsScale(null, request.name(), toCsv(request.points()));
    }

    /**
     * @throws IllegalStateException if the stored CSV is empty or contains a non-numeric entry -
     *                                defensive: {@link x.timecontrol.Controller.PointsScaleController#isValid}
     *                                already rejects a request that would produce this at save time, but this
     *                                is also reached from ranking calculations reading whatever is already
     *                                persisted, so a corrupt row must fail with a clear message here rather
     *                                than an uncaught {@link NumberFormatException} out of a ranking endpoint.
     */
    public List<Integer> parsePoints(PointsScale pointsScale) {
        String csv = pointsScale.pointsCsv();
        if (csv == null || csv.isBlank()) {
            throw new IllegalStateException("Points scale \"" + pointsScale.name() + "\" has no points configured");
        }
        List<Integer> points = new ArrayList<>();
        for (String part : csv.split(",")) {
            String trimmed = part.trim();
            try {
                points.add(Integer.parseInt(trimmed));
            } catch (NumberFormatException e) {
                throw new IllegalStateException("Points scale \"" + pointsScale.name() + "\" contains a non-numeric value: \"" + trimmed + "\"", e);
            }
        }
        return points;
    }

    /**
     * Points awarded for a given place (1-based). Places beyond the table's length score 0.
     */
    public int pointsForPlace(PointsScale pointsScale, int place) {
        return pointsForPlace(parsePoints(pointsScale), place);
    }

    /**
     * Same as {@link #pointsForPlace(PointsScale, int)}, but takes an already-parsed scale -
     * use this in a loop (e.g. once per person per race) instead of re-parsing the same CSV
     * string on every call.
     */
    public int pointsForPlace(List<Integer> points, int place) {
        int index = place - 1;
        return index >= 0 && index < points.size() ? points.get(index) : 0;
    }

    private String toCsv(List<Integer> points) {
        return points.stream().map(String::valueOf).collect(Collectors.joining(","));
    }
}
