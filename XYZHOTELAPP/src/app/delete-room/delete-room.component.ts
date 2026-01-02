import { Component } from '@angular/core';
import { Room } from '../room/room';
import { RoomApiService } from '../services/roomapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent {
  room:Room = new Room();
  rooms : Room[]= [];

  constructor(private roomService:RoomApiService,
    private router:Router){
this.roomService.getRooms().subscribe(hot=>{
  this.rooms = hot as Room[];
})
  }

  selectone(hid:any){
    for(let index = 0 ; index<this.rooms.length; index++){
      if(this.rooms[index].roomNo==hid)
      {
        this.room = this.rooms[index];
        break;
      }
    }
  }

  deleteRoom(){
  
    this.roomService.deleteRoom(this.room.roomNo).subscribe(hot=>{
      if(hot){
        alert("Hotel deleted succesfully")
        this.router.navigateByUrl("hotels")
      }
    })
    this.room =  new Room();

  }

}
