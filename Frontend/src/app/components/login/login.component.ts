import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import * as AuthActions from '../../store/auth/auth.actions';
import * as AuthSelectors from '../../store/auth/auth.selectors';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    template: `
        <div class="login-container">
            <mat-card class="login-card">
                <mat-card-header>
                    <mat-card-title>
                        <div class="title-with-icon">
                            <mat-icon>access_time</mat-icon>
                            <span>TimeControl Login</span>
                        </div>
                    </mat-card-title>
                </mat-card-header>
                <mat-card-content>
                    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
                        <mat-form-field appearance="outline">
                            <mat-label>Benutzername</mat-label>
                            <input matInput formControlName="username" required autocomplete="username">
                            <mat-icon matPrefix>person</mat-icon>
                            @if (loginForm.get('username')?.hasError('required') && loginForm.get('username')?.touched) {
                                <mat-error>Benutzername ist erforderlich</mat-error>
                            }
                        </mat-form-field>

                        <mat-form-field appearance="outline">
                            <mat-label>Passwort</mat-label>
                            <input matInput type="password" formControlName="password" required
                                   autocomplete="current-password">
                            <mat-icon matPrefix>lock</mat-icon>
                            @if (loginForm.get('password')?.hasError('required') && loginForm.get('password')?.touched) {
                                <mat-error>Passwort ist erforderlich</mat-error>
                            }
                        </mat-form-field>

                        @if (error$ | async; as error) {
                            <div class="error-message">
                                <mat-icon>error</mat-icon>
                                <span>{{ error }}</span>
                            </div>
                        }

                        <button
                                mat-raised-button
                                color="primary"
                                type="submit"
                                [disabled]="!loginForm.valid || (loading$ | async)"
                                class="login-button">
                            @if (loading$ | async) {
                                <mat-spinner diameter="20"></mat-spinner>
                                <span>Anmelden...</span>
                            } @else {
                                <span>Anmelden</span>
                            }
                        </button>
                    </form>
                </mat-card-content>
            </mat-card>
        </div>
    `,
    styles: [`
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 20px;
      }

      .login-card {
        max-width: 450px;
        width: 100%;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      mat-card-header {
        margin-bottom: 20px;
      }

      .title-with-icon {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 24px;
        justify-content: center;
        width: 100%;
      }

      .title-with-icon mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      mat-form-field {
        width: 100%;
      }

      .login-button {
        width: 100%;
        height: 48px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .error-message {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #f44336;
        background-color: #ffebee;
        padding: 12px;
        border-radius: 4px;
        font-size: 14px;
      }

      .error-message mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }

      mat-spinner {
        display: inline-block;
      }
    `]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            username: ['time-control', Validators.required],
            password: ['time-control', Validators.required]
        });

        this.loading$ = this.store.select(AuthSelectors.selectAuthLoading);
        this.error$ = this.store.select(AuthSelectors.selectAuthError);
    }

    ngOnInit(): void {
        this.store.select(AuthSelectors.selectIsAuthenticated).subscribe(isAuthenticated => {
            if (isAuthenticated) {
                this.router.navigate(['/dashboard']).then();
            }
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            this.store.dispatch(AuthActions.login({
                credentials: this.loginForm.value
            }));
        }
    }
}

