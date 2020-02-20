import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import SupervisorNavbarComponent from '../supervisor-navbar';
import SupervisorSidebarComponent from '../supervisor-sidebar';
import "./Styled.css";
import { connect } from "react-redux";
import * as action from './serviceAction';
import dashboardReducer from './serviceReducer';

class Service extends Component {
  state = {
    customer_contact: '',
    vehicleCategory: '',
    vehical_name: '',
    vehical_model: '',
    vehical_brand: '',
    vehical_registration_number: '',
    complain: '',
    delivery_type: 'PickUp',
    date: '',
    time: '',
    // errors: {
    //   categoryError: "",
    //   nameError:"",
    //   modelError:"",
    //   brandError:"",
    //   regiNumError:"",
    //   dateError:"",
    //   timeError:""
    // },
    phoneErrMsg: ''
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(action.getVehicleCategory());
  }

  findUser = () => {
    const enteredNumber = this.state.customer_contact;
    if (!enteredNumber) {
      this.setState({
        phoneErrMsg: "Please enter phone number"
      })
    }
    else if (!(/^\d{10}$/.test(enteredNumber))) {
      this.setState({
        phoneErrMsg: "Phone number must have 10 digits"
      })
    }
    else {
      const { dispatch } = this.props;
      dispatch(action.searchCustomers(enteredNumber));
      this.setState({
        phoneErrMsg: "searched user not found"
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  focusElement = () => {
    this.setState({
      phoneErrMsg: ""
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const vehicalServiceDetails = {
      customer_contact: Number(this.state.customer_contact),
      category: this.state.vehicleCategory,
      vehical_name: this.state.vehical_name,
      vehical_model: this.state.vehical_model,
      vehical_brand: this.state.vehical_brand,
      vehical_registration_number: this.state.vehical_registration_number,
      complain: this.state.complain,
      delivery_type: this.state.delivery_type,
      startDate: `${this.state.date} ${this.state.time}`
    };
    console.log("vehicalServiceDetails=======", vehicalServiceDetails)
    const { dispatch } = this.props;
    dispatch(action.vehicleServiceRequest(vehicalServiceDetails));
  }

  // validation = () => {
  //   let isError = false;
  //   let tempError = this.state.errors;

  //   if ((this.state.vehicleCategory) == '') {
  //     isError = true;
  //     tempError.categoryError = "Please Select the vehicle category";
  //   }
  //   else {
  //     tempError.categoryError = "";
  //   }
  //   if ((this.state.vehical_name) == '') {
  //     isError = true;
  //     tempError.nameError = "Please enter the vehicle name";
  //   }
  //   else {
  //     tempError.nameError = "";
  //   }
  //   if ((this.state.vehical_model) == '') {
  //     isError = true;
  //     tempError.modelError = "Please enter the vehicle model";
  //   }
  //   else {
  //     tempError.modelError = "";
  //   }
  //   if ((this.state.vehical_brand) == '') {
  //     isError = true;
  //     tempError.brandError = "Please enter the vehicle brand";
  //   }
  //   else {
  //     tempError.brandError = "";
  //   }

  //   if (isError) {
  //     this.setState({
  //       errors: tempError
  //     });
  //   }
  //   return isError;
  // }

  render() {
    const searchCustomersRes = this.props.searchCustomers
    const getVehicleCategory = this.props.getVehicleCategory
    console.log("searchCustomersRes====",searchCustomersRes)
    const {customer_contact, vehicleCategory, vehical_name, vehical_model, vehical_brand, vehical_registration_number, date, time} = this.state;
    return (
      <div className="bodycolor">
				<SupervisorNavbarComponent />
				<SupervisorSidebarComponent />
        <div className="gridwrapper">
          <Row>
            <Col md="6">
              <h2>Service Request</h2>
              <InputGroup className="search-bar">
                <Input type="number" name="customer_contact" id="customer_contact" placeholder="Enter Phone Number" onChange={this.handleChange.bind(this)} onFocus={this.focusElement.bind(this)} />
                <InputGroupAddon addonType="append">
                  <InputGroupText onClick={this.findUser.bind(this)}>Search</InputGroupText>
                </InputGroupAddon>
                <span className="error">{ !searchCustomersRes.data ? this.state.phoneErrMsg : '' }</span>
              </InputGroup>
            </Col>
          </Row>
          <Form className="service-form">
            <Row>
							<Col md="6">
                <FormGroup>
                  <Label for="vehicleCategory">Category:</Label>
                  <Input type="select" name="vehicleCategory" id="vehicleCategory" onChange={this.handleChange.bind(this)}>
                    <option value="">Select</option>
                    {getVehicleCategory && getVehicleCategory.map((items,key) =>(
                      <option value={items._id}>{items.vehicleCategory}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="vehical_name">Vehicle Name:</Label>
                  <Input type="text" name="vehical_name" id="vehical_name" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
							<Col md="6">
              <FormGroup>
                  <Label for="vehical_model">Vehicle Model:</Label>
                  <Input type="text" name="vehical_model" id="vehical_model" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="vehical_brand">Vehicle Brand:</Label>
                  <Input type="text" name="vehical_brand" id="vehical_brand" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
							<Col md="6">
                <FormGroup>
                  <Label for="vehical_registration_number">Vehicler Registration Number:</Label>
                  <Input type="text" name="vehical_registration_number" id="vehical_registration_number" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">    
                <FormGroup>
                  <Label for="complain">Complaint:</Label>
                  <Input type="textarea" name="complain" id="complain" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">  
                <FormGroup >
                  <FormGroup check inline>
                    <Label check>
                      <Input type="radio" className="form-check-input" id="PickUp" name="delivery_type" value="PickUp" onChange={this.handleChange.bind(this)} defaultChecked />
                      PickUp
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type="radio" className="form-check-input" id="walkin" name="delivery_type" value="Walk-In" onChange={this.handleChange.bind(this)} />
                      Walk-In
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
							<Col md="6">
                <FormGroup>
                  <Label for="date">Date:</Label>
                  <Input type="date" name="date" id="date" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="time">Time:</Label>
                  <Input type="time" name="time" id="time" onChange={this.handleChange.bind(this)} />
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Button color="warning" onClick={this.handleSubmit.bind(this)} disabled={!searchCustomersRes.data || !customer_contact || !vehicleCategory || !vehical_name || !vehical_model || !vehical_brand || !vehical_registration_number || !date || !time}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    searchCustomers: state.supervisorService.searchCustomers || '',
    getVehicleCategory: state.supervisorService.getVehicleCategory || ''
  };
};


export default connect(mapStateToProps)(Service);