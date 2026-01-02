import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomByRangeComponent } from './room-by-range/room-by-range.component';
import { UpdateRoomPricenComponent } from './update-room-pricen/update-room-pricen.component';
import { AuthGuard } from './services/auth.service';
import { MenuComponent } from './menu/menu.component';
import { GetHotelDetailComponent } from './get-hotel-detail/get-hotel-detail.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';


const routes: Routes = [

  { path: 'menu', component: MenuComponent , canActivate: [AuthGuard] },
  { path: 'hotels', component: HotelsComponent, canActivate: [AuthGuard] },
  { path: 'addHotel', component: HotelComponent, canActivate: [AuthGuard] },
  { path: 'updatelocation/:hid', component: UpdateLocationComponent, canActivate: [AuthGuard] },
  { path: 'updatephone', component: UpdatePhoneComponent, canActivate: [AuthGuard] },
  { path: 'getHotelDetails', component: GetHotelDetailComponent },
  { path: 'deleteHotel', component: DeleteHotelComponent },

  { path: 'addroom', component: RoomComponent, canActivate: [AuthGuard] },
  { path: 'rooms', component: RoomsComponent ,  canActivate: [AuthGuard] },
  { path: 'getbyrange', component: RoomByRangeComponent },
  { path: 'updateroom/:rid', component: UpdateRoomPricenComponent, canActivate: [AuthGuard] },
  { path: 'deleteroom', component: DeleteRoomComponent },

  { path: 'bookroom', component: BookroomComponent },
  { path: 'bookings', component: BookingsComponent ,  canActivate: [AuthGuard] },
  { path: 'cancelbooking', component: CancelBookingComponent },
  { path: 'hoteldetail', component: HotelDetailComponent },


  { path: 'signup', component: RegisterUserComponent },
  { path: '', component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
