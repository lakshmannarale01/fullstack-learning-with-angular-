import { Component } from '@angular/core';
import { Room } from '../room/room';

@Component({
  selector: 'app-is-active-room',
  templateUrl: './is-active-room.component.html',
  styleUrls: ['./is-active-room.component.css']
})
export class IsActiveRoomComponent {
room:Room=new Room();
rooms:Room[]=[];
constructor(){

}
}
