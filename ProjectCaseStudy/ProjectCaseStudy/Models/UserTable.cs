using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectCaseStudy.Models
{
    public class UserTable
    {
        public string username { get; set; }
        public string emailid { get; set; }
        public string mobileno { get; set; }
        public string Cid { get; set; }
        public string password { get; set; }
        public string confirm_password { get; set; }
        public string gender { get; set; }
        public string city { get; set; }
        public string nationality { get; set; }

    }
}