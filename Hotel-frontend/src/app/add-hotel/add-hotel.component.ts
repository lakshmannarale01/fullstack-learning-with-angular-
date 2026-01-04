import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService } from '../services/hotel.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  hotelForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private hotelService: HotelService
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
      this.hotelService.addHotel(this.hotelForm.value).subscribe({
        next: () => {
          console.log('Hotel added successfully');
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
