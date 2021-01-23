using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio.Model
{
    public class ClienteRepositorio
    {
        public List<Cliente> ObtenerClientes()
        {
            return new List<Cliente>()
            {
                new Cliente() { Nombre = "Cliente 1", Sector="Informatica" },
                new Cliente() { Nombre = "Cliente 2", Sector="Farmacia" },
                new Cliente() { Nombre = "Cliente 3", Sector="Informatica" },
                new Cliente() { Nombre = "Cliente 4", Sector="Hosteleria" },
                new Cliente() { Nombre = "Cliente 5", Sector="Farmacia" }
            };
        }
    }
}