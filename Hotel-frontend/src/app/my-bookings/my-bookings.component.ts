import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Booking {
  id: number;
  hotelName: string;
  roomNumber: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  userId: number | null;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getUserId();
  }

  ngOnInit(): void {
    if (this.userId) {
      this.loadBookings();
    }
  }

  loadBookings(): void {
    this.http.get<Booking[]>(`http://localhost:1998/api/v1/reservations/get-by-user/${this.userId}`)
      .subscribe({
        next: (data) => {
          this.bookings = data;
        },
        error: (err) => {
          console.error('Error fetching bookings', err);
        }
      });
  }

  cancelBooking(id: number): void {
    if(confirm("Are you sure you want to cancel this booking?")) {
      this.http.post(`http://localhost:1998/api/v1/reservations/cancel-reservation/${id}`, {})
        .subscribe({
          next: (res) => {
            console.log('Booking cancelled');
            this.loadBookings(); // Refresh list
          },
          error: (err) => console.error('Error cancelling booking', err)
        });
    }
  }
}
