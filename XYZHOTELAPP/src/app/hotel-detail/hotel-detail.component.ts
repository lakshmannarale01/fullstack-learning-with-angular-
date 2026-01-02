import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from '../hotel/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent {
@Input()Hname:string="";
@Input()hotel:Hotel = new Hotel();
@Output()checkCom:EventEmitter<number> = new EventEmitter<number>();

raiseEvent(){
  this.checkCom.emit(this.hotel.id);
}

}
