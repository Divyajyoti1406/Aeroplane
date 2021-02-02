import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Update extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{  
     axios.delete('?id='+this.props.obj.Cid)  
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
            {this.props.obj.username}  
          </td>  
          <td>  
            {this.props.obj.emailid}  
          </td>  
          <td>  
            {this.props.obj.mobileno}  
          </td> 
         

          <td>  
            {this.props.obj.password}  
          </td>  
          <td>  
            {this.props.obj.confirm_password}  
          </td>  
          <td>  
            {this.props.obj.gender}  
          </td>  
          <td>  
            {this.props.obj.city}  
          </td>  
          <td>  
            {this.props.obj.nationality}  
          </td> 





          <td>  
          <Link to={"/edit/:id"+this.props.obj.Cid} className="btn btn-success">Update</Link>  
          </td>  
            
        </tr>  
    );  
  }  
}  
  
export default Update; 