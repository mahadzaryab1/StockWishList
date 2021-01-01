﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockWishlist.DataProvider.Models
{
    public class StockWishlistEntry
    {
        /// <summary>
        /// A unique identifier for the wishlist entry
        /// </summary>
        /// <example>be9631db-0056-4158-874e-6d97582e1290</example>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// The name of the company
        /// </summary>
        /// <example>Shopify</example>
        [Required]
        public string CompanyName { get; set; }

        /// <summary>
        /// The stock ticker symbol of the company
        /// as listed on the stock exchange
        /// </summary>
        /// <example>SHOP</example>
        [Required]
        public string StockTicker { get; set; }

        /// <summary>
        /// The stock exchange on which the stock
        /// is listed on
        /// </summary>
        /// <example>TSE</example>
        [Required]
        public string StockExchange { get; set; }

        /// <summary>
        /// The reason that you would like to
        /// invest in this company
        /// </summary>
        /// <example>Shopify has benefitted from the shift to e-commerce and is continuously expanding its ecosystem</example>
        [Required]
        public string Reason { get; set; }

        /// <summary>
        /// The image download URL generated by Firebase
        /// </summary>
        [Required]
        public string ImageUrl { get; set; }

        /// <summary>
        /// The date at which the entry was created.
        /// </summary>
        public DateTime CreatedDate { get; set; }
    }
}
