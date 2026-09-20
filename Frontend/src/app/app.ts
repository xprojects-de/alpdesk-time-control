import {Component, OnInit, inject} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {Store} from "@ngrx/store";
import * as AuthActions from "./store/auth/auth.actions";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App implements OnInit {
    private store: Store = inject(Store);

    ngOnInit(): void {
        this.store.dispatch(AuthActions.checkAuth());
    }
}
