import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
      } catch (e) {
        console.error('Error decoding token', e);
        return null;
      }
    }
    return null;
  }

  getUserId(): number | null {
    // This assumes your JWT payload has a 'userId' claim.
    // You might need to adjust the claim name (e.g., 'sub', 'id').
    const payload = this.decodeToken();
    return payload ? payload.userId : null;
  }

   getUsername(): string | null {
    const payload = this.decodeToken();
    return payload ? payload.sub : null; // 'sub' is standard for subject/username in JWT
  }

  getUserRole(): string | null {
    // This assumes your JWT payload has a 'role' claim.
    const payload = this.decodeToken();
    return payload ? payload.role : null;
  }
}
