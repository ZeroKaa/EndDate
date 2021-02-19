using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class CalculationOutputDto
    {

        public int TotalDays { get; set; }
        public int TotalWeekDays { get; set; }
        public int TotalWeekendDays { get; set; }
        public int TotalBankHolidays { get; set; }
        public int TotalLeaves { get; set; }
        public int TotalWorked { get; set; }
        public int TotalExtensions { get; set; }
        public List<string> Errors { get; set; }
        public List<ExtensionDay> Extensions { get; set; }
        public List<ExtensionDay> Missings { get; set; }
        public DateTime CalculatedEndDate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public CalculationOutputDto()
        {
            Errors = new List<string>();
            Extensions = new List<ExtensionDay>();
            Missings = new List<ExtensionDay>();
        }
    }
}