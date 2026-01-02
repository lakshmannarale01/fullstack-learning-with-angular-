using System.ComponentModel.DataAnnotations;

namespace XYZHotels.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Hotel name is manditory")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Address name is manditory")]
        public string Location { get; set; }
        [Required(ErrorMessage = "Hotel phone number is manditory")]
        public string Phone { get; set; }

        public string? Pic { get; set; }
        

        public ICollection<Room>? Rooms { get; set; }

        public ICollection<Booking>? Bookings { get; set; }
    }
}
