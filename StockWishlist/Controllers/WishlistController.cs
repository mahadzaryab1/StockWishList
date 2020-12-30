using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockWishlist.DataProvider;
using StockWishlist.DataProvider.Models;

namespace StockWishlist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistController : ControllerBase
    {
        private readonly IStockWishlistProvider _stockWishlistProvider; 

        public WishlistController(IStockWishlistProvider stockWishlistProvider)
        {
            _stockWishlistProvider = stockWishlistProvider;
        }

        // GET: api/Wishlist
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            Wishlist wishlist = await _stockWishlistProvider.GetStockWishlistEntriesAsync(); 
            return Ok(wishlist); 
        }

        [HttpPost]
        public async Task<ActionResult> PostEntry([FromBody] StockWishlistEntry entry)
        {
            await _stockWishlistProvider.AddStockToWishlistAsync(entry);
            return Ok();
        }
    }
}
