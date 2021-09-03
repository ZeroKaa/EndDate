using EndDate.Models;

using Microsoft.Extensions.Logging.EventSource;

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace EndDate.Services
{
    public interface ICalculationService
    {
        Task<CalculationOutputDto> CalculateAsync(CalculationInputDto input);
    }
    public class CalculationService : ICalculationService
    {
        private readonly ILocalFileService<BankHolidaysDto> _bankHolidays;
        private readonly ILocalFileService<LeaveTypeDto> _leaveTypes;

        public CalculationService(ILocalFileService<BankHolidaysDto> bankHolidays, ILocalFileService<LeaveTypeDto> leaveTypes)
        {
            this._bankHolidays = bankHolidays;
            this._leaveTypes = leaveTypes;
        }

        public async Task<CalculationOutputDto> CalculateAsync(CalculationInputDto input)
        {
            var output = new CalculationOutputDto();

            //Validate the input
            if (input.StartDate >= input.EndDate)
            {
                output.Errors.Add("La date de fin doit être postérieure à la date de début");
            }

            if (input.StartDate.DayOfWeek != DayOfWeek.Monday)
            {
                output.Errors.Add("Le premier jour du préavis doit être un lundi");
            }


            //set hours
            input.StartDate = ResetTime(input.StartDate);
            input.EndDate = ResetTime(input.EndDate);


            var prestations = new List<DateTime>();
            //Prestations
            try
            {
                if (!string.IsNullOrEmpty(input.Prestations) && input.Prestations.Contains("base64,"))
                {
                    input.Prestations = input.Prestations[(input.Prestations.IndexOf("base64,") + 7)..];
                    var bytes = Convert.FromBase64String(input.Prestations);

                    using var stream = new StreamReader(new MemoryStream(bytes));
                    //skip headers
                    var line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();

                    line = stream.ReadLine();
                    while (!string.IsNullOrEmpty(line))
                    {
                        var arr = line.Split('\t', StringSplitOptions.RemoveEmptyEntries);
                        var arrDate = arr[0].Split(".");
                        var d = new DateTime(Convert.ToInt32(arrDate[2]), Convert.ToInt32(arrDate[1]), Convert.ToInt32(arrDate[0]));
                        prestations.Add(d);
                        line = stream.ReadLine();
                    }
                }
            }
            catch
            {
                output.Errors.Add("Impossible d'importer le fichier de prestations");
            }


            //leaves
            var leaves = new List<LeaveDto>();
            try
            {
                if (!string.IsNullOrEmpty(input.Leaves) && input.Leaves.Contains("base64,"))
                {
                    input.Leaves = input.Leaves[(input.Leaves.IndexOf("base64,") + 7)..];
                    var bytes = Convert.FromBase64String(input.Leaves);

                    using var stream = new StreamReader(new MemoryStream(bytes));
                    //skip headers
                    var line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    line = stream.ReadLine();
                    
                    line = stream.ReadLine();

                    while (!string.IsNullOrEmpty(line))
                    {
                        var arr = line.Split('\t', StringSplitOptions.RemoveEmptyEntries);
                        var arrDateStart = arr[0].Split(".");
                        var dStart = new DateTime(Convert.ToInt32(arrDateStart[2]), Convert.ToInt32(arrDateStart[1]), Convert.ToInt32(arrDateStart[0]));
                        var arrDateEnd = arr[1].Split(".");
                        var dEnd = new DateTime(Convert.ToInt32(arrDateEnd[2]), Convert.ToInt32(arrDateEnd[1]), Convert.ToInt32(arrDateEnd[0]));
                        var code = arr[2];
                        var duration = arr[3];

                        var pDay = dStart;
                        while (pDay <= dEnd)
                        {
                            leaves.Add(new LeaveDto { Date = pDay, Code = code, Duration = duration });
                            pDay = pDay.AddDays(1);
                        }


                        line = stream.ReadLine();
                    }
                }
            }
            catch
            {
                output.Errors.Add("Impossible d'importer le fichier d'absences");
            }

            leaves.Sort();


            //Bank holidays
            var bankHolidays = (await this._bankHolidays.LoadAsync()).Where(h => h.Date.Date >= input.StartDate.Date).ToList();
            foreach (var h in bankHolidays)
            {
                h.Date = h.Date.AddHours(8);
            }

            //LeaveTypes

            var leaveTypes = (await this._leaveTypes.LoadAsync()).ToList();
            var extensionTypes = leaveTypes.Where(e => e.IsExtending == true).Select(e => e.Code);
            var extensionBetweenHolidaysTypes = leaveTypes.Where(e => e.IsExtendingBetweenHolidays == true).Select(e => e.Code);
            var alertTypes = leaveTypes.Where(e => e.IsAlerting == true).Select(e => e.Code);

            if (!output.Errors.Any())
            {

                //Add alerts
                foreach (var leave in leaves) {
                    if (alertTypes.Contains(leave.Code))
                    {
                        output.Alerts.Add(new AlertDay { Date = leave.Date, Code = leave.Code });
                    }
                }


                var days = new List<ProcessedDay>();
                //loop on all days
                var currentday = input.StartDate;
                var endDate = input.EndDate;
                if (leaves.Any()) {
                    var lastLeaveDate = leaves.Last().Date;
                    endDate = lastLeaveDate;
                }
            

                while (currentday <= endDate)
                {
                    var toAdd = new ProcessedDay { Date = currentday };
                    toAdd.IsFuture = currentday.Date > DateTime.Now.Date;
                    toAdd.WithPresence = prestations.Any(d => d.Date.Date == currentday.Date.Date);
                    leaves.Where(l => l.Date.Date == currentday.Date).ToList().ForEach(d =>
                    {
                        toAdd.Codes.Add(d.Code);
                        if (toAdd.CanExtend == false)
                        {
                            toAdd.CanExtend = extensionTypes.Contains(d.Code);
                        }
                    });

                    if (toAdd.IsFuture) {
                        if (!toAdd.Codes.Any())
                        {
                            toAdd.WithPresence = true;
                        }
                        else {
                            var leavesForDate = leaves.Where(l => l.Date.Date == toAdd.Date.Date).ToList();
                            decimal total = 0;
                            foreach (var d in leavesForDate) {
                                var v = decimal.Parse(d.Duration);
                                if (v == 0) { v = 1; }
                                total += v;
                            }
                            if (total < 1) {
                                toAdd.WithPresence = true;
                            }
                        }
                    }
                    

                    toAdd.Extend = false;
                    days.Add(toAdd);
                    currentday = currentday.AddDays(1);
                }

                //check for holidays

                var canExtendsDays = days.Where(d => d.CanExtend == true).OrderBy(d => d.Date).ToList();

                foreach (var day in canExtendsDays)
                {
                    day.Extend = true;

                    if (prestations.Contains(day.Date.Date))
                    {
                        day.Extend = false;
                    }
                    else
                    {
                        var indexOfLeaves = canExtendsDays.FindIndex(d => d.Date.Date == day.Date);
                        if (indexOfLeaves < canExtendsDays.Count - 1)
                        {
                            var nextLeave = days.FirstOrDefault(d => d.Date.Date == canExtendsDays[indexOfLeaves + 1].Date);
                            if (nextLeave != null)
                            {
                                var inBetween = days.Where(d => d.Date > day.Date.Date && d.Date < nextLeave.Date);

                                bool extend = true;
                                foreach (var d in inBetween)
                                {
                                    if (d.WithPresence)
                                    {
                                        extend = false;
                                        break;
                                    }
                                    else
                                    {
                                        foreach (var c in d.Codes)
                                        {
                                            if (extensionBetweenHolidaysTypes.Contains(c) == false)
                                            {
                                                extend = false;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (extend == true)
                                {
                                    inBetween.ToList().ForEach(d => { d.Extend = true;  }) ;
                                }

                            }
                        }
                    }


                }


                //add comments
                foreach (var day in days.Where(d => d.Extend).OrderBy(d => d.Date))
                {

                    var justification = string.Empty;
                    var exDay = new ExtensionDay
                    {
                        Date = day.Date
                    };

                    day.Codes.Sort();
                    foreach (var c in day.Codes)
                    {
                        var lc = leaveTypes.FirstOrDefault(l => l.Code.ToLower() == c.ToLower());
                        if (lc != null)
                        {
                            exDay.Codes.Add(lc);
                        }
                        else
                        {
                            exDay.Codes.Add(new LeaveTypeDto { Code = c });
                        }

                    }

                    output.Extensions.Add(exDay);
                }

                //add missings
                foreach (var day in days.Where(d => d.IsNotDefined))
                {
                    output.Missings.Add(new ExtensionDay { Date = day.Date });
                }

                output.StartDate = input.StartDate;
                output.EndDate = input.EndDate;
                output.TotalDays = days.Count;
                output.TotalBankHolidays = bankHolidays.Count;
                output.TotalExtensions = days.Count(d => d.Extend == true);
                output.TotalWorked = prestations.Count;
                output.TotalLeaves = leaves.Count;
                output.CalculatedEndDate = input.EndDate.AddDays(output.TotalExtensions).AddHours(8);
            }
            return output;
        }


        private DateTime ResetTime(DateTime dt)
        {
            return new DateTime(dt.Year, dt.Month, dt.Day, 0, 0, 0, DateTimeKind.Local);
        }


    }

}
