using XYZHotels.Context;
using XYZHotels.ExceptionHandle;
using XYZHotels.Interfaces;
using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Services
{
    public class BookingService : IBookingService
    {
        private readonly IRepository<int, Booking> _repo;
        private readonly IRepository<int, Room> _rrromRepo;
        private readonly HContext _context;

        public BookingService(IRepository <int , Booking> repository , IRepository<int , Room> repository1 , HContext context)
        {
            _repo=repository;
            _rrromRepo=repository1;
            _context=context;
        }
        public Booking AddBooking(Booking booking)
        {
            BookingCheckAvalibilityDTO bca= new BookingCheckAvalibilityDTO
            {
                CheckIn = booking.CheckIn,
                CheckOut = booking.CheckOut,
                  Id = booking.Id,
                    RoomNo = booking.RoomNo

            };
            if(CheckAvailability(bca) == true) 
            {
                var book = _repo.Add(booking);
                return book;
            }
            throw new RoomNotAvailableExceptions();
        }

        public Booking CancelBooking(int id)
        {
            var mybook = _repo.Get(id);
            if(mybook == null)
            {
                throw new NoEntriesAvailable("Rooms");
            }
            mybook =_repo.Delete(mybook.BookingId);
            return mybook;
        }
   
      public bool CheckAvailability(BookingCheckAvalibilityDTO booking)
        {

            var overlappingBookings = GetOverlappingBookings(booking);

            return overlappingBookings.Count == 0;

            //try
            //{
            //    var book = _repo.GetAll();
            //    var checkBooking = book.FirstOrDefault(x=>x.RoomNo== booking.RoomNo && x.CheckIn==booking.CheckIn /*&& x.CheckOut=booking.CheckOut*/);
            //    return checkBooking == null;
            //}
            //catch (RoomNotAvailableExceptions e )
            //{

            //    return true;
            //}
            //catch(NoEntriesAvailable e)
            //{
            //    return true;
            //}
        }



        List<Booking> GetOverlappingBookings(BookingCheckAvalibilityDTO booking)
        {
            return _context.bookings
                .Where(b =>b.Id==booking.Id && b.RoomNo == booking.RoomNo &&
                            b.CheckIn < booking.CheckOut &&
                            b.CheckOut > booking.CheckIn)
                .ToList();
        }

        public IList<Booking> GetAll()
        {
          return _repo.GetAll().ToList();
        }
    }
}
