import React, { Component } from "react";
import {
  Card, CardBody, Button, Input, Col,
  FormControl, Label, Form, Row, FormGroup
} from "reactstrap";
import "./Styled.css";
import * as action from './serviceAction';
import { connect } from "react-redux";
// import Header from "./../header/header";
// import Sidebar from "./../side-bar/sidebar";

import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import * as getVehicleDetails from './../dashboard/dashboardAction';




let routineservice = [{ serviceName: "100cc", value: 399 }, { serviceName: "80cc", value: 199 }];
const labourchrgsrvc = [{ labourchrgname: "Health Inspection", value: 199 }, { labourchrgname: "Health Inspection2", value: 499 }];
const sparpartchrgs = [{ sparpartchrgsname: "Health Inspection", value: 199 }, { sparpartchrgsname: "Routine Servicing", value: 499 },
{ sparpartchrgsname: "Clutch Cable replacement", value: 399 }, { sparpartchrgsname: "Carburettor Drain/Setting", value: 399 },
  , { sparpartchrgsname: "Carburettor Clean", value: 199 }, { sparpartchrgsname: "Front Fork Oil or Seal replacement", value: 199 }
  , { sparpartchrgsname: "Front Brake shoe setting", value: 499 }, { sparpartchrgsname: "Front Brake shoe replacement", value: 399 }
  , { sparpartchrgsname: "Front Brake shoe setting", value: 299 }, { sparpartchrgsname: "Rear Brake shoe replacement", value: 299 }];


const custmerList = [{ id: "1", name: "Jeffrey Garcia1" }, { id: "2", name: "Brijesh Pant" }, { id: "3", name: "Jeffrey Garcia3" }, { id: "4", name: "Jeffrey Garcia4" }, , { id: "5", name: "Jeffrey Garcia5" }, , { id: "6", name: "Jeffrey Garcia6" }];

class maintananceService extends Component {



  constructor() {
    super();
  }
  state = {
    cost: 0,
    total: 0,
    discount: 10,
    discountAmount: 0,

    routineServiceCharge: 0,
    labourCharges: 0,
    spareParts: 0,
    otherCharges: 0,

    radioButnChk: "",
    routinServic: "",
    labourChrge: "",
    sparpart: "",
    engnType: "",
    othrchrgtxt: "",
    customerId: "",
    selectValue: "",
    bikeId: "",
    seviceId: "",
    ServiceVehicle: "",
    customerId: "",
    serviceId: ""


  };

  getRoutintype = async (e) => {
    this.setState({ bikeId: e.target.value });
    this.setState({ routinServic: e.target.options[e.target.selectedIndex].text })
    console.log(e.target.value, "@@", e.target.options[e.target.selectedIndex].text);
    const { dispatch } = this.props;
    await dispatch(action.getRoutinServiceChargeList({ serviceDetails: "5de65f8e586b793a603c471f", bikeDetails: e.target.value }));

    console.log("test render", routineservice);
    // this.setState({ routinServic: e.target.options[e.target.selectedIndex].text })
    // this.setState({ routineServiceCharge: e.target.value }, () => {
    //   this.totalCalculation();
    // });
    this.totalCalculation();
  }

  getLabourCharges = async (e) => {
    const { dispatch } = this.props;
    this.setState({ labourChrge: e.target.options[e.target.selectedIndex].text })

    console.log(e.target.value, "@@", e.target.options[e.target.selectedIndex].text, "###", this.state.bikeId);
    await dispatch(action.getRoutinLabourChargeList({ serviceDetails: e.target.value, bikeDetails: this.state.bikeId }));
    // dispatch(action.getRoutinLabourChargeList({ labou: "5de65f8e586b793a603c471f", bikeDetails: e.target.value }));
    // this.setState({ labourChrge: e.target.options[e.target.selectedIndex].text })
    // this.setState({ labourCharges: e.target.value }, () => {
    //   this.totalCalculation();
    // });
    this.totalCalculation();
  }

