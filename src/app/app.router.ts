import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

    // tslint:disable-next-line:align
    export const appRoutes: Routes = [
            {path: '', component: HomeComponent},
            {path: '**', component: HomeComponent},
    ];
