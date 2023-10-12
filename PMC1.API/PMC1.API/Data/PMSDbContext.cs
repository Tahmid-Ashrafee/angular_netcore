using Microsoft.EntityFrameworkCore;
using PMC1.API.Models;

namespace PMC1.API.Data
{
    public class PMSDbContext : DbContext 
    {
        public PMSDbContext(DbContextOptions options) : base(options) { }   

        public DbSet<Product>Products { get; set; }
    }
}
