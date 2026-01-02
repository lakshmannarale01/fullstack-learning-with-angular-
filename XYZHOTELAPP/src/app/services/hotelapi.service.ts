import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotel } from "../hotel/hotel";


import { Hotellocation } from "../hotel/hotellocation";
import { hotelphone } from "../hotel/hotelphone";

@Injectable()
export class HotelapiService{
constructor(private httpClient:HttpClient){}

getToken():string{
    var token="";
    token=sessionStorage.getItem("token") as string;
    return token;
}

getHotels(){
    return this.httpClient.get("http://localhost:5245/api/Hotel");
}

addHotels(hotel:Hotel){   // working 
const header =new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization':'Bearer '+this.getToken() // bearer nantr space required ahe

});

const requestOptions = {headers:header};
return this.httpClient.post("http://localhost:5245/api/Hotel",hotel,requestOptions)
}


deleteHotel(hid:number){ // working
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.getToken() 
    });
 
    const requestOptions = {headers:header};
    return this.httpClient.delete("http://localhost:5245/api/Hotel?id="+hid , requestOptions)

}

updateLocation(hotel:Hotellocation){ 

    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.getToken() 
    });
    console.log(hotel);
    const requestOptions = {headers:header};
    return this.httpClient.put("http://localhost:5245/api/Hotel/UpdateLocation",hotel,requestOptions)
}

updatePhone(hotel:hotelphone){

    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.getToken() 
    });
    console.log(hotel);
    const requestOptions = {headers:header};
    return this.httpClient.put("http://localhost:5245/api/Hotel/UpdatePhone",hotel,requestOptions)
}

}