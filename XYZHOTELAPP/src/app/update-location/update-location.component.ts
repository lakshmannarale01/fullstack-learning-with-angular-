import { Component } from '@angular/core';
import { Hotel } from '../hotel/hotel';
import { HotelapiService } from '../services/hotelapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotellocation } from '../hotel/hotellocation';


@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent {
  hotel: Hotel = new Hotel();

  hotels: Hotel[] = [];
  className: string = "";

  constructor(private hotelService: HotelapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    // this.hotelService.getHotels().subscribe(hot=>{
    //   this.hotels = hot as Hotel[];
    // }
    //)
  }

  // selectone(hid:any){
  //   for(let index = 0 ; index<this.hotels.length; index++){
  //     if(this.hotels[index].id==hid)
  //     {
  //       this.hotel = this.hotels[index];
  //       break;
  //     }
  //   }
  // }

  updateHotelsLocation() {
    var myhotel: Hotellocation = new Hotellocation();
    myhotel.id = this.activatedRoute.snapshot.params["hid"];
    myhotel.location = this.hotel.location; 
    this.hotelService.updateLocation(myhotel).subscribe(data => {
      this.hotel = data as Hotel;
      if (this.hotel.id) {
        this.hotel.location = this.hotel.location
        alert("Updated Status");
        this.router.navigate(["hotels"]);
      }
      else {
        alert("Sorry , unable to add at this Moment")
      }

    },
      (err) => {
        console.log(err);
      })

    this.hotel = new Hotel();
  }


}


  // updateHotelsLocation(){
  //  var  myhotel:Hotellocation= new Hotellocation();
  //  myhotel.id = this.hotel.id;
  //  myhotel.location = this.hotel.location;
  //   this.className= "spinner-border";
  //   this.hotelService.updateLocation(myhotel).subscribe(data=>{
  //     this.hotel = data as Hotel;
  //     if(this.hotel.id){
  //       // this.hotel.location= this.hotel.location
  //       alert("The Hotel has been updated");
  //       this.router.navigateByUrl("hotels")
  //     }
  //     else{
  //       alert("Sorry , unable to add at this Moment")
  //       this.className="";
  //     }
  //   },
  //   (err)=>{
  //     console.log(err);
  //   })

  //   this.hotel =new Hotel();
  // }





