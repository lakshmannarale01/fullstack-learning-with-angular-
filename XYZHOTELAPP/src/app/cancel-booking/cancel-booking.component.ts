import { Component } from '@angular/core';
import { BookRoom } from '../bookroom/book';
import { BookingApiService } from '../services/bookingapi.service';
import { Router } from '@angular/router';
import { HotelapiService } from '../services/hotelapi.service';
import { RoomApiService } from '../services/roomapi.service';
import { Hotel } from '../hotel/hotel';
import { Room } from '../room/room';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent {
book:BookRoom = new BookRoom();
bookings:BookRoom[]=[];
room:Room =new Room()
hotel:Hotel = new Hotel();
hotels:Hotel[] = [];
rooms : Room[]=[];
constructor(private bookService:BookingApiService , private router:Router ,
  private hotelService:HotelapiService , private roomservice:RoomApiService){
this.bookService.getAllBookings(this.book).subscribe(data=>{
this.bookings = data as BookRoom[];
});
this.hotelService.getHotels().subscribe(data=>{
  console.log(data)
  this.hotels = data as Hotel[];
});
this.roomservice.getRooms().subscribe(data=>{
  console.log(data);
  this.rooms = data as Room[];
})
}

selectbookings(bid:any){
  for (let index = 0; index < this.bookings.length; index++) {
    if(this.bookings[index].bookingId == bid)
    {
      this.book = this.bookings[index];
      break;
    }
    
  }

}

cancelBooking(){
  this.bookService.CancelBooking(this.book.bookingId).subscribe(data=>{
    if(data)
    {
      alert("booking cancel auccessfully")
      this.router.navigateByUrl("bookings")
    }
  })
  this.book = new BookRoom();
}

}
