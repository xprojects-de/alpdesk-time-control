import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PersonState} from "./person.reducer";
import {Person} from "../../models/person.model";
import {Race} from "../../models/race.model";
import * as ParticipantSelectors from "../participant/participant.selectors";

export const selectPersonState = createFeatureSelector<PersonState>("person");

export const selectAllPersons = createSelector(selectPersonState, state => state.persons);

export const selectPersonLoading = createSelector(selectPersonState, state => state.loading);

export const selectPersonError = createSelector(selectPersonState, state => state.error);

export const selectPersonById = (id: number) =>
    createSelector(selectAllPersons, persons => persons.find(p => p.id === id));

export interface PersonWithActiveRaces extends Person {
    activeRaces: Race[];
}

/**
 * Persons enriched with the races they are currently registered for (i.e. still have a
 * Participant row in), derived from the already-loaded participant list rather than a
 * dedicated backend field - a person shows up as "active" in a race for as long as their
 * participant entry for it exists, which is also exactly the condition the backend uses to
 * refuse deleting them (see ParticipantRepository.existsByPersonId in PersonService.delete()).
 */
export const selectPersonsWithActiveRaces = createSelector(
    selectAllPersons,
    ParticipantSelectors.selectAllParticipants,
    (persons, participants): PersonWithActiveRaces[] => {
        const racesByPersonId = new Map<number, Race[]>();
        for (const participant of participants) {
            if (!participant.person || !participant.race) {
                continue;
            }
            const races = racesByPersonId.get(participant.person.id) ?? [];
            races.push(participant.race);
            racesByPersonId.set(participant.person.id, races);
        }
        return persons.map(person => ({
            ...person,
            activeRaces: racesByPersonId.get(person.id) ?? [],
        }));
    },
);
