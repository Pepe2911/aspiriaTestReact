using Microsoft.EntityFrameworkCore;

namespace AspiriaTestReact.Models
{
    public class AspiriaContext : DbContext
    {
        public AspiriaContext(DbContextOptions<AspiriaContext> option)
            : base(option)
        {

        }

        public DbSet<Juguete> juguetes { get; set; }

    }
}
