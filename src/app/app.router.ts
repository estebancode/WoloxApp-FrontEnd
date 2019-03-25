import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AlbumComponent } from './component/album/album.component';
import { UseralbumComponent } from './component/useralbum/useralbum.component';
import { PhotoComponent } from './component/photo/photo.component';

    // tslint:disable-next-line:align
    export const appRoutes: Routes = [
            {path: '', component: HomeComponent},
            {path: 'album/:id', component: AlbumComponent},
            {path: 'useralbum/:id', component: UseralbumComponent},
            {path: 'photo/:id/:userid', component: PhotoComponent},
            {path: '**', component: HomeComponent},
    ];
