using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EndDate.Models
{
    public class ProcessedDay
    {
        public DateTime Date { get; set; }

        public List<string> Codes { get; set; }
        public bool Extend { get; set; }
        
        public bool IsNotDefined { get; set; }
        public bool CanExtend { get; set; }
        public bool WithPresence { get; set; }
        public bool IsFuture { get; set; }
        
        public ProcessedDay()
        {
            Codes = new List<string>();
        }
    }

    public class ExtensionDay
    {
        public DateTime Date { get; set; }
        public List<LeaveTypeDto> Codes { get; set; }

        public ExtensionDay()
        {
            Codes = new List<LeaveTypeDto>();
        }
    }


}
