using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Interfaces
{
    public interface IHotelService
    {
        List<Hotel> GetAllHotel();
        
        Hotel AddNewHotel(Hotel hotel);
       Hotel Delete(int id);

        Hotel UpdateHotelLocation(HotelLocationDTO hotel);

        Hotel UpdateHotelPhone(HotelPhoneDTO hotel);


    }
}
