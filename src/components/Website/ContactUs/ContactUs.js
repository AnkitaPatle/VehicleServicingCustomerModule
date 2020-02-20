import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Button , Alert} from 'reactstrap';
import '../Login/Login.css';
import NavBar from "../NavBar/NavBar";
import { contact } from "../../../store/actions/contactUs.action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phoneNumber: '',
            emailId: '',
            message: '',
            errors: {
                phoneNumberError: "",
                emailError: "",
                nameError:"",
                messageError:""
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
            tempError.emailError = "Email should contain @";
        } else {
            tempError.emailError = "";
        }
        if ((this.state.name.length) === 0) {
            isError = true;
            tempError.nameError = "Name should not empty";
        } else {
            tempError.nameError = "";
        }
        if ((this.state.message.length) === 0) {
            isError = true;
            tempError.messageError = "Message should not be empty";
        } else {
            tempError.messageError = "";
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
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            email: this.state.emailId,
            message: this.state.message
        };
        this.props.contact(data);
      }
    }

    componentWillReceiveProps = nextProps => {
        console.log("nextProps :", nextProps);
        if(nextProps.contactResp.contactdata.status===200){
            alert("Message sent successfully.")
            this.props.history.push('/');
        }
        else{
            document.getElementById("Warning").style.visibility = "visible";
        }
   };

    render() {
        return (

            <div>
                <NavBar></NavBar>

                <div className="contactUs">
                    <div>
                        <h1 style={{textAlign:"center"}}>Contact Us</h1>
                    </div>
                    <div className="register shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                            <Form  noValidate>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <label className="registerLable" htmlFor="name">Name</label>
                                            <input className="registerText" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required></input>
                                            <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.nameError}</span>
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="registerLable" htmlFor="phoneNumber">Phone Number</label>
                                            <input className="registerText" type="text" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required></input>
                                            <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.phoneNumberError}</span>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <label className="registerLableTwo" htmlFor="emailId">Email</label>
                                            <input className="registerTextTwo" type="emailId" id="emailId" name="emailId" value={this.state.emailId} onChange={this.handleChange} required></input>
                                            <span style={{color: "red" }}>{this.state.errors.emailError}</span>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <label className="msgLable" htmlFor="message">Message</label>
                                            <textarea className="msgText" type="text" id="message" name="message" value={this.state.message} onChange={this.handleChange} required></textarea>
                                            <span style={{ marginLeft: '45px', color: "red" }}>{this.state.errors.messageError}</span>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <Button className="msgButton" onClick={this.handleSubmit}>Send Message</Button>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={12}>
                                       <FormGroup>
                                            <Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden', width: '100%',height: '100%'}}>
                                                Internal server error try again letter.
                                            </Alert>
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
        contact: contact
      },
      dispatch
    );
  }
  
  function mapStateToProps({ contact }) {
    return { contactResp: contact };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactUs));