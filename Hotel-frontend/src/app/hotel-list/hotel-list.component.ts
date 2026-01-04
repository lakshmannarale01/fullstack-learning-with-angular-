import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Hotel, HotelService } from '../services/hotel.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private hotelService: HotelService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.hotelService.getHotels().subscribe({
      next: (data) => {
        this.hotels = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching hotels', err);
        this.errorMessage = 'Could not load hotels. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  deleteHotel(id: number): void {
    if(confirm("Are you sure you want to delete this hotel?")) {
      this.hotelService.deleteHotel(id).subscribe({
        next: () => {
          console.log('Hotel deleted');
          this.loadHotels(); // Refresh list
        },
        error: (err) => {
          console.error('Error deleting hotel', err);
          this.errorMessage = 'Could not delete hotel. Please try again.';
        }
      });
    }
  }
}
