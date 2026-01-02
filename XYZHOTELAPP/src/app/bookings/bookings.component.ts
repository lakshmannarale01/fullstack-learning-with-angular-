import { Component } from '@angular/core';
import { BookRoom } from '../bookroom/book';
import { BookingApiService } from '../services/bookingapi.service';
import { Hotel } from '../hotel/hotel';
import { Room } from '../room/room';
import { Router } from '@angular/router';
import { HotelapiService } from '../services/hotelapi.service';
import { RoomApiService } from '../services/roomapi.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  book:BookRoom = new BookRoom();
  room:Room =new Room()
  hotel:Hotel = new Hotel();
bookings:BookRoom[] = [];
hotels:Hotel[] = [];
rooms : Room[]=[];
className:string="";

constructor(private bookService:BookingApiService , private router:Router ,
   )
{
  this.bookService.getAllBookings(this.book).subscribe(data=>{
    //console.log(data)
    this.bookings = data as BookRoom[];
  });
 
}
getbooking(){
this.room.roomNo = this.book.roomNo;
this.hotel.id=this.room.id;
this.className= "spinner-border";
this.bookService.getAllBookings(this.book).subscribe(data=>{
  this.book = data as BookRoom;
   if(this.book.bookingId > 0)
    {
      alert("Booking is done")
    
    }
    else{
      alert("Sorry Unable to Book Now")
     this.className="";
    }
  },
  (err)=>{
    console.log(err);
  }

);
}
menu(){
  this.router.navigateByUrl("menu");
}
logout(){
  sessionStorage.removeItem("token");
  this.router.navigateByUrl("");

}
BookRoom(){
  this.router.navigateByUrl("bookroom");
}
Cancel(){
  this.router.navigateByUrl("cancelbooking");
}



}

