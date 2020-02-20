import React, { Component } from 'react';
import {Form, Row, Col, FormGroup, Button, InputGroup, Input, InputGroupAddon, InputGroupText, Alert} from 'reactstrap';
import NavBar from "../NavBar/NavBar";
import vehicle from '../../../assets/images/vehicle.png';
class vehicleStatus extends Component {

    constructor() {
        super();
        this.state = {
            checkStatus:"",
            errors: {checkError:""}
        }
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
        if ((this.state.checkStatus.length) === 0) {
            isError = true;
            tempError.checkError = "Tracking id should not be empty";
        } else {
            tempError.checkError = "";
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
            this.props.history.push('/vehicleTrack');
        }
        else{
            // document.getElementById("Warning").style.visibility = "visible";
        }
    }

    render() {
        const style = {
            marginLeft: '2%'
        };
        return (
            <div className="">
                <NavBar></NavBar>
                <div className="mainDiv">
                  <div>
                       <h1 style={{textAlign:"center"}}>Add More Life To Your Vehicle</h1>
                   </div>
                    <div className="dashboard shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                            <Form  noValidate>
                                <Row>
                                    <Col lg={6}>
                                        <InputGroup style={{marginTop: '30%', marginLeft:'5%'}}>
                                            <Input type="text" className="statusVehicle" id="checkStatus" placeholder="Enter Tracking Id" name="checkStatus" value={this.state.checkStatus} onChange={this.handleChange} required></Input>
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText style={{backgroundImage: 'linear-gradient(to bottom, #f1b10f  25%, #f1d70f 80%)'}}><Button className="trackVehicle" onClick={this.handleSubmit}>CHECK STATUS</Button></InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <span style={{ color: "red" ,fontSize:"0.8em",marginLeft:'5%'}}>{this.state.errors.checkError}</span>
                                        <FormGroup>
                                            <label className="dash_Lable">OR</label><br/>
                                            <label className="call_lable">Call Us On 123456789</label>
                                        </FormGroup>
                                        <FormGroup>
                                            {/*<Alert color="danger" id="Warning" className="warning" style={{ visibility: 'hidden',marginLeft: '6%', width: '100%',height: '100%'}}>*/}
                                                {/*Tracking Id should not be empty*/}
                                            {/*</Alert>*/}
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <img src={vehicle} alt="vehicle" height="100%" width="100%" style={style}></img>
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

export default vehicleStatus;