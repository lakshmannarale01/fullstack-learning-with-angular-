import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XYZHOTELAPP';
  constructor(private router:Router){

  }
    
  // forlogin(){
  // this.router.navigateByUrl("welcome")
  // }
}
