import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookRoom } from "../bookroom/book";

@Injectable()
export class BookingApiService{

    constructor(private httpClient:HttpClient){

    }
    getToken():string{
        var token="";
        token=sessionStorage.getItem("token") as string;
        return token;
        }

getAllBookings(book:BookRoom){
    return this.httpClient.get("http://localhost:5245/api/Booking/Get")
}

addBookings(book:BookRoom){
    const header = new HttpHeaders({
        'Content-Type':'application/json',
            'Authorization':'Bearer '+this.getToken()
    });
    //console.log(book);
    const requestOptions = {headers:header};
    return this.httpClient.post("http://localhost:5245/api/Booking/AdBooking",book,requestOptions);
}
CancelBooking(bid:number){
    const header = new HttpHeaders({
        'Content-Type':'application/json',
            'Authorization':'Bearer '+this.getToken()
        });
       // console.log(bid);
        const requestOptions = {headers:header};
        return this.httpClient.delete("http://localhost:5245/api/Booking/CanclBooking?id="+bid,requestOptions);
}

}