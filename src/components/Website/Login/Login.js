import React, { Component } from 'react';
import { Alert, Form, Row, Col, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import NavBar from "../NavBar/NavBar";
import vehicle from '../../../assets/images/vehicle.png';
import Recaptcha from 'react-recaptcha';
import { login } from "../../../store/actions/login.actions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            phoneNumber: '',
            password: '',
            isVerified: false,
            errors: {
                phoneNumberError: "",
                passwordError: ""
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
        }else if (isNaN(this.state.phoneNumber)) {
            isError = true;
            tempError.phoneNumberError = "Phone Number should be numeric";
        }
        else if ((this.state.phoneNumber.length) < 10) {
            isError = true;
            tempError.phoneNumberError = "Phone Number length should be 10";
        } 
        else {
            tempError.phoneNumberError = "";
        }
        if ((this.state.password.length) === 0) {
            isError = true;
            tempError.passwordError = "Password should not be empty";
        } else {
            tempError.passwordError = "";
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
            var data = {
                phone: parseInt(this.state.phoneNumber),
                password: this.state.password
            };
            this.props.login(data);
        }
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.loginresp.logindata.status===200){
          console.log("Login Successful");
          localStorage.setItem('userId', "");
          localStorage.setItem('role', "");
          localStorage.setItem('name', "");
          localStorage.setItem('userId',nextProps.loginresp.logindata.data.id);
          localStorage.setItem('role',nextProps.loginresp.logindata.data.role);
          localStorage.setItem('name',nextProps.loginresp.logindata.data.name);
          if(nextProps.loginresp.logindata.data.role==='customer'){
            this.props.history.push('/customer');
          }
          else if(nextProps.loginresp.logindata.data.role === 'manager'){
            this.props.history.push('/manager');
          }
          else if(nextProps.loginresp.logindata.data.role === 'supervisor'){
            this.props.history.push('/supervisor');
          }
          else if(nextProps.loginresp.logindata.data.role === 'm_engineer'){
            this.props.history.push('/maintanance');
          }
        }
        else if(nextProps.loginresp.logindata.status===401){
          document.getElementById("Warning").style.visibility = "visible";
        }
        else if(nextProps.loginresp.logindata.status===501){
            document.getElementById("Warning").textContent = "Internal Server Error";
            document.getElementById("Warning").style.visibility = "visible";
        }
        else{
            // document.getElementById("Warning").textContent  = "Bad request";
            document.getElementById("Warning").style.visibility = "visible";
        }
   };

    recaptchaLoaded() {
        console.log("^^^^^");

    }
    verifyCallback = function (response) {
        console.log(response);
    };

    render() {
        const style1 = {
            marginTop: '1%',
        };

        return (
            <div>
                <NavBar></NavBar>
                <div className="mainDiv">
                    <div>
                        <h1 style={{textAlign:"center"}}>Login To Your Account</h1>
                    </div>
                    <div className="signIn shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                            <Form className="form" noValidate>
                                <Row>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <label className="signInTop" htmlFor="phoneNumber">Phone Number</label>
                                            <input className="signInText" type="text" id="phoneNumber"  name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required></input>
                                            <span className="error">{this.state.errors.phoneNumberError}</span>
                                        </FormGroup>

                                        <FormGroup>
                                            <label className="signInLable" htmlFor="password">Password</label>
                                            <input className="signInText" type="password" id="password"  name="password" value={this.state.password} onChange={this.handleChange} required></input>
                                            <span  className="error">{this.state.errors.passwordError}</span>
                                        </FormGroup>

                                        <FormGroup>
                                            <Link to="/" className="forget-password">Forgot Password?</Link>
                                        </FormGroup>

                                        <FormGroup>
                                            <div style={{paddingLeft:'5%',maxWidth:'800px !important'}}><Recaptcha
                                                sitekey="6LfQtcIUAAAAALZsbbcrDlhU9qrMjq7DLXVblX4P"
                                                render="explicit"
                                                onloadCallback={this.recaptchaLoaded}
                                                verifyCallback={this.verifyCallback}/>
                                            </div>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Button className="signInButton" onClick={this.handleSubmit}>Login</Button>
                                        </FormGroup>

                                        <FormGroup>
                                            <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '6%', width: '100%',height: '100%'}}>
                                                Please Enter Correct User Name and Password
                                            </Alert>
                                        </FormGroup>
                                    </Col>

                                    <Col sm={6}>
                                        <FormGroup>
                                            <img src={vehicle} alt="vehicle" height="100%" width="100%" style={style1}></img>
                                        </FormGroup>
                                    </Col>

                                    <Col>

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
        login: login
      },
      dispatch
    );
  }
  
  function mapStateToProps({ login }) {
    return { loginresp: login };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));