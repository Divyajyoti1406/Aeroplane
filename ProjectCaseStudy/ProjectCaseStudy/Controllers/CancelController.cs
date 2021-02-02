using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;

namespace ProjectCaseStudy.Controllers
{
    public class CancelController : ApiController
    {

        projectflightEntities db = new projectflightEntities();
        // GET api/<controller>
        public CancelController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        public IEnumerable<TicketCancel> Get()
        {
            return db.TicketCancels.ToList();
        }

        // GET api/<controller>/5
        public TicketCancel Get(int id)
        {
            return db.TicketCancels.Find(id);
        }

        // POST api/<controller>
        public HttpResponseMessage Post(TicketCancel f1)
        {
            try
            {
                db.TicketCancels.Add(f1);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int  id, TicketCancel f1)
        {

            try
            {


                if (id == f1.ticketno)
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
        public HttpResponseMessage Delete(int  id)
        {
            try
            {
                TicketCancel f = db.TicketCancels.Find(id);
                if (f != null)
                {
                    db.TicketCancels.Remove(f);
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