import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    isDevMode,
    LOCALE_ID,
} from "@angular/core";
import {provideRouter} from "@angular/router";
import {
    provideHttpClient,
    withInterceptors,
    withXhr,
} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {
    MAT_DATE_LOCALE,
    MAT_DATE_FORMATS,
    DateAdapter,
} from "@angular/material/core";
import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de";
import {GermanDateAdapter} from "./utils/german-date-adapter";

import {routes} from "./app.routes";
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {provideStoreDevtools} from "@ngrx/store-devtools";

import {participantReducer} from "./store/participant/participant.reducer";
import {measurementReducer} from "./store/measurement/measurement.reducer";
import {authReducer} from "./store/auth/auth.reducer";
import {ParticipantEffects} from "./store/participant/participant.effects";
import {MeasurementEffects} from "./store/measurement/measurement.effects";
import {AuthEffects} from "./store/auth/auth.effects";
import {authInterceptor} from "./interceptors/auth.interceptor";

registerLocaleData(localeDe);

export const DE_DATE_FORMATS = {
    parse: {
        dateInput: "input",
    },
    display: {
        dateInput: "input",
        monthYearLabel: {year: "numeric", month: "short"},
        dateA11yLabel: {year: "numeric", month: "long", day: "numeric"},
        monthYearA11yLabel: {year: "numeric", month: "long"},
    },
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideHttpClient(withXhr(), withInterceptors([authInterceptor])),
        provideAnimationsAsync(),
        {provide: LOCALE_ID, useValue: "de-DE"},
        {provide: MAT_DATE_LOCALE, useValue: "de-DE"},
        {provide: DateAdapter, useClass: GermanDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: DE_DATE_FORMATS},
        provideStore({
            auth: authReducer,
            participant: participantReducer,
            measurement: measurementReducer,
        }),
        provideEffects([AuthEffects, ParticipantEffects, MeasurementEffects]),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        }),
    ],
};
