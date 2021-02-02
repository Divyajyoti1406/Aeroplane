import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table1 extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    Delete= () =>{  
     axios.delete('https://localhost:44322/api/ReservationDetail/Delete/?id='+this.props.obj.ticketno)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Ticket Cancelled !!!');  
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
        
          
          {/* <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>   */}
          <td>  
            <button type="button" onClick={this.Delete} className="btn btn-danger">Cancel</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table1;  