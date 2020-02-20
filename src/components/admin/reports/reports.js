import React, { Component } from "react";
import { Input, Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Row, Col, Collapse, CardBody } from "reactstrap";
import classnames from 'classnames';
// import SupervisorNavbarComponent from '../supervisor-navbar';
// import SupervisorSidebarComponent from '../supervisor-sidebar';
// import "./Styled.css";
import { connect } from "react-redux";
import * as action from './reportsAction';
// import dashboardReducer from './dashboardReducer';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Moment from 'react-moment';
import * as moment from 'moment';
import Moment from 'react-moment';
import { isThisHour } from "date-fns";
import { API_URL } from "../../../config";
// import pdf from './../../../assets/images/resume.pdf';

// const custVehicleBillDetails = [
//     {
//     date: "08/30/2019",
//     vehicleType: "Honda Activa",
//     customerName: "Jeffrey Garcia1",
//     vehicleStatus: ""
// },
// {
//     date: "12/30/2019",
//     vehicleType: "Bajaj Chetak",
//     customerName: "Jeffrey Garcia2",
//     vehicleStatus: ""
// },
// {
//     date: "09/30/2019",
//     vehicleType: "Pulsar",
//     customerName: "Jeffrey Garcia",
//     vehicleStatus: ""
// },
// {
//     date: "10/30/2019",
//     vehicleType: "Vespa",
//     customerName: "Jeffrey Garcia3",
//     vehicleStatus: ""
// },
// {
//     date: "11/30/2019",
//     vehicleType: "Avenger",
//     customerName: "Jeffrey Garcia4",
//     vehicleStatus: ""
// },
// {
//     "service_status": "In Queue",
//     "_id": "5de79d75ea754d618452cff3",
//     "category": null,
//     "customer": {
//         "_id": "5de7796aea754d618452cff1",
//         "name": "Akshay Babar"
//     },
//     "vehical_name": "Unicorn",
//     "vehical_model": "v1",
//     "vehical_brand": "Honda",
//     "vehical_registration_number": "MH12SC3848",
//     "complain": "Average",
//     "delivery_type": "PickUp",
//     "startDate": "1987-09-28T05:20:00.000Z",
//     "endDate": "1987-09-28T05:29:00.000Z",
//     "record_date": "2019-04-12T00:00:00.000Z",
//     "__v": 0,
//     "assigned_supervisor": {
//         "_id": "5ddfae6e2ad1924b54921e2b",
//         "name": "Brijesh Pant"
//     },
//     "assigned_maintenance_eng": {
//         "_id": "5ddfae902ad1924b54921e2c",
//         "name": "Brijesh Pant"
//     }
// }]

class Reports extends Component {
    state = {
        ischecked: false,
        activeTab: '1',
        collapse: 0,
        cards: [1, 2, 3, 4, 5],
        selectfromDate: "",
        selecttoDate: "",
        validat: "",

    };

    multipleVehicleinfo = [];

    toggle = tab => {
        if (this.state.activeTab !== tab)
        {
            this.setState({
                activeTab: tab
            })
        }
    };

    openCollapse = (e) => {
        const event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    };

    saveVehicleStatus = () => {
        console.log(this.multipleVehicleinfo, "########");
        document.getElementById("chkall").checked = false;
        const { dispatch } = this.props;
        // dispatch(action.saveSupervisorStatus(this.multipleVehicleinfo));
    }

    handleAllCheckboxChange = (targetdata, vehicledata) => {
        this.multipleVehicleinfo = [];
        for (let i = 0; i <= vehicledata.length - 1; i++)
        {
            if (targetdata)
            {
                document.getElementById("chkbx" + i).checked = true;
                this.multipleVehicleinfo.push(vehicledata[i]);
            }
            else
            {
                document.getElementById("chkbx" + i).checked = false;
            }
        }
    };

    handleCheckboxChange = (e, item, index) => {

        if (e.target.checked)
        {
            this.multipleVehicleinfo.push(item);
        }
        else
        {
            document.getElementById("chkall").checked = false;
            for (let i = 0; i < this.multipleVehicleinfo.length; i++)
            {
                if (this.multipleVehicleinfo[i].customerName === item.customerName && this.multipleVehicleinfo[i].vehicleType === item.vehicleType)
                {
                    this.multipleVehicleinfo.splice(i, 1);
                }
            }
        }
    }

    getCustomerBillDetails() {

        //    console.log(this.state.fromDate , "@@@@@@@@" , this.state.toDate);
        // let datefrom = document.getElementById("datefrom").value;
        // let dateto = document.getElementById("dateto").value;

        // if (this.state.fromDate !== undefined ) {
        //     console.log("in if");
        //     this.setState({ validat:  });
        // }
        // else {
        //     console.log("else");
        //     this.setState({ validat: "" });
        const { dispatch } = this.props;
        dispatch(action.getCustomerBillDetails(this.state.fromDate, this.state.toDate));
        // }


    };
    componentDidMount() {
        this.getCustomerBillDetails();
    }

    convert = (str) => {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }

