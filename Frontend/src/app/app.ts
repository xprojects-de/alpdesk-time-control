import {
    Component,
    signal,
    OnInit,
    ChangeDetectionStrategy, inject,
} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {Store} from "@ngrx/store";
import * as AuthActions from "./store/auth/auth.actions";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    templateUrl: "./app.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: "./app.scss",
})
export class App implements OnInit {
    protected readonly title = signal("time-control");
    private store: Store = inject(Store);

    ngOnInit(): void {
        this.store.dispatch(AuthActions.checkAuth());
    }
}
