import { Component } from '@angular/core';
import { Room } from './room';
import { RoomApiService } from '../services/roomapi.service';
import { Router } from '@angular/router';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
room:Room =new Room()
hotel:Hotel = new Hotel();
hotels : Hotel[]= [];
className:string="";

constructor(private roomservice:RoomApiService, private hotelservice:HotelapiService,
  private router:Router){
this.hotelservice.getHotels().subscribe(hot=>{
  this.hotels = hot as Hotel[]});
}
selectone(hid:any){
  for(let index = 0 ; index<this.hotels.length; index++){
    if(this.hotels[index].id==hid)
    {
      this.hotel = this.hotels[index];
      break;
    }
  }
}

addRoom(){
  this.room.id=this.hotel.id;
  this.className= "spinner-border";
  this.roomservice.addRooms(this.room).subscribe(data=>{
    this.room = data as Room;
    if(this.room.roomNo > 0){
      alert("The room is added");
      this.router.navigateByUrl("rooms")
    }
    else{
      alert("Sorry , Unable to add room")
      this.className="";
    }
  },
  (err)=>{
    console.log(err);
  })
 
  this.room = new Room();
}

assignFile(pic:any){
   
  this.room.pic = "/assets/images/"+pic.files[0].name;
}
}
