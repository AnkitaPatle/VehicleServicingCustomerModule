import React, { Component } from 'react';
import { Alert, Form, Row, Col, FormGroup, Button } from 'reactstrap';
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import '../Login/Login.css';
import NavBar from "../NavBar/NavBar";
import vehicle from '../../../assets/images/vehicle.png';
import { register } from "../../../store/actions/register.action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Register extends Component {
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
            errors: {
                nameError: "",
                addressError: "",
                cityError: "",
                emailIdError: "",
                phoneNumberError: "",
                passwordError: "",
                confirmPasswordError: ""
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
        else if (isNaN(this.state.phoneNumber)) {
            isError = true;
            tempError.phoneNumberError = "Phone Number should be numeric";
        }
        else if ((this.state.phoneNumber.length) < 10) {
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

        const err = this.validate();
        if (!err) {
            const data = {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                contact_number: this.state.phoneNumber,
                email: this.state.emailId,
                password: this.state.password,
            }; 
            this.props.register(data);           
        }
    }
    componentWillReceiveProps = nextProps => {
        console.log("nextProps :", nextProps.registerResp.registerdata.status);
        if(nextProps.registerResp.registerdata.status===200){
          console.log("Register Successful");
          this.props.history.push('/Otp/'+nextProps.registerResp.registerdata.data.data);
        }
          else if(nextProps.registerResp.registerdata.status===500){
              document.getElementById("Warning").style.visibility = "visible";
          }
          else if(nextProps.registerResp.registerdata.status===409){
            document.getElementById("Warning").textContent = "User already exist";
            document.getElementById("Warning").style.visibility = "visible";
        }
          else{
              document.getElementById("Warning").textContent = "Bad request";
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

                <div className="mainDivRegister">
                    <div>
                        <h1 style={{textAlign:"center"}}>Register</h1>
                    </div>
                    <div className="register shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                            <Form onSubmit={this.handleSubmit} noValidate>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <label className="registerLable" htmlFor="name">Name</label>
                                            <input className="registerText" type="text" id="name"  name="name" value={this.state.name} onChange={this.handleChange} required></input>
                                            {/* <span style={{ color: "red" }}>{this.state.errors.nameError}</span> */}
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="registerLable" htmlFor="city">City</label>
                                            <input className="registerText" type="text" id="city"  name="city" value={this.state.city} onChange={this.handleChange} required></input>
                                            {/* <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.cityError}</span> */}
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="registerLable" htmlFor="emailId">Email Id</label>
                                            <input className="registerText" type="text" id="emailId"  name="emailId" value={this.state.emailId} onChange={this.handleChange} required></input>
                                            <span style={{ marginLeft: '45px', color: "red",fontSize:"0.8em" }}>{this.state.errors.emailIdError}</span>
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="registerLable" htmlFor="confirmPassword">Confirm Password</label>
                                            <input className="registerText" type="password" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required></input>
                                            <span style={{ marginLeft: '45px', color: "red" ,fontSize:"0.8em"}}>{this.state.errors.confirmPasswordError}</span>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Button className="registerButton">Register</Button>
                                        </FormGroup>

                                        <FormGroup>
                                            <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '10%', width: '400px',height: '60px'}}>Error Registration new user please try again letter</Alert>
                                        </FormGroup>

                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <label className="registerLableTwo" htmlFor="address">Address</label>
                                            <input className="registerTextTwo" type="text" id="address"  name="address" value={this.state.address} onChange={this.handleChange} required></input>
                                            <span style={{ color: "red" ,fontSize:"0.8em"}}>{this.state.errors.addressError}</span>
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="registerLableTwo" htmlFor="phoneNumber">Phone Number</label>
                                            <input className="registerTextTwo" type="text" id="phoneNumber"  name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required></input>
                                            <span style={{ color: "red",fontSize:"0.8em" }}>{this.state.errors.phoneNumberError}</span>
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="registerLableTwo" htmlFor="password">Password</label>
                                            <input className="registerTextTwo" type="password" id="password"  name="password" value={this.state.password} onChange={this.handleChange} required></input>
                                            <span style={{ color: "red" ,fontSize:"0.8em"}}>{this.state.errors.passwordError}</span>
                                        </FormGroup>
                                        <FormGroup>
                                            <img src={vehicle} alt="vehicle" height="50%" width="70%" style={style1}></img>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        register: register
      },
      dispatch
    );
  }
  
  function mapStateToProps({ register }) {
    return { registerResp: register };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));