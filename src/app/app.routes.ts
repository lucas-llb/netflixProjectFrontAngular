import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SerieComponent } from './pages/serie/serie.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeNoAuthComponent } from './pages/home-no-auth/home-no-auth.component';

export const routes: Routes = [
    {path: '', component: HomeNoAuthComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'search', component: SearchComponent},
    {path: 'series/:id', component: SerieComponent},
    {path: 'serie/episode/:order', component: EpisodeComponent},
];
