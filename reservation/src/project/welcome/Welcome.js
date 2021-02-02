import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './Welcome.css';
import * as ReactBootStrap from "react-bootstrap";


function Welcome() {
  return (
    <Router>
    <div className="App">
{/*   
   <ReactBootStrap.Navbar bg="dark" variant="dark"style={{color:"orange",border:"3px solid pink"}}>
    <ReactBootStrap.Navbar.Brand href="#home" style={{color:"orange"}}>welcome</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="/flightSchedule" style={{color:"orange"}}>Flight_Scheduling</ReactBootStrap.Nav.Link>
  
       <ReactBootStrap.Nav.Link href="/book" style={{color:"orange"}}>Booking</ReactBootStrap.Nav.Link>     
  <ReactBootStrap.Nav.Link href="/reserv" style={{color:"orange"}}>Booking</ReactBootStrap.Nav.Link>  
   
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar>  */}
 <ReactBootStrap.Navbar bg="dark" variant="black" style={{ border:"3px solid pink"}}>
      <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7}} /><b> DSK-Airline </b>
      
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
    
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home"  style={{color:"orange"}}><b><h3>Welcome</h3></b></ReactBootStrap.Nav.Link>
  </ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link href="/flightSchedule"  style={{color:"orange"}}><b><h3>Flight_Schedule</h3></b></ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="/reserv"  style={{color:"orange"}}><b><h3>Booking</h3></b></ReactBootStrap.Nav.Link> 
    
    
  </ReactBootStrap.Navbar>
 <div>
   <p></p>
<marquee behavior="scroll" direction="right" scrollamount="12" style={{color:"Orange"}}><h1><i>WELCOME TO DSK-AIRLINE</i></h1></marquee>
<br></br>
<marquee behavior="scroll" direction="left" scrollamount="20"style={{color:"Orange"}} ><h1><i>Your Journey Begins</i></h1></marquee>
</div>




  <div>
  <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"300px",height:"300px",float:"left", paddingTop:"100px",padding:"10px"}} />

  </div>
 
<switch>

</switch>
</div>
</Router>
  );
}

export default Welcome;

