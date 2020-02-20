import React from 'react'
import {Container,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {
  Alert, Form, Row, Button ,
    Col,
    FormControl,
    FormGroup,
    Label,
    Input,

    FormFeedback
  } from "reactstrap";

import SideBar from '../../sidebar/SideBar';
import NavBar from "../../navbar/NavBar";

import { adminRegister } from "../../../../store/actions/register.action";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
class AddUser extends React.Component{
  constructor() {
    super();
    this.state = {
        name: '',
        address: '',
        city: '',
        phoneNumber: '',
        emailId: '',
        password: '',
        confirmPassword: '',
        role: '',
        errors: {
            nameError: "",
            addressError: "",
            cityError: "",
            emailIdError: "",
            phoneNumberError: "",
            passwordError: "",
            confirmPasswordError: "",
            roleError:""
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  let target = e.target;
  let value = target.value;
  let name = target.name;

  this.setState({
      [name]: value
  });
}

validate = () => {
  let isError = false;
  let tempError = this.state.errors;
  if ((this.state.phoneNumber.length) === 0) {
      isError = true;
      tempError.phoneNumberError = "Phone Number should not be empty";
  }
  if ((this.state.phoneNumber.length) < 10) {
      isError = true;
      tempError.phoneNumberError = "Phone Number length should be 10";
  } else {
      tempError.phoneNumberError = "";
  }
  if (!(this.state.emailId).includes('@')) {
      isError = true;
      tempError.emailIdError = "Email should contain @";
  } else {
      tempError.emailIdError = "";
  }
  if ((this.state.city.length) === 0) {
      isError = true;
      tempError.cityError = "City should not empty";
  } else {
      tempError.cityError = "";
  }
  if ((this.state.password.length) === 0) {
      isError = true;
      tempError.passwordError = "Password should not be empty";
  } else {
      tempError.passwordError = "";
  }
  if ((this.state.password) !== (this.state.confirmPassword)) {
      isError = true;
      tempError.confirmPasswordError = "Password and Confirm password not match";
  } else {
      tempError.confirmPasswordError = "";
  }
 
  if (isError) {
      this.setState({
          errors: tempError
      });
  }
  return isError;
}
handleSubmit(e) {
  e.preventDefault();
  debugger;
  const err = this.validate();
  if (!err) {
      const data = {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          contact_number: this.state.phoneNumber,
          email: this.state.emailId,
          password: this.state.password,
          role:this.state.role,
      }; 
      this.props.register(data);           
  }
}
componentWillReceiveProps = nextProps => { debugger;
  console.log("nextProps :", nextProps.registerResp.registerdata.status);
  if(nextProps.registerResp.registerdata.status===200){
   alert("Register Successful");
 this.state.name ="";
    this.state.address = " ";
    this.state.city = "";
   this.state.phoneNumber = "";
  this.state.emailId = "";
  this.state.password ="";
  this.state.confirmPassword ="";
this.state.role ="";
  }
    else if(nextProps.registerResp.registerdata.status===500){
        document.getElementById("Warning").style.visibility = "visible";
    }
    else{
        document.getElementById("Warning").value = "Bad request";
        document.getElementById("Warning").style.visibility = "visible";
    }
};
OnPropertyChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
};

render() {
    const {role} = this.state
  const style1 = {
      marginLeft: '5%'
  };
  return (
      <div>
             <NavBar></NavBar>
	<SideBar />
    <div className="manageDiv">
                    <h3>Add User</h3>
    </div>
             
              <div className="">
                  <div>
                      <Form onSubmit={this.handleSubmit} noValidate className="gridwrapper">
                          <Row>
                              <Col lg={6}>
                               <FormGroup >  
                               <label className="registerLable" htmlFor="name">Category</label>
                               <Input type = "select" className="form-control" id="" value={role} name="role" onChange={this.OnPropertyChange} 
                              >
                                      <option value="">Select</option>
                    <option value="customer">Customer</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="manager">Manager</option>
                    <option value="m_engineer">Maintenance Engineer </option>
                                 </Input>
                             
 </FormGroup> 

                                  <FormGroup>
                                      <label className="registerLable" htmlFor="name">Name</label>
                                      <input className="registerText" type="text" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required></input>
                                      {/* <span style={{ color: "red" }}>{this.state.errors.nameError}</span> */}
                                  </FormGroup>

                                  <FormGroup>
                                      <label className="registerLable" htmlFor="city">City</label>
                                      <input className="registerText" type="text" id="city" placeholder="Enter City" name="city" value={this.state.city} onChange={this.handleChange} required></input>
                                      {/* <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.cityError}</span> */}
                                  </FormGroup>

                                  <FormGroup>
                                      <label className="registerLable" htmlFor="emailId">Email Id</label>
                                      <input className="registerText" type="text" id="emailId" placeholder="Enter Email Id" name="emailId" value={this.state.emailId} onChange={this.handleChange} required></input>
                                      <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.emailIdError}</span>
                                  </FormGroup>

                                  <FormGroup>
                                      <label className="registerLable" htmlFor="confirmPassword">Confirm Password</label>
                                      <input className="registerText" type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} required></input>
                                      <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.confirmPasswordError}</span>
                                  </FormGroup>
                                  
                                  <FormGroup>
                                      <Button className="registerButton">Register</Button>
                                  </FormGroup>


                              </Col>
                              <Col lg={6}>
                                  <FormGroup>
                                      <label className="registerLableTwo" htmlFor="address">Address</label>
                                      <input className="registerTextTwo" type="text" id="address" placeholder="Enter Address" name="address" value={this.state.address} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.addressError}</span>
                                  </FormGroup>

                                  <FormGroup>
                                      <label className="registerLableTwo" htmlFor="phoneNumber">Phone Number</label>
                                      <input className="registerTextTwo" type="text" id="phoneNumber" placeholder="Enter Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.phoneNumberError}</span>
                                  </FormGroup>

                                  <FormGroup>
                                      <label className="registerLableTwo" htmlFor="password">Password</label>
                                      <input className="registerTextTwo" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.passwordError}</span>
                                  </FormGroup>
                                  
                                  
                                  <FormGroup>
                                      <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '10%', width: '360px',height: '60px'}}>Error Add new user please try again letter</Alert>
                                  </FormGroup>
                              </Col>
                          </Row>
                      </Form>
                  </div>
              </div>
            
      </div>
  );
}
}
function mapDispatchToProps(dispatch) {
return bindActionCreators(
{
  register: adminRegister
},
dispatch
);
}

function mapStateToProps({ register }) {
return { registerResp: register };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUser));
