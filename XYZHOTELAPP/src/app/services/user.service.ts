import { HttpClient } from "@angular/common/http";
import { User } from "../login/user";
import { Injectable } from "@angular/core";


@Injectable()
export class UserService{
    constructor(private httpClient:HttpClient){}

    login(user:User){
        return this.httpClient.post("http://localhost:5245/api/User/Login",user)
    }

    sighup(user:User){
        return this.httpClient.post("http://localhost:5245/api/User/Register",user)
    }
}