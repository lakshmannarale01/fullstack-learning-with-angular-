import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user:User = new User();
users:User[]=[];
  
constructor(private userService:UserService,private router:Router)
{

}
loginClick(){
  this.userService.login(this.user).subscribe(result=>{
    this.user = result as User;
    sessionStorage.setItem("token",this.user.token); //token session madhe store kelay 
    alert("Login success");
    
    this.router.navigateByUrl("menu")
  })
}

resetLoginForm() {
 this.user.username="";
 this.user.password="";
 
}
}
