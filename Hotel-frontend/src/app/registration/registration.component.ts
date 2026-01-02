import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  registrationSuccess = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = {
        username: this.registrationForm.value.username,
        fullName: this.registrationForm.value.fullName,
        password: this.registrationForm.value.password,
        role: 'USER' // Default role
      };
      this.http.post('http://localhost:1998/api/v1/users/register', userData)
        .subscribe(response => {
          console.log('Registration successful', response);
          this.registrationSuccess = true;
          this.registrationForm.reset();
        }, error => {
          console.error('Registration failed', error);
        });
    }
  }
}
