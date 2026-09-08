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
            PointsScale updated = new PointsScale(id, pointsScale.name(), pointsScale.pointsCsv());
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public PointsScale createFromRequest(PointsScaleRequest request) {
        return new PointsScale(null, request.name(), toCsv(request.points()));
    }

    public List<Integer> parsePoints(PointsScale pointsScale) {
        List<Integer> points = new ArrayList<>();
        for (String part : pointsScale.pointsCsv().split(",")) {
            points.add(Integer.parseInt(part.trim()));
        }
        return points;
    }

    /**
     * Points awarded for a given place (1-based). Places beyond the table's length score 0.
     */
    public int pointsForPlace(PointsScale pointsScale, int place) {
        List<Integer> points = parsePoints(pointsScale);
        int index = place - 1;
        return index >= 0 && index < points.size() ? points.get(index) : 0;
    }

    private String toCsv(List<Integer> points) {
        return points.stream().map(String::valueOf).collect(Collectors.joining(","));
    }
}
