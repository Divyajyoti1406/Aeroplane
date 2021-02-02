import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React from 'react';
import './flight.css'
import * as ReactBootStrap from "react-bootstrap";

function Table() {
  return (
    <div>
 
    <div className="row" >
      <div className="col-md-12 mb-5">
      <h1 className="text-left font-weight-bold" style={{color:"orange"}}>Flight Shedule</h1>
      <div className="table-responsive bordercolor-pink p-4 bg-light rounded" style={{border:"3px solid pink"}} >
        
<p style={{color:"orange"}}>Active Flight Schedule</p>
{/* <Router>
        <ReactBootStrap.Nav.Link  type="submit" className="button" href="/reserv" style={{color:"black",float:"right"}}><h3>Go For Booking</h3></ReactBootStrap.Nav.Link>
        </Router> */}
       
      <table className="table table-hover" style={{border:"3px solid pink"}}>
  <thead className="table-borderless table-warning">
    <tr>
      <th scope="col">FlightNo</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">DepartureDate</th>
      <th scope="col">ArrivalDate</th>
      <th scope="col">DepartureTime</th>
      <th scope="col">ArrivalTime</th>
      <th scope="col">Price</th>
     
     
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td  scope="row">UA1234</td>
      <td>Delhi</td>
      <td>Bangalore</td>
      <td>02-20-2021</td>
      <td>02-25-2021</td>
      <td>3:30:00</td>
      <td>8:30:30</td>
      <td>20000</td>
   

    </tr>
    <tr>
    <td  scope="row">AA1234</td>
    <td>Bidar</td>
      <td>Bangalore</td>
      <td>02-14-2021</td>
      <td>02-18-2021</td>
      <td>5:30:00</td>
      <td>8:45:30</td>
      <td>15000</td>
    
    </tr>
    <tr>
      <td  scope="row">WN1234</td>
      <td>Chennai</td>
      <td>Mumbai</td>
      <td>02-29-2021</td>
      <td>03-05-2021</td>
      <td>7:30:00</td>
      <td>8:30:30</td>
      <td>10000</td>
 
    </tr>
    <tr>
      <td  scope="row">VS234</td>
      <td>Mysore</td>
      <td>Bangalore</td>
      <td>03-15-2021</td>
      <td>03-16-2021</td>
      <td>3:30:00</td>
      <td>8:30:30</td>
      <td>20000</td>
     
      </tr>
    <tr>
      <td  scope="row">Pk234</td>
    
      <td>Hyderabad</td>
      <td>Bangalore</td>
      <td>03-20-2021</td>
      <td>03-25-2021</td>
      <td>3:30:00</td>
      <td>8:30:30</td>
      <td>16000</td>
      
      </tr>

      <tr>
      <td  scope="row">RM234</td>
    
      <td>Haasan</td>
      <td>Ballary</td>
      <td>03-22-2021</td>
      <td>03-25-2021</td>
      <td>3:30:00</td>
      <td>8:30:30</td>
      <td>17000</td>
      
      </tr>

      <tr>
      <td  scope="row">KA234</td>
    
      <td>mumbai</td>
      <td>Bangalore</td>
      <td>04-20-2021</td>
      <td>02-25-2021</td>
      <td>3:30:00</td>
      <td>8:30:30</td>
      <td>20000</td>
      
      </tr>

      

     

     
</tbody>
</table>
<ReactBootStrap.Button variant="dark"  active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange",float:"left"}}  href="/reserv"><h4>Start-Booking</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button> 

</div>
      </div>
    </div>
       
          </div>
  )
}

export default Table;

