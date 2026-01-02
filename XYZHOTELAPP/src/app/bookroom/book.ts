export class BookRoom{
    constructor(public bookingId:number=0,
        public roomNo:number=0,
        public id:number=0,
        public customerName:string="",
        public checkIn:Date=new Date(),
        public checkOut:Date = new Date,
        
       ){

    }
}