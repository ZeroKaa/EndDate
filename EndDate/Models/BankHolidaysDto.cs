using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class BankHolidaysDto : IComparable<BankHolidaysDto>
    {
        public DateTime Date { get; set; }

        public int CompareTo(BankHolidaysDto other)
        {
            return this.Date.CompareTo(other.Date);
        }
    }
}
