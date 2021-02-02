import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';

// import Home1 from './project/home1/Home1';
import Home from './project/home/Home';
import Login from './project/login/Login';
import Booking from './project/booking/Booking'
import BookingList from './project/bookinglist/BookingList'
import cancellation from './project/Cancellation/cancellation'
import Table1 from './project/Cancellation/Table1'
import BookinhUpdate from './project/bookingUpadte/BookinhUpdate'
import ALogin from './project/adminlogin/ALogin';
import About from './project/about/About';
import Register from './project/register/Register';
import Welcome from './project/welcome/Welcome';
import  flight from './project/flightSchedule/flight';
import  Book from './project/book/Contact';
import  Reservation from './project/reserv/Reservation';

import Payment from './project/payment/Payment';
import Cancel from './project/cancel/Cancel';
import Customer from './project/customer/Customer';
import request from './project/Request/request';


import Msg from './project/msg/Msg';
import  Logout from './project/logout/Logout';
import thanks from './project/thank/thanks';
import Last from './project/last/Last';
import Updateget from './project/updatecustomer/Updateget';
import Get from './project/updatecustomer/Get';
import Update from './project/updatecustomer/Update';

function App() {
  return (
    <div className="App">
    <Router>
  <Switch>
    
 
<Route exact path="/" component={Home}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/booking" component={Booking}/>
<Route exact path="/bookinglist" component={BookingList}/>
<Route exact path="/Cancellation" component={cancellation}/>
<Route exact path="/Cancellation" component={Table1}/>
<Route exact path="/bookingUapdte" component={BookinhUpdate}/>
<Route exact path="/adminlogin" component={ALogin}/>
<Route exact path="/about" component={About}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/welcome" component={Welcome}/>
<Route exact path="/flightSchedule" component={flight}/>
<Route exact path="/book" component={Book}/>
<Route exact path="/reserv" component={Reservation}/>
{/* //<Route exact path="/reserv" component={Booking}/> */}
<Route exact path="/payment" component={Payment}/>
<Route exact path="/cancel" component={Cancel}/>
<Route exact path="/customer" component={Customer}/>
<Route exact path="/logout" component={Logout}/>
<Route exact path="/thank" component={thanks}/>
<Route exact path="/last" component={Last}/>
<Route exact path="/updatecustomer" component={Updateget}/>
<Route exact path="/edit/:id" component={Get}/>
<Route exact path="/updatecustomer" component={Update}/>
<Route exact path="/Request" component={request}/>


<Route exact path="/msg" component={Msg}/>
</Switch>
</Router>
</div>
          );
}
export default App;
