// @ts-nocheck
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'hotels', loadComponent: () => import('./hotel-list/hotel-list.component').then(m => m.HotelListComponent) },
  { path: 'add-hotel', loadComponent: () => import('./add-hotel/add-hotel.component').then(m => m.AddHotelComponent) },
  { path: 'hotels/:id/rooms', loadComponent: () => import('./room-list/room-list.component').then(m => m.RoomListComponent) },
  { path: 'add-room/:hotelId', loadComponent: () => import('./add-room/add-room.component').then(m => m.AddRoomComponent) },
  { path: 'book-room/:roomId', loadComponent: () => import('./book-room/book-room.component').then(m => m.BookRoomComponent) },
  { path: 'my-bookings', loadComponent: () => import('./my-bookings/my-bookings.component').then(m => m.MyBookingsComponent) }
];
