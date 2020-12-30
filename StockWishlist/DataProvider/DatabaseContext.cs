﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 
using StockWishlist.DataProvider.Models;

namespace StockWishlist.DataProvider
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : 
            base(options) { }

        public DbSet<StockWishlistEntry> StockWishlistEntries { get; set; }
    }
}
