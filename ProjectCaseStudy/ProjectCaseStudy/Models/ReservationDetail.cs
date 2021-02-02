using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectCaseStudy.Models
{
    public class ReservationDetail
    {
        public string Cid { get; set; }
        public System.DateTime DepartureDate { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public int ticketno { get; set; }
    }
}