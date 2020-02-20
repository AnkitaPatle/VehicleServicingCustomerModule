import React, { Component } from "react";
import { Input, Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Row, Col, Collapse, CardBody } from "reactstrap";
import classnames from 'classnames';
// import SupervisorNavbarComponent from '../supervisor-navbar';
// import SupervisorSidebarComponent from '../supervisor-sidebar';
import "./Styled.css";
import { connect } from "react-redux";
import * as action from './enqueryAction';
// import dashboardReducer from './dashboardReducer';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import Moment from 'react-moment';

const messageData = [
    {
        status: "New1",
        _id: "5ty56y5656yh56",
        date: "2019-12-01T16:38:41.090Z",
        name: "Akshay Babar",
        message: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
        email: "akshay.babar@harbingergroup.com"
    },
    {
        status: "New2",
        _id: "5ty56y5656yh56",
        date: "2019-12-01T16:38:41.090Z",
        name: "Akshay Babar",
        message: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
        email: "akshay.babar@harbingergroup.com"
    },
    {
        status: "New3",
        _id: "5ty56y5656yh56",
        date: "2019-12-01T16:38:41.090Z",
        name: "Akshay Babar",
        message: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
        email: "akshay.babar@harbingergroup.com"
    },
    {
        status: "New4",
        _id: "5ty56y5656yh56",
        date: "2019-12-01T16:38:41.090Z",
        name: "Akshay Babar",
        message: "Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
        email: "akshay.babar@harbingergroup.com"
    }]

class Enquery extends Component {
    state = {
        ischecked: false,
        activeTab: '2',
        collapse: '',
        cards: [1, 2, 3, 4, 5],
        message: ""
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
        this.setState({ collapse: this.state.collapse === Number(event) ? '' : Number(event) });
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
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(action.getMessageData());
    }

    messageReply(items ,key){
        let messageInputs = document.getElementById("msg"+key).value;
        const { dispatch } = this.props;
        dispatch(action.replyMessage({ message: messageInputs, email: items.email }));

        this.setState({});

    }

    message =(e)=>{
        console.log(e.target.value , "message");
        this.setState({message:e.target.value});
    }

    render() {
        console.log(this.props.messageData, "messageData")
        return (
            <div className="bodycolor">
                <NavBar></NavBar>
                <SideBar />
                {/* <SupervisorNavbarComponent />
                <SupervisorSidebarComponent /> */}
                <div className="gridwrapper">

                    {this.props.replyMessage !== "" ? <span style={{ color: "red" }}>{this.props.replyMessage}</span> : ""}
                    {/* {this.props.replyMessage !== "" || this.props.replyMessage !== undefined ? alert(this.props.replyMessage) : ""} */}
                    {/* <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Vehical Assigned
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Vehical Service Approval
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
                    </Nav> */}
                    <TabContent activeTab={this.state.activeTab}>
                        {/* <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox"
                                                    id="chkall"
                                                    onChange={e => {
                                                        this.handleAllCheckboxChange(e.target.checked, vehicledata);
                                                    }} /></th>
                                                <th>Date</th>
                                                <th>Vehicle Type</th>
                                                <th>Customer Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vehicledata.map((items, key) => (
                                                <tr>
                                                    <td><input type="checkbox"
                                                        id={"chkbx" + key}
                                                        key={items.date}
                                                        ischecked={this.state.ischecked}
                                                        onChange={e => {
                                                            this.handleCheckboxChange(e, items, key);
                                                        }} /></td>
                                                    <td>{items.date}</td>
                                                    <td>{items.vehicleType}</td>
                                                    <td>{items.customerName}</td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <h4>Select Engineer</h4>
                                    <select className="select-engineer">
                                        <option value="">Select</option>
                                        <option value="Scott">Scott</option>
                                        <option value="Ben">Ben</option>
                                    </select>
                                    <Button color="warning" onClick={this.saveVehicleStatus}>Assign</Button>
                                </Col>
                            </Row>
                        </TabPane> */}
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Customer Name</th>
                                                <th>Customer Message</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.messageData !== "" ? this.props.messageData.map((items, key) => (
                                                <React.Fragment>
                                                    <tr>
                                                        <td>
                                                            <Moment format="DD/MM/YYYY">
                                                                {items.date}
                                                            </Moment>
                                                        </td>
                                                        <td>{items.name}</td>
                                                        <td>{items.message}</td>
                                                        {/* <td className="view-details" onClick={this.openCollapse} data-event={key} style={{ color: "#ffc107" }}>Reply</td> */}
                                                        <td><Button color="warning" onClick={this.openCollapse} data-event={key}>Reply</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" className="collapse-container">
                                                            <Collapse isOpen={this.state.collapse === key}>
                                                                <CardBody>
                                                                    <textarea onChange={(e) => this.message(e)} id={"msg"+key}></textarea>
                                                                    <div>

                                                                        <Button color="warning" onClick={e =>this.messageReply(items,key,e)}>Reply</Button>
                                                                    </div>
                                                                </CardBody>
                                                            </Collapse>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            )) : "No data to show.........!"}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </TabPane>
                        {/* <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <Table>
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
                                    </Table>
                                </Col>
                            </Row>
                        </TabPane> */}
                    </TabContent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messageData: state.customerEnquiryReducer.messageData || "",
        replyMessage: state.customerEnquiryReducer.replyMessage || ""

    };
};

export default connect(mapStateToProps)(Enquery);
