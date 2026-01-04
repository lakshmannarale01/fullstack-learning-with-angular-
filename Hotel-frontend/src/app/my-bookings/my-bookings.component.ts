import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Booking, ReservationService } from '../services/reservation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  userId: number | null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private reservationService: ReservationService
  ) {
    this.userId = this.authService.getUserId();
  }

  ngOnInit(): void {
    if (this.userId) {
      this.loadBookings();
    } else {
      this.errorMessage = 'Could not identify user. Please log in again.';
    }
  }

  loadBookings(): void {
    if (this.userId) {
      this.isLoading = true;
      this.errorMessage = '';
      this.reservationService.getBookingsByUser(this.userId).subscribe({
        next: (data) => {
          this.bookings = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching bookings', err);
          this.errorMessage = 'Could not load bookings. Please try again later.';
          this.isLoading = false;
        }
      });
    }
  }

  cancelBooking(id: number): void {
    if(confirm("Are you sure you want to cancel this booking?")) {
      this.reservationService.cancelReservation(id).subscribe({
        next: () => {
          console.log('Booking cancelled');
          this.loadBookings(); // Refresh list
        },
        error: (err) => {
          console.error('Error cancelling booking', err);
          this.errorMessage = 'Could not cancel booking. Please try again.';
        }
      });
    }
  }
}
