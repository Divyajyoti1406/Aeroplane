import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{  
     axios.delete('https://localhost:44380/api/BookingDetail/Delete?id='+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
           <td>  
            {this.props.obj.Cid}  
          </td>   
          <td>  
            {this.props.obj.DepartureDate}  
          </td>  
          <td>  
            {this.props.obj.From}  
          </td>  
          <td>  
            {this.props.obj.To}  
          </td> 
          <td>  
            {this.props.obj.ticketno}  
          </td> 
           
          {/* <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>   */}
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  