import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalHotels: any = 0;
  totalBookings: any = 0;
  totalUsers: any = 0;
  recentBookings: any[] = [];
  featuredHotels: any[] = [];   // example: for index features
  offers: any[] = [];           // example: for index offers

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadRecentBookings();
    this.loadFeaturedHotels();
    this.loadOffers();
  }

  // Stats: total hotels, bookings, users
  loadStats(): void {
    this.http.get('http://localhost:1998/api/home/stats')
      .subscribe((res: any) => {
        this.totalHotels = res.totalHotels;
        this.totalBookings = res.totalBookings;
        this.totalUsers = res.totalUsers;
      }, err => console.error(err));
  }

  // Recent bookings table
  loadRecentBookings(): void {
    this.http.get('http://localhost:1998/api/bookings/recent')
      .subscribe((res: any) => {
        this.recentBookings = res;
      }, err => console.error(err));
  }

  // Featured hotels for index section
  loadFeaturedHotels(): void {
    this.http.get('http://localhost:1998/api/hotels/featured')
      .subscribe((res: any) => {
        this.featuredHotels = res;
      }, err => console.error(err));
  }

  // Special offers for index section
  loadOffers(): void {
    this.http.get('http://localhost:1998/api/offers')
      .subscribe((res: any) => {
        this.offers = res;
      }, err => console.error(err));
  }
}
