import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Room } from "../room/room";
import { RoomDTO } from "../room/roomdto";


@Injectable()
export class RoomApiService{

    constructor(private httpClient:HttpClient){

    }

    getToken():string{
var token="";
token=sessionStorage.getItem("token") as string;
        return token;
    }

    getRooms(){
        return this.httpClient.get("http://localhost:5245/api/Room");
    }
    addRooms(room:Room){
        const header = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+this.getToken() // authorize by Manager
        });
        console.log(room);
        const requestOptions= {headers:header};
        return this.httpClient.post("http://localhost:5245/api/Room/Addroom", room,requestOptions);
    }

 getroomByRange(minPrice:number  ,maxPrice:number){
              const header = new HttpHeaders({    //working
            'Content-Type':'application/json',
            'Authorization':'Bearer '+this.getToken() 
        });
                console.log(minPrice , maxPrice);
        const requestOptions = {headers:header};
        return this.httpClient.get<Room[]>("http://localhost:5245/api/Room/GetRangePrice?min="+minPrice+"&max="+maxPrice)
    }

updatePrice(room:RoomDTO){
        const header = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+this.getToken() 
        });
     console.log(room);
        const requestOptions = {headers:header};
        return this.httpClient.put("http://localhost:5245/api/Room/UpdatePrice",room,requestOptions)
}
deleteRoom(rid:number){ 
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.getToken() 
    });
  
    const requestOptions = {headers:header};
    return this.httpClient.delete("http://localhost:5245/api/Room?id="+rid , requestOptions)

}

updateRoomStatus(rid:number){
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.getToken() 
    });
  
    const requestOptions = {headers:header};
    return this.httpClient.delete("http://localhost:5245/api/Room/UpdateStatus?id="+rid , requestOptions)
}


}