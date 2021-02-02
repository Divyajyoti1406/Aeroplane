import React, { Component } from "react";  
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';  
import './Logout.css'    
    
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
                     this.props.history.push("/last");
                
                             
                           
              
                      else
                      
                      alert('Invalid Attempt')
                  
              
                    })
              
              
        }  
      
         // fetch('https://localhost:44322/api/RegisterPost', {
            
          
        

    }    
    
    render() {    
    
        const { usererr,perr } = this.state.formErrors;    
    
        return (    
            
            <div className="body" >
            <div style={{backgroundImage:"url(https://image1.slideserve.com/1993465/thank-you-for-your-attention-l.jpg)",height:"1000px"}}>
           
             <div  style={{padding:"15px"}}>       
            
                <div >

                
                    <form onSubmit={this.handleSubmit} style={{width:"300px",height:"400px",border:"2px solid black",float:"right",padding:"15px"}}>    
                    <h3 style={{ textAlign: "left",color:"orange",textDecoration:"underline"}} ><b>Logout Form </b></ h3>
                   
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
                        <i class="fas fa-lock" style={{color:"orange"}}></i>      
                            <label htmlFor="password" style={{color:"orange"}}><b>password</b></label>    
                            <input type="text" name="password"    
                                value={this.state.password}    
                                onChange={this.handleChange}    
                              
                                className={perr ? ' showError' : ''} />    
                            {perr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{perr}</div>    
                            }    
    
                        </div>  

     
                        <input type="submit" value="Submit" style={{color:"black"}} /> 
                    </form>
                   
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"200px",height:"200px"}} /> 

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
