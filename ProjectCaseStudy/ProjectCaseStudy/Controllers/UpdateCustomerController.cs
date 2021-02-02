﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;

namespace ProjectCaseStudy.Controllers
{
    

    public class UpdateCustomerController : ApiController
    {
        projectflightEntities db = new projectflightEntities();
    
        public UpdateCustomerController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        //GET api/<controller>
        public IEnumerable<CustomerTable> Get()
        {
            return db.CustomerTables.ToList();
        }
        [Route("StudentdetailById")]
        [HttpGet]
        public object StudentdetailById(string id)
        {
            var obj = db.CustomerTables.Where(x => x.Cid == id).ToList().FirstOrDefault();
            return obj;
            //}
        }

        // GET api/<controller>/5

        // POST api/<controller>
        //public void Post([FromBody] string value)
        //{
        //}

        [Route("AddotrUpdatestudent")]
        [HttpPost]
        public object AddotrUpdatestudent(UserTable st)
        {
            try
            {
                if (st.Cid == null)
                {
                    CustomerTable sm = new CustomerTable();
                    sm.username = st.username;
                    sm.emailid = st.emailid;
                    sm.password = st.password;
                    sm.confirm_password = st.confirm_password;
                    sm.gender = st.gender;
                    sm.city = st.city;
                    sm.nationality = st.nationality;
                    db.CustomerTables.Add(sm);
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data Successfully"
                    };
                }
                else
                {
                    var obj = db.CustomerTables.Where(x => x.Cid == st.Cid).ToList().FirstOrDefault();
                    if (obj.Cid !=null)
                    {

                        obj.username = st.username;
                        obj.emailid = st.emailid;
                        obj.mobileno = st.mobileno;
                        obj.password = st.password;
                        obj.confirm_password = st.confirm_password;
                        obj.gender = st.gender;
                        obj.city = st.city;
                        obj.nationality = st.nationality;
                        db.SaveChanges();
                        return new Response
                        {
                            Status = "Updated",
                            Message = "Updated Successfully"
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Data not insert"
            };

        }

        //public object Deletestudent(string id)
        //{
        //    var obj = db.CustomerTables.Where(x => x.Cid == id).ToList().FirstOrDefault();
        //    db.CustomerTables.Remove(obj);
        //    db.SaveChanges();
        //    return new Response
        //    {
        //        Status = "Delete",
        //        Message = "Delete Successfuly"
        //    };
        //}


        //public HttpResponseMessage Post(CustomerTable c)
        //{
        //    try
        //    {
        //        db.CustomerTables.Add(c);
        //        db.SaveChanges();
        //        return new HttpResponseMessage(HttpStatusCode.Created);

        //    }
        //    catch
        //    {
        //        return new HttpResponseMessage(HttpStatusCode.InternalServerError);

        //    }


        //}

        //public void Put(int id, [FromBody] string value)
        //{
        //}


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
       
        // PUT api/<controller>/5
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}





    }
}