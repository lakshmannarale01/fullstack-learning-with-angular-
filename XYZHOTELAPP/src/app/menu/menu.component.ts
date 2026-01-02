import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router){

  }
  logout(){
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("");
  }
  AddHotel(){
  this.router.navigateByUrl("addHotel");
  }
  Hotel(){
    this.router.navigateByUrl("hotels");
  }
  Rooms(){
    this.router.navigateByUrl("rooms");
  }
  Book(){
    this.router.navigateByUrl("bookings");
  }

}
