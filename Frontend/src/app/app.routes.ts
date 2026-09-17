import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: '', redirectTo: 'age-groups', pathMatch: 'full'},
            {
                path: 'age-groups',
                loadComponent: () => import('./components/age-group-list/age-group-list.component')
                    .then(m => m.AgeGroupListComponent)
            },
            {
                path: 'races',
                loadComponent: () => import('./components/race-list/race-list.component')
                    .then(m => m.RaceListComponent)
            },
            {
                path: 'teams',
                loadComponent: () => import('./components/team-list/team-list.component')
                    .then(m => m.TeamListComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./components/category-list/category-list.component')
                    .then(m => m.CategoryListComponent)
            },
            {
                path: 'persons',
                loadComponent: () => import('./components/person-list/person-list.component')
                    .then(m => m.PersonListComponent)
            },
            {
                path: 'participants',
                loadComponent: () => import('./components/participant-list/participant-list.component')
                    .then(m => m.ParticipantListComponent)
            },
            {
                path: 'start-group-templates',
                loadComponent: () => import('./components/start-group-template-list/start-group-template-list.component')
                    .then(m => m.StartGroupTemplateListComponent)
            },
            {
                path: 'start-groups',
                loadComponent: () => import('./components/start-group-board/start-group-board.component')
                    .then(m => m.StartGroupBoardComponent)
            },
            {
                path: 'measurements',
                loadComponent: () => import('./components/measurement-list/measurement-list.component')
                    .then(m => m.MeasurementListComponent)
            },
            {
                path: 'race-measurements',
                loadComponent: () => import('./components/race-measurement-list/race-measurement-list.component')
                    .then(m => m.RaceMeasurementListComponent)
            },
            {
                path: 'gaudi-mode',
                loadComponent: () => import('./components/gaudi-modus/gaudi-modus.component')
                    .then(m => m.GaudiModusComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./components/settings/settings.component')
                    .then(m => m.SettingsComponent)
            },
        ]
    },
    {path: '**', redirectTo: '/login'}
];
