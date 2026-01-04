import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ReservationService } from '../services/reservation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  bookingForm: FormGroup;
  roomId: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private reservationService: ReservationService
  ) {
    this.bookingForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      userId: [this.authService.getUserId(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomId = +params['roomId'];
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const bookingData = {
        ...this.bookingForm.value,
        roomId: this.roomId
      };

      this.reservationService.createReservation(bookingData).subscribe({
        next: () => {
          console.log('Booking successful');
          this.successMessage = 'Booking successful!';
          setTimeout(() => {
            this.router.navigate(['/my-bookings']);
          }, 1500);
        },
        error: (err) => {
          console.error('Error booking room', err);
          this.errorMessage = 'Failed to book room. Please try again.';
        }
      });
    }
  }
}
