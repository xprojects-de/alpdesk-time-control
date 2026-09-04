package x.timecontrol.services;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiModeRequest;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.repositories.GaudiModeRepository;
import x.timecontrol.services.gaudi.GaudiModeCalculator;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Singleton
public class GaudiModeService {

    private final GaudiModeRepository repository;
    private final GaudiLosPairingRepository pairingRepository;
    private final ParticipantService participantService;
    private final Map<GaudiModeType, GaudiModeCalculator> calculatorsByType;

    public GaudiModeService(GaudiModeRepository repository,
                             GaudiLosPairingRepository pairingRepository,
                             ParticipantService participantService,
                             List<GaudiModeCalculator> calculators) {
        this.repository = repository;
        this.pairingRepository = pairingRepository;
        this.participantService = participantService;
        this.calculatorsByType = new EnumMap<>(GaudiModeType.class);
        for (GaudiModeCalculator calculator : calculators) {
            this.calculatorsByType.put(calculator.getType(), calculator);
        }
    }

    public GaudiMode create(GaudiMode gaudiMode) {
        return repository.save(gaudiMode);
    }

    public Iterable<GaudiMode> findAll() {
        return repository.findAll();
    }

    public Iterable<GaudiMode> findByRaceId(Long raceId) {
        return repository.findByRaceId(raceId);
    }

    public Optional<GaudiMode> findById(Long id) {
        return repository.findById(id);
    }

    public Optional<GaudiMode> update(Long id, GaudiMode gaudiMode) {
        Optional<GaudiMode> existing = repository.findById(id);
        if (existing.isPresent()) {
            GaudiMode updated = new GaudiMode(
                    id,
                    gaudiMode.raceId(),
                    gaudiMode.type(),
                    gaudiMode.name(),
                    gaudiMode.teamSize(),
                    existing.get().createdAt()
            );
            return Optional.of(repository.update(updated));
        }
        return Optional.empty();
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public GaudiMode createFromRequest(GaudiModeRequest request) {
        return new GaudiMode(null, request.raceId(), request.type(), request.name(), request.teamSize(), LocalDateTime.now());
    }

    /**
     * (Re-)draws the random pairing for a Los-Modus instance. Any previously drawn
     * pairing is discarded. Participants are shuffled and the first half is paired
     * position-wise with the second half; a leftover participant (odd count) is paired
     * with themselves.
     */
    public List<GaudiLosPairing> drawLosPairing(GaudiMode gaudiMode) {
        pairingRepository.deleteByGaudiModeId(gaudiMode.id());

        List<Participant> participants = new ArrayList<>(
                StreamSupport.stream(participantService.findByRaceId(gaudiMode.raceId()).spliterator(), false).toList()
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
        List<Participant> raceParticipants = StreamSupport
                .stream(participantService.findByRaceId(gaudiMode.raceId()).spliterator(), false)
                .toList();
        return calculator.computeRanking(gaudiMode, raceParticipants);
    }
}
