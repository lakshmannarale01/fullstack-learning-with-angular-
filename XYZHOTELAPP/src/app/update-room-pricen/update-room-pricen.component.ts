import { Component } from '@angular/core';
import { Room } from '../room/room';
import { RoomApiService } from '../services/roomapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDTO } from '../room/roomdto';

@Component({
  selector: 'app-update-room-pricen',
  templateUrl: './update-room-pricen.component.html',
  styleUrls: ['./update-room-pricen.component.css']
})
export class UpdateRoomPricenComponent {
room:Room = new Room();
rooms:Room[]=[];
className:string="";

constructor(private roomService:RoomApiService,private router:Router, private activatedRoute: ActivatedRoute ){
  // this.roomService.getRooms().subscribe(data=>{
  //   this.rooms = data as Room[];
  // })
}

  // selectone(hid:any){
  //   for(let index = 0 ; index<this.rooms.length; index++){
  //     if(this.rooms[index].roomNo==hid)
  //     {
  //       this.room = this.rooms[index];
  //       break;
  //     }
  //   }
  // }

  updateRoomPrice(){
    var myroom:RoomDTO = new RoomDTO();
    myroom.roomNo = this.activatedRoute.snapshot.params["rid"];
    myroom.price = this.room.price;
    this.className= "spinner-border";
    this.roomService.updatePrice(myroom).subscribe(data=>{
  this.room = data as Room;
  if(this.room.roomNo > 0){
    alert("The room has been updated");
    this.router.navigateByUrl("rooms")
  }
  else{
    alert("Sorry , unable to update at this Moment")
        this.className="";
  }
    },
        (err)=>{
        console.log(err);
      }
    )
      
      this.room =new Room();
  }
// updateRoomPrice(){
//   var myroom:RoomDTO = new RoomDTO();
//   myroom.roomNo = this.room.roomNo;
//   myroom.price = this.room.price;
//   this.className= "spinner-border";
//   this.roomService.updatePrice(myroom).subscribe(data=>{
// this.room = data as Room;
// if(this.room.roomNo > 0){
//   alert("The room has been updated");
//   this.router.navigateByUrl("rooms")
// }
// else{
//   alert("Sorry , unable to update at this Moment")
//       this.className="";
// }
//   },
//       (err)=>{
//       console.log(err);
//     }
//   )
    
//     this.room =new Room();
// }

}
