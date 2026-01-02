import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:1998/api/v1/users/login', this.loginForm.value)
        .subscribe((response: any) => {
          console.log('Login successful', response);
          // Here you would typically save the token and navigate to a protected route
          // For now, we'll just navigate to the home/dashboard page
          this.router.navigate(['/home']);
        }, error => {
          console.error('Login failed', error);
        });
    }
  }

  resetLoginForm() {
    this.loginForm.reset();
  }
}
