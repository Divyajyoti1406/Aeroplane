import axios from 'axios';
import React from 'react';
//import './StudentList.css';
import {useState,props, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";  


export default function StudentList() {
    const[data, setData]=useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44322/api/ReservationDetail")
        .then(result=>setData(result.data));
        console.log(data);
    },[]);
    
   
 
  
    return (
        <div>
          <h2 className="text-left font-weight-bold" style={{color:"orange"}}>Booking Details </h2>
          <div className="table-responsive bordercolor-pink p-4 bg-light rounded" style={{border:"3px solid pink"}} >
        
            <table className="table table-hover" style={{border:"3px solid pink"}}>
  <thead className="table-borderless table-warning">
    <tr>
      <th scope="col">Cid</th>
      <th scope="col">DepartureDate</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">ticketno</th>
  
    </tr>
  </thead>s
  <tbody>
    {data.map(item=>{
        return <tr key={item.Id}>
            <td>{item.Cid}</td>
            <td>{item.DepartureDate}</td>
            <td>{item.From}</td>
            <td>{item.To}</td>
            <td>{item.ticketno}</td>
         
        </tr>
    })}
    </tbody>
    </table>
    </div>
   


        <ReactBootStrap.Button variant="Orange"  size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"black"}}  href="/cancel"><h2>Next</h2></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
    </div>
    )
  }