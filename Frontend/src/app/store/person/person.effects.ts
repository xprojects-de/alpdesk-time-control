import {inject, Injectable} from '@angular/core';
import {extractErrorMessage} from '../../utils/http-error.util';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PersonService} from '../../services/person.service';
import * as PersonActions from './person.actions';

@Injectable()
export class PersonEffects {
    private actions$ = inject(Actions);
    private personService = inject(PersonService);

    loadPersons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PersonActions.loadPersons),
            mergeMap(() =>
                this.personService.getAll().pipe(
                    map(persons => PersonActions.loadPersonsSuccess({persons})),
                    catchError(error => of(PersonActions.loadPersonsFailure({
                        error: extractErrorMessage(error, 'Failed to load persons')
                    })))
                )
            )
        )
    );

    createPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PersonActions.createPerson),
            mergeMap(({person}) =>
                this.personService.create(person).pipe(
                    map(created => PersonActions.createPersonSuccess({person: created})),
                    catchError(error => of(PersonActions.createPersonFailure({
                        error: extractErrorMessage(error, 'Failed to create person')
                    })))
                )
            )
        )
    );

    updatePerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PersonActions.updatePerson),
            mergeMap(({id, person}) =>
                this.personService.update(id, person).pipe(
                    map(updated => PersonActions.updatePersonSuccess({person: updated})),
                    catchError(error => of(PersonActions.updatePersonFailure({
                        error: extractErrorMessage(error, 'Failed to update person')
                    })))
                )
            )
        )
    );

    deletePerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PersonActions.deletePerson),
            mergeMap(({id}) =>
                this.personService.delete(id).pipe(
                    map(() => PersonActions.deletePersonSuccess({id})),
                    catchError(error => of(PersonActions.deletePersonFailure({
                        error: extractErrorMessage(error, 'Failed to delete person')
                    })))
                )
            )
        )
    );

    deleteUnusedPersons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PersonActions.deleteUnusedPersons),
            mergeMap(() =>
                this.personService.deleteUnused().pipe(
                    map(({deletedCount}) => PersonActions.deleteUnusedPersonsSuccess({deletedCount})),
                    catchError(error => of(PersonActions.deleteUnusedPersonsFailure({
                        error: extractErrorMessage(error, 'Failed to delete unused persons')
                    })))
                )
            )
        )
    );
}
