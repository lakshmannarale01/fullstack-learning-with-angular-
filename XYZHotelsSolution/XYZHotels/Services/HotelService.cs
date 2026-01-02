using XYZHotels.ExceptionHandle;
using XYZHotels.Interfaces;
using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Services
{
    public class HotelService : IHotelService
    {
        private readonly IRepository<int, Hotel> _repo;

        public HotelService(IRepository <int , Hotel> repository)
        {
            _repo=repository;
        }
        public Hotel AddNewHotel(Hotel hotel)
        {
            return _repo.Add(hotel);
        }

        public List<Hotel> GetAllHotel()
        {
            return _repo.GetAll();
        }

        public Hotel UpdateHotelLocation(HotelLocationDTO hotel)
        {
            var myHotel =_repo.Get(hotel.Id);
            if(myHotel != null)
            {
                myHotel.Location= hotel.Location;
                return _repo.Update(myHotel);
            }return null;
        }

        public Hotel UpdateHotelPhone(HotelPhoneDTO hotel)
        {
            var myHotel = _repo.Get(hotel.Id);
            if (myHotel != null)
            {
                myHotel.Phone = hotel.Phone;
                return _repo.Update(myHotel);
            }
            return null;
        }

        public Hotel Delete(int id)
        {
            var hotel = _repo.Get(id);
            {
                if(hotel == null)
                {
                    throw new NoEntriesAvailable("Hotel");
                }
                return _repo.Delete(hotel.Id);
            }
        }
        
    }
}
