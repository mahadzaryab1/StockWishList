using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockWishlist.Models;

namespace StockWishlist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        // GET: api/Health
        [HttpGet]
        public ActionResult<Status> Get()
        {
            return Ok(new Status() {ServerStatus = "Healthy!"});
        }
    }
}
