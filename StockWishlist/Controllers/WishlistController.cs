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

        /// <summary>
        /// Gets all the wish list entries from
        /// a session. 
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<Wishlist>> Get()
        {
            Wishlist wishlist = await _stockWishlistProvider.GetStockWishlistEntriesAsync(); 
            return Ok(wishlist); 
        }

        /// <summary>
        /// Adds an entry to the wish list
        /// </summary>
        /// <param name="entry">The request object containing details of the wish list entry</param>
        [HttpPost]
        public async Task<ActionResult> PostEntry([FromBody] StockWishlistEntry entry)
        {
            await _stockWishlistProvider.AddStockToWishlistAsync(entry);
            return Ok();
        }

        /// <summary>
        /// Deletes an entry from the wish list
        /// </summary>
        /// <param name="entryId">The unique ID of the wish list entry to delete</param>
        [HttpDelete("{entryId}")]
        public async Task<ActionResult> DeleteEntry(string entryId)
        {
            await _stockWishlistProvider.RemoveStockFromWishlistAsync(entryId);
            return Ok();
        }
    }
}
