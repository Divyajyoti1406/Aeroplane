using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;

namespace ProjectCaseStudy.Controllers
{
    public class FlightDetailController : ApiController
    {
        projectflightEntities db = new projectflightEntities();
        // GET api/<controller>
        public FlightDetailController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        public IEnumerable<FlightTable> Get()
        {
            return db.FlightTables.ToList();
        }

        // GET api/<controller>/5
        //public FlightTable  Get(string id)
        //{
        //    return db.FlightTables.Find(id);

        //}
        //[HttpGet]

        public IEnumerable<FlightTable> Get([FromUri] string from, [FromUri] string to)
        {
            var selecteduser = db.FlightTables.Where(i => i.From == from && i.To == to);
           
            return selecteduser;
        }

        // POST api/<controller>
        public HttpResponseMessage Post(FlightTable f1)
        {
            try
            {
                db.FlightTables.Add(f1);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(string id, FlightTable f1)
        {

            try
            {


                if (id == f1.FlightNo)
                {
                    db.Entry(f1).State = System.Data.Entity.EntityState.Modified;
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(string id)
        {
            try
            {
                FlightTable f = db.FlightTables.Find(id);
                if (f != null)
                {
                    db.FlightTables.Remove(f);
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
    }
}