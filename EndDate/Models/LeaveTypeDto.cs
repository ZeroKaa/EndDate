using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class LeaveTypeDto : IComparable<LeaveTypeDto>
    {
       
        public string Code { get; set; }
        public string Description { get; set; }
        public bool IsExtending { get; set; }
        public bool IsExtendingBetweenHolidays { get; set; }

        public int CompareTo(LeaveTypeDto other)
        {
            return this.Code.CompareTo(other.Code);
        }
    }
}
