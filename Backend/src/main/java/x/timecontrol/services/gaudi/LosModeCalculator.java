package x.timecontrol.services.gaudi;

import jakarta.inject.Singleton;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Participant;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.services.PersonService;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.StreamSupport;

/**
 * Los-Modus: participants are drawn into random pairs before the race. The pair whose
 * average time is closest to the overall average time of the race wins.
 */
@Singleton
public class LosModeCalculator implements GaudiModeCalculator {

    private final GaudiLosPairingRepository pairingRepository;
    private final PersonService personService;

    public LosModeCalculator(GaudiLosPairingRepository pairingRepository, PersonService personService) {
        this.pairingRepository = pairingRepository;
        this.personService = personService;
    }

    @Override
    public GaudiModeType getType() {
        return GaudiModeType.LOS;
    }

    @Override
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, List<RaceParticipants> races) {
        List<Participant> raceParticipants = races.get(0).participants();

        Map<Long, Participant> participantsById = new HashMap<>();
        for (Participant p : raceParticipants) {
            participantsById.put(p.id(), p);
        }

        List<GaudiLosPairing> pairings = StreamSupport
                .stream(pairingRepository.findByGaudiModeId(gaudiMode.id()).spliterator(), false)
                .toList();

        List<Integer> allTimes = raceParticipants.stream()
                .map(Participant::durationMs)
                .filter(Objects::nonNull)
                .toList();

        if (allTimes.isEmpty() || pairings.isEmpty()) {
            return List.of();
        }

        double overallAverage = allTimes.stream().mapToInt(Integer::intValue).average().orElse(0);

        record PairResult(String label, Integer time1Ms, Integer time2Ms, double pairAverage, double diff) {
        }

        List<PairResult> results = new ArrayList<>();

        for (GaudiLosPairing pairing : pairings) {
            Participant p1 = participantsById.get(pairing.participant1Id());
            Participant p2 = pairing.participant2Id() != null ? participantsById.get(pairing.participant2Id()) : null;

            if (p1 == null || p1.durationMs() == null) {
                continue;
            }
            if (pairing.participant2Id() != null && (p2 == null || p2.durationMs() == null)) {
                continue;
            }

            double pairAverage = (p2 != null)
                    ? (p1.durationMs() + p2.durationMs()) / 2.0
                    : p1.durationMs();

            String label = (p2 != null)
                    ? formatName(p1) + " & " + formatName(p2)
                    : formatName(p1) + " (Einzel)";

            results.add(new PairResult(
                    label,
                    p1.durationMs(),
                    p2 != null ? p2.durationMs() : null,
                    pairAverage,
                    Math.abs(pairAverage - overallAverage)
            ));
        }

        results.sort(Comparator.comparingDouble(PairResult::diff));

        List<GaudiRankingEntryResponse> entries = new ArrayList<>();
        for (int i = 0; i < results.size(); i++) {
            PairResult r = results.get(i);
            entries.add(new GaudiRankingEntryResponse(
                    i + 1,
                    r.label(),
                    r.time1Ms(),
                    r.time2Ms(),
                    (int) Math.round(r.pairAverage()),
                    (int) Math.round(overallAverage),
                    (int) Math.round(r.diff()),
                    null,
                    null
            ));
        }

        return entries;
    }

    private String formatName(Participant p) {
        return personService.findById(p.personId())
                .map(personService::displayName)
                .orElse("Unbekannt");
    }
}
