import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  hotelForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      totalRooms: ['', [Validators.required, Validators.min(1)]],
      starRating: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.hotelForm.valid) {
      this.http.post('http://localhost:1998/api/v1/hotels/create-Hotel', this.hotelForm.value)
        .subscribe({
          next: (res) => {
            console.log('Hotel added successfully', res);
            this.successMessage = 'Hotel added successfully!';
            setTimeout(() => {
              this.router.navigate(['/hotels']);
            }, 1500);
          },
          error: (err) => {
            console.error('Error adding hotel', err);
            this.errorMessage = 'Failed to add hotel. Please try again.';
          }
        });
    }
  }
}
