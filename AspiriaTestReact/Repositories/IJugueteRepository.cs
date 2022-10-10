using AspiriaTestReact.Models;

namespace AspiriaTestReact.Repositories
{
    public interface IJugueteRepository
    {
        Task<Juguete> GetById(int id);
        Task<IEnumerable<Juguete>> Get();
        Task CreateAndSave(Juguete juguete);
        Task UpdateAndSave(Juguete juguete);
        Task DeleteAndSave(Juguete juguete);
    }
}
