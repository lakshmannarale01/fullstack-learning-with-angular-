import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { RegisterComponent } from './register/register.component.js';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/home' }
];
