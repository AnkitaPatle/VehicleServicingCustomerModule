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
import axios from "axios";
import { API_URL } from "../../../../config";

import { adminManageUser } from "../../../../store/actions/register.action";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
class ManageUser extends React.Component{
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
        },
        responseData : ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
}
handleChange(e) {
    debugger;
  let target = e.target;
  let value = target.value;
  let name = target.name;

  this.setState({
      [name]: value
  });
}
handleSearch(e){
 let value = e.target.value;
    if(value.length === 10 ){
        console.log("fskdfgkajsfgkjasf");
         this.fetchSearchResult(value);
         console.log("fskdfgkajsfgkjasf");
    }
    
}
fetchSearchResult(data){
    const that = this;
    axios({
       method: "get",
       url: API_URL + "/admin/api/searchUser?contact_number=" + data,
       config: {
         headers: {
           "content-type": "application/json"
         }
       }
     })
    .then(function (response) { 
    
      if(response.status === 200){
          
          that.setState({ responseData: response.data.data[0] });
          that.state.name = that.state.responseData.name;
          that.state.address = that.state.responseData.address;
          that.state.phoneNumber = that.state.responseData.contact_number;
          that.state.confirmPassword = that.state.responseData.password;
          that.state.city = that.state.responseData.city;
          that.state.emailId = that.state.responseData.email;
          that.state.password = that.state.responseData.password;
          that.state.role = that.state.responseData.role;
        
     
      }else if(response.status === 404){
        that.state.name = "";
        that.state.address = "";
        that.state.phoneNumber = "";
        that.state.confirmPassword = "";
        that.state.city = "";
        that.state.emailId ="";
        that.state.password = "";
        alert("Please try again later.");
   }
    })
    .catch(function (error) {
      console.log(error);
    });
}

validate = () => {
  let isError = false;
  let tempError = this.state.errors;
  if ((this.state.phoneNumber.length) === 0) {
      isError = true;
      tempError.phoneNumberError = "";
  }
  if ((this.state.phoneNumber.length) < 10) {
      isError = true;
      tempError.phoneNumberError = "";
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
      tempError.passwordError = "";
  } else {
      tempError.passwordError = "";
  }
  if ((this.state.password) !== (this.state.confirmPassword)) {
      isError = true;
      tempError.confirmPasswordError = "";
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
          role: this.state.role,
      }; 
      this.props.register(data);           
  }
}
componentWillReceiveProps = nextProps => {
  console.log("nextProps :", nextProps.registerResp.registerdata.status);
  if(nextProps.registerResp.registerdata.status===200){
 alert("User updated.");
   
  }
    else if(nextProps.registerResp.registerdata.status===500){
        document.getElementById("Warning").style.visibility = "visible";
    }
    else{
        document.getElementById("Warning").value = "Bad request";
        document.getElementById("Warning").style.visibility = "visible";
    }
};

render() {
  const style1 = {
      marginLeft: '5%'
  };
  return (
      <div>
             <NavBar></NavBar>
	<SideBar />
          <div className="manageDiv">
                    <h3>Manage Users</h3>
                    <FormGroup >  
                               <label className="searchLable" htmlFor="search">Search</label>
                                <input className="searchTextStyle" type="text" id="search" placeholder="Enter Phone Number" name="contact_number" value={this.state.search} onChange={this.handleSearch} required></input>
                                <i class="fa fa-search search-icon" aria-hidden="true"></i> 
 </FormGroup> 
             </div>
              <div className="gridwrapper">
                  <div>
                     <Form onSubmit={this.handleSubmit} noValidate>
                          <Row>
                              <Col lg={6}>
                            

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
                                      <Button className="registerButton">Update</Button>
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
                                      <input disabled className="registerTextTwo" type="text" id="phoneNumber" placeholder="Enter Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.phoneNumberError}</span>
                                  </FormGroup>
                                  <FormGroup>
                                      <label className="registerLableTwo" htmlFor="role">Role</label>
                                      <input disabled className="registerTextTwo" type="text" id="role"  name="role" value={this.state.role} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.roleError}</span>
                                  </FormGroup>
                                  <FormGroup>
                                      <label className="registerLableTwo" htmlFor="password">Password</label>
                                      <input className="registerTextTwo" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                                      <span style={{ color: "red" }}>{this.state.errors.passwordError}</span>
                                  </FormGroup>
                                  <FormGroup>
                                      <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '10%', width: '360px',height: '60px'}}>Error Update user please try again letter</Alert>
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
  register: adminManageUser
},
dispatch
);
}

function mapStateToProps({ register }) {
return { registerResp: register };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUser));
