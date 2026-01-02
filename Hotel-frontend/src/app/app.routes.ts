// @ts-nocheck
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }
];
