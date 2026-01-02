using XYZHotels.Context;
using XYZHotels.Interfaces;
using XYZHotels.Models;

namespace XYZHotels.Repositories
{
    public class RoomRepository : IRepository<int, Room>
    {
        private readonly HContext _context;

        public RoomRepository(HContext context)
        {
            _context=context;
        }
        public Room Add(Room item)
        {
           _context.rooms.Add(item);
            _context.SaveChanges();
            return item;
        }

        public Room Delete(int key)
        {
            var room = Get(key);
            if (room != null)
            {
                _context.rooms.Remove(room);
                _context.SaveChanges();
                return room;
            }return null;
        }

        public Room Get(int key)
        {
            var room = _context.rooms.FirstOrDefault(x=>x.RoomNo == key);
            return room;
        }

        public List<Room> GetAll()
        {
            return _context.rooms.ToList();

        }

        public Room Update(Room item)
        {
            _context.Entry<Room>(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return item;
        }
    }
}
