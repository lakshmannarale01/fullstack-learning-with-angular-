using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Interfaces
{
    public interface IRoomService
    {
        List<Room> GetAllRooms();
        List<Room> GetInPriceRange(float min , float max);

        Room AddNewRoom(Room room);

        Room Delete(int id);

        Room UpdatePrice(RoomPriceDTO room);

        Room ToogleRoomStatus(int id);
    }
}
