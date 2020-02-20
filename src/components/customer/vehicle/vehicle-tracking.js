import React, { Component } from 'react';
import { Form, Row, Col, FormGroup,Table} from 'reactstrap';
// import NavBar from "../NavBar/NavBar";

class VehicleTracking extends Component {

    constructor() {
        super();
        this.state={
            // serviceDate: '08/30/2019',
            // vehicleType: 'Honda Activa',

        serviceHistoryList: [
                {
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
                    ]
                }
            ]
        }
        }

    render() {
        function statusLi(data) {
            let liArray = [];
            data.vehicleStatusDetail.map((data, index) => {
                liArray.push(
                    <li key={index} className={data.status ? 'active' : ''}>
                        <strong>{data.statusDetails}</strong>
                    </li>);
            });
            return liArray;
        }
        let trArray = [];
        this.state.serviceHistoryList.map((data, index) => {
            const key = index + 1;
            trArray.push(
                <tr>
                    <td colSpan={4}>
                        <div>
                            <Row>
                                <Col lg={12}>
                                        <div className='col-md-12'>
                                            <div className="wrapper">
                                                <ul className="StepProgress">
                                                    {statusLi(data)}
                                                </ul>
                                            </div>
                                        </div>
                                </Col>
                            </Row>
                        </div>
                    </td>
                </tr>);
        });

        return (
            <div className="">
                {/* <NavBar></NavBar> */}
                    <div className="mainDiv">
                        <br/>
                        {/* <h1 style={{textAlign:'center'}}>Vehicle Status</h1>
                        <Row style={{marginTop:'8%'}}>
                            <Col lg={4}>
                                <label>Vehicle Type: {this.state.vehicleType}</label>
                            </Col>
                            <Col>
                                <label>Service Date : {this.state.serviceDate}</label>
                            </Col>
                        </Row> */}
                        <Form style={{border:'1px solid', borderColor:'lightgrey'}}>
                            <Row>
                                <Col lg={12}>
                                    <Table>
                                        <tbody>
                                        {trArray}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Form>
            </div>
            </div>
        );
    }
}

export default VehicleTracking;