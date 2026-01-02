using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XYZHotels.Interfaces;
using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Controllers
{
    [EnableCors("MyCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomService _service;

        public RoomController(IRoomService service)
        {
            _service = service;
        }
        
        [HttpGet]
        public ActionResult Get()
        {
            var result = _service.GetAllRooms();
            if(result == null)
            {
                return NotFound("No Rooms At the moment");
            }
            return Ok(result);
        }

        [Authorize(Roles = "Owner, Manager")]
        [HttpPost("Addroom")]
        public ActionResult Addroom(Room room) 
        {
            if(ModelState.IsValid)
            {
                try
                {
                    var result = _service.AddNewRoom(room);
                    return Created("", result);
                }
                catch (Exception e )
                {
                    return BadRequest(e.Message);

                }
            }
            return BadRequest(ModelState.Keys);

        }

        [HttpGet("GetRangePrice")]
        public ActionResult GetRangePrice(float min , float max) {
        
            var result = _service.GetInPriceRange(min, max);
            if(result == null)
            {
                return NotFound("No Rooms in this Price Range");
            }
            return Ok(result);
        }

        [Authorize(Roles = "Owner, Manager")]
        [HttpPut("UpdatePrice")]
        public ActionResult UpdatePrice(RoomPriceDTO room)
        {
            try
            {
                var result = _service.UpdatePrice(room);
                if (result == null)
                    return NotFound();
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            try
            {
                var result = _service.Delete(id);
                if (result == null)
                    return NotFound();
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }
        }
            [HttpPut("UpdateStatus")]
        public ActionResult PutChangeStatus(int id)
        {
            try
            {
                var result = _service.ToogleRoomStatus(id);
                if (result == null)
                    return NotFound();
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }






    }
}
