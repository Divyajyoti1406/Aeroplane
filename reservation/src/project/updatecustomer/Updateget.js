import React, { Component } from 'react';  
import axios from 'axios';  
import Update from './Update';  
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44322/api/UpdateCustomer')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Update obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div> 
            <h2 className="text-left font-weight-bold" style={{color:"orange"}}>Customer Detail </h2>
          <div className="table-responsive bordercolor-pink p-4 bg-light rounded" style={{border:"3px solid black"}} >
          <table className="table table-hover" style={{border:"3px solid pink"}}>
  
    
         <thead className="table-borderless table-warning">
              <tr>  
                <th>username</th>  
                <th>emailid</th>  
                <th>mobileno</th> 
             
                <th>password</th>  
                <th>confirm_password</th>  
                <th>gender</th>  
                <th>city</th>  
                <th>nationality</th>  
            
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
        </div>
      );  
    }  
  }  