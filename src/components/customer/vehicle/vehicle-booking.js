import React, { Component } from 'react'
import CustomerNavbarComponent from '../customer-navigation/customer-navbar';
import CustomerSidebarComponent from '../customer-navigation/customer-sidebar';
import { Button, Form, FormGroup, Label, Input, Row, Col, FormText } from "reactstrap";
import { connect } from 'react-redux';
import * as actions from './vehicle-booking-action';
import { vehiclebooking, getAllcategory } from './vehicle-booking-action';
import { bindActionCreators } from 'redux';

class VehicleBookingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      phoneNumber: '',
      vehicalModel: '',
      vehicalName: '',
      vehicalRegistrationNumber: '',
      vehicalBrand: '',
      complaint: '',
      serviceRadio: '',
      date: '',
      time: '',
     isRadioCheck: false,
      error: {
        categoryError: '',
        phoneNumberError: '',
        vehicalModelError: '',
        vehicalNameError: '',
        vehicalRegistrationNumberError: '',
        vehicalBrandError: '',
        complaintError: '',
        serviceRadioError: '',
        dateError: '',
        timeError: '',
      }
    }
  }

  onPropertyChange(e) {
    console.log('e :', e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    console.log('props :', this.props)
    const { dispatch } = this.props;
    dispatch(actions.getAllcategory());
  }

  validateForm = () => {

    let errors = false;
    let tempError = this.state.error;

    console.log(this.state.phoneNumber.length);

    if (this.state.phoneNumber.length === 0) {
      tempError.phoneNumberError = "phoneNumber should not be empty";
      errors = true;
    } else {
      tempError.phoneNumberError = '';
    }   

    if (errors) {
      console.log(errors);
      this.setState({
        error: tempError
      },
    ()=>{
      console.log('error :', this.state.error)
    });
      return true;
      console.log(this.state.error);
    }
  }

  onSubmit = (e) => {
    console.log("Submit Form: ")
    e.preventDefault();
    let noError = this.validateForm();
    if (!noError) {

      const { category, phoneNumber, vehicalModel, vehicalName, vehicalRegistrationNumber, vehicalBrand, complaint, serviceRadio, date, time } = this.state;
      let booking = {
        category: category,
        customer_contact: phoneNumber,
        vehical_model: vehicalModel,
        vehical_name: vehicalName,
        vehical_registration_number: vehicalRegistrationNumber,
        vehical_brand: vehicalBrand,
        complain: complaint,
        delivery_type: serviceRadio,
        startDate: date+' '+time,
      };      

      const { dispatch } = this.props;
      dispatch(actions.vehiclebooking(booking));
    }
    console.log('hi')
  }

    handleDisplayRadio = e => {
      console.log('e :',e.target.value)
    this.setState({ ...this.state, isRadioCheck: true });
    this.setState({
      serviceRadio : e.target.value
    })
  };
  render() {    
    let category = this.props.allCategory && this.props.allCategory.data
    
    return (
      <div className="bodycolor">
        <CustomerNavbarComponent />
        <CustomerSidebarComponent />
        <div className="gridwrapper">
          <Row>
            <Col>
              <h4>Vehicle Booking</h4>
            </Col>
          </Row>
          <Form className="service-form">
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="categorySelect">Category:</Label>
                  <Input type="select" name="category" id="categorySelect" onChange={this.onPropertyChange.bind(this)}>
                    <option>Select</option>
                    {
                      category && category.map(
                        (cat, index) => {
                          return (
                            <option> {cat.vehicleCategory} </option>
                          )
                        }
                      )
                    }
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="phonenumber">Phone Number:</Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                  {
                    console.log('err :',this.state.error.phoneNumberError)
                  }
                  <span style={{color: 'red'}}>{this.state.error.phoneNumberError}</span>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="vehicalModel">Vehicle Model:</Label>
                  <Input
                    type="text"
                    name="vehicalModel"
                    id="vehicalModel"
                    value={this.state.vehicalModel}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="vehicalName">Vehicle Name:</Label>
                  <Input
                    type="text"
                    name="vehicalName"
                    id="vehicalName"
                    value={this.state.vehicalName}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="vehicalRegistrationNumber">Vehicle Registration Number:</Label>
                  <Input
                    type="text"
                    name="vehicalRegistrationNumber"
                    id="vehicalRegistrationNumber"
                    value={this.state.vehicalRegistrationNumber}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="vehicalBrand">Vehicle Brand:</Label>
                  <Input
                    type="text"
                    name="vehicalBrand"
                    id="vehicalBrand"
                    value={this.state.vehicalBrand}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label for="complaint">Complaint:</Label>
                  <Input
                    type="textarea"
                    name="complaint"
                    id="complaint"
                    value={this.state.complaint}
                    onChange={this.onPropertyChange.bind(this)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup >
                  <FormGroup check inline>
                    <Label check>
                      <Input
                        type="radio"
                        className="form-check-input"
                        id="pickup"
                        name="serviceRadio"
                        value='PickUp'
                        onChange={this.handleDisplayRadio.bind(this)}
                      />
                      Pickup
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input
                        type="radio"
                        className="form-check-input"
                        id="walkin"
                        name="serviceRadio"             
                        value='Walk-in'
                        onChange={this.handleDisplayRadio.bind(this)}
                      />
                      Walk-in
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
          {this.state.isRadioCheck ? (
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="date">Date:</Label>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      value={this.state.date}
                      onChange={this.onPropertyChange.bind(this)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="time">Time:</Label>
                    <Input
                      type="time"
                      name="time"
                      id="time"
                      value={this.state.time}
                      onChange={this.onPropertyChange.bind(this)}
                    />
                  </FormGroup>
                </Col>
              </Row>
            ) : ("")}
            <hr />
            <Button color="warning" onClick={this.onSubmit} >Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allCategory: state.vehicleBookingReducer.allCategory || [],
  };
};
export default connect(mapStateToProps, null)(VehicleBookingComponent);
