using AspiriaTestReact.Models;
using AspiriaTestReact.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspiriaTestReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JuguetesController : ControllerBase
    {
        private readonly IJugueteRepository _jugueteRepository;

        public JuguetesController(IJugueteRepository jugueteRepository)
        {
            _jugueteRepository = jugueteRepository;
        }

        [HttpGet]
        [Route("GetJuguetes")]
        public async Task<IActionResult> GetJuguetes()
        {
            var juguetes = await _jugueteRepository.Get();
            return StatusCode(StatusCodes.Status200OK, juguetes);
        }

        [Route("SaveToy")]
        [HttpPost]
        public async Task<IActionResult> SaveToy(Juguete data)
        {
            if (data.ID == 0)
            {
                await _jugueteRepository.CreateAndSave(data);
            }
            else
            {
                await _jugueteRepository.UpdateAndSave(data);
            }
            return Ok();
        }
        [Route("api/Juguetes/DeleteToy")]
        [HttpPost]
        public async Task<IActionResult> DeleteToy(Juguete data)
        {
            if (data.ID == 0)
            {
                return BadRequest();
            }
            else
            {
                await _jugueteRepository.DeleteAndSave(data);
            }
            return Ok();
        }

    }
}
