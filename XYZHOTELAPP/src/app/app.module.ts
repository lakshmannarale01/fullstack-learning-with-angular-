import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { HotelComponent } from './hotel/hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelapiService } from './services/hotelapi.service';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
import { RoomApiService } from './services/roomapi.service';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomByRangeComponent } from './room-by-range/room-by-range.component';
import { UpdateRoomPricenComponent } from './update-room-pricen/update-room-pricen.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth.service';
import { MenuComponent } from './menu/menu.component';
import { GetHotelDetailComponent } from './get-hotel-detail/get-hotel-detail.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingApiService } from './services/bookingapi.service';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { IsActiveRoomComponent } from './is-active-room/is-active-room.component';

export function tokenGetter(){
  return sessionStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelComponent,
    HotelsComponent,
    DeleteHotelComponent,
    UpdateLocationComponent,
    UpdatePhoneComponent,
    RoomComponent,
    RoomsComponent,
    RoomByRangeComponent,
    UpdateRoomPricenComponent,
    MenuComponent,
    GetHotelDetailComponent,
    BookroomComponent,
    BookingsComponent,
    DeleteRoomComponent,
    CancelBookingComponent,
    RegisterUserComponent,
    HotelDetailComponent,
    RoomDetailComponent,
    IsActiveRoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["http://localhost:5245/"]
      }
  })
  ],
  providers: [UserService , HotelapiService,RoomApiService,AuthGuard,BookingApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
