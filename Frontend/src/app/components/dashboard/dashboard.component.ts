import {Component, inject, ChangeDetectionStrategy, OnInit, OnDestroy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RaceListComponent} from "../race-list/race-list.component";
import {ParticipantListComponent} from "../participant-list/participant-list.component";
import {MeasurementListComponent} from "../measurement-list/measurement-list.component";
import {AgeGroupListComponent} from "../age-group-list/age-group-list.component";
import {TeamListComponent} from "../team-list/team-list.component";
import {GaudiModusComponent} from "../gaudi-modus/gaudi-modus.component";
import * as AuthActions from "../../store/auth/auth.actions";
import * as AuthSelectors from "../../store/auth/auth.selectors";
import * as MeasurementActions from "../../store/measurement/measurement.actions";
import * as MeasurementSelectors from "../../store/measurement/measurement.selectors";

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
        MatTooltipModule,
        RaceListComponent,
        ParticipantListComponent,
        MeasurementListComponent,
        AgeGroupListComponent,
        TeamListComponent,
        GaudiModusComponent,
    ],
    template: `
        <mat-toolbar color="primary">
            <span>TimeControl - Zeitnahme System</span>
            <span class="spacer"></span>

            <!-- Device Connection Status -->
            <div class="connection-status">
                @if (deviceConnected$ | async; as connected) {
                    @if (connected) {
                        <mat-icon class="status-icon connected"
                                  [matTooltip]="'Gerät verbunden'">
                            wifi
                        </mat-icon>
                    } @else if (connected === false) {
                        <mat-icon class="status-icon disconnected"
                                  [matTooltip]="'Gerät nicht verbunden'">
                            wifi_off
                        </mat-icon>
                    }
                } @else {
                    <mat-icon class="status-icon unknown"
                              [matTooltip]="'Verbindungsstatus unbekannt'">
                        help_outline
                    </mat-icon>
                }
            </div>

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
                <mat-tab label="Altersgruppen">
                    <app-age-group-list/>
                </mat-tab>
                <mat-tab label="Rennen">
                    <app-race-list/>
                </mat-tab>
                <mat-tab label="Teilnehmer">
                    <app-participant-list/>
                </mat-tab>
                <mat-tab label="Teams">
                    <app-team-list/>
                </mat-tab>
                <mat-tab label="Messungen">
                    <app-measurement-list/>
                </mat-tab>
                <mat-tab label="Gaudi-Modus">
                    <app-gaudi-modus/>
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

          .connection-status {
            display: flex;
            align-items: center;
            margin-right: 16px;
          }

          .status-icon {
            font-size: 24px;
            width: 24px;
            height: 24px;
          }

          .status-icon.connected {
            color: #4caf50;
          }

          .status-icon.disconnected {
            color: #f44336;
          }

          .status-icon.unknown {
            color: #ff9800;
          }
        `,
    ],
})
export class DashboardComponent implements OnInit, OnDestroy {
    private store = inject(Store);
    username$: Observable<string | null>;
    deviceConnected$: Observable<boolean | null>;

    constructor() {
        this.username$ = this.store.select(AuthSelectors.selectAuthUsername);
        this.deviceConnected$ = this.store.select(MeasurementSelectors.selectDeviceConnected);
    }

    ngOnInit(): void {
        // Start polling device connection every 5 seconds
        this.store.dispatch(MeasurementActions.startDeviceConnectionPolling());
        // Trigger immediate check
        this.store.dispatch(MeasurementActions.checkDeviceConnection());
    }

    ngOnDestroy(): void {
        // Stop polling when component is destroyed
        this.store.dispatch(MeasurementActions.stopDeviceConnectionPolling());
    }

    logout(): void {
        this.store.dispatch(AuthActions.logout());
    }
}
