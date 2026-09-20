import {inject} from "@angular/core";
import {CanDeactivateFn} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

/** Implemented by pages that hold unsaved local edits (e.g. the start-group board). */
export interface HasUnsavedChanges {
    /** true = navigation may proceed; may ask the user first. */
    confirmDiscardChanges(): boolean | Observable<boolean>;
}

/**
 * Asks before in-app navigation (sidenav etc.) throws away unsaved edits - window:beforeunload
 * only covers reloading/closing the browser tab, not router navigation.
 *
 * Skipped once the session is gone: a forced logout (expired token, 401/403) clears the token
 * first and only then navigates to /login. Asking "discard changes?" at that point is a trap -
 * staying on the page cannot save them either (every request 401s), and cancelling strands the
 * operator on a rendered page in a logged-out state where each further 401 stacks another dialog.
 */
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = component => {
    if (!inject(AuthService).getToken()) {
        return true;
    }
    // Defensive: the router passes null if the component was never instantiated (lazy-load failure).
    return component?.confirmDiscardChanges() ?? true;
};
