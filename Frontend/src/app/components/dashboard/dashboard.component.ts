import {Component, inject, ChangeDetectionStrategy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ParticipantListComponent} from "../participant-list/participant-list.component";
import {MeasurementListComponent} from "../measurement-list/measurement-list.component";
import * as AuthActions from "../../store/auth/auth.actions";
import * as AuthSelectors from "../../store/auth/auth.selectors";

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [
        CommonModule,
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        ParticipantListComponent,
        MeasurementListComponent,
    ],
    template: `
        <mat-toolbar color="primary">
            <span>TimeControl - Zeitnahme System</span>
            <span class="spacer"></span>
            <button mat-icon-button [matMenuTriggerFor]="menu">
                <mat-icon>account_circle</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
                <div class="user-info" mat-menu-item disabled>
                    <mat-icon>person</mat-icon>
                    <span>{{ username$ | async }}</span>
                </div>
                <button mat-menu-item (click)="logout()">
                    <mat-icon>logout</mat-icon>
                    <span>Abmelden</span>
                </button>
            </mat-menu>
        </mat-toolbar>

        <div class="dashboard-container">
            <mat-tab-group>
                <mat-tab label="Teilnehmer">
                    <app-participant-list/>
                </mat-tab>
                <mat-tab label="Messungen">
                    <app-measurement-list/>
                </mat-tab>
            </mat-tab-group>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .dashboard-container {
            padding: 20px;
          }

          mat-toolbar {
            margin-bottom: 20px;
          }

          .spacer {
            flex: 1 1 auto;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            cursor: default;
          }
        `,
    ],
})
export class DashboardComponent {
    private store = inject(Store);
    username$: Observable<string | null>;

    constructor() {
        this.username$ = this.store.select(AuthSelectors.selectAuthUsername);
    }

    logout(): void {
        this.store.dispatch(AuthActions.logout());
    }
}
