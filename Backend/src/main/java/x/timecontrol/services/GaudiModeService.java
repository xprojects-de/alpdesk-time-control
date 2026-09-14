package x.timecontrol.services;

import io.micronaut.transaction.TransactionOperations;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import x.timecontrol.dto.GaudiDnsEntryResponse;
import x.timecontrol.dto.GaudiModeRaceEntry;
import x.timecontrol.dto.GaudiModeRequest;
import x.timecontrol.dto.GaudiRankingEntryResponse;
import x.timecontrol.entities.AgeGroup;
import x.timecontrol.entities.GaudiLosPairing;
import x.timecontrol.entities.GaudiMode;
import x.timecontrol.entities.GaudiModeRace;
import x.timecontrol.entities.GaudiModeType;
import x.timecontrol.entities.Gender;
import x.timecontrol.entities.Participant;
import x.timecontrol.entities.Person;
import x.timecontrol.entities.Race;
import x.timecontrol.repositories.GaudiLosPairingRepository;
import x.timecontrol.repositories.GaudiModeRaceRepository;
import x.timecontrol.repositories.GaudiModeRepository;
import x.timecontrol.services.gaudi.GaudiModeCalculator;

import java.sql.Connection;
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

    private static final Logger LOG = LoggerFactory.getLogger(GaudiModeService.class);

    private final GaudiModeRepository repository;
    private final GaudiModeRaceRepository gaudiModeRaceRepository;
    private final GaudiLosPairingRepository pairingRepository;
    private final ParticipantService participantService;
    private final RaceService raceService;
    private final PersonService personService;
    private final AgeGroupService ageGroupService;
    private final Map<GaudiModeType, GaudiModeCalculator> calculatorsByType;
    private final TransactionOperations<Connection> transactionOperations;

    public GaudiModeService(GaudiModeRepository repository,
                             GaudiModeRaceRepository gaudiModeRaceRepository,
                             GaudiLosPairingRepository pairingRepository,
                             ParticipantService participantService,
                             RaceService raceService,
                             PersonService personService,
                             AgeGroupService ageGroupService,
                             List<GaudiModeCalculator> calculators,
                             TransactionOperations<Connection> transactionOperations) {
        this.repository = repository;
        this.gaudiModeRaceRepository = gaudiModeRaceRepository;
        this.pairingRepository = pairingRepository;
        this.participantService = participantService;
        this.raceService = raceService;
        this.personService = personService;
        this.ageGroupService = ageGroupService;
        this.calculatorsByType = new EnumMap<>(GaudiModeType.class);
        for (GaudiModeCalculator calculator : calculators) {
            this.calculatorsByType.put(calculator.getType(), calculator);
        }
        this.transactionOperations = transactionOperations;
    }

    /**
     * Wrapped in one transaction: without it, a failure partway through saveRaces() (e.g. a race
     * referenced twice, or a real DataAccessException) would leave behind a GaudiMode row with an
     * incomplete/missing set of gaudi_mode_race legs instead of rolling back the whole thing.
     */
    public GaudiMode create(GaudiMode gaudiMode, List<GaudiModeRaceEntry> races) {
        validate(gaudiMode.type(), gaudiMode.teamSize(), races);
        return transactionOperations.executeWrite(_ -> {
            GaudiMode created = repository.save(gaudiMode);
            saveRaces(created.id(), races);
            return created;
        });
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

    /**
     * Wrapped in one transaction for the same reason as {@link #create}: update() + the
     * delete-then-recreate of the race legs must succeed or fail together, or a mid-way failure
     * leaves a GaudiMode with its races deleted but not yet replaced.
     */
    public Optional<GaudiMode> update(Long id, GaudiMode gaudiMode, List<GaudiModeRaceEntry> races) {
        Optional<GaudiMode> existing = repository.findById(id);
        if (existing.isPresent()) {
            validate(gaudiMode.type(), gaudiMode.teamSize(), races);
            GaudiMode updated = new GaudiMode(
                    id,
                    gaudiMode.type(),
                    gaudiMode.name(),
                    gaudiMode.teamSize(),
                    gaudiMode.pointsScaleId(),
                    existing.get().createdAt()
            );
            GaudiMode result = transactionOperations.executeWrite(_ -> {
                GaudiMode saved = repository.update(updated);
                gaudiModeRaceRepository.deleteByGaudiModeId(id);
                saveRaces(id, races);
                return saved;
            });
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

    /**
     * Enforces the business rules documented on {@link GaudiModeRequest}: LOS/TEAM combine exactly
     * one race, TIME_COMBINATION/POINTS_COMBINATION combine two or more, race weights must not be
     * negative, and TEAM mode requires a positive team size (a missing/non-positive size would
     * either crash the ranking calculation or produce a meaningless all-zero result).
     *
     * @throws IllegalArgumentException if any rule is violated
     */
    private void validate(GaudiModeType type, Integer teamSize, List<GaudiModeRaceEntry> races) {
        if (races == null || races.isEmpty()) {
            throw new IllegalArgumentException("At least one race must be selected");
        }
        for (GaudiModeRaceEntry entry : races) {
            if (entry.weight() != null && entry.weight() < 0) {
                throw new IllegalArgumentException("Race weight must not be negative");
            }
            // Without this check a reference to an already-deleted (or never-existing) race would
            // be silently dropped later by buildRaceParticipants() instead of being rejected here -
            // letting a Gaudi-Modus be saved with fewer legs than the operator actually configured.
            if (raceService.findById(entry.raceId()).isEmpty()) {
                throw new IllegalArgumentException("Race with id " + entry.raceId() + " does not exist");
            }
        }
        switch (type) {
            case LOS, TEAM -> {
                if (races.size() != 1) {
                    throw new IllegalArgumentException(type + " requires exactly one race");
                }
            }
            case TIME_COMBINATION, POINTS_COMBINATION -> {
                if (races.size() < 2) {
                    throw new IllegalArgumentException(type + " requires at least two races");
                }
            }
        }
        if (type == GaudiModeType.TIME_COMBINATION) {
            // Summing raw values across races only makes sense if they share the same result unit
            // (e.g. all TIME); mixing TIME and POINTS races would sum incompatible quantities.
            Set<x.timecontrol.entities.ResultUnit> units = new LinkedHashSet<>();
            // ...and the same sort direction: TimeCombinationModeCalculator sums each leg's
            // adjusted value and ranks the total ascending (smaller is better), which is only
            // correct if every leg agrees on which direction "better" is.
            Set<x.timecontrol.entities.SortDirection> sortDirections = new LinkedHashSet<>();
            for (GaudiModeRaceEntry entry : races) {
                raceService.findById(entry.raceId()).ifPresent(race -> {
                    units.add(race.resultUnit());
                    sortDirections.add(race.sortDirection());
                });
            }
            if (units.size() > 1) {
                throw new IllegalArgumentException("All races combined in a TIME_COMBINATION must use the same result unit");
            }
            if (sortDirections.size() > 1) {
                throw new IllegalArgumentException("All races combined in a TIME_COMBINATION must use the same sort direction");
            }
        }
        if (type == GaudiModeType.TEAM && (teamSize == null || teamSize < 1)) {
            throw new IllegalArgumentException("teamSize must be at least 1 for TEAM mode");
        }
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
        List<GaudiModeRace> races = findRacesFor(gaudiMode.id());
        if (races.isEmpty()) {
            return transactionOperations.executeWrite(_ -> {
                pairingRepository.deleteByGaudiModeId(gaudiMode.id());
                return List.of();
            });
        }
        Long raceId = races.getFirst().raceId();

        List<Participant> participants = new ArrayList<>(
                StreamSupport.stream(participantService.findByRaceId(raceId).spliterator(), false).toList()
        );
        Collections.shuffle(participants);

        int half = participants.size() / 2;
        List<Participant> firstHalf = participants.subList(0, half);
        List<Participant> secondHalf = participants.subList(half, half * 2);

        // Wrapped in one transaction: without it, a failure partway through the save loop (e.g. a
        // real DataAccessException on one row) would leave the previous pairing already deleted but
        // the new one only half-drawn.
        return transactionOperations.executeWrite(_ -> {
            pairingRepository.deleteByGaudiModeId(gaudiMode.id());

            List<GaudiLosPairing> created = new ArrayList<>();
            for (int i = 0; i < half; i++) {
                created.add(pairingRepository.save(
                        new GaudiLosPairing(null, gaudiMode.id(), firstHalf.get(i).id(), secondHalf.get(i).id())
                ));
            }

            if (participants.size() % 2 != 0) {
                Participant leftover = participants.getLast();
                created.add(pairingRepository.save(
                        new GaudiLosPairing(null, gaudiMode.id(), leftover.id(), null)
                ));
            }

            return created;
        });
    }

    public List<GaudiLosPairing> findLosPairing(Long gaudiModeId) {
        return StreamSupport.stream(pairingRepository.findByGaudiModeId(gaudiModeId).spliterator(), false).toList();
    }

    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode) {
        return computeRanking(gaudiMode, null);
    }

    /**
     * Computes the ranking as usual, but - when {@code personIdFilter} is given - restricts every
     * leg race's participant field to just those persons before ranking. For Punkte-Mischwertung
     * this makes each leg's place (and the points looked up from it, and therefore the total) relative
     * to that subset instead of the whole field: used by the "Alle Damen"/"Alle Herren"/Altersklassen
     * PDF exports so e.g. a Punkte-Mischwertung's "Platz 1 U14 Frauen" actually had the best result
     * among U14 women in each discipline, not merely the best combined score among a field mostly
     * ranked against older/other-gender competitors.
     */
    public List<GaudiRankingEntryResponse> computeRanking(GaudiMode gaudiMode, Set<Long> personIdFilter) {
        GaudiModeCalculator calculator = calculatorsByType.get(gaudiMode.type());
        if (calculator == null) {
            return List.of();
        }
        return calculator.computeRanking(gaudiMode, buildRaceParticipants(gaudiMode, personIdFilter));
    }

    /**
     * Punkte-Mischwertung recomputed strictly within one gender/age-group category (see
     * {@link #computeRanking(GaudiMode, Set)}): resolves which persons among the gaudiMode's
     * participants match the given gender and/or age-group name, then reruns the whole ranking
     * using only that subset. Either filter may be null to leave that dimension unrestricted.
     */
    public List<GaudiRankingEntryResponse> computeRankingForCategory(GaudiMode gaudiMode, Gender filterGender, String filterAgeGroup) {
        return computeRanking(gaudiMode, resolveMatchingPersonIds(gaudiMode, filterGender, filterAgeGroup));
    }

    /**
     * Persons excluded from the ranking for missing a valid result in at least one combined race -
     * see {@link GaudiModeCalculator#computeDnsEntries}. Only meaningful for Zeit-Kombination/
     * Punkte-Mischwertung; other types return an empty list via that method's default implementation.
     * Deliberately not scoped by gender/age-group the way {@link #computeRankingForCategory} is: the
     * same, unfiltered DNS list is used on every one of a Gaudi-Modus's PDF exports, regardless of
     * which category that particular export ranks.
     */
    public List<GaudiDnsEntryResponse> computeDnsEntries(GaudiMode gaudiMode) {
        GaudiModeCalculator calculator = calculatorsByType.get(gaudiMode.type());
        if (calculator == null) {
            return List.of();
        }
        return calculator.computeDnsEntries(gaudiMode, buildRaceParticipants(gaudiMode, null));
    }

    private List<GaudiModeCalculator.RaceParticipants> buildRaceParticipants(GaudiMode gaudiMode, Set<Long> personIdFilter) {
        List<GaudiModeRace> configuredRaces = findRacesFor(gaudiMode.id());
        List<GaudiModeCalculator.RaceParticipants> races = new ArrayList<>();
        for (GaudiModeRace gmr : configuredRaces) {
            Optional<Race> race = raceService.findById(gmr.raceId());
            if (race.isEmpty()) {
                continue;
            }
            List<Participant> participants = StreamSupport
                    .stream(participantService.findByRaceId(gmr.raceId()).spliterator(), false)
                    .filter(p -> personIdFilter == null || personIdFilter.contains(p.personId()))
                    .toList();
            races.add(new GaudiModeCalculator.RaceParticipants(gmr.raceId(), race.get(), gmr.weight(), participants));
        }
        // validate() rejects a reference to a race that doesn't exist yet at save time, but a race
        // can still be deleted afterwards (ON DELETE CASCADE removes its gaudi_mode_race row with
        // it) - that can't be prevented here, only surfaced, since the join row is already gone.
        if (races.size() < configuredRaces.size()) {
            LOG.warn("Gaudi-Modus {} ('{}') is missing {} of its {} configured race(s) (deleted since); " +
                            "ranking is computed from the remaining {} race(s)",
                    gaudiMode.id(), gaudiMode.name(), configuredRaces.size() - races.size(), configuredRaces.size(), races.size());
        }
        return races;
    }

    private Set<Long> resolveMatchingPersonIds(GaudiMode gaudiMode, Gender filterGender, String filterAgeGroup) {
        Set<Long> personIds = new LinkedHashSet<>();
        for (GaudiModeRace gmr : findRacesFor(gaudiMode.id())) {
            for (Participant p : participantService.findByRaceId(gmr.raceId())) {
                if (p.personId() != null) {
                    personIds.add(p.personId());
                }
            }
        }

        List<AgeGroup> ageGroups = filterAgeGroup != null
                ? StreamSupport.stream(ageGroupService.findAll().spliterator(), false).toList()
                : List.of();
        Map<Long, Person> personsById = personService.findByIds(personIds);

        Set<Long> matching = new LinkedHashSet<>();
        for (Long personId : personIds) {
            Person person = personsById.get(personId);
            if (filterGender != null && (person == null || person.gender() != filterGender)) {
                continue;
            }
            if (filterAgeGroup != null) {
                String ageGroup = person != null ? ageGroupService.calculateAgeGroupName(person.birthDate(), person.gender(), ageGroups) : "Unbekannt";
                if (!filterAgeGroup.equalsIgnoreCase(ageGroup)) {
                    continue;
                }
            }
            matching.add(personId);
        }
        return matching;
    }
}
