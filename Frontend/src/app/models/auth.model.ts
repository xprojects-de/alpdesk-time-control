export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token?: string;
    token?: string;
    username?: string;
}

export interface AuthState {
    token: string | null;
    username: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

