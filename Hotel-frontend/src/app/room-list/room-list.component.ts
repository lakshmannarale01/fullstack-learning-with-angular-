import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  price: number;
  description: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  hotelId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = +params['id'];
      this.loadRooms(this.hotelId);
    });
  }

  loadRooms(hotelId: number): void {
    this.http.get<Room[]>(`http://localhost:1998/api/v1/rooms/get-by-hotel/${hotelId}`)
      .subscribe({
        next: (data) => {
          this.rooms = data;
        },
        error: (err) => {
          console.error('Error fetching rooms', err);
        }
      });
  }

  deleteRoom(id: number): void {
    if(confirm("Are you sure you want to delete this room?")) {
      this.http.delete(`http://localhost:1998/api/v1/rooms/delete-room/${id}`)
        .subscribe({
          next: (res) => {
            console.log('Room deleted');
            this.loadRooms(this.hotelId);
          },
          error: (err) => console.error('Error deleting room', err)
        });
    }
  }
}
