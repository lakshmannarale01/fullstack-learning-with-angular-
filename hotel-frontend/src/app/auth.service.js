import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  // Register new user
  register(user) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  // Login user
  login(credentials) {
    return this.http.post(`${this.apiUrl}/users/login`, credentials);
  }
}

