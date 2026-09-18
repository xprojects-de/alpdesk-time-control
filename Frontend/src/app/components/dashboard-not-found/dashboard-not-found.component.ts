import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: "app-dashboard-not-found",
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatIconModule],
    template: `
        <div class="not-found">
            <mat-icon class="not-found-icon">search_off</mat-icon>
            <h2>Seite nicht gefunden</h2>
            <p>Diese Seite existiert nicht oder wurde verschoben.</p>
            <!-- Points at the dashboard root rather than a specific leaf route (e.g.
                 /dashboard/age-groups), so this stays correct on its own if the default landing
                 page ever changes - that's decided once by the {path: '', redirectTo: ...} child
                 route in app.routes.ts, which this link rides along with. -->
            <a mat-flat-button color="primary" routerLink="/dashboard">
                Zur Startseite
            </a>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
          .not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 64px 16px;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
          }

          .not-found-icon {
            font-size: 48px;
            width: 48px;
            height: 48px;
            color: rgba(0, 0, 0, 0.35);
          }

          h2 {
            margin: 0;
            color: rgba(0, 0, 0, 0.87);
          }

          p {
            margin: 0 0 8px;
          }
        `,
    ],
})
export class DashboardNotFoundComponent {
}
