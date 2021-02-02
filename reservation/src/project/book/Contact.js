import React,{useState,useEffect} from 'react';
import  ContactForm  from  './ContactForm.js';
import   fireDb from  './fireDb.js';

const Contacts = () => {

    var[contactObjects,setContactObjects]=useState({})
    var[currentId,setCurrentId]=useState('')
    
    useEffect(() => {
        
    fireDb.child('contacts').on('value',snapshot => {
          if(snapshot.val()!=null)
          setContactObjects({
              ...snapshot.val()
          })   
          else
          setContactObjects({})  
        })
    }, [])
   
    //Once components load complete
  


    const addOrEdit = obj => {
         if(currentId=='')
            fireDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                    
                })
                else
                fireDb.child(`contacts/${currentId}`).set(
                    obj,
                    err => {
                        if (err)
                            console.log(err)
                        else
                           setCurrentId('')
                    })
            }
  const onDelete =key=>{
      if(window.confirm ('Are you sure to delete this record?'))
      {
        fireDb.child(`contacts/${key}`).remove(
            err => {
                if (err)
                    console.log(err)
                else
                   setCurrentId('')
            })
      }
  }

  return (
        <>
            <div >
                <div className="container">
                    <h1 className=" text-center+
                    9 style={{color:'red'}}">Booking</h1>
                </div>
            </div>
            <div className="row">
                <div className="row-md-7">
                    <ContactForm {...({addOrEdit,currentId,contactObjects})}/>
                </div>
               <div className="col-md-12">
                        <table className="table table-borderless table-striped">
                            <thead className="thead-dark styel={{float:'left'}}">
                                <tr>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                   
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map(id=>{
                                        return <tr key={id}>
                                            <td>{contactObjects[id].fullName}</td>
                                            <td>{contactObjects[id].mobile}</td>
                                            <td>{contactObjects[id].email}</td>
                                            
                                            <td>
                                                <a className="btn text-primary" onClick={()=>{setCurrentId(id)}} href>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn text-danger" onClick={()=>{onDelete(id)}} href>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>

                                    })
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;

