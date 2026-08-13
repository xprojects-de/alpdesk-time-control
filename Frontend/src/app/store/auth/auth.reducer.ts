import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../models/auth.model';
import * as AuthActions from './auth.actions';

export const initialState: AuthState = {
  token: null,
  username: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,

  // Login
  on(AuthActions.login, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, { response }) => ({
    ...state,
    token: response.access_token || response.token || null,
    username: response.username || null,
    isAuthenticated: true,
    loading: false,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
    token: null,
    username: null
  })),

  // Logout
  on(AuthActions.logout, state => ({
    ...state,
    loading: true
  })),
  on(AuthActions.logoutSuccess, () => ({
    ...initialState
  })),

  // Check Auth
  on(AuthActions.checkAuth, state => ({
    ...state,
    loading: true
  })),
  on(AuthActions.checkAuthSuccess, (state, { token, username }) => ({
    ...state,
    token,
    username,
    isAuthenticated: true,
    loading: false
  })),
  on(AuthActions.checkAuthFailure, () => ({
    ...initialState,
    loading: false
  }))
);

