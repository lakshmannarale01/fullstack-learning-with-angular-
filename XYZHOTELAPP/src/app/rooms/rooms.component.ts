import { Component } from '@angular/core';
import { Room } from '../room/room';
import { RoomApiService } from '../services/roomapi.service';
import { Router } from '@angular/router';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
rooms:Room[]=[];
hotels:Hotel[]=[];
constructor(private roomService:RoomApiService,private router:Router ,private hotelService:HotelapiService){
this.roomService.getRooms().subscribe(data=>{
  console.log(data)
  this.rooms = data as Room[];
});
this.hotelService.getHotels().subscribe(data=>{
  console.log(data)
  this.hotels = data as Hotel[];
})
}
logout(){
  sessionStorage.removeItem("token");
  this.router.navigateByUrl("");
}
menu(){
  this.router.navigateByUrl("menu");
}
AddRoom(){
  this.router.navigateByUrl("addroom");
}
Range(){
  this.router.navigateByUrl("getbyrange");
}
Update(){
  this.router.navigateByUrl("updateroom");
}
Delete(){
  this.router.navigateByUrl("deleteroom");
}

showData(data:any)
{
console.log(data);
this.router.navigate(["updateroom" , data])
}

}
