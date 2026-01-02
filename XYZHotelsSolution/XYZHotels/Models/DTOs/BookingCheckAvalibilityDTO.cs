namespace XYZHotels.Models.DTOs
{
    public class BookingCheckAvalibilityDTO
    {
        public int RoomNo { get; set; }

        public DateTime CheckIn { get; set; }

        public DateTime CheckOut { get; set; }

        public int Id { get; set; }
       
    }
}
