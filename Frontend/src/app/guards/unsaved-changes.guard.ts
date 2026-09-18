import {CanDeactivateFn} from '@angular/router';
import {Observable} from 'rxjs';

/** Implemented by pages that hold unsaved local edits (e.g. the start-group board). */
export interface HasUnsavedChanges {
    /** true = navigation may proceed; may ask the user first. */
    confirmDiscardChanges(): boolean | Observable<boolean>;
}

/**
 * Asks before in-app navigation (sidenav etc.) throws away unsaved edits - window:beforeunload
 * only covers reloading/closing the browser tab, not router navigation.
 */
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> =
    component => component.confirmDiscardChanges();
