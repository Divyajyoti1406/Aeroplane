import React, { Component } from "react";  
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';  
import './Login.css'    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            username: '',    
            password:'',
          formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { username,password} = this.state;    
        let formErrors = {};    
        let formIsValid = true;

      
        //Student name     
        if (!username) {    
            formIsValid = false;    
            formErrors["usererr"] = "Name is required.";    
        }    
    
      

    if (!password) {    
      formIsValid = false;    
      formErrors["perr"] = " password  is required.";    
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
           //  alert('You have been successfully Logged.')    
            this.setState(this.initialState)  
            
            
            fetch('https://localhost:44322/api/UserTable', {
    
                method: 'post',
      
                headers: {
          
                  'Accept': 'application/json',
          
                  'Content-Type': 'application/json'
          
                },
          
                body: JSON.stringify({
                  username: this.state.username,
               
                  password: this.state.password,
          
                })
              }).then((Response) => Response.json())
              
                    .then((Result) => {
              
                     if (Result.Status == 'Success')
                     this.props.history.push("/welcome");
                
                             
                           
              
                      else
                      
                      alert('Invalid User')
                  
              
                    })
              
              
        }  
      
         // fetch('https://localhost:44322/api/RegisterPost', {
            
          
        

    }    
    
    render() {    
    
        const { usererr,perr } = this.state.formErrors;    
    
        return (    
            
            <div className="Divya">
            <div style={{backgroundImage:"url(https://wallup.net/wp-content/uploads/2017/03/28/315247-photography-sky-airplane-aircraft.jpg)",height:"700px",}}>
             <div  style={{padding:"15px"}}>
            
  


             <br></br> 

             <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"300px",height:"300px",float:"left", paddingTop:"100px",padding:"10px",float:"right"}} />

            <h3 style={{ textAlign: "left",padding:"15px",color:"orange" }} ><b>Login Form </b></ h3>
           
                <div >

                
                    <form onSubmit={this.handleSubmit} style={{width:"300px",height:"350px",border:"2px solid black"}}>    
                        <div>  
                        <i class="fas fa-user" style={{color:"orange"}}></i>
                            <label htmlFor="username" style={{color:"orange"}}>Username</label>
                           
                            <br></br>
                            
                            <input type="text" name="username"    
                                value={this.state.username}    
                                onChange={this.handleChange}    
                                 
                                className={usererr ? ' showError' : ''} />    
                            {usererr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{usererr}</div>    
                            }    
    
                        </div>    
                         
                         
                      
                        <div>
                        <i class="fas fa-lock" style={{color:"orange"}}></i>     
                            <label htmlFor="password" style={{color:"orange"}}>Password</label> 
                            <br></br>   
                         
                            <input type="password" name="password"  style={{width:"300px",height:"45px"}}   
                                value={this.state.password}    
                                onChange={this.handleChange}    
                              
                                className={perr ? ' showError' : ''} />    
                            {perr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{perr}</div>    
                            }    
    
                        </div>  
<input type="submit" value="Submit" style={{color:"black"}} />  
  <p style={{textAlign:"left",color:"ornage"}}>new User??Click here</p>
     
         <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/register" style={{color:"orange"}}><b> Register</b></ReactBootStrap.Nav.Link>
        </Router> 
                    </form> 
                {/* <p style={{textAlign:"left"}}>new User??Click here</p> */}


           
        {/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/register">Register</ReactBootStrap.Nav.Link>
        </Router> */}

                </div> 
                </div>    
            </div > 
            </div>   
        )    
    }    
}    
    
export default AdmissionForm;
