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
    public class HotelController : ControllerBase
    {
        private readonly IHotelService _service;

        public HotelController(IHotelService hotelService)
        {

            _service = hotelService;
        }

        [HttpGet]
        public ActionResult Get() { 
            var result = _service.GetAllHotel();
            if (result == null)
            {
                return NotFound("Hotels Not Found");
            }
            return Ok(result);
        }
        [Authorize(Roles = "Owner")]
        //[Authorize(Roles = "Manager, User")]
        [HttpPost]
        public ActionResult AddHotels(Hotel hotel)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    var result = _service.AddNewHotel(hotel);
                    return Created("", result);
                }
                catch (Exception e)
                {

                   return BadRequest(e.Message);
                }
              
            }
            return BadRequest(ModelState.Keys);
        }
        [Authorize(Roles = "Owner")]
        [HttpPut("UpdateLocation")]
        public ActionResult UpdateLocation(HotelLocationDTO hotel)
        {
            try
            {
                var result = _service.UpdateHotelLocation(hotel);
                if(result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        [Authorize(Roles = "Owner")]
        [HttpPut("UpdatePhone")]
        public ActionResult UpdatePhone(HotelPhoneDTO hotelPhone)
        {
            try
            {
                var result = _service.UpdateHotelPhone(hotelPhone);
                if(result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
        [Authorize(Roles = "Owner")]
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

    }
}
