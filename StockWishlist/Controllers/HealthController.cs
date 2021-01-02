using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockWishlist.Models;

namespace StockWishlist.Controllers
{
    /// <summary>
    /// Allows a health check to be performed
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        /// <summary>
        /// Indicates the status of the API
        /// </summary>
        [HttpGet]
        public ActionResult<Status> Get()
        {
            return Ok(new Status() {ServerStatus = "Healthy!"});
        }
    }
}
