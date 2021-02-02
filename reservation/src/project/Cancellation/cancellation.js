
 import React, { Component } from "react";    
//import './Register.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import * as ReactBootStrap from "react-bootstrap"; 
import axios from 'axios';    
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import Table1 from './Table1';   
//import '../Student/Addstudent.css'  
export default class Studentlist extends Component {  
  
    constructor(props) {  
        super(props);  
        this.state = {business: []};  
      }  
      componentDidMount(){  
        debugger;  
        axios.get('https://localhost:44322/api/ReservationDetail')  
          .then(response => {  
            this.setState({ business: response.data });  
            debugger;  
    
          })  
          .catch(function (error) {  
            console.log(error);  
          })  
      }  
        
      tabRow(){  
        return this.state.business.map(function(object, i){  
            return <Table1 obj={object} key={i} />;  
        });  
      }  
    
      render() {  
        return (  
          <div> 

                    <h2 className="text-left font-weight-bold" style={{color:"orange"}}>Cancelling The Ticekts </h2>
                    <ReactBootStrap.Button variant="dark" size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange",float:"right"}}  href="/bookinglist"><h4>View Booking Detail</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
            <div className="table-responsive bordercolor-pink p-4 bg-light rounded" style={{border:"3px solid pink"}} >
        
            <table className="table table-hover" style={{border:"3px solid pink"}}>
  <thead className="table-borderless table-warning">
                <tr>  
                  <th>Cid</th>  
                  <th>DepartureDate</th>  
                  <th>From</th>  
                  <th>To</th> 
                 
                 
                  <th colSpan="4">Action</th>  
                </tr>  
              </thead>  
              <tbody>  
               { this.tabRow() }   
              </tbody>  
            </table> 
     
          </div> 
          <ReactBootStrap.Button variant="Orange"  size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"black"}}  href="/reserv"><h2> Reservation</h2></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button> 

  <ReactBootStrap.Button variant="warning" size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"black",float:"right"}}  href="/cancel"><h4>Go next</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
          </div> 
        );  
      }  
    }  
       
 
                           