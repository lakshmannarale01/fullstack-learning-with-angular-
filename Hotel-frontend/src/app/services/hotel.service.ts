import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// We'll create a proper model file for this later
export interface Hotel {
  id: number;
  name: string;
  location: string;
  totalRooms: number;
  starRating: string;
}

const API_URL = 'http://localhost:1998/api/v1/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${API_URL}/get-all-hotels`);
  }

  addHotel(hotelData: any): Observable<any> {
    return this.http.post(`${API_URL}/create-Hotel`, hotelData);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/delete-hotel/${id}`);
  }
}
