using EndDate.Models;
using EndDate.Services;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
        private readonly ICalculationService _calculationService;

        public CalculatorController(ICalculationService calculationService)
        {
            this._calculationService = calculationService;
        }

        [HttpPost("")]
        public async Task< IActionResult> Calculate(CalculationInputDto input)
        {
            return Ok(await _calculationService.CalculateAsync(input));
        }

    }
}
