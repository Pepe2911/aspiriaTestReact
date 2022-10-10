using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspiriaTestReact.Models
{
    public class Juguete
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MaxLength(50, ErrorMessage = "El nombre del articulo tiene que tener maximo 50 caracteres")]
        public string Nombre { get; set; }
        [MaxLength(100, ErrorMessage = "L descripccion tiene que tener maximo 100 caracteres")]
        public string? Descripcion { get; set; } = null;    
        [Range(1, 100,
        ErrorMessage = "La resticcion de edad tiene que ser entre 1 y 100")]
        public int? RestriccionEdad { get; set; } = null;
        [MaxLength(50, ErrorMessage = "La marca tiene que tener maximo 50 caracteres")]
        public string Marca { get; set; }
        [Range(1, 1000,
        ErrorMessage = "El precio del articulo tiene que ser entre 1 y 1000")]
        public decimal Precio { get; set; }
    }
}
