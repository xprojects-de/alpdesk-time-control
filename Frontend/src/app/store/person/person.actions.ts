import {createAction, props} from '@ngrx/store';
import {Person, PersonRequest} from '../../models/person.model';

export const loadPersons = createAction('[Person] Load Persons');
export const loadPersonsSuccess = createAction(
    '[Person] Load Persons Success',
    props<{ persons: Person[] }>()
);
export const loadPersonsFailure = createAction(
    '[Person] Load Persons Failure',
    props<{ error: string }>()
);

export const createPerson = createAction(
    '[Person] Create Person',
    props<{ person: PersonRequest }>()
);
export const createPersonSuccess = createAction(
    '[Person] Create Person Success',
    props<{ person: Person }>()
);
export const createPersonFailure = createAction(
    '[Person] Create Person Failure',
    props<{ error: string }>()
);

export const updatePerson = createAction(
    '[Person] Update Person',
    props<{ id: number; person: PersonRequest }>()
);
export const updatePersonSuccess = createAction(
    '[Person] Update Person Success',
    props<{ person: Person }>()
);
export const updatePersonFailure = createAction(
    '[Person] Update Person Failure',
    props<{ error: string }>()
);

export const deletePerson = createAction(
    '[Person] Delete Person',
    props<{ id: number }>()
);
export const deletePersonSuccess = createAction(
    '[Person] Delete Person Success',
    props<{ id: number }>()
);
export const deletePersonFailure = createAction(
    '[Person] Delete Person Failure',
    props<{ error: string }>()
);

export const deleteUnusedPersons = createAction('[Person] Delete Unused Persons');
export const deleteUnusedPersonsSuccess = createAction(
    '[Person] Delete Unused Persons Success',
    props<{ deletedCount: number }>()
);
export const deleteUnusedPersonsFailure = createAction(
    '[Person] Delete Unused Persons Failure',
    props<{ error: string }>()
);
