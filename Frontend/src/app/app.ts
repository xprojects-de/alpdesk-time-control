import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('time-control');

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Check authentication status on app initialization
    this.store.dispatch(AuthActions.checkAuth());
  }
}
