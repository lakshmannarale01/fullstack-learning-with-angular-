using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace XYZHotels.Models
{
    public class Room
    {
        [Key] public int RoomNo { get; set; }

        public string Details { get; set; }
        [Required(ErrorMessage = "price is mandatory")]
        public double price { get; set; }

        public bool? IsActive { get; set; }
        public string? Pic { get; set; }
        public int Id { get; set; }
        [ForeignKey("Id")]
        public Hotel? Hotel { get; set; }

        public ICollection<Booking>? Bookings { get; set; }

    }
}
