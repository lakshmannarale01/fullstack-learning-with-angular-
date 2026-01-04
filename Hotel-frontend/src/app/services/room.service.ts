import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  price: number;
  description: string;
  isAvailable: boolean;
}

const API_URL = 'http://localhost:1998/api/v1/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRoomsByHotel(hotelId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${API_URL}/get-by-hotel/${hotelId}`);
  }

  addRoom(roomData: any): Observable<any> {
    return this.http.post(`${API_URL}/create-Room`, roomData);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/delete-room/${id}`);
  }
}
