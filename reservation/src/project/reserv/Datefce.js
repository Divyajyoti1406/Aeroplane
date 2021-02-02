import React, { useState } from 'react'  
import DatePicker from "react-datepicker";  
import * as ReactBootStrap from "react-bootstrap"; 
import "react-datepicker/dist/react-datepicker.css";  
function Datefce() {  
    const [bookingType, setBookingType] = React.useState('round');
    const selectType =React.useMemo(() => bookingType === 'oneway' ? 'date' : 'range', [bookingType]);
    const bookingTypeChange = (ev) => {
        setBookingType(ev.target.value);
    };  
        return (  
                <div className="container">  
                        
  
                </div>  
        )  
}  
  
export default Datefce;