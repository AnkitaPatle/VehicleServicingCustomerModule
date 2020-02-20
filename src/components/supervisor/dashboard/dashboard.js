import React, { Component } from "react";
import { Table , TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Collapse, CardBody } from "reactstrap";
import { toastr } from "react-redux-toastr";
import classnames from 'classnames';
import SupervisorNavbarComponent from '../supervisor-navbar';
import SupervisorSidebarComponent from '../supervisor-sidebar';
import TablePagination from '../pagination';
import "./Styled.css";
import { connect } from "react-redux";
import * as action from './dashboardAction';


class SupervisorDashboard extends Component {
  state = {
    ischecked: false,
    activeTab: '1',
    collapse: '',
    currentPage: 0,

    vehicleStatusDetail: [
      {
          status: true,
          statusDetails: "Vehicle servicing in Progress"
      },
      {
          status: true,
          statusDetails: "Vehicle washing in Progress"
      },
      {
          status: false,
          statusDetails: "Vehicle washing is done"
      },
      {
          status: false,
          statusDetails: "Vehicle servicing done "
      }
    ],
  };

  callbackFunction = (childData) => {
    this.setState({currentPage: childData})
  }

  multipleVehicleinfo = [];

  toggle = tab => {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
	};

  openCollapse = (e) => {
    const event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? '' : Number(event) });
  };

  getCustomersDetails = () => {
    let userId = localStorage.getItem('userId');
    const { dispatch } = this.props;
    dispatch(action.getVehicalAssignedDetails(userId)).then(() => {
      console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
      // toastr.success("Success", "Query sent to expert successfully...!", {
      //   showCloseButton: false
      // });
    });
  };

  componentDidMount(){
    const { dispatch } = this.props;
    this.getCustomersDetails();
    dispatch(action.vehicalServiceApproval());
    dispatch(action.getMaintananceEnggList());
  }
  
  saveAssignEng=()=>{
    const selectEngg = document.getElementById("selectEngg").value;
    document.getElementById("chkall").checked = false;
    const { dispatch } = this.props;
    dispatch(action.saveAssignEng(this.multipleVehicleinfo, selectEngg));
  }

  vehicleServiceStatus = (vehicleID) => {
    const selectedService = document.getElementById("selectService").value;
    const serviceApprovalStatus = {
      list_of_services: vehicleID, 
      updated_status: selectedService
    }
    console.log("selectedService=============",serviceApprovalStatus)
    const { dispatch } = this.props;
    dispatch(action.saveServiceStatus(serviceApprovalStatus));
  }

  handleAllCheckboxChange = (targetdata,selectedData) => {
    this.multipleVehicleinfo=[];
    for(let i = 0; i <= selectedData.length-1; i++)
    {
      if(targetdata)
      {
          document.getElementById("chkbx" + i).checked = true; 
           this.multipleVehicleinfo.push(selectedData[i]._id);
      }
      else{
          document.getElementById("chkbx" + i).checked = false;
      }
    }
  };

  handleCheckboxChange = (e, item, index) => {
    if(e.target.checked){
        this.multipleVehicleinfo.push(item._id);
      }
    else{
      document.getElementById("chkall").checked = false;
      for(let i=0 ; i<this.multipleVehicleinfo.length; i++)
      {
          if(this.multipleVehicleinfo[i]===item._id)
          {
            this.multipleVehicleinfo.splice(i,1);
          }  
      }          
    }
  }

  render() {
    const vehicalAssignedData = this.props.vehicalAssignedData;
    const vehicalServiceApproval = this.props.vehicalServiceApproval;
    const maintenanceEnggList = this.props.maintenanceEnggList;
    const assignedEngg = this.props.assignedEngg;
    console.log("assignedEngg=======", assignedEngg)
    const pageSize = 5;
    const assignedDataPagesCount = Math.ceil(vehicalAssignedData.length / pageSize);
    const serviceApprovalPageCount = Math.ceil(vehicalServiceApproval.length / pageSize);
    const { currentPage } = this.state;
    return (
      <div className="bodycolor">
				<SupervisorNavbarComponent />
				<SupervisorSidebarComponent />
        <div className="gridwrapper">
          <Nav tabs>
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
					</Nav>
          <TabContent activeTab={this.state.activeTab}>
						<TabPane tabId="1">
							<Row>
								<Col sm="12">
									<Table>
										<thead>
											<tr>
												<th><input  type="checkbox"
                          id="chkall"
                          onChange={e => {
                            this.handleAllCheckboxChange(e.target.checked , vehicalAssignedData);
                          }} /></th>
												<th>Date</th>
												<th>Vehicle Type</th>
												<th>Customer Name</th>
                        <th>Maintenance Engineer Name</th>
											</tr>
										</thead>
										<tbody>
                      {vehicalAssignedData && vehicalAssignedData.slice(
                          currentPage * pageSize,
                          (currentPage + 1) * pageSize
                        ).map((items,key) =>(
                        <tr>
                          <td><input type="checkbox"
                              id={"chkbx"+key}
                              key={items.startDate.split('T')[0]}
                              ischecked={this.state.ischecked}
                              onChange={e => {
                                this.handleCheckboxChange(e, items, key);
                              }}/>
                          </td>
                          <td>{items.startDate.split('T')[0]}</td>
                          <td>{items.vehical_brand}</td>
                          <td>{items.customer.name}</td>
                          <td>{items.assigned_maintenance_eng ? items.assigned_maintenance_eng.name : ''}</td>
                        </tr>

                      ))}
										</tbody>
									</Table>
								</Col>
							</Row>
              <TablePagination pagesCount={assignedDataPagesCount} parentCallback = {this.callbackFunction} />
              <Row>
                <Col sm="12">
                  <h4>Select Engineer</h4>
                  <select className="select-dropdown" id="selectEngg">
                    <option value="">Select</option>
                    {maintenanceEnggList && maintenanceEnggList.map((items,key) =>(
                      <option value={items.user_id}>{items.name}</option>
                    ))}
                  </select>
                  <Button color="warning" onClick={this.saveAssignEng}>Assign</Button>
                </Col>
              </Row>
						</TabPane>
						<TabPane tabId="2">
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
                      {vehicalServiceApproval && vehicalServiceApproval.slice(
                          currentPage * pageSize,
                          (currentPage + 1) * pageSize
                        ).map((items,key) =>(
                        <React.Fragment>
                          <tr>
                            <td>{items.startDate.split('T')[0]}</td>
                            <td>{items.vehical_brand}</td>
                            <td>{items.customer.name}</td>
                            <td>{items.service_status==="Approved" ? <i className="fa fa-check-circle-o" aria-hidden="true"></i> : <i class="fa fa-times-circle" aria-hidden="true"></i>}</td>
                            {
                              items.service_status==="Approved"
                              ?
                                <td className="view-details" data-event={key}>{<a href="http://localhost:3000/5de8cf043c765179e8ac99ac.pdf" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a>}</td>
                              :
                                <td className="view-details" onClick={this.openCollapse} data-event={key}>View</td>
                            }
                          </tr>
                          <tr>
                            <td colSpan="5" className="collapse-container">
                              <Collapse isOpen={this.state.collapse === key}>
                                <CardBody>
                                  <Row className="vehicle-status">
                                    <Col sm="12">
                                      <ul className="StepProgress">
                                        {this.state.vehicleStatusDetail.map((data, index) => (
                                          <li key={index} className={data.status ? 'active' : ''}>
                                              <strong>{data.statusDetails}</strong>
                                          </li>
                                        ))}
                                      </ul>
                                    </Col>
                                  </Row>
                                  <div>
                                    <h4>Engineer: <strong>{items.assigned_maintenance_eng ? items.assigned_maintenance_eng.name : ''}</strong></h4>
                                    <select className="select-dropdown" id="selectService">
                                      <option value="Approved">Approved</option>
                                      <option value="Not Approved">Not Approved</option>
                                    </select>
                                    <Button color="warning" onClick={() => this.vehicleServiceStatus(items._id)}>Done</Button>
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
              <TablePagination pagesCount={serviceApprovalPageCount} parentCallback = {this.callbackFunction} />
						</TabPane>
            <TabPane tabId="3">
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
                      {vehicalServiceApproval && vehicalServiceApproval.map((items,key) =>(
                        <React.Fragment>
                          <tr>
                            <td>{items.date}</td>
                            <td>{items.vehical_brand}</td>
                            <td>{items.customer.name}</td>
                            <td>{items.service_status}</td>
                            <td className="view-details" onClick={this.openCollapse} data-event={key}>View</td>
                          </tr>
                          <tr>
                            <td colSpan="5" className="collapse-container">
                              <Collapse isOpen={this.state.collapse === key}>
                                <CardBody>
                                  Anim pariatur cliche reprehenderit,
                                  enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                  anim keffiyeh helvetica, craft beer labore wes anderson cred
                                  nesciunt sapiente ea proident.
                                  <div>
                                    <h4>Supervisor</h4>
                                    <select className="select-dropdown">
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
						</TabPane>
					</TabContent>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  console.log("state888888888888888888", state)
  return {
    vehicalAssignedData: state.supervisorDashboard.vehicalAssignedData || '',
    vehicalServiceApproval: state.supervisorDashboard.vehicalServiceApproval || '',
    maintenanceEnggList: state.supervisorDashboard.maintenanceEnggList || '',
    assignedEngg: state.supervisorDashboard.assignedEngg || ''
  };
};

// const mapDispatchToProps = dispatch => {
//   console.log("dispatch==========",dispatch)
//   return {

//   }
// }


export default connect(mapStateToProps)(SupervisorDashboard);
