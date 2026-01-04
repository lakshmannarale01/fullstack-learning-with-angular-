import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Room, RoomService } from '../services/room.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  hotelId: number = 0;
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = +params['id'];
      this.loadRooms(this.hotelId);
    });
  }

  loadRooms(hotelId: number): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.roomService.getRoomsByHotel(hotelId).subscribe({
      next: (data) => {
        this.rooms = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching rooms', err);
        this.errorMessage = 'Could not load rooms. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  deleteRoom(id: number): void {
    if(confirm("Are you sure you want to delete this room?")) {
      this.roomService.deleteRoom(id).subscribe({
        next: () => {
          console.log('Room deleted');
          this.loadRooms(this.hotelId);
        },
        error: (err) => {
          console.error('Error deleting room', err);
          this.errorMessage = 'Could not delete room. Please try again.';
        }
      });
    }
  }
}
