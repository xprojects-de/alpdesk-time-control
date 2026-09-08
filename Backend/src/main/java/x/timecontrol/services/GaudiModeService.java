package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiModeRaceEntry;
import x.timecontrol.dto.GaudiModeRequest;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeRace;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Race;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.repositories.GaudiModeRaceRepository;
import x.timecontrol.repositories.GaudiModeRepository;
import x.timecontrol.services.gaudi.GaudiModeCalculator;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.StreamSupport;

@Singleton
public class GaudiModeService {

    private final GaudiModeRepository repository;
    private final GaudiModeRaceRepository gaudiModeRaceRepository;
    private final GaudiLosPairingRepository pairingRepository;
    private final ParticipantService participantService;
    private final RaceService raceService;
    private final Map<GaudiModeType, GaudiModeCalculator> calculatorsByType;

    public GaudiModeService(GaudiModeRepository repository,
                             GaudiModeRaceRepository gaudiModeRaceRepository,
                             GaudiLosPairingRepository pairingRepository,
                             ParticipantService participantService,
                             RaceService raceService,
                             List<GaudiModeCalculator> calculators) {
        this.repository = repository;
        this.gaudiModeRaceRepository = gaudiModeRaceRepository;
        this.pairingRepository = pairingRepository;
        this.participantService = participantService;
        this.raceService = raceService;
        this.calculatorsByType = new EnumMap<>(GaudiModeType.class);
        for (GaudiModeCalculator calculator : calculators) {
            this.calculatorsByType.put(calculator.getType(), calculator);
        }
    }

    public GaudiMode create(GaudiMode gaudiMode, List<GaudiModeRaceEntry> races) {
        GaudiMode created = repository.save(gaudiMode);
        saveRaces(created.id(), races);
        return created;
    }

    public Iterable<GaudiMode> findAll() {
        return repository.findAll();
    }

    /**
     * Gaudi-Modus instances that reference the given race (in any of its combined races).
     */
    public Iterable<GaudiMode> findByRaceId(Long raceId) {
        Set<Long> gaudiModeIds = new LinkedHashSet<>();
        for (GaudiModeRace gmr : gaudiModeRaceRepository.findByRaceId(raceId)) {
            gaudiModeIds.add(gmr.gaudiModeId());
        }
        return repository.findByIdIn(gaudiModeIds);
    }

    public Optional<GaudiMode> findById(Long id) {
        return repository.findById(id);
    }

    public List<GaudiModeRace> findRacesFor(Long gaudiModeId) {
        return gaudiModeRaceRepository.findByGaudiModeIdOrderBySortOrder(gaudiModeId);
    }

    public Optional<GaudiMode> update(Long id, GaudiMode gaudiMode, List<GaudiModeRaceEntry> races) {
        Optional<GaudiMode> existing = repository.findById(id);
        if (existing.isPresent()) {
            GaudiMode updated = new GaudiMode(
                    id,
                    gaudiMode.type(),
                    gaudiMode.name(),
                    gaudiMode.teamSize(),
                    gaudiMode.pointsScaleId(),
                    existing.get().createdAt()
            );
            GaudiMode result = repository.update(updated);
            gaudiModeRaceRepository.deleteByGaudiModeId(id);
            saveRaces(id, races);
            return Optional.of(result);
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        gaudiModeRaceRepository.deleteByGaudiModeId(id);
        repository.deleteById(id);
    }

    public GaudiMode createFromRequest(GaudiModeRequest request) {
        return new GaudiMode(null, request.type(), request.name(), request.teamSize(), request.pointsScaleId(), LocalDateTime.now());
    }

    private void saveRaces(Long gaudiModeId, List<GaudiModeRaceEntry> races) {
        int order = 0;
        for (GaudiModeRaceEntry entry : races) {
            double weight = entry.weight() != null ? entry.weight() : 1.0;
            gaudiModeRaceRepository.save(new GaudiModeRace(null, gaudiModeId, entry.raceId(), order++, weight));
        }
    }

    /**
     * (Re-)draws the random pairing for a Los-Modus instance. Any previously drawn
     * pairing is discarded. Participants are shuffled and the first half is paired
     * position-wise with the second half; a leftover participant (odd count) is paired
     * with themselves.
     */
    public List<GaudiLosPairing> drawLosPairing(GaudiMode gaudiMode) {
        pairingRepository.deleteByGaudiModeId(gaudiMode.id());

        List<GaudiModeRace> races = findRacesFor(gaudiMode.id());
        if (races.isEmpty()) {
            return List.of();
        }
        Long raceId = races.get(0).raceId();

        List<Participant> participants = new ArrayList<>(
                StreamSupport.stream(participantService.findByRaceId(raceId).spliterator(), false).toList()
        );
        Collections.shuffle(participants);

        int half = participants.size() / 2;
        List<Participant> firstHalf = participants.subList(0, half);
        List<Participant> secondHalf = participants.subList(half, half * 2);

        List<GaudiLosPairing> created = new ArrayList<>();
        for (int i = 0; i < half; i++) {
            created.add(pairingRepository.save(
                    new GaudiLosPairing(null, gaudiMode.id(), firstHalf.get(i).id(), secondHalf.get(i).id())
            ));
        }

        if (participants.size() % 2 != 0) {
            Participant leftover = participants.get(participants.size() - 1);
            created.add(pairingRepository.save(
                    new GaudiLosPairing(null, gaudiMode.id(), leftover.id(), null)
            ));
        }

        return created;
    }

    public List<GaudiLosPairing> findLosPairing(Long gaudiModeId) {
        return StreamSupport.stream(pairingRepository.findByGaudiModeId(gaudiModeId).spliterator(), false).toList();
    }

    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode) {
        GaudiModeCalculator calculator = calculatorsByType.get(gaudiMode.type());
        if (calculator == null) {
            return List.of();
        }

        List<GaudiModeCalculator.RaceParticipants> races = new ArrayList<>();
        for (GaudiModeRace gmr : findRacesFor(gaudiMode.id())) {
            Optional<Race> race = raceService.findById(gmr.raceId());
            if (race.isEmpty()) {
                continue;
            }
            List<Participant> participants = StreamSupport
                    .stream(participantService.findByRaceId(gmr.raceId()).spliterator(), false)
                    .toList();
            races.add(new GaudiModeCalculator.RaceParticipants(gmr.raceId(), race.get(), gmr.weight(), participants));
        }

        return calculator.computeRanking(gaudiMode, races);
    }
}
