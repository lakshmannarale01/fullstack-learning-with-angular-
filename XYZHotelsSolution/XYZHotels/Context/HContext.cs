using Microsoft.EntityFrameworkCore;
using System.Numerics;
using XYZHotels.Models;

namespace XYZHotels.Context
{
    public class HContext : DbContext
    {
        public HContext(DbContextOptions opts) : base(opts) 
        {
            
        }
        public DbSet<User> users { get; set; }
        public DbSet<Hotel> hotel { get; set; }

        public DbSet<Room> rooms { get; set; }
        public DbSet<Booking> bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hotel>().HasData(
                new Hotel
                {
                  Id = 1,
                  Name = "TAJ",
                   Location="Mumbai",
                    Phone = "9955668855",
                     
                },
                
                new Hotel
                {
                    Id = 2,
                    Name = "IBIS",
                    Location = "Mumbai",
                    Phone = "256854658",
                  
                }
                );
            modelBuilder.Entity<Room>().HasData(
                new Room
                {
                    RoomNo = 101,
                    Details = "AC Room",
                    price = 2000,
                    Id = 1,
                    IsActive = true,
                },
                new Room
                {
                    RoomNo = 102,
                    Details = "Non AC Room",
                    price = 1500,
                    Id = 2,
                    IsActive = false,
                }
                ); ;
        }
    }
}
