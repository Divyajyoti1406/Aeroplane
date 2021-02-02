import React, { Component } from "react";    
import './Register.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import * as ReactBootStrap from "react-bootstrap";    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            username: '',    
            emailid: '',    
            mobileno: '', 
            Cid:'',  
            password:'',
            confirm_password:'',
           
            gender: 'select',    
            
            city: 'select', 
            nationality:'select' ,  
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { username, emailid, mobileno,Cid,password,confirm_password, gender, city,nationality } = this.state;    
        let formErrors = {};    
        let formIsValid = true; 
        
        //Student name     
        if (!username) {    
            formIsValid = false;    
            formErrors["usererr"] = "*Name is required.";    
        }    
    
        //Email    
        if (!emailid) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Invalid email id.";    
        }    
    

        if (!mobileno) {    
          formIsValid = false;    
          formErrors["phoneNumberErr"] = "*Phone number is required.";    
      }    
      else {    
          var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
          if (!mobPattern.test(mobileno)) {    
              formIsValid = false;    
              formErrors["phoneNumberErr"] = "*Invalid phone number.";    
          }    
      } 

      if (!Cid) {    
        formIsValid = false;    
        formErrors["ciderr"] = "* Cid is required.";    
    }  

    if (!password) {    
      formIsValid = false;    
      formErrors["perr"] = "*password  is required.";    
  }  



  if (!confirm_password) {    
    formIsValid = false;    
    formErrors["cperr"] = " *password is required.";    
}  



