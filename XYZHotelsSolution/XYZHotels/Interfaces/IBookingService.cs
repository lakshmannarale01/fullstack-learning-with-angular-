using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Interfaces
{
    public interface IBookingService
    {
        Booking AddBooking(Booking booking);

        public bool CheckAvailability(BookingCheckAvalibilityDTO booking);

        public Booking CancelBooking(int id);

        public IList<Booking> GetAll();
    }
}
