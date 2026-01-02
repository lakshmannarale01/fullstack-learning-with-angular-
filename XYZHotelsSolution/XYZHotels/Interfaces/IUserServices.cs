using XYZHotels.Models.DTOs;

namespace XYZHotels.Interfaces
{
    public interface IUserServices
    {
        public UserDTO Login(UserDTO userDTO);
        public UserDTO Register(UserDTO userDTO);
    }
}
