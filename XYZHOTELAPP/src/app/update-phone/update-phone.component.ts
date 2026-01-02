import { Component } from '@angular/core';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';
import { Router } from '@angular/router';
import { hotelphone } from '../hotel/hotelphone';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent {
  hotel:Hotel = new Hotel();

  hotels : Hotel[]= [];
  className:string="";

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

  updateHotelsphone(){
    var  myhotel:hotelphone= new hotelphone();
    myhotel.id = this.hotel.id;
    myhotel.phone = this.hotel.phone;
     this.className= "spinner-border";
     this.hotelService.updatePhone(myhotel).subscribe(data=>{
       this.hotel = data as Hotel;
       if(this.hotel.id){
         alert("The Hotel has been updated");
         this.router.navigateByUrl("hotels")
       }
       else{
         alert("Sorry , unable to update at this Moment")
         this.className="";
       }
     },
     (err)=>{
       console.log(err);
     })
  
     this.hotel =new Hotel();
   }



}



