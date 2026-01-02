using XYZHotels.Context;
using XYZHotels.Interfaces;
using XYZHotels.Models;

namespace XYZHotels.Repositories
{
    public class UserRepository : IRepository<string , User>
    {
        private readonly HContext _context;

        public UserRepository(HContext context)
        {
            _context = context;
        }
        public User Add(User item)
        {
            _context.users.Add(item);
            _context.SaveChanges();
            return item;
        }

        public User Delete(string key)
        {
            var user = Get(key);
            if (user != null)
            {
                _context.users.Remove(user);
                _context.SaveChanges();
            }
            return null;
        }



        public User Get(string key)
        {
            var user = _context.users.FirstOrDefault(u => u.Username == key);
            return user;
        }

        public User Get(int key)
        {
            throw new NotImplementedException();
        }

        public List<User> GetAll()
        {
            return _context.users.ToList();
        }

        public User Update(User item)
        {
            _context.Entry<User>(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return item;
        }
    }
}
