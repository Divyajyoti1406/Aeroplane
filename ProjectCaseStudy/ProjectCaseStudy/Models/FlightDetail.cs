using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectCaseStudy.Models
{
    public class FlightDetail
    {
        public string FlightNo { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public System.DateTime DepartureDate { get; set; }
        public System.DateTime ArrivalDate { get; set; }
        public System.TimeSpan DepartureTime { get; set; }
        public System.TimeSpan ArrivalTime { get; set; }
        public decimal Price { get; set; }


    }
}