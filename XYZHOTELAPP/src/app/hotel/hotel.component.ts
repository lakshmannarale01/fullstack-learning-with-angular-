import { Component } from '@angular/core';
import { Hotel } from './hotel';
import { HotelapiService } from '../services/hotelapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  hotel:Hotel = new Hotel();
  className:string="";
constructor(private hotelService:HotelapiService,private router:Router){}

addHotels(){
  this.className= "spinner-border";
  //this.hotel.pic = this.hotel.pic.filename;
  this.hotelService.addHotels(this.hotel).subscribe(data=>{
    this.hotel = data as Hotel;
    if(this.hotel.id>0){
      alert("The Hotel has been added");
      this.router.navigateByUrl("hotels")
    }
    else{
      alert("Sorry , unable to add at this Moment")
      this.className="";
    }
  },
  (err)=>{
    console.log(err);
  })
 
  this.hotel =new Hotel();
}

assignFile(pic:any){
   
  this.hotel.pic = "/assets/images/"+pic.files[0].name;
}

// fileEvent(fileInput: Event){
//   let file = fileInput.target.files[0];
//   let fileName = file.name;
// }
}
