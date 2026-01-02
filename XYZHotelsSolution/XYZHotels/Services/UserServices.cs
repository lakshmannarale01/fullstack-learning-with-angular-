using System.Security.Cryptography;
using System.Text;
using XYZHotels.Interfaces;
using XYZHotels.Models.DTOs;
using XYZHotels.Models;

namespace XYZHotels.Services
{
    public class UserServices : IUserServices
    {
        private readonly IRepository<string, User> _userRepository;
        private readonly ITokenServices _tokenSevice;

        public UserServices(IRepository<string, User> repository, ITokenServices tokenService)
        {
            _userRepository = repository;
            _tokenSevice = tokenService;
        }
        public UserDTO Login(UserDTO userDTO)
        {
            var user = _userRepository.Get(userDTO.Username);
            if (user != null)
            {
                var dbPass = user.Password;
                HMACSHA512 hMACSHA512 = new HMACSHA512(user.Key);
                var userPass = hMACSHA512.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
                if (userPass.Length == dbPass.Length)
                {
                    for (int i = 0; i < dbPass.Length; i++)
                    {
                        if (userPass[i] != dbPass[i])
                            return null;
                    }
                    var loggedinUser = new UserDTO
                    {
                        Username = user.Username,
                        Token = _tokenSevice.GenerateToken(user.Username, user.Role)
                    };
                    return loggedinUser;
                }
            }
            return null;
        }

        public UserDTO Register(UserDTO userDTO)
        {
            HMACSHA512 hMACSHA512 = new HMACSHA512();
            User user = new User();
            user.Username = userDTO.Username;
            user.Password = hMACSHA512.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
            user.Role = userDTO.Role;
            user.Key = hMACSHA512.Key;
            _userRepository.Add(user);
            var regiteredUser = new UserDTO
            {
                Username = user.Username,
                Token = _tokenSevice.GenerateToken(user.Username, user.Role)
            };
            return regiteredUser;
        }

    }
}
