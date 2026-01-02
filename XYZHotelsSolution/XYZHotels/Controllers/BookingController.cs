using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XYZHotels.ExceptionHandle;
using XYZHotels.Interfaces;
using XYZHotels.Models;
using XYZHotels.Models.DTOs;

namespace XYZHotels.Controllers
{
    [EnableCors("MyCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _service;
        private readonly IRoomService _roomService;

        public BookingController(IBookingService service , IRoomService service1)
        {
            _service= service;
            _roomService=   service1;
        }

        [HttpGet("Get")]
        public ActionResult Get()
        {
            var result = _service.GetAll();
            if (result == null)
            {
                return NotFound("No Booking Available");
            }
            return Ok(result);
        }

        [HttpPost("AdBooking")]
        public ActionResult AdBooking(Booking book)
        {
            if(ModelState.IsValid)
            {
                try
                {
                   
                    var result = _service.AddBooking(book);
                    _roomService.ToogleRoomStatus(book.RoomNo);

                    return Ok(result);
                }
                catch (Exception e )
                {

                    return BadRequest(e);
                }
            }
            return BadRequest(ModelState.Keys);
        }

        [HttpDelete("CanclBooking")]
        public ActionResult CanclBooking(int id)
        {
            Booking book = new Booking();
            book.Id = id;
            try
            {
              
                var result = _service.CancelBooking(book.Id);
                
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
