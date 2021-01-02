using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockWishlist.DataProvider.Models
{
    /// <summary>
    /// The response model containing all
    /// the wish list entries.
    /// </summary>
    public class Wishlist
    {
        /// <summary>
        /// The wish list entries part of the
        /// current user session. 
        /// </summary>
        public StockWishlistEntry[] WishlistEntries { get; set; }
    }
}
