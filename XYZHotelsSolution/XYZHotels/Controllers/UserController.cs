using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XYZHotels.Interfaces;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _service;

        public UserController(IUserServices service)
        {
            _service = service;
        }

        [HttpPost("Login")]
        public ActionResult Login(UserDTO userDTO)
        {
            var result = _service.Login(userDTO);
            if (result == null)
            {
                return Unauthorized();
            }
            return Ok(result);
        }
        [HttpPost("Register")]
        public ActionResult Register(UserDTO userDTO)
        {
            var result = _service.Register(userDTO);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok(result);
        }
    }
}
