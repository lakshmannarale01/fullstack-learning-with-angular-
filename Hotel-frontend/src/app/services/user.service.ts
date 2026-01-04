import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userId: number;
  username: string;
  fullName: string;
  role: string;
}

const API_URL = 'http://localhost:1998/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  updateUserRole(userId: number, role: string): Observable<any> {
    return this.http.put(`${API_URL}/${userId}/role`, JSON.stringify(role), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
