import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './BookinhUpdate.css';
import * as ReactBootStrap from "react-bootstrap";

function Cancel()
{
    return(
        <Router>
           <div>
           <ReactBootStrap.Navbar bg="dark" variant="dark" style={{ border:"3px solid orange"}}>
      <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>DSK-Airline
          <img src={""} style={{width:100, marginTop: -7}} />  
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
    <ReactBootStrap.Navbar.Brand href="#home" style={{color:"orange"}}>Airline</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      
  </ReactBootStrap.Nav>


   <ReactBootStrap.Nav.Link href="#"  style={{color:"orange"}}>More_options</ReactBootStrap.Nav.Link>

    <ReactBootStrap.Nav.Link href="/msg"  style={{color:"orange"}}>Logout</ReactBootStrap.Nav.Link>
  </ReactBootStrap.Navbar>
   





  <h1 style={{color:"orange",marginLeft:"auto",marginRight:"auto"}}>Cancellation from</h1>

  
   
<div className="col">
                       <h4 style={{color:"orange" ,float:"Right"}}>More_Options</h4>
                       <ul className="list-unstyled">
                           <li> <ReactBootStrap.Nav.Link   className="button" href="/bookinglist">View Booking Detail</ReactBootStrap.Nav.Link></li>
                           <li>Information</li>
                           <li>Flight-Scheduling</li>
                       </ul>
                   </div>

  <switch>
</switch>
                </div>
            </Router>
       
    )
}
export default Cancel;