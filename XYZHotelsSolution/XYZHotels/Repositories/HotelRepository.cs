using XYZHotels.Context;
using XYZHotels.Interfaces;
using XYZHotels.Models;

namespace XYZHotels.Repositories
{
    public class HotelRepository : IRepository<int, Hotel>
    {
        private readonly HContext _context;

        public HotelRepository(HContext context)
        {
            _context = context;
        }
        public Hotel Add(Hotel item)
        {
           _context.hotel.Add(item);
            _context.SaveChanges();
            return item;
        }

        public Hotel Delete(int key)
        {
            var hotel = Get(key);
            if (hotel != null)
            {
                _context.hotel.Remove(hotel);
                _context.SaveChanges();
                return hotel;
            }return null;
        }

        public Hotel Get(int key)
        {
            var Hotel = _context.hotel.FirstOrDefault(x => x.Id == key);
            return Hotel;
        }

        public List<Hotel> GetAll()
        {
            return _context.hotel.ToList();
        }

        public Hotel Update(Hotel item)
        {
           _context.Entry<Hotel>(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return item;
        }
    }
}
