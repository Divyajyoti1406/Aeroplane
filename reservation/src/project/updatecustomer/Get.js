import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios' ;
import './Get.css'; 
//import '../Student/Addstudent.css'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeusername = this.onChangeusername.bind(this);  
    this.onChangeemailid = this.onChangeemailid.bind(this);  
    this.onChangemobileno = this.onChangemobileno.bind(this); 
    this.onChangepassword = this.onChangepassword.bind(this);  
    this.onChangeconfirm_password = this.onChangeconfirm_password.bind(this); 
    this.onChangegender = this.onChangegender.bind(this); 
    this.onChangecity = this.onChangecity.bind(this); 
    this.onChangenationality = this.onChangenationality.bind(this); 
    
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            username:'',
            emailid:'',
            mobileno:'',
         
            password:'',
        confirm_password:'',
            gender:'',
            city:'',
            nationality:''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('https://localhost:44322/api/UpdateCustomer/StudentdetailById?id='+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                username: response.data.username,   
                emailid: response.data.emailid,  
                mobileno: response.data.mobileno,  
              
                password: response.data.password,   
                confirm_password: response.data.confirm_password,  
                gender: response.data.gender,  
                city: response.data.city,
                nationality:response.data.nationality
            
            
            
            });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeusername(e) {  
    this.setState({  
        username: e.target.value  
    });  
  }  
  onChangeemailid(e) {  
    this.setState({  
        emailid: e.target.value  
    });    
  }  
  onChangemobileno(e) {  
    this.setState({  
        mobileno: e.target.value  
    });  
}  
     
  onChangepassword(e) {  
    this.setState({  
        password: e.target.value  
    });  
}  

onChangeconfirm_password(e) {  
    this.setState({  
        confirm_password: e.target.value  
    });  
}  

onChangegender(e) {  
    this.setState({  
        gender: e.target.value  
    });  
}  

onChangecity(e) {  
    this.setState({  
        city: e.target.value  
    });  
}  
onChangenationality(e) {  
    this.setState({  
        nationality: e.target.value  
    });  
}  






  
  onSubmit(e) {  
    debugger;  
 
    e.preventDefault(); 
  
    const obj = {  
        Cid:this.props.match.params.id,  
      username: this.state.username,  
      emailid: this.state.emailid,  
      mobileno: this.state.mobileno,  
      password: this.state.password,
      confirm_password: this.state.confirm_password,  
      gender: this.state.gender,  
      city: this.state.city,  
      nationality: this.state.nationality,
      
      

  
    }; 
   
    axios.post('https://localhost:44322/api/UpdateCustomer', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        alert("Updated Succesfully");
        this.props.history.push('/customer')  
  } 
   
    render() {  
        return (  
       

            
            <Container className="Divya"  style={{width:"700px",height:"600px",paddingBottom:"20px",border:"2px solid black"}}>  
  
             <h4 className="PageHeading">Update Customer Profile</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="username" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="username" value={this.state.username} onChange={this.onChangeusername}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup> 
 
                        <FormGroup row>  
                            <Label for="emailid" sm={2}>emailid</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="emailid" value={this.state.emailid} onChange={this.onChangeemailid}  
                                placeholder="Enter Mailid" />  
                            </Col>  
                        </FormGroup> 

                        <FormGroup row>  
                            <Label for="mobileno" sm={2}>Mobileno</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="mobileno" value={this.state.mobileno} onChange={this.onChangemobileno}  
                                placeholder="Enter mobileno" />  
                            </Col>  
                        </FormGroup> 

                        <FormGroup row>  
                            <Label for="password" sm={2}>password</Label>  
                            <Col sm={10}>  
                                <Input type="password" name="password" value={this.state.password} onChange={this.onChangepassword} placeholder="Enter " />  
                            </Col>  
                        </FormGroup>  
 
                        <FormGroup row>  
                            <Label for="confirm_password" sm={2}>Confirm_password</Label>  
                            <Col sm={10}>  
                                <Input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.onChangeconfirm_password} placeholder="Enter " />  
                            </Col>  
                        </FormGroup>  



                         <FormGroup row>  
                            <Label for="gender" sm={2}>gender</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="gender" value={this.state.gender} onChange={this.onChangegender}  />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="city" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Address"value={this.state.city} onChange={this.onChangecity} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   



                        <FormGroup row>  
                            <Label for="nationality" sm={2}>nation</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="nationality"value={this.state.nationality} onChange={this.onChangenationality} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success" style={{width:"100px"}}>Submit</Button>{' '}  
                            </Col>  
                            
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
          
        );  
    }  
  
}  
  
export default Edit;