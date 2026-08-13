import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideNativeDateAdapter } from "@angular/material/core";

import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { participantReducer } from "./store/participant/participant.reducer";
import { measurementReducer } from "./store/measurement/measurement.reducer";
import { authReducer } from "./store/auth/auth.reducer";
import { ParticipantEffects } from "./store/participant/participant.effects";
import { MeasurementEffects } from "./store/measurement/measurement.effects";
import { AuthEffects } from "./store/auth/auth.effects";
import { authInterceptor } from "./interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideStore({
      auth: authReducer,
      participant: participantReducer,
      measurement: measurementReducer
    }),
    provideEffects([AuthEffects, ParticipantEffects, MeasurementEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ],
};
