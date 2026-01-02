import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  http = inject(HttpClient);
  user = { name: '', email: '', password: '' };

  onRegister() {
    this.http.post('http://localhost:8080/api/users/register', this.user).subscribe({
      next: response => console.log('User registered!', response),
      error: error => console.error('Registration failed', error)
    });
  }
}
