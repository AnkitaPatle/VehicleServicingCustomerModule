import React,{Component} from 'react';
import {
    Col,
    Form,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    InputGroup,InputGroupAddon
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {serviceReq,searchUser} from "../../../store/actions/serviceRequest.action";
import SideBar from '../sidebar/SideBar';
import NavBar from "../navbar/NavBar";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {getVehicleCategory} from  "../../../store/actions/vehicleCategory.action";




class ServiceRequest extends Component {
    constructor() {
        super();
        this.state ={
            userPhone:'',
            category: '',
            vehicleName: '',
            vehicleModel: '',
            vehicleBrand: '',
            vehicleRegistrationNumber: '',
            complaint: '',
            deliveryType: '',
            startDate:'',
            endDate:'',
            customer_contact:'',
            submitted:false,
            vehicleCategory:[],
            isValidUser:true,
            error:{
                userPhoneError:"",
                categoryError:"",
                vehicleNameError:"",
                vehicleModelError:"",
                vehicleBrandError:"",
                vehicleRegistrationNumberError:"",
                complaintError: "",
                deliveryTypeError: "",
                startDateError: ""
            }


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getVehicleCategory();

    }

    componentWillReceiveProps = nextProps =>{
        const vehicleData = nextProps.getallcatdata.data.data;
         if(vehicleData) {
             this.setState({
                 vehicleCategory : vehicleData
             })
         }

         const isuservalid = nextProps.searchUserByPhone;

          if(isuservalid) {
              this.setState({
                  isValidUser: true,
                  userPhoneError:""
              });
          }else{
              this.setState({
                  isValidUser: false,
                  userPhoneError: "Customer is not registered"
              });
          }

    };

    validate=()=>{

        let isError = false;
        let serviceError = this.state.error;


        if(this.state.category.length === 0){
            isError = true;
            serviceError.categoryError = "Category cannot be empty";
        }else{
            serviceError.categoryError = "";
        }

        if(this.state.vehicleName.length === 0){
            isError =true;
            serviceError.vehicleNameError = "Vehicle Name cannot empty";
        }else{
            serviceError.vehicleNameError = "";
        }

        if(this.state.vehicleModel.length === 0){
            isError =true;
            serviceError.vehicleModelError = "Vehicle Model cannot empty";
        }else{
            serviceError.vehicleModelError = "";
        }

        if(this.state.vehicleBrand.length === 0){
            isError =true;
            serviceError.vehicleBrandError = "Vehicle Brand cannot empty";
        }else{
            serviceError.vehicleBrandError = "";
        }


        if(this.state.vehicleRegistrationNumber.length === 0){
            isError =true;
            serviceError.vehicleRegistrationNumberError = "Registration Number cannot empty";
        }else{
            serviceError.vehicleRegistrationNumberError = "";
        }

        if(this.state.complaint.length === 0){
            isError =true;
            serviceError.complaintError = "Complaint cannot empty";
        }else{
            serviceError.complaintError = "";
        }



        if(isError){
            this.setState({
                error : serviceError
            });
        }

        return isError;


    };


    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value,
            submitted:true

        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            submitted:true
        });

        const validateError = this.validate();
        if (!validateError) {
            var data = {
                category: this.state.category,
                vehical_name: this.state.vehicleName,
                vehical_model: this.state.vehicleModel,
                vehical_brand: this.state.vehicleBrand,
                vehical_registration_number: this.state.vehicalRegistrationNumber,
                complain: this.state.complaint,
                delivery_type: this.state.deliveryType
            };
            this.props.serviceRequest(data);
        }

    }

    userValid =(e) =>{
        e.preventDefault();
        let phoneNumber = this.state.userPhone;
        if(phoneNumber){
            this.props.searchUser(phoneNumber);
        }

    };

    render() {
        const hStyle = { color: '#02075d' };
        const wellStyles = {maxWidth: 250, margin: '0 auto 10px'};
        const{
            userPhone,
            category,
            vehicleName,
            vehicleModel,
            vehicleBrand,
            vehicleRegistrationNumber,
            complaint,
            deliveryType,
            submitted
        }=this.state;



        let options = this.state.vehicleCategory.map((data) =>
            <option
                key={data.id}
                value={data._id}
            >
                {data.vehicleCategory}
            </option>
        );

        return (
            <div className="serviceAdmin">
                <NavBar/>
                <SideBar />
                <Container className="p-5">
                    <Form method="post" onSubmit={this.handleSubmit}>
                        <h3 className="text-left mb-4 mt-1" style={hStyle}>Service Request </h3>
                        <Row>
                            <Col md={3}>
                        <FormGroup>
                            <InputGroup>
                                <Input type ="text" name="userPhone" id="userPhone" value={userPhone} onChange={this.handleChange} placeholder = "Enter Phone Number"
                                       className= {"form-control inputerror " + ( this.state.isValidUser  ? 'invalid' : 'valid')}>
                                  >

                                </Input>
                                <InputGroupAddon addonType="append" onClick={this.userValid}>
                                    <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                                </InputGroupAddon>
                            </InputGroup>
                            <span className='errorMessage'>{this.state.error.userPhoneError}</span>
                        </FormGroup>
                            </Col>
                        </Row>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Row from>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Category</Label>
                                        <Input type="select"
                                               size="lg"
                                               name="category"
                                               id="category"
                                               onChange={this.handleChange}
                                               value={category}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.categoryError  ? 'invalid' : 'valid')}>
                                            <option value=" ">Select a Category</option>
                                            {options}

                                        </Input>
                                        <span className='errorMessage'>{this.state.error.categoryError}</span>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Vehicle Name</Label>
                                        <Input type="email"
                                               size="lg"
                                               name="vehicleName"
                                               id="vehicleName"
                                               onChange={this.handleChange}
                                               value={vehicleName}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.vehicleNameError  ? 'invalid' : 'valid')}

                                        />
                                        <span className='errorMessage'>{this.state.error.vehicleNameError}</span>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row from>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Vehicle Model</Label>
                                        <Input type="phone" size="lg" name="vehicleModel" id="vehicleModel" placeholder=""
                                               value={vehicleModel}
                                               onChange={this.handleChange}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.vehicleModelError  ? 'invalid' : 'valid')}

                                          />
                                            <span className='errorMessage'>{this.state.error.vehicleModelError}</span>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Vehicle Brand</Label>
                                        <Input type="text" size="lg" name="vehicleBrand" id="vehicleBrand" placeholder=""
                                               value={vehicleBrand}
                                               onChange={this.handleChange}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.vehicleBrandError  ? 'invalid' : 'valid')}

                                        />
                                            <span className='errorMessage'>{this.state.error.vehicleBrandError}</span>
                                    </FormGroup>

                                </Col>
                            </Row>
                            <Row from>
                                <Col>
                                    <FormGroup>
                                        <Label>Vehicle Registration Number</Label>
                                        <Input type="text" size="lg"
                                               name="vehicleRegistrationNumber"
                                               id="vehicleRegistrationNumber"
                                               placeholder=""
                                               onChange={this.handleChange}
                                               value={vehicleRegistrationNumber}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.vehicleRegistrationNumberError  ? 'invalid' : 'valid')}

                                        />
                                            <span className='errorMessage'>{this.state.error.vehicleRegistrationNumberError}</span>

                                    </FormGroup>

                                </Col>
                            </Row>
                            <Row from>
                                <Col>
                                    <FormGroup>
                                        <Label>Complaint</Label>
                                        <Input type="textarea"
                                               size="lg"
                                               name="complaint"
                                               id="complaint"
                                               placeholder=""
                                               onChange={this.handleChange}
                                               value={complaint}
                                               className= {"form-control inputerror " + (this.state.submitted && this.state.error.complaintError  ? 'invalid' : 'valid')}

                                        />
                                            <span className='errorMessage'>{this.state.error.complaintError}</span>

                                    </FormGroup>

                                </Col>
                            </Row>
                            <Row from>
                                <Col>
                                    <FormGroup>
                                    <Label>Vehicle Delivery Type</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                     <Label check>
                                            <Input type="radio"
                                                   name="deliveryType"
                                                   id="deliveryType"
                                                   value={deliveryType}
                                            /> Pickup
                                     </Label>
                                     </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="deliveryType" id="deliveryType"  value={deliveryType} /> Walk-In
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className="mb-2 mt-5 mr-sm-2 mb-sm-0  text-center ">
                                <div className="text-center"  style={wellStyles}  >
                                    <Button className="admitSubmitbtn" color="warning" size="lg" block >SUBMIT</Button>
                                </div>
                            </FormGroup>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            serviceRequest: serviceReq,
            getVehicleCategory:getVehicleCategory,
            searchUser:searchUser


        },
        dispatch
    );
}

function mapStateToProps({ serviceRequest, vehicleCat }) {
    return {
        serviceReqResp: serviceRequest,
        getallcatdata:vehicleCat.getallcatdata
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceRequest));