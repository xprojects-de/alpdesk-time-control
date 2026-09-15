import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

/**
 * Rejects a value that is non-empty but blank after trimming (e.g. a single space). Meant to be
 * combined with `Validators.required`, which alone treats whitespace-only input as valid - without
 * this, a stray-space name passes client-side validation and only fails once the backend rejects
 * it (via its own isBlank() check) after the dialog has already closed.
 */
export function notBlank(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (typeof value === "string" && value.length > 0 && value.trim().length === 0) {
            return {blank: true};
        }
        return null;
    };
}