    handleChangefrom = date => {

        this.setState({ validat: "Please Enter To Date......!" });
        var fromdate = this.convert(date);

        //  console.log(fromdate,"date")
        this.setState({
            selectfromDate: date
        }, () => {
            //  this.getCustomerBillDetails();
        });

        this.setState({
            fromDate: fromdate
        }, () => {
            //  this.getCustomerBillDetails();
        });

        //  console.log(this.state.fromDate);
    };
    handleChangeto = date => {

        this.setState({ validat: "" });

        var todate = this.convert(date);

        // console.log(date)
        this.setState({
            selecttoDate: date
        }, () => {
            // this.getCustomerBillDetails();
        });

        this.setState({
            toDate: todate
        }, () => { this.getCustomerBillDetails(); });

    };

    downloadBill = (filepath) => {
        window.open(API_URL + "/" + filepath);
    }

    render() {

        console.log(this.props.custVehicleBillDetails, "custVehicleBillDetails");
        return (
            <div className="bodycolor">
                <NavBar></NavBar>
                <SideBar />
                {/* <SupervisorNavbarComponent />
                <SupervisorSidebarComponent /> */}
                <div className="gridwrapper">
                    {/* <i class="far fa-file-pdf" onClick={this.downloadBill}>file download</i> */}
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Customer
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Serviced Vehicle Employee
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Vehical Status
              </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <span style={{ color: "red" }}>  {this.state.validat} </span>
                            </Row>
                            <Row>
                                Total Registered Customer {this.props.custVehicleBillDetails !== "" ? this.props.custVehicleBillDetails.length : 0}    from <DatePicker
                                    selected={this.state.selectfromDate}
                                    onChange={this.handleChangefrom}
                                /> To <DatePicker
                                    selected={this.state.selecttoDate}
                                    onChange={this.handleChangeto}
                                />
                                <Col sm="12">
                                    <Table>
                                        <thead>
                                            <tr>

                                                <th>Date</th>
                                                <th>Vehicle Type</th>
                                                <th>Customer Name</th>
                                                <th>Bill Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.custVehicleBillDetails !== "" ? this.props.custVehicleBillDetails.map((items, key) => (
                                                <tr>

                                                    <td> <Moment format="DD/MM/YYYY">
                                                        {items.startDate}
                                                    </Moment></td>
                                                    <td>{items.vehical_name}</td>
                                                    <td>{items.customer.name}</td>
                                                    <td>
                                                        <i class="fa fa-file-pdf-o" onClick={this.downloadBill.bind(this, items.billingpdfpath)}></i>
                                                    </td>
                                                </tr>

                                            )) : "No records to show.....!"}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col sm="12">
                                    <h4>Select Engineer</h4>
                                    <select className="select-engineer">
                                        <option value="">Select</option>
                                        <option value="Scott">Scott</option>
                                        <option value="Ben">Ben</option>
                                    </select>
                                    <Button color="warning" onClick={this.saveVehicleStatus}>Assign</Button>
                                </Col>
                            </Row> */}
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    Serviced Vehicle Employee
                                    {/* <Table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Vehicle Type</th>
                                                <th>Customer Name</th>
                                                <th>Status</th>
                                                <th>View Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vehicledata.map((items, key) => (
                                                <React.Fragment>
                                                    <tr>
                                                        <td>{items.date}</td>
                                                        <td>{items.vehicleType}</td>
                                                        <td>{items.customerName}</td>
                                                        <td>{items.vehicalStatus}</td>
                                                        <td className="view-details" onClick={this.openCollapse} data-event={key}>View</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" className="collapse-container">
                                                            <Collapse isOpen={this.state.collapse === key}>
                                                                <CardBody>
                                                                    Anim pariatur cliche reprehenderit,
                                                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                                    nesciunt sapiente ea proident.
                                  <div>
                                                                        <h4>Engineer: <strong>Carl Jo</strong></h4>
                                                                        <select className="select-engineer">
                                                                            <option value="Not Approved">Not Approved</option>
                                                                            <option value="Approved">Approved</option>
                                                                        </select>
                                                                        <Button color="warning">Assign</Button>
                                                                    </div>
                                                                </CardBody>
                                                            </Collapse>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </Table> */}
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    Vehical Status
                                    {/* <Table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Vehicle Type</th>
                                                <th>Customer Name</th>
                                                <th>Status</th>
                                                <th>View Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vehicledata.map((items, key) => (
                                                <React.Fragment>
                                                    <tr>
                                                        <td>{items.date}</td>
                                                        <td>{items.vehicleType}</td>
                                                        <td>{items.customerName}</td>
                                                        <td>{items.vehicalStatus}</td>
                                                        <td className="view-details" onClick={this.openCollapse} data-event={key}>View</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" className="collapse-container">
                                                            <Collapse isOpen={this.state.collapse === key}>
                                                                <CardBody>
                                                                    Anim pariatur cliche reprehenderit,
                                                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                                    nesciunt sapiente ea proident.
                                  <div>
                                                                        <h4>Supervisor</h4>
                                                                        <select className="select-engineer">
                                                                            <option value="">Select</option>
                                                                            <option value="Scott">Scott</option>
                                                                            <option value="Ben">Ben</option>
                                                                        </select>
                                                                        <Button color="warning">Assign</Button>
                                                                    </div>
                                                                </CardBody>
                                                            </Collapse>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </Table> */}
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        custVehicleBillDetails: state.customerBillDetailsReducer.custVehicleBillDetails || ""
    };
};

export default connect(mapStateToProps)(Reports);
