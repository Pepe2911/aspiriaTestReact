using AspiriaTestReact.Models;
using Microsoft.EntityFrameworkCore;

namespace AspiriaTestReact.Repositories
{
    public class JugueteRepository : IJugueteRepository
    {
        private readonly AspiriaContext _AspiriaContext;
        public JugueteRepository(AspiriaContext aspiriaContext)
        {
            _AspiriaContext = aspiriaContext;
        }

        public async Task CreateAndSave(Juguete juguete)
        {
            _AspiriaContext.juguetes.Add(juguete);
            await _AspiriaContext.SaveChangesAsync();
        }

        public async Task DeleteAndSave(Juguete juguete)
        {
            _AspiriaContext.juguetes.Remove(juguete);
            await _AspiriaContext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Juguete>> Get()
        {
            return await _AspiriaContext.juguetes.ToListAsync();
        }

        public Task<Juguete> GetById(int id)
        {
            return _AspiriaContext.juguetes.FirstOrDefaultAsync(a => a.ID.Equals(id));
        }

        public async Task UpdateAndSave(Juguete juguete)
        {
            try
            {
                _AspiriaContext.juguetes.Update(juguete);
                await _AspiriaContext.SaveChangesAsync();

            }catch(Exception e)
            {
                Console.Write(e);
            }
        }
    }
}
