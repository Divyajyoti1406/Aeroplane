using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectCaseStudy.Models
{
    public class Cancel
    {
        public string Cid { get; set; }
        public int ticketno { get; set; }
        public System.DateTime DepartureDate { get; set; }

        public virtual CustomerTable CustomerTable { get; set; }
        public virtual Reservation Reservation { get; set; }
    }
}