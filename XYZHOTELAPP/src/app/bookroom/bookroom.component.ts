import { Component } from '@angular/core';
import { BookRoom } from './book';
import { BookingApiService } from '../services/bookingapi.service';
import { Router } from '@angular/router';
import { RoomApiService } from '../services/roomapi.service';
import { HotelapiService } from '../services/hotelapi.service';
import { Hotel } from '../hotel/hotel';
import { Room } from '../room/room';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent {
book:BookRoom = new BookRoom();
room:Room =new Room()
hotel:Hotel = new Hotel();
hotels : Hotel[]= [];
rooms : Room[]=[];
className:string="";

constructor(private bookservice:BookingApiService , private router:Router,
  private roomservice:RoomApiService ,private hotelservice:HotelapiService){
this.hotelservice.getHotels().subscribe(hot=>{
  this.hotels = hot as Hotel[]
});
this.roomservice.getRooms().subscribe(data=>{
  this.rooms = data as Room[]
});
}
selectHotel(hid:any){
for (let index = 0; index < this.hotels.length; index++) {
 if(this.hotels[index].id==hid)
 {
  this.hotel = this.hotels[index];
  break;
 } 
 }
}
selectRoom(rid:any){
  for (let index = 0; index < this.rooms.length; index++) {
    if(this.rooms[index].roomNo==rid){
      this.room = this.rooms[index];
      break;
    }
  }
}

bookRoom(){
 var  myBook:BookRoom =new BookRoom()
     myBook.id=this.hotel.id;
  myBook.roomNo= this.room.roomNo;
  myBook.checkIn= this.book.checkIn;
  myBook.checkOut = this.book.checkOut;
<<<<<<< Updated upstream
  myBook.customerName=this.book.customerName
=======
  myBook.customerName=this.book.customerName;
>>>>>>> Stashed changes
  this.className= "spinner-border";
  this.bookservice.addBookings(myBook).subscribe(data=>{
    this.book = data as BookRoom;
    if(this.book.bookingId > 0)
    {
      alert("Booking is done")
      this.router.navigateByUrl("bookings")
      this.className="";
    }
  
   
  },
  (err)=>{
    alert("Sorry Unable to Book Now")
    this.router.navigateByUrl("bookings")
  });
  this.book=new BookRoom();
}


}
