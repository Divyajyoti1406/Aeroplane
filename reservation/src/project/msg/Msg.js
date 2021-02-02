import React, { Component } from "react";    

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import * as ReactBootStrap from "react-bootstrap";    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            username: '',    
            emailid: '',    
          Cid:'', 
           
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { username, emailid, Cid } = this.state;    
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
    

        

      if (!Cid) {    
        formIsValid = false;    
        formErrors["ciderr"] = "*Please Fill.";    
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
    

            
           
             
        if (this.handleFormValidation()) {
                 alert('Are You Sure??????')  
                   
            this.setState(this.initialState)
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
              
           
               alert('Your Response is Submitted')
            
                       
                     
        
                else
               
                this.props.history.push("/Logout");
        
              })
        
    
            







        }  
        
        

    }    
    
    render() {    
    
        const { usererr, emailIdErr,ciderr} = this.state.formErrors;    
    
        return (    


            <div>
             <div>
           <ReactBootStrap.Navbar bg="dark" variant="dark" style={{ border:"3px solid orange"}}>
           <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7}} /> DSK-Airline 
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
  <ReactBootStrap.Nav className="mr-auto">
      
  </ReactBootStrap.Nav>


   <ReactBootStrap.Nav.Link href="/msg"  style={{color:"orange"}}></ReactBootStrap.Nav.Link>


    <ReactBootStrap.Nav.Link href="/logout"  style={{color:"orange"}}><b>Logout</b></ReactBootStrap.Nav.Link>
  </ReactBootStrap.Navbar>
   


</div>
            <div  style={{padding:"20px"}}>    
                <h3 style={{ textAlign: "Left" ,color:"orange"}} ><b>Contact_Us </b></ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit} style={{border:"3px solid black",height:"500px",width:"400px",padding:"8px",paddingTop:"10px"}}>    
                        <div> 
                               
                        <i class="fas fa-user" style={{color:"orange"}}></i> 

                            <label htmlFor="username" style={{color:"orange"}}><b>Name</b></label>    
                            <input type="text" name="username"    
                                value={this.state.username}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={usererr ? ' showError' : ''} />    
                            {usererr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{usererr}</div>    
                            }    
    
                        </div>    
                        <div>
                        <i class="fas fa-envelope" style={{color:"orange"}}></i>     
                            <label htmlFor="emailid" style={{color:"orange"}}><b>Email Id</b></label>    
                            <input type="text" name="emailid"    
                                value={this.state.emailid}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                         
                        
                        <div> 
                        <i class="far fa-comment-dots" style={{color:"orange"}}></i>   
                            <label htmlFor="Cid" style={{color:"orange"}}><b>Message</b></label>    
                            <textarea name="Cid"  style={{width:"380px"}}   
                                value={this.state.Cid}    
                                onChange={this.handleChange}    
                             
                                className={ciderr ? ' showError' : ''} />    
                            {ciderr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ciderr}</div>    
                            }    
    
                        </div>  
                        

                        





                      
                <input type="submit" value="Submit" /> 
                     
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
