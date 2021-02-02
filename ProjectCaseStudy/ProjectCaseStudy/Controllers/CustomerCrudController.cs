using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;

namespace ProjectCaseStudy.Controllers
{
    public class CustomerCrudController : ApiController
    {
        projectflightEntities db = new projectflightEntities();
        public CustomerCrudController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET api/<controller>
        public IEnumerable<CustomerTable> Get()
        {
            return db.CustomerTables.ToList();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public HttpResponseMessage Post(CustomerTable c)
        {
            try
            {
                db.CustomerTables.Add(c);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);

            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);

            }


        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(string id, CustomerTable c1)
        {
            try
            {
                if (id == c1.Cid)
                {
                    db.Entry(c1).State = System.Data.Entity.EntityState.Modified;
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

        // DELETE api/<controller>/5

        public HttpResponseMessage Delete(int id)
        {
            try
            {
                CustomerTable c = db.CustomerTables.Find(id);

                if (c != null)
                {
                    db.CustomerTables.Remove(c);
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