import React, { Component } from "react";
import { Table, Button, Row, Col } from "reactstrap";
// import "./Styled.css";
import { connect } from "react-redux";
import * as action from './dashboardAction';
// import Header from "./../header/header";
// import Sidebar from "./../side-bar/sidebar";
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import maintananceService from './../service/service';
import Moment from 'react-moment';

const vehicledata = [
  {
    date: "08/30/2019",
    vehicleType: "Honda Activa",
    customerName: "Jeffrey Garcia1",
    status: ""
  },
  {
    date: "12/30/2019",
    vehicleType: "Bajaj Chetak",
    customerName: "Jeffrey Garcia2",
    status: ""
  },
  {
    date: "09/30/2019",
    vehicleType: "Pulsar",
    customerName: "Jeffrey Garcia",
    status: ""
  },
  {
    date: "10/30/2019",
    vehicleType: "Vespa",
    customerName: "Jeffrey Garcia3",
    status: ""
  },
  {
    date: "11/30/2019",
    vehicleType: "Avenger",
    customerName: "Jeffrey Garcia4",
    status: ""
  },
  {
    date: "12/30/2019",
    vehicleType: "Honda City",
    customerName: "Jeffrey Garcia5",
    status: ""
  }
];

const vehstatList = [{ stat: "In Queue" }, { stat: "Servicing" }, { stat: "Washing" }, { stat: "Completed" }];

class MaintananceDashboard extends Component {
  state = {
    ischecked: false,
    VehicleStatus: ""

  };

  multipleVehicleinfo = [];

  saveVehicleStatus = () => {
    let vehiclestat = [];
    for (let i = 0; i < this.multipleVehicleinfo.length; i++)
    {
      this.multipleVehicleinfo[i].status = document.getElementById("vehcleStat" + this.multipleVehicleinfo[i].date + this.multipleVehicleinfo[i].vehicleType + this.multipleVehicleinfo[i].customerName).value;
      vehiclestat.push(this.multipleVehicleinfo[i]);
    }
    console.log(vehiclestat, "vehiclestat");
    document.getElementById("chkall").checked = false;
    const { dispatch } = this.props;
    //  dispatch(action.saveVehicleStatus(vehiclestat));
  };

  handleAllCheckboxChange = (targetdata, vehicledata) => {
    this.multipleVehicleinfo = [];
    for (let i = 0; i <= vehicledata.length - 1; i++)
    {
      if (targetdata)
      {

        document.getElementById("chkbx" + i).checked = true;
        this.multipleVehicleinfo.push(vehicledata[i]);
      } else
      {
        document.getElementById("chkbx" + i).checked = false;
      }
    }
  };

  handleCheckboxChange = (e, item, index) => {
    if (e.target.checked)
    {
      this.multipleVehicleinfo.push(item);
    } else
    {
      document.getElementById("chkall").checked = false;
      for (let i = 0; i < this.multipleVehicleinfo.length; i++)
      {
        if (
          this.multipleVehicleinfo[i].customerName === item.customerName &&
          this.multipleVehicleinfo[i].vehicleType === item.vehicleType
        )
        {
          this.multipleVehicleinfo.splice(i, 1);
        }
      }
    }
  };

  getVehicleStatus = (key, e) => {
    this.setState({ VehicleStatus: e.target.value });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(action.getVehicleDetails());
    // dispatch(action.getVehicleStatList());
  }

  multipleVehicleinfoNew = [];
  getvehicleStatusNew = (e, item, index) => {
    console.log(e, "##", item, "##", index);
    item.status = document.getElementById("vehcleStat" + item.startDate + item.vehical_name + item.customer.name).value;
    this.multipleVehicleinfoNew = item;
    // console.log(this.multipleVehicleinfoNew , "final")
  }

  saveVehicleStatusNew = () => {

    const { dispatch } = this.props;
    dispatch(action.saveVehicleStatus({ list_of_services: this.multipleVehicleinfoNew.customer._id, updated_status: this.multipleVehicleinfoNew.status }));


    console.log(this.props.history.push({
      pathname: '/maintananceService',
      state: { customerDetails: this.multipleVehicleinfoNew }
    }))

  }

  render() {
    return (
      <div className="dashboard-block">
        <NavBar></NavBar>
        <SideBar />
        {/* <Header /> */}
        <div className="gridwrapper">
          <Row>
            <Col sm="12">
              <Table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Vehicle Type</th>
                    <th>Customer Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.vehicledetailslist && this.props.vehicledetailslist.map((items, key) => (
                    <tr>
                      <td>
                        {/* <input
                              type="checkbox"
                              id={"chkbx" + key}
                              key={items.startDate}
                              ischecked={this.state.ischecked}
                              onChange={e => {
                                this.handleCheckboxChange(e, items, key);
                              }}
                            /> */}
                        <input type="radio" name="vehstat" onClick={e => { this.getvehicleStatusNew(e, items, key) }} />
                      </td>
                      <td><Moment format="DD/MM/YYYY">
                        {items.startDate}
                      </Moment></td>
                      <td>{items.vehical_name}</td>
                      <td>{items.customer.name}</td>


                      <td>
                        <select onChange={(e) => this.getVehicleStatus(key, e)} id={"vehcleStat" + items.startDate + items.vehical_name + items.customer.name}>
                          <option value="">Select</option>
                          {vehstatList.map((item, value) => (
                            <option value={item.stat}>{item.stat}</option>
                          ))}

                        </select>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5">
                      {/* <Button onClick={this.saveVehicleStatus} className="save">Save</Button> */}
                      <Button color="warning" onClick={this.saveVehicleStatusNew} className="save" style={{ marginLeft: "50%" }} >Save</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicledetailslist: state.maitananceDashboardReducer.vehicledetailslist || "",
    // vehicleStatlist: state.maitananceDashboardReducer.vehicleStatlist || ""

  };
};

export default connect(mapStateToProps)(MaintananceDashboard);
