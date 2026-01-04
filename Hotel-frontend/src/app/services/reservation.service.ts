import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id: number;
  hotelName: string;
  roomNumber: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

const API_URL = 'http://localhost:1998/api/v1/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  createReservation(bookingData: any): Observable<any> {
    return this.http.post(`${API_URL}/create-reservation`, bookingData);
  }

  getBookingsByUser(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${API_URL}/get-by-user/${userId}`);
  }

  cancelReservation(id: number): Observable<any> {
    return this.http.post(`${API_URL}/cancel-reservation/${id}`, {});
  }
}
