import { Component } from '@angular/core';
import { AuthService } from '../auth.service.js';

export class UserRegisterComponent {
  constructor(authService) {
    this.authService = authService;
  }

  user = { username: '', email: '', password: '' };
  submitted = false;
  message = '';
  loading = false;

  onRegister(form) {
    this.submitted = true;
    this.message = '';

    if (form.valid) {
      this.loading = true;
      this.authService.register(this.user).subscribe({
        next: (response) => {
          this.message = '✅ User registered successfully!';
          this.loading = false;
          this.user = { username: '', email: '', password: '' };
          console.log('Success:', response);
        },
        error: (error) => {
          this.message = '❌ Error: ' + error.error.message;
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }
}

UserRegisterComponent.annotations = [
  new Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
  })
];

UserRegisterComponent.ctorParameters = () => [
  { type: AuthService }
];
