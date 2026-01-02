import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../room/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent {
  @Input()Hname:string="";
  @Input()room:Room = new Room();
  @Output()checkCom:EventEmitter<number> = new EventEmitter<number>();
  
  raiseEvent(){
    this.checkCom.emit(this.room.roomNo);
  }
  
}
