import { Component } from '@angular/core';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-hotel-detail',
  templateUrl: './get-hotel-detail.component.html',
  styleUrls: ['./get-hotel-detail.component.css']
})
export class GetHotelDetailComponent {

 
  hotel:Hotel = new Hotel();

  hotels:Hotel[]=[];
  className:string="";
  constructor(private hotelService:HotelapiService , private router:Router){
this.hotelService.getHotels().subscribe(data=>{
  console.log(data)
  this.hotels = data as Hotel[];
})

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

}
