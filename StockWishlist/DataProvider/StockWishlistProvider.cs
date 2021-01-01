using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StockWishlist.DataProvider.Models;

namespace StockWishlist.DataProvider
{
    public class StockWishlistProvider : IStockWishlistProvider
    {
        private readonly DatabaseContext _context;

        public StockWishlistProvider(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<Wishlist> GetStockWishlistEntriesAsync()
        {
            StockWishlistEntry[] entries = await _context
                .StockWishlistEntries
                .OrderByDescending(entry => entry.CreatedDate)
                .ToArrayAsync();
            Wishlist wishlist = new Wishlist() {WishlistEntries = entries};

            return wishlist;
        }

        public async Task AddStockToWishlistAsync(StockWishlistEntry entry)
        {
            entry.CreatedDate = DateTime.Now;
            await _context.StockWishlistEntries.AddAsync(entry);
            await _context.SaveChangesAsync();
        }
    }

    public interface IStockWishlistProvider
    {
        Task<Wishlist> GetStockWishlistEntriesAsync();
        Task AddStockToWishlistAsync(StockWishlistEntry entry);
    }
}
