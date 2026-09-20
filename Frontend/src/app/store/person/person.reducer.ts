import {createReducer, on} from "@ngrx/store";
import {Person} from "../../models/person.model";
import * as PersonActions from "./person.actions";

export interface PersonState {
    persons: Person[];
    loading: boolean;
    error: string | null;
}

export const initialState: PersonState = {
    persons: [],
    loading: false,
    error: null,
};

export const personReducer = createReducer(
    initialState,

    on(PersonActions.loadPersons, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PersonActions.loadPersonsSuccess, (state, {persons}) => ({
        ...state,
        persons,
        loading: false,
    })),
    on(PersonActions.loadPersonsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(PersonActions.createPerson, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PersonActions.createPersonSuccess, (state, {person}) => ({
        ...state,
        persons: [...state.persons, person],
        loading: false,
    })),
    on(PersonActions.createPersonFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(PersonActions.updatePerson, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PersonActions.updatePersonSuccess, (state, {person}) => ({
        ...state,
        persons: state.persons.map(p => (p.id === person.id ? person : p)),
        loading: false,
    })),
    on(PersonActions.updatePersonFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(PersonActions.deletePerson, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PersonActions.deletePersonSuccess, (state, {id}) => ({
        ...state,
        persons: state.persons.filter(p => p.id !== id),
        loading: false,
    })),
    on(PersonActions.deletePersonFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),

    on(PersonActions.deleteUnusedPersons, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PersonActions.deleteUnusedPersonsSuccess, state => ({
        ...state,
        loading: false,
    })),
    on(PersonActions.deleteUnusedPersonsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    })),
);
