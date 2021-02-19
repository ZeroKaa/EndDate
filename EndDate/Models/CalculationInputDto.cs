using Microsoft.AspNetCore.Http;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class CalculationInputDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Prestations { get; set; }
        public string Leaves { get; set; }
    }
}
