import axios from 'axios';
import React from 'react';
//import './StudentList.css';
import {useState,props, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";


export default function StudentList() {
    const[data, setData]=useState([]);

    useEffect(()=>{
        axios.get("https://localhost:44322/api/RegisterPost")
        .then(result=>setData(result.data));
        console.log(data);
    },[]);
    
   
 
  
    return (
        <div>
        
            <h2 className="text-left font-weight-bold" style={{color:"orange"}}>Passenger Detail </h2>
          <div className="table-responsive bordercolor-pink p-4 bg-light rounded" style={{border:"3px solid black"}} >
        
    
            <table className="table table-hover" style={{border:"3px solid pink"}}>
  <thead className="table-borderless table-warning">
    <tr>
      <th scope="col">username</th>
      <th scope="col">emailid</th>
      <th scope="col">mobile</th>
      <th scope="col">Cid</th>
      <th scope="col">Password</th>
      <th scope="col">Confirm_password</th>
      <th scope="col">Gender</th>
      <th scope="col">City</th>
      <th scope="col">Nationality</th>
  
    </tr>
  </thead>s
  <tbody>
    {data.map(item=>{
        return <tr key={item.Cid}>
            <td>{item.username}</td>
            <td>{item.emailid}</td>
            <td>{item.mobileno}</td>
            <td>{item.Cid}</td>
            <td>{item.password}</td>
            <td>{item.confirm_password}</td>
            <td>{item.gender}</td>
            <td>{item.city}</td>
            <td>{item.nationality}</td>
          
        </tr>
    })}
    </tbody>
    </table>
    <ReactBootStrap.Button variant="dark" size="lg" active>
    <ReactBootStrap.Nav.Link   style={{color:"Orange",flaot:"right"}}  href="/cancel"><h4>Next</h4></ReactBootStrap.Nav.Link>
  
  </ReactBootStrap.Button>
    </div>
    </div>
    )
  }