using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectCaseStudy.Models;


namespace ProjectCaseStudy.Controllers
{
    //[RoutePrefix("Api/userTable")]
    public class UserTableController : ApiController
    {

        projectflightEntities db = new projectflightEntities();
        // GET api/<controller>
        public UserTableController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        public IEnumerable<CustomerTable> Get()
        {
            return db.CustomerTables.ToList();
        }

        // GET api/<controller>/5
        //public CustomerTable Get(int id)
        //{
        //    return db.CustomerTables.Find(id);
        //}


        //[Route("InsertEmployee")]
        //[HttpPost]


        //public object InsertEmployee(UserTable us)
        //{
        //    try
        //    {
        //        CustomerTable c = new CustomerTable();
        //        if (c.Cid == null)
        //        {
        //            c.username = c.username;
        //            c.emailid = c.emailid;
        //            c.mobileno = c.mobileno;
        //            c.Cid = c.Cid;
        //            c.password = c.password;
        //            c.confirm_password = c.confirm_password;
        //            c.gender = c.gender;
        //            c.city = c.city;
        //            c.nationality = c.nationality;

        //            db.CustomerTables.Add(c);
        //            db.SaveChanges();
        //            return new Response
        //            { Status = "Success", Message = "Record SuccessFully Saved." };
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //    return new Response
        //    { Status = "Error", Message = "Invalid Data." };
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




        //[Route("Login")]



        public Response employeeLogin(Login login)
        {
            var log = db.CustomerTables.Where(x => x.username.Equals(login.username) &&
                      x.password.Equals(login.password)).FirstOrDefault();

            if (log == null)
            {


                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            else
                return new Response { Status = "Success", Message = "Login Successfully" };
        }

        //// POST api/<controller>
        //public HttpResponseMessage Post(CustomerTable c)
        //        {
        //            try
        //            {
        //                db.CustomerTables.Add(c);
        //                db.SaveChanges();
        //                return new HttpResponseMessage(HttpStatusCode.Created);

        //            }
        //            catch
        //            {
        //                return new HttpResponseMessage(HttpStatusCode.InternalServerError);

        //            }



        //        }

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
            //}

            //// DELETE api/<controller>/5
            public HttpResponseMessage Delete(string id)
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
        } }



    
    

