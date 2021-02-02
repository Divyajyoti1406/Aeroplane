import React from 'react';  
import axios from 'axios';  
//import './Addflight.css';  
import {useState,props,useEffect} from 'react';
//import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Addflight(){
  
  const initialFieldsValues={
Cid:'',  
DepartureDate:'', 
From:'',
To:'',
// ticketno:'',
}  

var[values,setValues]=useState(initialFieldsValues)  
const handleinputChange=(e)=>{
  var{name,value}=e.target
  setValues({
    ...values,
    [name]:value
  })
}
const add=e=>{
  e.preventDefault();
  mydata(values);
}

const mydata=obj=>{

axios.post('https://localhost:44380/api/BookingDetail', {Cid:values.Cid,  
  DepartureDate:values.DepartureDate,  From:values.From,
  To:values.To
})  
.then(JSON => {  
if(JSON.data.Status==='Created')
{  
  console.log(JSON.data.Status);  
  alert("Data Save Successfully");  
  
}  
else{  
alert('Data not Saved');  
 
  
}  
})  
}  



   
// handleChange= (e)=> {  
// this.setState({[e.target.name]:e.target.value});  
// }  
  
return (  
 <div id="Addflight">
 <h1>Add Flight</h1> 
    <form name="validform">  

     <div>
      <label for ="Cid">Cid</label>  
      <input type="text" className="form-control" name="Cid" value={values.Cid}
      onChange={handleinputChange}/>
      </div>
      <div>
      <label for ="date">departuredate</label>  
      <input type="date" className="form-control" name="DepartureDate" value={values.DepartureDate}
      onChange={handleinputChange}/>
      </div>
  
      <div>
      <label for ="from">From</label>  
      <input type="text" className="form-control" name="From" value={values.From}
      onChange={handleinputChange}/>
      </div>

      <div>
      <label for ="to">To</label>  
      <input type="text" className="form-control" name="To" value={values.To}
      onChange={handleinputChange}/>
      </div>

     
      {/* <div>
      <label for ="number">ticketno</label>  
      <input type="text" className="form-control" name="ticketno" value={values.ticketno}
      onChange={handleinputChange}/>
      </div>
       */}
     

     


<button type="submit" onClick={add} style={{marginTop:"20px"}} class="btn btn-dark">Submit</button>

</form>
</div>
)
}