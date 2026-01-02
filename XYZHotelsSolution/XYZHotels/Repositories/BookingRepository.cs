using XYZHotels.Context;
using XYZHotels.Interfaces;
using XYZHotels.Models;

namespace XYZHotels.Repositories
{
    public class BookingRepository : IRepository<int, Booking>
    {
        private readonly HContext _context;

        public BookingRepository(HContext context)
        {
            _context = context;
        }
        public Booking Add(Booking item)
        {
            var DateProperty= DateTime.Now;
            _context.bookings.Add(item);
            _context.SaveChanges();
            return item;
        }

        public Booking Delete(int key)
        {
           var book = Get(key);
            if (book != null)
            {
                _context.bookings.Remove(book); 
                _context.SaveChanges();
                return book;
            }
            return null;
        }

        public Booking Get(int key)
        {
            var book = _context.bookings.FirstOrDefault(x=>x.BookingId == key);
            return book;
        }

        public List<Booking> GetAll()
        {
            return _context.bookings.ToList();
        }

        public Booking Update(Booking item)
        {
            _context.Entry<Booking>(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return item;
        }
    }
}
