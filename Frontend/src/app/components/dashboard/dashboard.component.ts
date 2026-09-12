import {Component, inject, signal, ChangeDetectionStrategy, OnInit, OnDestroy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import * as AuthActions from "../../store/auth/auth.actions";
import * as AuthSelectors from "../../store/auth/auth.selectors";
import * as MeasurementActions from "../../store/measurement/measurement.actions";
import * as MeasurementSelectors from "../../store/measurement/measurement.selectors";

interface NavItem {
    path: string;
    label: string;
    icon: string;
}

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
    ],
    template: `
        <mat-toolbar color="primary">
            <button mat-icon-button (click)="toggleNav()" [matTooltip]="navOpen() ? 'Menü einklappen' : 'Menü ausklappen'">
                <mat-icon>menu</mat-icon>
            </button>
            <span>Alpdesk TimeControl - Zeitnahme System</span>
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

        <mat-sidenav-container class="dashboard-container">
            <mat-sidenav mode="side" [opened]="navOpen()" class="app-nav">
                <mat-nav-list>
                    @for (item of navItems; track item.path) {
                        <a mat-list-item [routerLink]="item.path" routerLinkActive="active-nav-item"
                           [matTooltip]="item.label" matTooltipPosition="right">
                            <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                            <span matListItemTitle>{{ item.label }}</span>
                        </a>
                    }
                </mat-nav-list>
            </mat-sidenav>
            <mat-sidenav-content class="dashboard-content">
                <router-outlet/>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          :host {
            display: block;
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .dashboard-container {
            flex: 1 1 auto;
            min-height: 0;
          }

          .app-nav {
            width: 220px;
          }

          .dashboard-content {
            padding: 20px;
          }

          .active-nav-item {
            background: rgba(0, 0, 0, 0.06);
            font-weight: 600;
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

    readonly navItems: NavItem[] = [
        {path: 'age-groups', label: 'Altersgruppen', icon: 'cake'},
        {path: 'races', label: 'Rennen', icon: 'flag'},
        {path: 'teams', label: 'Teams', icon: 'groups'},
        {path: 'categories', label: 'Kategorien', icon: 'category'},
        {path: 'persons', label: 'Personen', icon: 'badge'},
        {path: 'participants', label: 'Teilnehmer', icon: 'person'},
        {path: 'measurements', label: 'Messungen', icon: 'timer'},
        {path: 'race-measurements', label: 'Zuordnung & Sync', icon: 'sync_alt'},
        {path: 'gaudi-mode', label: 'Gaudi-Modus', icon: 'celebration'},
    ];

    private static readonly NAV_OPEN_KEY = 'dashboard_nav_open';
    navOpen = signal(this.readNavOpenPreference());

    constructor() {
        this.username$ = this.store.select(AuthSelectors.selectAuthUsername);
        this.deviceConnected$ = this.store.select(MeasurementSelectors.selectDeviceConnected);
    }

    toggleNav(): void {
        const next = !this.navOpen();
        this.navOpen.set(next);
        try {
            localStorage.setItem(DashboardComponent.NAV_OPEN_KEY, String(next));
        } catch {
            // Private browsing / storage disabled: the toggle still works for this session,
            // it just won't be remembered on reload.
        }
    }

    private readNavOpenPreference(): boolean {
        try {
            const stored = localStorage.getItem(DashboardComponent.NAV_OPEN_KEY);
            return stored === null ? true : stored === 'true';
        } catch {
            return true;
        }
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
