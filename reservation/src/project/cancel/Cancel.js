import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './Cancel.css';
import * as ReactBootStrap from "react-bootstrap";

function Cancel()
{
    return(
        <Router>
           <div>
           <ReactBootStrap.Navbar bg="dark" variant="dark" style={{ border:"3px solid orange"}}>
           <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7}} /> DSK-Airline 
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
    <ReactBootStrap.Navbar.Brand href="#home" style={{color:"orange"}}><b>Airline</b></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      
  </ReactBootStrap.Nav>


   <ReactBootStrap.Nav.Link href="/adminlogin"  style={{color:"orange"}}><b>More_options</b></ReactBootStrap.Nav.Link>
   <ReactBootStrap.Nav.Link href="/msg"  style={{color:"orange"}}><b>Message_Us</b></ReactBootStrap.Nav.Link>


    <ReactBootStrap.Nav.Link href="/logout"  style={{color:"orange"}}><b>Logout</b></ReactBootStrap.Nav.Link>
  </ReactBootStrap.Navbar>
   




   <h1 style={{color:"orange",marginLeft:"auto",marginRight:"auto",float:"left"}}>Cancellation from</h1>
 
  <ReactBootStrap.Form  style={{ width:"400px",height:"400px",border:"3px solid black"}}> 
  <ReactBootStrap.Form.Row style={{width:"800px"}}>
  <ReactBootStrap.Form.Group  controlId="formGridNumber">
      <ReactBootStrap.Form.Label  style={{color:"black"}}><b>Ticket-Number</b></ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="TicketNumber" style={{width:"250px"}} />
    </ReactBootStrap.Form.Group>
</ReactBootStrap.Form.Row>
 
<ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group  controlId="formGridCid">
      <ReactBootStrap.Form.Label  style={{color:"black"}}><b>Cid</b></ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="Cid" />
    </ReactBootStrap.Form.Group>

    </ReactBootStrap.Form.Row>

    <ReactBootStrap.Form.Row>
    {/* <ReactBootStrap.Button variant="warning" type="submit"  style={{margninLeft:"auto",marginRight:"auto"}} >
 Cancel
  </ReactBootStrap.Button> */}

  <ReactBootStrap.Button variant="warning" size="lg" active>
  <ReactBootStrap.Nav.Link href="/Cancellation"  style={{color:"black" ,padding:"10px"}}>Submit</ReactBootStrap.Nav.Link> 
  </ReactBootStrap.Button>
  <p style={{padding:"10px"}}></p>
  
  <ReactBootStrap.Form.Row>
<ReactBootStrap.Button variant="warning"  style={{margninLeft:"auto",marginRight:"auto",color:"black"}}><ReactBootStrap.Nav.Link href="/reserv">Re-Register</ReactBootStrap.Nav.Link>
  </ReactBootStrap.Button>
  </ReactBootStrap.Form.Row>
  </ReactBootStrap.Form.Row>
</ReactBootStrap.Form>

</div>


  <switch>
</switch>
            
            </Router>
       
    )
}
export default Cancel;