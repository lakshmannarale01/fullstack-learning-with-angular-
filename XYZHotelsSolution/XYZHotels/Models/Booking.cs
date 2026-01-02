using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace XYZHotels.Models
{
    public class Booking
    {
        [Key] public int BookingId { get; set; }

        public string? CustomerName { get; set; }

     

        public int Id { get; set; }
        [ForeignKey("Id")]
        public Hotel? Hotel { get; set; }
        public int RoomNo { get; set; }
        [ForeignKey("RoomNo")]
        public Room? Room { get; set; }
        //public int Id { get; set; }
        //[ForeignKey("Id")]
        //public Hotel? Hotel { get; set; }

        public DateTime CheckIn { get; set; }

        public DateTime CheckOut { get; set; }






    }
}
