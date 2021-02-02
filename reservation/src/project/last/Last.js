import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Cards from  "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

import './Last.css';

function Home() {
  return (
    <Router>
    <div className="App">
    
    <ReactBootStrap.Navbar bg="dark" variant="black" style={{ border:"3px solid pink"}}>
      <ReactBootStrap.Navbar.Brand >
          <a href="#" style={{color:"orange"}}>
          <img src={"https://intelliplans.com/images/portfolio-logos/travel-tourism-logo/travel-tourism-logo-14.jpg"} style={{width:"45px",height:"45px", marginTop: -7}} /> <b>DSK-Airline </b>
          </a>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle />
    
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home"  style={{color:"orange"}}><h3>Home</h3></ReactBootStrap.Nav.Link>
  </ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link href="/login"  style={{color:"orange"}}><h3>Login</h3></ReactBootStrap.Nav.Link>
    {/* <ReactBootStrap.Nav.Link href="/logout"  style={{color:"orange"}}><h3>Logout</h3></ReactBootStrap.Nav.Link>  */}
    
  </ReactBootStrap.Navbar>
  
  
  <div style={{backgroundImage:"url(https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/interior/A380_Business_Class.jpg?wid=1280&fit=fit,1&qlt=85,0&fmt=png-alpha)",height:"700px",width:"8000px"}}>
      <h1  style={{color:" rgb(116, 8, 8)",textAlign:"right",fontStyle:"italic",padding:'200px'}}></h1> 
</div>

 <ReactBootStrap.CardGroup> 
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src="https://www.telegraph.co.uk/content/dam/Travel/2016/April/flight-attendant-AP39723504-xlarge.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Airhosters</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src="https://howtobecabincrew.com/wp-content/uploads/2015/02/Qatar-Cabin-crew-e1423162580218-2.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Services inside Aeroplane</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src="https://st3.depositphotos.com/2211028/14453/v/600/depositphotos_144536015-stock-video-people-in-domodedovo-international-airport.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Airport</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
</ReactBootStrap.CardGroup>

<p></p>
<p></p>
<p></p>
<p></p>
<div className="main-footer" >
  
<div className="row"><div className="col">
<h4 style={{color:"orange"}}>Trending Cities and Countries</h4>
<p>The Most Searched Cities And countries in Our website</p>

<ReactBootStrap.CardGroup>
  <ReactBootStrap.Card  style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top"  style={{height:"150px"}} src="https://i.pinimg.com/originals/39/f5/d5/39f5d5191cfd10bc43ba851296d5a2df.jpg" />
    <ReactBootStrap.Card.Body >
      <ReactBootStrap.Card.Title>Amsterdam</ReactBootStrap.Card.Title>
     </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top" style={{height:"150px"}} src="https://media2.s-nbcnews.com/j/MSNBC/Components/Photo/_new/110502-duomo-hmed.social_share_1024x768_scale.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>America</ReactBootStrap.Card.Title>
    
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top"  style={{height:"150px"}} src="https://images5.alphacoders.com/311/thumb-1920-311151.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>France</ReactBootStrap.Card.Title>
      
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>






  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top" style={{height:"150px"}}  src="https://i.pinimg.com/236x/d8/0e/6b/d80e6ba9a837a4d4559719fb09e9c889.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Tajmahal</ReactBootStrap.Card.Title>
  
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>






  
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top" style={{height:"150px"}}  src="https://static.toiimg.com/photo/msid-69359452,width-96,height-65.cms" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Paris</ReactBootStrap.Card.Title>
      
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  
</ReactBootStrap.CardGroup>




<ReactBootStrap.CardGroup>
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top" style={{height:"150px"}}  src="https://media.istockphoto.com/photos/dubai-marina-picture-id467829216?k=6&m=467829216&s=612x612&w=0&h=j9EEpk3cPBkV29mssW0SPzyV0yXGjuuYQRwV-yetmro=" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Dubai</ReactBootStrap.Card.Title>
      
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top"  style={{height:"150px"}} src="https://files.klgates.com/images/office/107764_image.png" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Berlin</ReactBootStrap.Card.Title>
   
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top"  style={{height:"150px"}} src="https://www.gavi.org/sites/default/files/investing/funding/australia-keith-zhu-qaNcz43MeY8-unsplash.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Australia</ReactBootStrap.Card.Title>
     
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top"  style={{height:"150px"}} src="https://s30876.pcdn.co/wp-content/uploads/Malaysia2-1170x630.jpg" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Malasia</ReactBootStrap.Card.Title>
      
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>
  
  <ReactBootStrap.Card style={{height:"250px"}}>
    <ReactBootStrap.Card.Img variant="top" style={{height:"150px"}} src="https://thewsh.globalblue.com/wp-content/uploads/2019/01/Tokyo-1110x450.png" />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>japan</ReactBootStrap.Card.Title>
     
    </ReactBootStrap.Card.Body>
    
  </ReactBootStrap.Card>
  
</ReactBootStrap.CardGroup>
</div>
</div>

<div>
<p></p><p></p><p></p><p></p>

</div>
<div>
<p></p><p></p><p></p><p></p>

</div>
  
<div className="row"><div className="col">
<h1 style={{color:"orange"}}>Mission</h1>

<ul className="list-unstyled" style={{textAlign:"center"}}>
    <li>To sell the cheapest tickets in an increasingly competative market</li>
<li>To assemble the most advanced terms of travel experts in the world</li>
<li>To maintain an efficient and technologically bullet proof platform</li>
  </ul>





</div>
</div>

<div className="conatiner">


<p></p> <p></p>
<p></p>
<div className="row"><div className="col">
                       
                     <h4 style={{color:"orange"}}>Dsk-Airlines</h4>
                       <ul className="list-unstyled">
                           <li><ReactBootStrap.Nav.Link href="/about" style={{color:"white"}}>About_us</ReactBootStrap.Nav.Link>  
</li>
<li>Carriers</li>
                           <li>ContactUs</li>
                           <li>How we work</li>
                       </ul>
                       <h4 style={{color:"orange"}}>Contact_Us</h4>
                       <ul className="list-unstyled">
                           <li>Divyajyoti.S</li>
                           <li>+919008612768</li>
                           <li>divyajyotisk9@gmail.com</li>
                       </ul>
                     <p></p>
                     <p></p>



                   </div>

                   <div className="col">
                       <h4 style={{color:"orange"}}>Services</h4>
                       <ul className="list-unstyled">
                           <li>Booking</li>
                           <li>Information</li>
                           <li>Flight-Scheduling</li>
                       </ul>
                   </div>
  <div className="col">
                       <h4></h4>
                     <h2 style={{color:"orange"}}><i>It's time to start your 
                         adventure</i></h2>
                   </div>
                   </div>

                   <hr/>
               
          <div className="row" style={{textAlign:"center",color:"orange"}}>
              <p className="col-sm">
               Copyright  &copy;{new Date().getFullYear()} DskAirline All rights reserved
        </p></div>
         
</div>

       </div>
     <switch>
</switch>
</div>

</Router>

  );
}

export default Home;

