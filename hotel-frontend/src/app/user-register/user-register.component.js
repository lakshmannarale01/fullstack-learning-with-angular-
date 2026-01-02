import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule ,httpclient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule , CommonModule ],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor() {}

  onRegister() {
    this.http.post('http://localhost:8080/api/users/register', this.user).subscribe(
      response => console.log('User registered!', response),
      error => console.error('Registration failed', error)
    );
  }
}
