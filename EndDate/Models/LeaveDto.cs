using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class LeaveDto : IComparable<LeaveDto>
    {
        public DateTime Date { get; set; }
        
        public string Code { get; set; }
        public string Duration { get; set; }
        
        public int CompareTo(LeaveDto other)
        {
            return this.Date.CompareTo(other.Date);
        }
    }
}
