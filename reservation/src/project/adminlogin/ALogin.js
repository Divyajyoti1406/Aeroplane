import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './ALogin.css';
import * as ReactBootStrap from "react-bootstrap";

function Cancel()
{
    return(
        <Router>
           <div>
           <ReactBootStrap.Navbar bg="dark" variant="dark" style={{ border:"3px solid orange"}}>
      <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7}} /><b> DSK-Airline </b>
         
          <img src={""} style={{width:100, marginTop: -7}} />  
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
    <ReactBootStrap.Navbar.Brand href="#home" style={{color:"orange"}}></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      
  </ReactBootStrap.Nav>


   <ReactBootStrap.Nav.Link href="/last"  style={{color:"orange"}}><b><h3>Home</h3></b></ReactBootStrap.Nav.Link>

    <ReactBootStrap.Nav.Link href="/msg"  style={{color:"orange"}}></ReactBootStrap.Nav.Link>
  </ReactBootStrap.Navbar>
   





  <h1 style={{color:"orange",marginLeft:"auto",marginRight:"auto"}}>Options</h1>

  
 
                       {/* <h4 style={{color:"orange"}}>ViewingDetails</h4>
                       <ul className="block" >
                       <li> <ReactBootStrap.Nav.Link   style={{color:"Orange"}}  href="/bookinglist"><h2>View Booking Detail</h2></ReactBootStrap.Nav.Link></li>
                       <li> <ReactBootStrap.Nav.Link  style={{color:"Orange"}}   href="/customer"><v2>View Profile/Cusstomer Details</v2></ReactBootStrap.Nav.Link></li>
                       <li> <ReactBootStrap.Nav.Link   style={{color:"Orange"}} href="/home"><v2>Contact_Us</v2></ReactBootStrap.Nav.Link></li>
             */}


   
    <ReactBootStrap.Button variant="dark"  active>
    <ReactBootStrap.Nav.Link   style={{color:"orange"}}  href="/bookinglist"><h4>Booking Details</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
  <p></p>
  <ReactBootStrap.Button variant="dark"  active>
  <ReactBootStrap.Nav.Link href="/Cancellation"  style={{color:"orange"}}><h4>Ticket Cancellation</h4></ReactBootStrap.Nav.Link> 
  </ReactBootStrap.Button>
            <p></p>              
            <ReactBootStrap.Button variant="dark"  active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange"}}  href="/customer"><h4>Passenger  Profile</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
  <p></p>
  <ReactBootStrap.Button variant="dark"  active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange"}}  href="/updatecustomer"><h4>Update  Profile</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button> 
  <p></p>
  <ReactBootStrap.Button variant="dark" size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange"}}  href="/msg"><h4>Contact _Us</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>   


  


  <switch>
</switch>
                </div>
                <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"250px",height:"200px",float:"left", paddingBottom:"20px",padding:"10px"}} />
            </Router>
       
    )
}
export default Cancel;