if (["password"] !== "undefined" && ["confirm_password"] !== "undefined") {
          
    if (this.state["password"] !=this.state ["confirm_password"]) {
      formIsValid = false;
      formErrors["perr"] = "*Password don't match";
    }
   

  } 

    













        //DOB    
          
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "*Select gender.";    
        }    
    
     
        
    
        //City    
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "*Select city.";    
        }   
        
        if (nationality === '' || nationality === "select") {    
          formIsValid = false;    
          formErrors["naterr"] = "Select nationality.";    
      }  

    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    

            
            //  alert('You have been successfully registered.')    
            // this.setState(this.initialState)   
             
        if (this.handleFormValidation()) {
                alert('You have been successfully registered.')    
            this.setState(this.initialState)
            this.props.history.push("/welcome");
            fetch('https://localhost:44322/api/RegisterPost', {
            //    fetch('https://localhost:44322/api/UserTable', {
    
          method: 'post',

          headers: {
    
            'Accept': 'application/json',
    
            'Content-Type': 'application/json'
    
          },
    
          body: JSON.stringify({
            username: this.state.username,
            emailid: this.state.emailid,
            mobileno: this.state.mobileno,
            Cid: this.state.Cid,
            password: this.state.password,
        confirm_password: this.state.confirm_password,
            gender: this.state.gender,
            city: this.state.city,
            nationality: this.state.nationality,
          })
        }).then((Response) => Response.json())
        
              .then((Result) => {
        
               if (Result.Status == 'Success')
               this.props.history.push("/msg");
          
                       
                     
        
                else
                
                alert('Welcome !!!!!')
            
        
              })
        
    
            







        }  
        
        

    }    
    
    render() {    
    
        const { usererr, emailIdErr, phoneNumberErr,ciderr,perr,cperr, genderErr,cityErr,naterr } = this.state.formErrors;    
    
        return (    


            <div>
                     <div style={{float:"right"}}>
  <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"300px",height:"300px",float:"left", paddingTop:"100px",padding:"10px"}} />

  </div>
            <div  style={{padding:"20px"}}>    
                <h3 style={{ textAlign: "Left" ,color:"orange"}} ><b>Register Here </b></ h3>    


                <div>    
                    <form onSubmit={this.handleSubmit} style={{border:"3px solid black",height:"1200px",width:"300px",padding:"8px",paddingTop:"10px"}}>    
                        <div>    
                            <label htmlFor="username" style={{color:"orange"}}>Name</label>    
                            <input type="text" name="username"    
                                value={this.state.username}    
                                onChange={this.handleChange}    
                                 
                                className={usererr ? ' showError' : ''} />    
                            {usererr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{usererr}</div>    
                            }    
    
                        </div>    
                        <div>  
                        <i class="fas fa-envelope" style={{color:"orange"}}></i>   
                            <label htmlFor="emailid" style={{color:"orange"}}>Email Id</label>
                              
                            <input type="text" name="emailid"    
                                value={this.state.emailid}    
                                onChange={this.handleChange}    
                                
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                         
                        <div>  
                        <i class="fas fa-mobile-alt" style={{color:"orange"}}></i>  
                            <label htmlFor="mobileno"style={{color:"orange"}}>Phone Number</label>    
                            <input type="text" name="mobileno"    
                                onChange={this.handleChange}    
                                value={this.state.mobileno}    
                                
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div> 
                        <div>    
                            <label htmlFor="Cid" style={{color:"orange"}}>Cid</label>    
                            <input type="text" name="Cid"    
                                value={this.state.Cid}    
                                onChange={this.handleChange}    
                             
                                className={ciderr ? ' showError' : ''} />    
                            {ciderr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ciderr}</div>    
                            }    
    
                        </div>  
                        <div> 
                        <i class="fas fa-lock" style={{color:"orange"}}></i>   
                            <label htmlFor="password" style={{color:"orange"}}>password</label>   
                            <br></br>
                            <input type="password" name="password"  style={{width:"280px",height:"45px"}}   
                                value={this.state.password}    
                                onChange={this.handleChange}    
                              
                                className={perr ? ' showError' : ''} />    
                            {perr &&    
                                <div style={{ color: "red", paddingBottom: 10, width:"50px" }}>{perr}</div>    
                            }    
    
                        </div>  


                        <div> 
                        <i class="fas fa-lock" style={{color:"orange"}}></i>   
                            <label htmlFor="confirm_password" style={{color:"orange"}}>Confrim_Pass</label> 
                            <br></br>   
                            <input type="password" name="confirm_password"  style={{width:"280px",height:"45px"}}   
                                value={this.state.confirm_password}    
                                onChange={this.handleChange}    
                               
                                className={cperr ? ' showError' : ''} />    
                            {cperr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cperr}</div>    
                            }    
    
                        </div>  







                        <div>
                        <i class="fas fa-venus-mars" style={{color:"orange"}}></i>    
                            <label htmlFor="gender" style={{color:"orange"}}>Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                          
                        <div>
                        <i class="fas fa-city" style={{color:"orange"}}></i>    
                            <label htmlFor="city" style={{color:"orange"}}>City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Pune">Pune</option>    
                                <option value="Mumbai">Mumbai</option>    
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bidar">Bidar</option>    
                                <option value="karnataka">Karnataka</option>    
                                <option value="Gujurat">Gujuraj</option> 
                                <option value="Delhi">Delhi</option> 
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div> 

                        <div>    
                            <label htmlFor="nationality"style={{color:"orange"}}>Nationality</label>    
                            <select name="nationality"    
                                value={this.state.nationality}    
                                onChange={this.handleChange}    
                                className={naterr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="India">India</option>    
                                <option value="Austrelia">Austrelia</option>    
                                <option value="Italy">Italy</option>  
                                <option value="Russia">Russia</option>    
                                <option value="China">China</option>    
                                <option value="America">America</option> 


                            </select>    
                            {naterr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{naterr}</div>    
                            }    
                        </div> 
                <input type="submit" value="Submit" /> 
                 {/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/welcome" style={{color:"orange"}}><h3>Welcome</h3></ReactBootStrap.Nav.Link>
        </Router>      */}
                    </form> 
                    {/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/welcome" style={{color:"orange"}}><h3>Welcome</h3></ReactBootStrap.Nav.Link>
        </Router>     */}
                </div>    
            </div >
            </div>    
        )    
    }    
}    
    
export default AdmissionForm;
