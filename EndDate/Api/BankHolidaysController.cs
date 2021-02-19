using EndDate.Models;
using EndDate.Services;

using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class BankHolidaysController : Controller
    {
        private readonly ILocalFileService<BankHolidaysDto> _holidays;

        public BankHolidaysController(ILocalFileService<BankHolidaysDto> holidays)
        {
            this._holidays = holidays;
        }
        [HttpGet("")]
        public async Task<IActionResult> GetAll() {
            var values = await this._holidays.LoadAsync();
            values.Sort();
            return Ok(values);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddAsync(BankHolidaysDto dto) {
            var values = await this._holidays.LoadAsync();
            if (!values.Any(v => v.Date.Date == dto.Date.Date))
            {
                values.Add(dto);
                await this._holidays.SaveAsync(values);
            }
            return Ok();
        }

        [HttpPost("delete")]
        public async Task<IActionResult> DeleteAsync(BankHolidaysDto dto) {
            var values = await this._holidays.LoadAsync();
            values = values.Where(v => v.Date.Date != dto.Date.Date).ToList();
            await this._holidays.SaveAsync(values);
            return Ok();
        }
    }
}
