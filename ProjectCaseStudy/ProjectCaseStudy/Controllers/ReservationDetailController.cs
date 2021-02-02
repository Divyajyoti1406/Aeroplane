using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;

namespace ProjectCaseStudy.Controllers
{
 public class ReservationDetailController : ApiController
    {
        projectflightEntities db = new projectflightEntities();
        // GET api/<controller>

        public ReservationDetailController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }

        public IEnumerable<Reservation> Get()
        {
            return db.Reservations.ToList();
        }

        // GET api/<controller>/5
        public Reservation Get(int id)
        {
            return db.Reservations.Find(id);
        }

        // POST api/<controller>
        public HttpResponseMessage Post(Reservation b1)
        {

            try
            {
                db.Reservations.Add(b1);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);

            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);

            }

        }
      [HttpPut]
        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, Reservation b1)
        {
            try
            {
                if (id == b1.ticketno)
                {
                    db.Entry(b1).State = System.Data.Entity.EntityState.Modified;
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

        //  DELETE api/<controller>/5
        //public HttpResponseMessage Delete(int id)
        //{

        //    try
        //    {
        //        Reservation b = db.Reservations.Find(id);
        //        if (b != null)
        //        {
        //            db.Reservations.Remove(b);
        //            db.SaveChanges();
        //            return new HttpResponseMessage(HttpStatusCode.OK);
        //        }
        //        else
        //        {
        //            return new HttpResponseMessage(HttpStatusCode.NotFound);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return new HttpResponseMessage(HttpStatusCode.InternalServerError);
        //    }

        //}



    
        public object Delete(int id)
        {
            var obj = db.Reservations.Where(x => x.ticketno== id).ToList().FirstOrDefault();
            db.Reservations.Remove(obj);
            db.SaveChanges();
            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };
        }


















    }
}