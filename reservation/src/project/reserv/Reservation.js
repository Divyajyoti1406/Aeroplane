import React,{Component,useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
 import * as ReactBootStrap from "react-bootstrap";
//import './Reservation.css'
//import './Datefce.js'
//import './Datepic.js'
import './Timepicker.js'
//import DatePicker from "react-datepicker";
import axios from 'axios';  
class AdmissionForm extends Component {    
  constructor(props) {    
      super(props);    
      this.state = {    
        Cid:'',  
         DepartureDate:'',
         From:'',
         To:'',
          formErrors: {}    
      };    
  
      this.initialState = this.state;    
  }    
  
  handleFormValidation() {    
      const { Cid,DepartureDate,From,To } = this.state;    
      let formErrors = {};    
      let formIsValid = true; 
       if (!Cid) {    
      formIsValid = false;    
      formErrors["ciderr"] = " Cid is required.";    
  }  

  if (!DepartureDate) {    
    formIsValid = false;    
    formErrors["perr"] = " Date   is required.";    
}  
  //City    
      if (From === '' || From === "select") {    
          formIsValid = false;    
          formErrors["cityErr"] = "Select city.";    
      }   
      
      if (To === '' || To === "select") {    
        formIsValid = false;    
        formErrors["naterr"] = "Select place.";    
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
           alert('Are You Sure Want To Booking????.')    
          this.setState(this.initialState)   
          this.props.history.push("/payment");
          fetch('https://localhost:44322/api/ReservationDetail', {
          //    fetch('https://localhost:44322/api/UserTable', {
  
        method: 'post',

        headers: {
  
          'Accept': 'application/json',
  
          'Content-Type': 'application/json'
  
        },
  
        body: JSON.stringify({
       
          Cid: this.state.Cid,
          DepartureDate: this.DepartureDate,
          From: this.state.From,
          To: this.state.To,
         
        })
      }).then((Response) => Response.json())
      
            .then((Result) => {
      
             if (Result.Status == 'Success')
             this.props.history.push("/payment");
        
                     
                   
      
              else
              
              alert('Welcome !!!!!')
          
      
            })
      

      
  
          







      }  
      
      

  }    
  
  render() {    
  
      const { ciderr,perr,cityErr,naterr } = this.state.formErrors;    
  
      return (    


          <div style={{backgroundImage:"url()",height:"1300px"}}>
   
          <div  style={{padding:"20px"}}>   
          <marquee behavior="scroll" direction="right" scrollamount="12" style={{color:"Orange"}}><h1><i>Flight-Booking Form</i></h1></marquee>
 
              {/* <h3 style={{ textAlign: "Left" ,color:"orange"}} ><h3>Booking Form </h3></ h3>     */}
              <div>    
                  <form onSubmit={this.handleSubmit} style={{border:"3px solid black",height:"500px",width:"300px",padding:"8px",paddingTop:"10px"}}>    
                      
                      
                      
                      <div>    
                          <label htmlFor="Cid" style={{color:"orange"}}><b>Cid</b></label>    
                          <input type="text" name="Cid"    
                              value={this.state.Cid}    
                              onChange={this.handleChange}    
                           
                              className={ciderr ? ' showError' : ''} />    
                          {ciderr &&    
                              <div style={{ color: "red", paddingBottom: 10 }}>{ciderr}</div>    
                          }    
  
                      </div>  
                      <div>    
                          <label htmlFor="DepartureDate" style={{color:"orange"}}><b>Departure Date</b></label>    
                          <input type="date" name="DepartureDate"    
                              value={this.state.DepartureDate}    
                              onChange={this.handleChange}    
                             style={{width:"280px",height:"45px"}}
                              className={perr ? ' showError' : ''} />    
                          {perr &&    
                              <div style={{ color: "red", paddingBottom: 10 }}>{perr}</div>    
                          }    
  
                      </div>  


                       
                        
                      <div>    
                          <label htmlFor="From" style={{color:"orange"}}><b>Source_City</b></label> 
                          <br></br>
                          <i class="fas fa-plane-departure" style={{color:"orange"}}></i>   
                          <select name="From"    
                              value={this.state.From}    
                              onChange={this.handleChange}    
                              className={cityErr ? ' showError' : ''} >    
                              <option value="select">--Select--</option>    
                              <option value="Pune">Pune</option>    
                              <option value="Mumbai">Mumbai</option>    
                              <option value="Hyderabad">Hyderabad</option> 
                              <option value="karnataka">Karnataka</option>    
                              <option value="Bidar">Bidar</option>    
                              <option value="Delhi">Delhi</option>
                              <option value="Gujurat">Gujurat</option>    
                              <option value="Assam">Assam</option>    
                              <option value="Hyderabad">Hyderabad</option>




                          </select>    
                          {cityErr &&    
                              <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                          }    
                      </div> 

                      <div>    
                          <label htmlFor="To" style={{color:"orange"}}><b>Destination_City</b></label> 
                          <br></br>
                          <i class="fas fa-plane-arrival" style={{color:"orange"}}></i>   
                          <select name="To"    
                              value={this.state.To}    
                              onChange={this.handleChange}    
                              className={naterr ? ' showError' : ''} >    
                              <option value="select">--Select--</option>    
                              <option value="Pune">Pune</option>    
                              <option value="Mumbai">Mumbai</option>    
                              <option value="Hyderabad">Hyderabad</option> 
                              <option value="karnataka">Karnataka</option>    
                              <option value="Bidar">Bidar</option>    
                              <option value="Delhi">Delhi</option>
                              <option value="Gujurat">Gujurat</option>    
                              <option value="Assam">Assam</option>    
                              <option value="Hyderabad">Hyderabad</option>   
                          </select>    
                          {naterr &&    
                              <div style={{ color: "red", paddingBottom: 10 }}>{naterr}</div>    
                          }    
                      </div> 
              <input type="submit" value="Submit" />    
                  </form>  
                  
                    {/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/payment" style={{textAlign:"left",color:"orange"}}><h3>Go For Payment Method</h3></ReactBootStrap.Nav.Link>
        </Router>    */}
              </div>    
          </div >
          {/* <div>
           <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"300px",height:"300px",floatTop:"right", paddingBottom:"100px",padding:"10px"}} />
         
           </div>   */}
          </div>  
          
      )    
  }    
}    
  
export default AdmissionForm;

