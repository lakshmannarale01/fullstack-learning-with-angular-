import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Hotel {
  id: number;
  name: string;
  location: string;
  totalRooms: number;
  starRating: string;
}

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.http.get<Hotel[]>('http://localhost:1998/api/v1/hotels/get-all-hotels')
      .subscribe({
        next: (data) => {
          this.hotels = data;
        },
        error: (err) => {
          console.error('Error fetching hotels', err);
        }
      });
  }

  deleteHotel(id: number): void {
    if(confirm("Are you sure you want to delete this hotel?")) {
      this.http.delete(`http://localhost:1998/api/v1/hotels/delete-hotel/${id}`)
        .subscribe({
          next: (res) => {
            console.log('Hotel deleted');
            this.loadHotels(); // Refresh list
          },
          error: (err) => console.error('Error deleting hotel', err)
        });
    }
  }
}
