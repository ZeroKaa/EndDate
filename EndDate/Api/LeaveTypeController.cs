using EndDate.Models;
using EndDate.Services;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Api
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class LeaveTypeController : Controller
    {
        private readonly ILocalFileService<LeaveTypeDto> _leaveTypes;

        public LeaveTypeController(ILocalFileService<LeaveTypeDto> leaveTypes)
        {
            this._leaveTypes = leaveTypes;
        }
        [HttpGet("")]
        public async Task<IActionResult> GetAll() {
            var values = await this._leaveTypes.LoadAsync();
            values.Sort();
            return Ok(values);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddAsync(LeaveTypeDto dto) {
            var values = await this._leaveTypes.LoadAsync();
            if (!values.Any(v => v.Code == dto.Code))
            {
                values.Add(dto);
                await this._leaveTypes.SaveAsync(values);
            }
            return Ok();
        }

        [HttpPost("delete")]
        public async Task<IActionResult> DeleteAsync(LeaveTypeDto dto) {
            var values = await this._leaveTypes.LoadAsync();
            values = values.Where(v => v.Code != dto.Code).ToList();
            await this._leaveTypes.SaveAsync(values);
            return Ok();
        }

        [HttpPut("extending")]
        public async Task<IActionResult> ToggleExtending(LeaveTypeDto dto)
        {
            var values = await this._leaveTypes.LoadAsync();
            var item = values.FirstOrDefault(v => v.Code == dto.Code);
            if (item != null)
            {
                item.IsExtending = !item.IsExtending;
                await this._leaveTypes.SaveAsync(values);
            }
            return Ok();
        }

        [HttpPut("extending-holiday")]
        public async Task<IActionResult> ToggleExtendingHolidays(LeaveTypeDto dto)
        {
            var values = await this._leaveTypes.LoadAsync();
            var item = values.FirstOrDefault(v => v.Code == dto.Code);
            if (item != null)
            {
                item.IsExtendingBetweenHolidays = !item.IsExtendingBetweenHolidays;
                await this._leaveTypes.SaveAsync(values);
            }
            return Ok();
        }

        [HttpPut("alerting")]
        public async Task<IActionResult> ToggleAlerting(LeaveTypeDto dto)
        {
            var values = await this._leaveTypes.LoadAsync();
            var item = values.FirstOrDefault(v => v.Code == dto.Code);
            if (item != null)
            {
                item.IsAlerting = !item.IsAlerting;
                await this._leaveTypes.SaveAsync(values);
            }
            return Ok();
        }
    }
}