  getSparePart = (e) => {
    this.setState({ sparpart: e.target.options[e.target.selectedIndex].text })

    this.setState({ spareParts: e.target.value }, () => {
      this.totalCalculation();
    });
  }
  getEngineType = (e) => {
    this.setState({ engnType: e.target.value }, () => {
    });
  }
  getOtherCharge = (e) => {
    this.setState({ otherCharges: e.target.value }, () => {
      this.totalCalculation();
    });
  }
  totalCalculation = () => {
    console.log(this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].charge, "props.....", this.props.labourchargesPricelist)
    console.log("routine charges: est", this.state.routineServiceCharge);
    console.log("labour charges", this.state.labourCharges);
    console.log("spare charges", this.state.spareParts);
    console.log("other charges", this.state.otherCharges);
    this.setState({ routineServiceCharge: this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].charge });
    this.setState({ labourCharges: this.props.labourchargesPricelist[0] && this.props.labourchargesPricelist[0].charge });

    let sum = parseInt(this.state.routineServiceCharge) + parseInt(this.state.labourCharges) + parseInt(this.state.spareParts) + parseInt(this.state.otherCharges);
    //let sum = parseInt(this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].charge) + parseInt(this.props.labourchargesPricelist[0] && this.props.labourchargesPricelist[0].charge)
    console.log("sum:", sum);
    let discountamount = (sum * parseInt(this.state.discount)) / 100;
    console.log("discountamount:", discountamount);
    let total = sum - discountamount;
    console.log("total:", total);
    this.setState({ cost: sum })
    this.setState({ discountAmount: discountamount })
    this.setState({ total: total })
  }
  onRadiocheck = (e) => {
    this.setState({ radioButnChk: e.target.value })
  }

  saveVehicleBillStatus = () => {
    let vehicleServiceData = {
      serviceId: this.state.serviceId,
      customerId: this.state.customerId,
      ServiceVehicle: this.state.ServiceVehicle,
      bike: this.state.engnType,
      routinecharge: this.state.routineServiceCharge,
      servicename: this.state.routinServic,
      servicecharge: this.state.routineServiceCharge,
      sparecharge: this.state.spareParts,
      other_service_details: this.state.othrchrgtxt,
      other_service_charge: this.state.otherCharges,
      cost: this.state.cost,
      DiscountPer: this.state.discount,
      Discount: this.state.discountAmount,
      totalcost: this.state.total
    }
    const { dispatch } = this.props;
    dispatch(action.saveVehicleBillStatus(vehicleServiceData));
  }
  otherchargesGetText = (e) => {

    this.setState({ othrchrgtxt: e.target.value });

  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(action.getRoutinServiceList());
    dispatch(action.getLabourChargeList());
    // dispatch(action.getSparpartList());

    dispatch(getVehicleDetails.getVehicleDetails());


    if (this.props.location.state !== undefined)
    {
      this.setState({ selectValue: this.props.location.state.customerDetails.customer.name });
      this.setState({ customerId: this.props.location.state.customerDetails.customer._id });
      this.setState({ serviceId: this.props.location.state.customerDetails._id });
    }

  }
  getcustomerName = (e) => {
    this.setState({ selectValue: e.target.value })

  }

  // componentDidUpdate() {
  //   this.setState({ routinServic: "" });
  //   console.log(routineservice, "routineservice1")
  // }
  getServiceId = (e, seviceId, vehicletype) => {
    this.setState({ seviceId: seviceId });
    this.setState({ ServiceVehicle: vehicletype })
  }
  render() {
    console.log(this.props.savevehiclebill, "savevehiclebill");
    let message = this.props.savevehiclebill && this.props.savevehiclebill;
    // console.log(document.getElementById("serviceType").innerText)
    routineservice = { serviceName: this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].bike.BikeName, value: this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].charge };

    console.log(this.props.routineservicePricelist[0], "routineservice", this.props.labourchargesPricelist)
    let routinecharge = this.props.routineservicePricelist[0];
    let labourcharge = this.props.labourchargesPricelist[0];
    // console.log(labourcharge && labourcharge.charge, "routineservicePricelist")
    //console.log(this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].bike.BikeName, "@@@@@@@@@@@@@@@", this.props.routineservicePricelist[0] && this.props.routineservicePricelist[0].charge)
    return (
      <div className="Login-block" >
        {/* <Header />
        <Sidebar /> */}
        <NavBar></NavBar>
        <SideBar />

        <Form onSubmit={this.handleSubmit} noValidate className="gridwrapper gridwrapper-new">
          <span style={{ color: "red" }}>{message}</span>
          <Row>
            <FormGroup >
              <span style={{ marginLeft: "40%" }}> <Input type="radio" name="serviceType" value="Bike Services" onChange={(e) => this.onRadiocheck(e)} onClick={e => this.getServiceId(e, '5ddf7ba88a00d0684c651d4b', "Bike")} />Bike Services</span>
              <span style={{ marginLeft: "10%" }}><Input type="radio" name="serviceType" value="Car Services" onChange={(e) => this.onRadiocheck(e)} onClick={e => this.getServiceId(e, '5ddf7ba88a00d0684c651d4c', "Car")} />Car Services</span>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label>Customer Name:</label>    <Input type="select" onChange={(e) => this.getcustomerName(e)} value={this.state.selectValue} ><option>Select</option>{this.props.vehicledetailslist && this.props.vehicledetailslist.map((item, key) => (<option value={item.customer.name}>{item.customer.name}</option>))}</Input>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label>Routine Service: </label> <Input type="select" onChange={(e) => this.getRoutintype(e)}><option>Select</option>{this.props.routineservicelist && this.props.routineservicelist.map((item, key) => (<option value={item._id}>{item.BikeName}</option>))}</Input><Input type="text" id="serviceType" value={routinecharge && routinecharge.charge} disabled={true} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label>Labour charges:</label>  <Input type="select" onChange={(e) => this.getLabourCharges(e)}><option>Select</option>{this.props.labourchargelist && this.props.labourchargelist.map((item, key) => (<option value={item._id}>{item.ServiceName}</option>))}</Input><Input type="text" id="labourType" value={labourcharge && labourcharge.charge} disabled={true} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label>Spare Part:</label>  <Input type="select" onChange={(e) => this.getSparePart(e)}><option>Select</option>{sparpartchrgs.map((item, key) => (<option value={item.value}>{item.sparpartchrgsname}</option>))}</Input><Input type="select" onChange={(e) => this.getEngineType(e)}><option>Select</option><option>80 cc - 135 cc</option><option>135 cc - 180 cc</option><option>200 cc - Above</option><option>Moped</option><option>Bullet</option><option>KTM</option></Input><Input type="text" value={this.state.spareParts} disabled={true} />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup >
              <label>Other charges:</label>  <Input type="text" onChange={this.otherchargesGetText} /><Input type="text" value={this.state.otherCharges} onChange={(e) => this.getOtherCharge(e)} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label style={{ marginLeft: "50%" }}>Cost {this.state.cost}</label>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <label>Discount </label><Input type="text" value={"-" + this.state.discount} /><Input type="text" value={"Rs -" + this.state.discountAmount} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <b style={{ marginLeft: "50%" }}> Total</b><span style={{ color: "#ffc107" }}> Rs   {this.state.total} </span>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup >
              <Button onClick={this.saveVehicleBillStatus} color="warning" style={{ marginLeft: "50%" }}>Submit</Button>
            </FormGroup>
          </Row>

        </Form>

      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state, "state")
  return {
    //  routineservicelist: state.maitananceServiceReducer.routineservicelist || "",
    labourchargelist: state.maitananceServiceReducer.labourchargelist || "",
    //  sparepartlist: state.maitananceServiceReducer.sparepartlist || ""
    routineservicelist: state.maitananceServiceReducer.routineservicelist || "",
    vehicledetailslist: state.maitananceDashboardReducer.vehicledetailslist || "",
    routineservicePricelist: state.maitananceServiceReducer.routineservicePricelist || "",
    labourchargesPricelist: state.maitananceServiceReducer.labourchargesPricelist || "",
    savevehiclebill: state.maitananceServiceReducer.savevehiclebill || "",


  };
};


export default connect(mapStateToProps)(maintananceService);


