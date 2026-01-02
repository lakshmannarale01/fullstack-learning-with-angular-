import { Component } from '@angular/core';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent {

  hotel:Hotel = new Hotel();

  hotels : Hotel[]= [];

  constructor(private hotelService:HotelapiService,
    private router:Router){
this.hotelService.getHotels().subscribe(hot=>{
  this.hotels = hot as Hotel[];
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

  deleteHotel(){
  
    this.hotelService.deleteHotel(this.hotel.id).subscribe(hot=>{
      if(hot){
        alert("Hotel deleted succesfully")
        this.router.navigateByUrl("hotels")
      }
    });
    this.hotel =  new Hotel();
  }




}
