import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  errorMessage = '';
  successMessage = '';
  http = null;

  constructor(httpClient) {
    this.http = httpClient;
  }

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.http.post('http://localhost:8080/api/users', this.user)
      .subscribe({
        next: () => {
          this.successMessage = 'Registration successful!';
          this.errorMessage = '';
          this.user = { name: '', email: '', password: '', confirmPassword: '' };
        },
        error: () => {
          this.errorMessage = 'Registration failed. Try again.';
          this.successMessage = '';
        }
      });
  }
}
