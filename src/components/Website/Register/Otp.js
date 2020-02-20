import React, { Component } from 'react';
import { Alert, Form, Row, Col, FormGroup, Button } from 'reactstrap';
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import '../Login/Login.css';
import OtpInput from 'react-otp-input';
import NavBar from "../NavBar/NavBar";
import { otp } from "../../../store/actions/register.action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Otp extends Component {
    constructor() {
        super();
        this.state = {
            otp: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange= otp => {
        this.setState({ otp });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const data = {
            OTP: parseInt(this.state.otp),
            id: this.props.match.params.data
        };
        this.props.otp(data);    
    }

    componentWillReceiveProps = nextProps => {
        console.log("nextProps :", nextProps.otpResp.otpdata.status);
        if(nextProps.otpResp.otpdata.status===200){
          alert("User Verified successfully.")
          this.props.history.push('/loginIn');
        }
          else if(nextProps.otpResp.otpdata.status===401){
              document.getElementById("Warning").style.visibility = "visible";
          }
          else if(nextProps.otpResp.otpdata.status===500){
              document.getElementById("Warning").value="Bad request";
              document.getElementById("Warning").style.visibility = "visible";
          }
          else{
               document.getElementById("Warning").style.visibility = "visible";
          }
      };

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="otp shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 style={{ textAlign: "center", marginTop: "2%" }}>Please Continue OTP mailed at your email address.</h3>
                    <div>
                        <Form onSubmit={this.handleSubmit} noValidate inline>
                            <Row style={{marginLeft:'20%', marginTop:'2%'}}>
                                <Col lg={12}>
                                            <FormGroup >
                                                <OtpInput numInputs={4} separator={<span>-</span>} inputStyle={{width: '4rem',height: '4rem', margin: '0 1rem',fontSize: '2rem',borderRadius: 4, border: '1px solid rgba(0,0,0,0.3)'}} autoFocus id="otp"  name="otp" value={this.state.otp} onChange={this.handleChange}></OtpInput>
                                            </FormGroup>
            
                                            <FormGroup>
                                                <Button  className="mx-2 mt-4 otpButton">Verify</Button>
                                            </FormGroup>
                                            <FormGroup>
                                            <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '6%', width: '360px',height: '60px'}}>Incorrect OTP please try again letter</Alert>
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
        otp: otp
      },
      dispatch
    );
  }
  
  function mapStateToProps({ register }) {
    return { otpResp: register };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Otp));