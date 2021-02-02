import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
//import './Payment.css';
import * as ReactBootStrap from "react-bootstrap";


import React, { Component } from "react";    
//import './AdmissionForm.css'    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            type: '',
            cname:'',    
            no: '',    
            month: '', 
            year:'',  
           cvv:'',
             
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { type, cname, no,month,year,cvv} = this.state;    
        let formErrors = {};    
        let formIsValid = true; 
       
        

        
    
        //Student name     
        if (!type) {    
            formIsValid = false;    
            formErrors["usererr"] = "select type.";    
        }    
    
        //Email    
        if (!cname) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Name is Required is required.";    
        }    
          
    

        if (!no) {    
          formIsValid = false;    
          formErrors["phoneNumberErr"] = "*Card Number is required.";    
      }    
    //   else {    
    //       var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
    //       if (!mobPattern.test(no)) {    
    //           formIsValid = false;    
    //           formErrors["phoneNumberErr"] = "Inavlid Card Number number.";    
    //       }    
    //   } 

      if (!month) {    
        formIsValid = false;    
        formErrors["ciderr"] = " * Month  is required.";    
    }  

    if (!year) {    
      formIsValid = false;    
      formErrors["perr"] = " *Year  is required.";    
  }  



  if (!cvv) {    
    formIsValid = false;    
    formErrors["cperr"] = " *CVV is required.";    
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
            alert('Payment Succesfull.')  ;

            this.setState(this.initialState) 
            this.props.history.push("/cancel");   
        }  
        
        

    }    
    
    render() {    
    
        const { usererr, emailIdErr, phoneNumberErr,ciderr,perr,cperr } = this.state.formErrors;    
    
        return (  
            
          <div style={{backgroundImage:"url()",height:"1300px"}}>
     
            <div  style={{padding:"20px"}}>    
                <h3 style={{ textAlign: "Left",color:"orange" }} ><h3>Payment Form</h3> </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit} style={{border:"3px solid black",height:"700px",width:"300px",padding:"8px",paddingTop:"10px"}}  >    
                        <div>  
                        <i class="far fa-credit-card" style={{color:"orange"}}></i>   
                            <label htmlFor="type" style={{color:"orange"}}>Enter CardType</label>    
                            <input type="text" name="type"    
                                value={this.state.type}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={usererr ? ' showError' : ''} />    
                            {usererr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{usererr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="cname" style={{color:"orange"}}>Card Holder's name</label>    
                            <input type="text" name="cname"    
                                value={this.state.cname}    
                                onChange={this.handleChange} 
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                         
                        <div>    
                            <label htmlFor="no" style={{color:"orange"}}>Card Number</label>    
                            <input type="text" name="no"    
                                onChange={this.handleChange}    
                                value={this.state.no}    
                               placeholder="XXX XXX XXX XXXXXXX"
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div> 
                      
                      <div > 
                      <i class="fas fa-calendar-alt" style={{color:"orange"}}></i>   
                            <label htmlFor="month" style={{color:"orange"}}>Month</label>    
                            <select name="month"    
                                value={this.state.month}    
                                onChange={this.handleChange}    
                                className={ciderr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="january">January</option>    
                                <option value="February">February</option>    
                                <option value="march">March</option> 
                                <option value="April">April</option>    
                                <option value="May">May</option>    
                                <option value="june">June</option> 
                                <option value="july">July</option>    
                                <option value="august">August</option>    
                                <option value="september">september</option> 
                                <option value="october">october</option>    
                                <option value="november">November</option>    
                                <option value="December">December</option> 









                            </select>    
                            {ciderr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ciderr}</div>    
                            }    
                        </div> 

                        <div>
                        <i class="fas fa-calendar-alt" style={{color:"orange"}}></i>      
                            <label htmlFor="year" style={{color:"orange"}}>Year</label>    
                            <select name="year"    
                                value={this.state.year}    
                                onChange={this.handleChange}    
                                className={perr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="2021">2021</option>    
                                <option value="2022">2022</option>    
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>    
                                <option value="2025">2025</option>    
                                <option value="2026">2026</option>  <option value="Pune">2029</option>    
                                <option value="2027">2027</option>    
                                <option value="2028">2028</option>




                            </select>    
                            {perr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{perr}</div>    
                            }    
                        </div> 


                        <div>    
                            <label htmlFor="cvv" style={{color:"orange"}}>CVV</label>    
                            <input type="text" name="cvv"    
                                value={this.state.confirm_password}    
                                onChange={this.handleChange}    
                               placeholder="XXX"
                                className={cperr ? ' showError' : ''} />    
                            {cperr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cperr}</div>    
                            }    
    
                        </div>  
                      



                        <input type="submit" value="Submit" />  
                        <br></br>

                        
                {/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/cancel" style={{textAlign:"right",color:"orange"}}><h3>Cancel</h3></ReactBootStrap.Nav.Link>
        </Router>      */}
                    </form>    
                </div>   
                 
            </div > 
            </div>   
        )  
    }    
}    
    
export default AdmissionForm;



