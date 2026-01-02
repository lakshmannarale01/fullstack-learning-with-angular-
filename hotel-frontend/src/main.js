import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component.js';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Template-driven forms

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'register', loadComponent: () => import('./app/user-register/user-register.component.js') },
      { path: '', redirectTo: '/register', pathMatch: 'full' }
    ]),
    provideHttpClient(),
    importProvidersFrom(FormsModule)  // ← Correct FormsModule provider
  ]
});
