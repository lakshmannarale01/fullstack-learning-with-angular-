import { Component } from '@angular/core';
import { Room } from '../room/room';
import { RoomDTO } from '../room/roomdto';
import { RoomApiService } from '../services/roomapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-by-range',
  templateUrl: './room-by-range.component.html',
  styleUrls: ['./room-by-range.component.css']
})
export class RoomByRangeComponent {
  room:Room = new Room();
  rooms:Room[]=[];
  className:string="";
filterroom:Room[]=[];
  constructor(private roomService:RoomApiService , private router:Router) {
    this.roomService.getRooms().subscribe((data)=>{
      this.rooms = data as Room[] ;
    });
    
  }
  getByRange( minPriceInput:HTMLInputElement , maxPriceInput:HTMLInputElement){
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);
this.className= "spinner-border";
this.roomService.getroomByRange(minPrice , maxPrice).subscribe(data=>{
  this.filterroom = data as Room[] ;

});
  }

}
