import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Cards from  "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import './About.css';

function About() {
    return (
      <Router>
      <div className="App">
        
      
      <ReactBootStrap.Navbar bg="dark" variant="dark" style={{ border:"3px solid orange"}}>
        <ReactBootStrap.Navbar.Brand >
            <a href="#">
            <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7,color:'orange'}} />  <b>DSK-Airline</b> 
 

            <img src={""} style={{width:100, marginTop: -7}} />  
            </a>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle />
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/home"  style={{color:"orange"}}><h3>Home</h3></ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="/login"  style={{color:"orange"}}><h3>Login</h3></ReactBootStrap.Nav.Link>
    </ReactBootStrap.Navbar>
         
    <marquee behavior="scroll" direction="right" scrollamount="12" style={{color:"Orange",height:"100px"}}><h1><i>DSK-AIRLINE</i></h1></marquee>

    {/* <div className="main-footer" style={{color:"white"}} > */}
        <div className="container">
  
  <div className="row"><div className="col">
  <h4 style={{color:"orange"}}><b><h3>About_us</h3></b></h4>
<p>Dsk-Airline is a global travel search site for  flights, 
We don’t sell flight tickets -we show you an overview of available travel options, the latest available prices and let you choose the offer you prefer.
 One click and you’re taken directly to your chosen site where the booking is completed</p>
Today, we inspire travellers across more than 30 international markets and are internationally praised for our unique product and services. 
We have been recommended by leading media such as The Daily Telegraph,instagram and have won industry accolades for Best Meta Search Website and Best Airfare Search Site.
</div>
  </div>
  </div>
  {/* </div> */}


  
        <div className="container" style={{backgroundcolor:"white"}}>
        <div className="row"  style={{ backgroundcolor:"white"}}>
            <div className="col">
  <h4 style={{color:"orange" , floatr:"center"}}>What we do</h4>

  DSK Airline  is a global travel search site comparing flights..
Here we will provide a option to book a flight – we show you an overview of available travel options, the latest available prices and let you choose the offer you prefer. One click and you’re taken directly to your chosen site where the booking is completed.
Today, we inspire travellers across more than 30 international markets and are internationally praised for our unique product and services.  </div>
  </div>
        </div>
<div className="container" style={{backgroundcolor:"white",padding:"30px"}}>
        <div className="row"  style={{float:"left" , backgroundcolor:"white"}}>
            <div className="col">
  <h4 style={{color:"orange"}}>Our vision</h4>
  <p>
 
   Our vision is of a world where our differences are a source of inspiration and development, not intolerance and prejudice. Our purpose is to give courage and encourage each one of us to stay curious and be open-minded so we can all enjoy a better,
   more diversified world.
To maintain an efficient and technologically bullet proof platform
  </p>



 </div>
  </div>
 </div>













  <switch>
</switch>
</div>

</Router>
  
)
    };
export default About;