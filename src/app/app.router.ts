import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AlbumComponent } from './component/album/album.component';

    // tslint:disable-next-line:align
    export const appRoutes: Routes = [
            {path: '', component: HomeComponent},
            {path: 'album/:id', component: AlbumComponent},
            {path: '**', component: HomeComponent},
    ];
