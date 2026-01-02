import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class AuthService {
  apiUrl = 'http://localhost:8080/api/v1';

  constructor(http) {
    this.http = http;
  }

  // Register new user
  register(user) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  // Login user
  login(credentials) {
    return this.http.post(`${this.apiUrl}/users/login`, credentials);
  }
}

AuthService.annotations = [
  new Injectable({
    providedIn: 'root'
  })
];

AuthService.ctorParameters = () => [
  { type: HttpClient }
];
